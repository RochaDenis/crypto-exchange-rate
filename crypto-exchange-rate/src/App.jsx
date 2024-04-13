// Importando as dependências necessárias para o React Query
import { QueryClient, QueryClientProvider } from "react-query";

// Importando o componente ExchangeRate
import ExchangeRate from "./components/ExchangeRate.jsx";

// Criando uma instância do QueryClient com opções padrão
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      method: "GET", // Método HTTP padrão para as consultas
      refetchOnWindowFocus: false, // Desabilita a atualização automática ao focar na janela
      refetchInterval: 60000, // Atualiza as consultas a cada 60 segundos
    },
  },
});

// Definindo o componente principal App
function App() {
  return (
    // Provendo o QueryClient para a aplicação
    <QueryClientProvider client={queryClient}>
      {/* Renderizando o componente ExchangeRate */}
      <ExchangeRate />
    </QueryClientProvider>
  );
}

// Exportando o componente App como padrão
export default App;
