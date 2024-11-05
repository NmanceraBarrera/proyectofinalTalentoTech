import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Informacion from "./components/informacion/Informacion";
import Fundaciones from "./components/fundaciones/Fundaciones";
import Encontrados from "./components/encontrados/Encontrados";
import Perdidos from "./components/perdidos/Perdidos";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/informacion" element={<Informacion />} />
        <Route path="/fundaciones" element={<Fundaciones />} />
        <Route path="/encontrados" element={<Encontrados />} />
        <Route path="/perdidos" element={<Perdidos />} />
      </Routes>
    </Router>
  );
}

export default App;
