import { Container } from "react-bootstrap"
import CardManagement from "../cardManagement/CardManagement"
import TinyLineChart from "../TinyLineChart/TinyLineChart"

const LineDashboard = () => {
  return (
    <Container>
      <TinyLineChart/>
      <CardManagement/>
    </Container>
  )
}

export default LineDashboard
