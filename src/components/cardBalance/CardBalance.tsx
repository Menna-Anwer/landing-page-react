import { Card } from "react-bootstrap"
import "./CardBalance.css"
import Buttons from "../Buttons/Buttons"
const CardBalance = () => {
    return (
        <div>
            <Card className="cardBalance-container shadow-sm rounded-3">
                <Card.Body>
                    <h6 className="cardBalance-heading">Total Balance</h6>
                    <div className="d-flex justify-content-between align-items-center">
                        <div >
                            <h3 className="cardBalance-value">$350.0</h3>
                        </div>
                    </div>
                    <Buttons className ="cardBalance-btn" nameBtn="Transfer" />
                    {/* <Button className ="cardBalance-btn">Transfer</Button> */}
                    <hr className="my-4"/>
                    <h6 className="cardBalance-heading">Total Income</h6>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h3 className="cardBalance-value">$320.0</h3>
                        </div>
                    </div>
                    <hr className="my-4"/>
                    <h6 className="cardBalance-heading">Total Expense</h6>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h3 className="cardBalance-value">$220.0</h3>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardBalance
