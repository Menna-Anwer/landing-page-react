import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import "./LineChart.css"
import { Col, Row } from 'react-bootstrap'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend)
const LineChart = () => {
  const data = {
    labels: ['12:00AM', '01:00AM', '02:00AM', '03:00AM', '04:00AM', '05:00AM',
      '06:00AM', '07:00AM', '08:00AM', '09:00AM', '10:00AM', '11:00AM'],
    datasets: [
      {
        data: [1000, 3000, 4000, 2000, 1000, 5000, 6000, 5000, 4000, 3000, 6000, 5000],
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
    <div className='chart-container'>
      <Row className='mb-3'>
        <Col lg={7}>
          <h6 className='chart-header'>Spend Overview</h6>
        </Col>
        <Col lg={5}>
          <div className='d-flex justify-content-between'>
            <p className='chart-text'>Daily</p>
            <p className='chart-text'>Weekly</p>
            <p className='chart-text'>Monthly</p>
            <p className='chart-text'>Yearly</p>
          </div>
        </Col>

      </Row>
      <Line data={data} options={options} />
    </div>
  )
}

export default LineChart
