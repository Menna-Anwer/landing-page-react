import { Container } from "react-bootstrap"
import NavBar from "../components/NavBar/NavBar"
import Header from "../components/Header/Header"
import "./landingpage.css"
import Dashboard from "../components/Dashboard/Dashboard"
import Menu from "../components/menu/Menu"
import LineDashboard from "../components/LineDashboard/LineDashboard"
import Reviews from "../components/reviews/Reviews"
import Footer from "../components/Footer/Footer"
import CTA from "../components/CTA/CTA"

const LandingPage = () => {
  return (
    <div>
      <NavBar />
     
        <Header />
        <Dashboard />
        <Menu/>
        <LineDashboard/>
        <Reviews/>    
        <CTA/>
      <div className="bg-footer">
        <Footer />
       </div>
    </div>
  )
}

export default LandingPage
