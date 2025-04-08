import Team from "../team/Team"
import "./header.css"
const Header = () => {
    return (
        <div>
            <div className="automation-container mt-5 mb-2">
                <div className="new-container">New</div> <div>Introducing AI Automation </div>
            </div>
            <div className="solutions-container">
                <h1>The Finance Solutions
                    For Your Business</h1>
                <p>Empower your finance team. The onestop plateform for all financial management of small and medium-sized business.</p>
            </div>

            <div className="input-container my-5">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your email adress"

                />
                <button className="btn-container"
                    style={{
                        position: 'absolute',
                    }}
                >
                    Book a Demo
                </button>
            </div>
            <div>
                <div>
                <Team/>
                </div>
                <p className="text-user mb-5">1,200+ reviews (4.9 of 5)</p>
            </div>
        </div>

    )
}

export default Header
