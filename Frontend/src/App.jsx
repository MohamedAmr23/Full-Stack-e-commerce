import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import Routes from "./Router/Routes.jsx";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  const query = new QueryClient()
  return (
    <>
    <QueryClientProvider client={query}>
      <Routes />
      <ReactQueryDevtools/>
    </QueryClientProvider>
       
    </>
  );
};

export default App;
