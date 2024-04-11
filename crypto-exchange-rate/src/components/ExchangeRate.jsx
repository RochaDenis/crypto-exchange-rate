import React, { useState, useEffect } from 'react';
import { Typography, Select, Spin } from 'antd';
import { cryptocurrencies, fiatCurrencies } from './currencies/Currencies.jsx';
import { ExchangeRateUI } from './UI/ExchangeRateUI.jsx';
import { useQuery } from 'react-query';
import { getExchangeRate } from './fetchData/fetchData.jsx';

function ExchangeRate() {
  const [fromCurrency, setFromCurrency] = useState(cryptocurrencies[0].value);
  const [toCurrency, setToCurrency] = useState(fiatCurrencies[0].value);
  const [currencySymbol, setCurrencySymbol] = useState("Bitcoin");

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e);
    console.log(e);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e);
    console.log(e);
  };

  useEffect(() => {
    const fromCurrencyLabel = cryptocurrencies.find(currency => currency.value === fromCurrency)?.label;
    setCurrencySymbol(fromCurrencyLabel);
  }, [fromCurrency]);

  const dependencies = { fromCurrency: fromCurrency, toCurrency: toCurrency };
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["exchangeRate", dependencies],
    queryFn: () => fetchData(fromCurrency, toCurrency),
    staleTime: 1000 * 60,
    retry: 1,
    retryDelay: 60000
  });

  console.log(data);

  return (
    <section className="exchange-rate">
      <Typography.Title style={{ color: "#4d4add" }} level={2}>Exchange Rate</Typography.Title>
      <Typography.Text>Get the latest exchange rate of cryptocurrencies in your favorite currency</Typography.Text>
      <section className="select-group" style={{ display: "flex", marginTop: "1rem", gap: "1rem", justifyContent: "space-around" }}>
        <Select defaultValue={cryptocurrencies[0].value} options={cryptocurrencies} onChange={handleFromCurrencyChange} />{' '}
        <Select defaultValue={fiatCurrencies[0].value} options={fiatCurrencies} onChange={handleToCurrencyChange} />
      </section>
      <section style={{ marginTop: '1rem' }}>
        {isLoading ? (
          <Spin spinning size="large" />
        ) : isError ? (
          <div>Error: {error.message}</div>
        ) : (
          <div>
            <ExchangeRateUI price={data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]} dataObj={dependencies} currencySymbol={currencySymbol} />
          </div>
        )}
      </section>
    </section>
  );
}

export default ExchangeRate;
