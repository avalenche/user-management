import { Provider } from "react-redux";
import store from "./store";
import { LayoutUsers } from "./pages";

function App() {
  return (
    <Provider store={store}>
      {/* TODO add router */}
      <LayoutUsers />
    </Provider>
  );
}

export default App;
