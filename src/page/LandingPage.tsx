import { Container } from "react-bootstrap"
import NavBar from "../components/NavBar/NavBar"
import Header from "../components/Header/Header"
import "./landingpage.css"
import Dashboard from "../components/Dashboard/Dashboard"
import Menu from "../components/menu/Menu"
import LineDashboard from "../components/LineDashboard/LineDashboard"
import Reviews from "../components/reviews/Reviews"
import Footer from "../components/Footer/Footer"

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <Header />
        <Dashboard />
        <Menu/>
        <LineDashboard/>
        <Reviews/>
        <Footer/>
      </Container>
    </div>
  )
}

export default LandingPage
