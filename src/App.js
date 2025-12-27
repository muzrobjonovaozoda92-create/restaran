import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import "./App.css"
import Foot from "./component/Foot";
import Deserts from "./component/Deserts";
import Drinks from "./component/Drinks";
function About() {
  return <h1></h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav className="box45">
        <Link to="/Home">Home</Link> 
        <Link to="/foot">Foods</Link>
        <Link to="/desert">Dsserts</Link>
        <Link to="/re">Drinks</Link>
      </nav>

      <Routes>
        <Route path="/Home" element={<Home/>} />
        <Route path="/foot" element={<Foot />} />
        <Route path="/desert" element={<Deserts />} />
        <Route path="/re" element={<Drinks/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;