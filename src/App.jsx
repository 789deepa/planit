import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";
import { useState } from "react";

function App() {
  const [giftResults, setGiftResults] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home setGiftResults={setGiftResults} />} />
        <Route path="/results" element={<Results giftResults={giftResults} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;