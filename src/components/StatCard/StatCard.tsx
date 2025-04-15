import { Card } from "react-bootstrap"
import { Bar, BarChart, ResponsiveContainer } from "recharts"
import "./statCard.css"
const StatCard = ({ title, value, data, color, number }: any) => {
  return (
    <Card className="statCard-container shadow-sm rounded-3">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <h6 className="statCard-title">{title}</h6>
          <p  style={{ color: color }}>{number}</p>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h3 className="value">{value}</h3>
          </div>
          <div style={{ width: 50, height: 50 }}>
            <ResponsiveContainer>
              <BarChart data={data}>
                <Bar type="monotone" dataKey="value" fill={color} strokeWidth={3} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Card.Body>
    </Card>
  )
}

export default StatCard
