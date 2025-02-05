import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/home";
import ErrorPage from "./page/errorPage";


const App: React.FC = () => {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
