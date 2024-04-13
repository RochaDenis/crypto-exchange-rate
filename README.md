# Aplicativo de Taxa de Câmbio de Criptomoedas

Este projeto é um aplicativo web construído em React que permite aos usuários verificar a taxa de câmbio atual de criptomoedas em sua moeda favorita.

## Pré-requisitos

- Conhecimento fundamental de React.
- Familiaridade com Axios para chamadas de API.
- Chave de API do RapidAPI.

## Configuração do Projeto

Para iniciar um novo projeto React usando Vite, execute o comando:


Siga os prompts subsequentes. Para mais informações sobre Vite, consulte a [documentação oficial](https://vitejs.dev/).

## Instalação de Pacotes

Instale os pacotes necessários com o seguinte comando:


## Estrutura do Aplicativo

Dentro da pasta `src`, crie as seguintes subpastas: `components`, `fetchData`, `UI` e `currencies`.

## Construção da UI

Navegue até a pasta `UI` e crie o arquivo `ExchangeRateUI.jsx`. Utilize os componentes `Card` e `Typography` da biblioteca Ant Design para construir a UI[^2^][2].

## Lógica de Busca de Dados

Na pasta `fetchData`, crie o arquivo `fetchData.jsx` e utilize o Axios para buscar dados da API AlphaVantage através do RapidAPI.

## Uso do React Query

Altere as configurações padrão do react-query para evitar limitação de taxa devido a solicitações excessivas à API.

## Exibição de Dados

Implemente a lógica de busca de dados e exiba os resultados na UI utilizando o componente `ExchangeRateUI`.

## Tratamento de Erros

Utilize o componente `ErrorBoundary` para lidar com falhas no aplicativo.

## Melhorias Futuras

Considere adicionar um recurso de notícias e estilizar o aplicativo ao seu gosto. Suporte a mais moedas também pode ser uma adição valiosa.

---

## Créditos 
FreecodeCamp
