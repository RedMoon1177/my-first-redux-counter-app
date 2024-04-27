import { Provider } from "react-redux";
import CounterComponent from "./components/CounterComponent";
import store from './store/store';

function App() {

  return (
    <Provider store={store}>
      <div>
        <h1>Redux Counter Example</h1>
        <CounterComponent />
      </div>
    </Provider>
  )
}

export default App
