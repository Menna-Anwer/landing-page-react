import'./Employee.css'
const Employee = () => {
    return (
        <div className="employee-container">
            <div>
                <h6>Employee </h6>
                <div className="progress1"></div>
                <div className="progress2"></div>
            </div>
            <div className="mt-4">
                <h6>Independent Contractor </h6>
                <div className="progress1"></div>
                <div className="progress2"></div>
            </div>
            <div className="mt-4">
                <h6>Contracted Employee </h6>
                <div className="progress1"></div>
                <div className="progress2"></div>
            </div>
            <div className="mt-4">
                <h6>Stakeholders </h6>
                <div className="progress1"></div>
                <div className="progress2"></div>
            </div>

        </div>
    )
}

export default Employee
