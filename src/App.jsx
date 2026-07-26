import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ResultsPage from "./pages/ResultsPage";
import { useState } from "react";

function App() {
  const [giftResults, setGiftResults] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home setGiftResults={setGiftResults} />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;