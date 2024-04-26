import { Provider } from "react-redux";
import Routing from "./config/routes";
import store from "./config/redux/store";

function App() {
  return (
    <Provider store={store}>
      <Routing />
    </Provider>
  );
}

export default App;
