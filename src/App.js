import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
