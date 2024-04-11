import axios from "axios";

export function getExchangeRate(fromCurrency, toCurrency) {
  const option = {
    method: "GET",
    url: 'https://alpha-vantage.p.rapidapi.com/query',
    params: {
      from_currency: fromCurrency,
      function: "CURRENCY_EXCHANGE_RATE",
      to_currency: toCurrency,
      headers: {
        'X-RapidAPI-Key': '1c762af8b8msh6da4ded8ba7e011p146afbjsn97d2181f796f',
        'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
      }
    },
  };
  return axios
    .request(option)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });
}

