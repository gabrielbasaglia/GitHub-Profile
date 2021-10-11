import Routes from './Routes';
import { ContextProvider } from './context';

// eslint-disable-next-line prettier/prettier
const App = () => (
  <ContextProvider>
    <Routes />
  </ContextProvider>
);
export default App;
