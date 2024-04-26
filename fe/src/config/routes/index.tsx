import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/home";

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default Routing;
