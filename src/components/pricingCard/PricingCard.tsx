import { Card } from "react-bootstrap"
import'./pricingCard.css'
import { TiTick } from "react-icons/ti"
import Buttons from "../Buttons/Buttons"
import { PiStarFourLight } from "react-icons/pi"
const PricingCard = ({ title, color, value, data ,className,nameBtn ,popular}: any) => {
    return (
        <Card className="PricingCard-container shadow-sm rounded-3">
            <Card.Body>
            {popular ? <div className="popular_text"><PiStarFourLight /> {popular}</div> : ''}
                <h6 className="header-PricingCard" style={{ color: color }}>{title}</h6>
                <p className="text-muted-PricingCard" >Get a professional website designed according to your needs.</p>
                <h3 className="value-PricingCard">{value}</h3>
                {data.map((item: any, index: any) => (
                    <p className="text-PricingCard" key={index}> <TiTick /> {item}</p>
                ))}
                 {/* <Button className={className} >{nameBtn}</Button> */}
                 <Buttons className={className} nameBtn={nameBtn} />
            </Card.Body>
        </Card>
    )
}

export default PricingCard
