import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WebMd from "./pages/WebMd/WebMd";
import BBCMain from "./pages/BBC/BBCMain";
import DribbbleMain from "./pages/Dribbble/DribbleMain";
import CNBCMain from "./pages/CNBC/CNBCMain";
import WalmartMain from "./pages/Walmart/WalmartMain";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WebMd />} />
        <Route path="/bbc" element={<BBCMain />} />
        <Route path="/dribbble" element={<DribbbleMain />} />
        <Route path="/cnbc" element={<CNBCMain />} />
        <Route path="/walmart" element={<WalmartMain />} />
      </Routes>
    </Router>
  );
}

export default App;
