import { Global } from "./theme/Global";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { Provider } from "react-redux";
import configureStore from "./store";

function App() {
    const store = configureStore()
  return (
      <Provider store={store}>
          <BrowserRouter>
            <Global />
            <Routes />
          </BrowserRouter>
      </Provider>
  );
}

export default App;
