
import { Card } from "react-bootstrap";
// import { LineChart, Line, ResponsiveContainer } from "recharts"
import './TinyLineChart.css'
import { Line } from 'react-chartjs-2'
import Users from "../Users/Users";
const TinyLineChart = () => {
  // const data = [{ value: 10 }, { value: 30 }, { value: 40 }, { value: 70 }, { value: 50 }, { value: 10 },]

  const data = {
    labels: [ '01', '02', '03', '04', '05'],
    datasets: [
      {
        data: [1, 3, 4, 3, 6, 5,6,9,],
        fill: false,
        borderColor: '#007bff',
        tension: 0.4, // smooth curve
      },
    ],
  }
  const data2 = {
    labels: ['12:00AM', '01:00AM', '02:00AM', '03:00AM', '04:00AM', '05:00AM',
      '06:00AM', '10:00AM', '11:00AM'],
    datasets: [
      {
        data: [1, 3, 4, 2, 5, 4, 3, 6, 5],
        fill: false,
        borderColor: '#007bff',
        tension: 0.4, // smooth curve
      },
    ],
  }
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: false,
      },
    },
  }
  return (
    <div className="tinyLineChart-container">
       <Card className="tinyLineChart-container1 shadow-sm rounded-3">
        <Card.Body>
          <p className="text-muted1">Make informed decisions backed by 
          data through our analytics tools.</p>
          <div className="lineChart1">
            <Line data={data} options={options} />
            {/* <ResponsiveContainer>
              <LineChart data={data}>
                <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={5} dot={false} />
              </LineChart>
            </ResponsiveContainer> */}
          </div>
        </Card.Body>
      </Card>
      <Card className="tinyLineChart-container2 shadow-sm rounded-3">
        <Card.Body>
          <p className="text-muted2">Bring harmony to team expenses with budget limits and real-time monitiring. Freedom for your staff. Peace of mind for you.</p>
          <div className="lineChart2">
            <Line data={data2} options={options} />
            {/* <ResponsiveContainer>
              <LineChart data={data}>
                <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={5} dot={false} />
              </LineChart>
            </ResponsiveContainer> */}
          </div>
        </Card.Body>
      </Card>
      <Card className="tinyLineChart-container1 shadow-sm rounded-3">
        <Card.Body>
          <p className="text-muted1">Seamlessly collaborate with your team 
          members like never before. </p>
          <div className="users-container">
             <Users/>
          </div>
        </Card.Body>
      </Card>
    </div>


  )
}

export default TinyLineChart
