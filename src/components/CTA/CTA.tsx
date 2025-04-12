import { Button, Container } from "react-bootstrap"
import img from '../../assets/Rectangle 388.png'
import './CTA.css'
const CTA = () => {
    return (
        <Container>
            <div className="card-container CTA-container">
                <div  className="text-CTA-container">
                    <div className="text-CTA">
                        Let’s Upgrade your
                        finances experience
                        by using FinBiz
                    </div>
                    <div>
                        <Button className='btn-CTA'>Request Demo</Button>
                        <Button className='btn-CTA2'>Watch Video</Button>
                    </div>
                </div>
                <div>
                    <img className="img-CTA" src={img} />
                </div>
            </div>
        </Container>
    )
}

export default CTA
