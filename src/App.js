import "./App.css";
import Registration from "./Components/Registration";
import Bio from "./form-components/App";
import { Paper } from "@material-ui/core";
import { Footer, Header } from "./Components/Card";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Registration /> */}
        {/* <Bio/> */}
        <Paper elevation={3}>
          <Header />
          <main>
            <h1>Hello</h1>
            <h2>Hello</h2>
            <h2>Hello</h2>
          </main>
          <Footer />
        </Paper>
      </header>
    </div>
  );
}

export default App;
