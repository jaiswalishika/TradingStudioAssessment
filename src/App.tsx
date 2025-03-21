import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Documentation from "./pages/Documentation";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Login from "./pages/Login";
import Scanner from "./pages/Scanner";
import Portfolio from "./pages/Portfolio";
import Strategy from "./pages/Strategy";
import StrategyBuilder from "./pages/StrategyBuilder";
import Simulator from './pages/Simulator';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/login" element={<Login />} />
        <Route path="/screener" element={<Scanner />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/strategy" element={<Strategy />} />
        <Route path="/strategy-builder" element={<StrategyBuilder />} />
        <Route path="/simulator" element={<Simulator/>} />
      </Routes>
    </div>
  );
}

export default App;
