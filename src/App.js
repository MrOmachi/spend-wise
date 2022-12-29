import logo from "./logo.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./components/styles/styles.css";
import Home from "./pages/home/Home";
import NavBar from "./pages/navBar/NavBar";
import Footer from "./pages/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
