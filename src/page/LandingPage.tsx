import { Container } from "react-bootstrap"
import NavBar from "../components/NavBar/NavBar"
import Header from "../components/Header/Header"
import "./landingpage.css"
import Dashboard from "../components/Dashboard/Dashboard"
import Menu from "../components/menu/Menu"

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <Header />
        <Dashboard />
        <Menu/>
      </Container>
    </div>
  )
}

export default LandingPage
