// Importando os módulos necessários do React e do Ant Design
import React, { useState, useEffect } from "react";
import { Typography, Select, Spin } from "antd";

// Importando os arrays de moedas criptográficas e moedas fiduciárias
import { cryptocurrencies, fiatCurrencies } from "./currencies/Currencies.jsx";

// Importando o componente ExchangeRateUI
import { ExchangeRateUI } from "./UI/ExchangeRateUI.jsx";

// Importando o hook useQuery e a função fetchData
import { useQuery } from "react-query";
import fetchData from "./fetchData/fetchData.jsx";

// Definindo o componente ExchangeRate
function ExchangeRate() {
  // Definindo os estados iniciais das moedas de origem e destino, e do símbolo da moeda
  const [fromCurrency, setFromCurrency] = useState(cryptocurrencies[0].value);
  const [toCurrency, setToCurrency] = useState(fiatCurrencies[0].value);
  const [currencySymbol, setCurrencySymbol] = useState("Bitcoin");

  // Função para lidar com a mudança da moeda de origem
  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e);
    console.log(e);
  };

  // Função para lidar com a mudança da moeda de destino
  const handleToCurrencyChange = (e) => {
    setToCurrency(e);
    console.log(e);
  };

  // Efeito colateral para atualizar o símbolo da moeda quando a moeda de origem é alterada
  useEffect(() => {
    const fromCurrencyLabel = cryptocurrencies.find(
      (currency) => currency.value === fromCurrency
    )?.label;
    setCurrencySymbol(fromCurrencyLabel);
  }, [fromCurrency]);

  // Definindo as dependências para a consulta de dados
  const dependencies = { fromCurrency: fromCurrency, toCurrency: toCurrency };

  // Realizando a consulta de dados usando o hook useQuery
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["exchangeRate", dependencies],
    queryFn: () => fetchData(fromCurrency, toCurrency),
    staleTime: 1000 * 60,
    retry: 1,
    retryDelay: 60000,
  });

  console.log(data);

  // Renderização do componente ExchangeRate
  return (
    <section className="exchange-rate">
      {/* Título */}
      <Typography.Title style={{ color: "#4d4add" }} level={2}>
        Taxa de Câmbio de Criptomoedas
      </Typography.Title>

      {/* Descrição */}
      <Typography.Text>
        Obtenha a taxa de câmbio mais recente das criptomoedas na sua moeda favorita.
      </Typography.Text>

      {/* Seleção de moedas */}
      <section
        className="select-group"
        style={{
          display: "flex",
          marginTop: "1rem",
          gap: "1rem",
          justifyContent: "space-around",
        }}
      >
        <Select
          defaultValue={cryptocurrencies[0].value}
          options={cryptocurrencies}
          onChange={handleFromCurrencyChange}
        />
        <Select
          defaultValue={fiatCurrencies[0].value}
          options={fiatCurrencies}
          onChange={handleToCurrencyChange}
        />
      </section>

      {/* Exibição do resultado */}
      <section style={{ marginTop: "1rem" }}>
        {isLoading ? (
          <Spin spinning size="large" />
        ) : isError ? (
          <div>Error: {error.message}</div>
        ) : (
          <div>
            <ExchangeRateUI
              price={
                data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]
              }
              dataObj={dependencies}
              currencySymbol={currencySymbol}
            />
          </div>
        )}
      </section>
    </section>
  );
}

// Exportando o componente ExchangeRate como padrão
export default ExchangeRate;
