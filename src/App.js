import "./App.css";
import Registration from "./Components/Registration";
import Bio from "./form-components/App";
import { Paper } from "@material-ui/core";
import { Footer, Header } from "./Components/Card";
import Test from './Test'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Registration />
        {/* <Test /> */}
      </header>
    </div>
  );
}

export default App;
