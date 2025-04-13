import LandingPage from "./page/LandingPage"
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductPage from './page/productPage';
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
       <NavBar />
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
      <div className="bg-footer">
        <Footer />
       </div>
    </>
  )
}

export default App
