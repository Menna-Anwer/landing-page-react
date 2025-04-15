import "../App.css"
import Header from "../components/Header/Header"
import Dashboard from "../components/Dashboard/Dashboard"
import Menu from "../components/menu/Menu"
import LineDashboard from "../components/LineDashboard/LineDashboard"
import Reviews from "../components/reviews/Reviews"
import CTA from "../components/CTA/CTA"
import Pricing from "../components/pricing/Pricing"

const LandingPage = () => {
  return (
    <div className="main" >
      <Header />
      <Dashboard />
      <Menu />
      <LineDashboard />
      <Reviews />
      <Pricing />
      <CTA />
    </div>
  )
}

export default LandingPage
