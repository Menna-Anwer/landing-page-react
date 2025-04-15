import {  Button, Col, Container, Row } from "react-bootstrap"
import PricingCard from "../pricingCard/PricingCard"
import './pricing.css'
const Pricing = () => {
    const data1 = ["Get a fully designed Website.", "Webflow Development", "Limited Support"]
    const data2 = ["Get a fully designed Website.", "Webflow Development", "Limited Support", "Email support","Email support"]
    const data3 = ["Get a fully designed Website.", "Webflow Development", "Limited Support", "Email support","Email support"]
  return (
    <Container>
            <Button className='reviews-btn'>Pricing</Button>
            <div className='reviews-heading'>Find the right plan</div>
            <div className='reviews-text'>"Invest in your company's future with our comprehensive financial
                 solution. Contact us for pricing details and see how we can help you streamline your finances and reach your business goals.
            </div>
           <Row className="g-3">
                    <Col md={4}>
                        <PricingCard title="Basic" className="className1" value="$499" data={data1} color="var( --h-color)" nameBtn="Get started" background="#FFFFFF"/>
                    </Col>
                    <Col md={4}>
                        <PricingCard title="Pro" className="className2"  value="$499" popular="Popular" data={data2} color="#729F19" nameBtn="Get started"  background="#1D1C20" />
                    </Col>
                    <Col md={4}>
                        <PricingCard title="Enterprise" className="className3"  value="$999" data={data3} color=" var( --h-color)" nameBtn="Contact Us"  background="#A3DC2F"/>
                    </Col>
                </Row>
    </Container>
  )
}

export default Pricing
