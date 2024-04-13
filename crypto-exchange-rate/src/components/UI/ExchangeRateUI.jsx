// Importando os componentes Typography e Card da biblioteca antd
import { Typography, Card } from "antd";

// Definindo a função ExchangeRateUI que recebe as props como parâmetro
export function ExchangeRateUI(props) {
  // Desestruturando as props para obter as variáveis price, dataObj e currencySymbol
  const { price, dataObj, currencySymbol } = props;

  // Obtendo a moeda de destino a partir do objeto dataObj
  const toCurrency = dataObj.toCurrency;

  // Convertendo o valor para um número
  let value = Number(price);

  // Definindo o código da moeda
  let currencyCode = toCurrency;

  // Criando uma instância do objeto Intl.NumberFormat para formatar a moeda
  let currency = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode,
  });

  // Formatando o valor da moeda
  let formattedCurrency = currency.format(value);

  // Retornando o JSX que representa o componente ExchangeRateUI
  return (
    <div className="exchange-rate-ui">
      <Card
        extra={currencySymbol}
        bordered={true}
        style={{ width: 500, backgroundColor: "#4d4add", color: "#fff"}}
        size="default"
      >
        <Typography.Paragraph style={{ color: "#fff" }}>
          {formattedCurrency}
        </Typography.Paragraph>
      </Card>
    </div>
  );
}
