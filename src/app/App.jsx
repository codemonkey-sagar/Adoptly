import Routes from "./routes";
import QueryClientProviderSetup from "../context/QueryClientProviderSetup";

const App = () => {
  return (
    <QueryClientProviderSetup>
      <Routes />
    </QueryClientProviderSetup>
  );
};

export default App;
