import "./App.css";
import Registration from "./Components/Registration";
import Bio from "./form-components/App";
import { Paper } from "@material-ui/core";
import { Footer, Header } from "./Components/Card";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Registration />
        {/* <Bio/> */}
       
      </header>
    </div>
  );
}

export default App;
