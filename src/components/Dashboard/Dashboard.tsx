import { Col, Row } from "react-bootstrap"
import StatCard from "../StatCard/StatCard"
import LineChart from "../LineChart/LineChart"
import CardBalance from "../cardBalance/CardBalance"
import Employee from "../Employee/Employee"
import'./Dashboard.css'
const Dashboard = () => {
    const data1 = [{ value: 10 }, { value: 30 }, { value: 50 }, { value: 40 }]
    const data2 = [{ value: 5 }, { value: 20 }, { value: 15 }, { value: 25 }]
    const data3 = [{ value: 100 }, { value: 200 }, { value: 150 }, { value: 220 }]
    return (
        <div className="dashboard-container">
            <Row className="g-3">
                <Col md={4}>
                    <StatCard title="Total Profit" number='+18.23' value="$350.240" data={data1} color="#72A7008A" />
                </Col>
                <Col md={4}>
                    <StatCard title="Total revenue" number='+18.23' value="$400.690" data={data2} color="#EE1F1F" />
                </Col>
                <Col md={4}>
                    <StatCard title="Product sold" number='+18.23' value="$200.000" data={data3} color="#003FDB" />
                </Col>
            </Row>
            <Row className="justify-content-between mt-5">
                <Col md={2}>
                    <CardBalance />
                </Col>
                <Col md={7}>
                    <LineChart />
                </Col>
                <Col md={3}>
                    <Employee />
                </Col>
            </Row>
        </div>
    )
}

export default Dashboard
