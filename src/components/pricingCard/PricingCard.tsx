import { Button, Card } from "react-bootstrap"
import'./pricingCard.css'
const PricingCard = ({ title, color, value, data ,className,nameBtn}: any) => {
    return (
        <Card className="PricingCard-container shadow-sm rounded-3">
            <Card.Body>
                <h6 className="header-PricingCard" style={{ color: color }}>{title}</h6>
                <p className="text-muted-PricingCard" >Get a professional website designed according to your needs.</p>
                <h3 className="value-PricingCard">{value}</h3>
                {data.map((item: any, index: any) => (
                    <p className="text-PricingCard" key={index}>{item}</p>
                ))}
                 <Button className={className} >{nameBtn}</Button>
            </Card.Body>
        </Card>
    )
}

export default PricingCard
