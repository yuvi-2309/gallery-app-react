import HomePage from "./Pages/HomePage/homePage";
import { Provider } from "react-redux";
import store from "./Redux/store";
function App() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

export default App;
