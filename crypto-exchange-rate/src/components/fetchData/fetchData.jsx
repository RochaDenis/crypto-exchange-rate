// Importando a biblioteca axios para fazer requisições HTTP
import axios from 'axios' 

// Função fetchData que recebe as moedas de origem e destino como parâmetros
function fetchData(fromCurrency, toCurrency){ 
    // Configuração das opções para a requisição HTTP
    const options = { 
        method: 'GET', // Método da requisição é GET
        url: 'https://alpha-vantage.p.rapidapi.com/query', // URL da API
        params: { from_currency: fromCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: toCurrency }, // Parâmetros da requisição
        headers: {
            'X-RapidAPI-Key': 'Your APIKEY', // Chave de autenticação da API
            'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com' // Host da API
          }
    }; 
    
    // Realiza a requisição HTTP usando axios e retorna uma Promise
    return axios.request(options)
        .then(res => { return res.data; }) // Retorna os dados da resposta da requisição
        .catch((err) => { return err; }) // Retorna o erro caso ocorra algum problema na requisição

}

// Exporta a função fetchData como padrão para ser utilizada em outros arquivos
export default fetchData;