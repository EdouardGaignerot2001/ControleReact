import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/home";
import ErrorPage from "./page/errorPage";
import Navbar from "./page/navbar";
import Series from "./page/seies";
import Films from "./page/films";
import Populaires from "./page/populaires";
import NavbarFin from "./page/navbarFin";


const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/series" element={<Series />} />
        <Route path="/films" element={<Films />} />
        <Route path="/populaires" element={<Populaires />} />
      </Routes>
      <NavbarFin />
    </Router>
  );
};

export default App;
