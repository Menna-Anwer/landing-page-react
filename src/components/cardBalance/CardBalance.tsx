import { Button, Card } from "react-bootstrap"
import "./CardBalance.css"
const CardBalance = () => {
    return (
        <div>
            <Card className="cardBalance-container shadow-sm rounded-3">
                <Card.Body>
                    <h6 className="text-muted">Total Balance</h6>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h3>$350.0</h3>
                        </div>
                    </div>
                    <Button className ="cardBalance-btn">Transfer</Button>
                    <hr className="my-4"/>
                    <h6 className="text-muted">Total Income</h6>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h3>$320.0</h3>
                        </div>
                    </div>
                    <hr className="my-4"/>
                    <h6 className="text-muted">Total Expense</h6>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <h3>$220.0</h3>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardBalance
