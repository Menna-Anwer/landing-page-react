import { Container } from "react-bootstrap"
import Team from "../team/Team"
import "./header.css"
import Buttons from "../Buttons/Buttons"
import { FaArrowRightLong } from "react-icons/fa6"
// import Buttons from "../Buttons/Buttons"
const Header = () => {
    return (
        <Container>
            <div className="automation-container mb-2">
                <div className="new-container">New</div > <div  className="text-new-container">Introducing AI Automation <FaArrowRightLong  className="icon"/> </div>
            </div>
            <div className="solutions-container">
                <h1 className="solutions-heading">The Finance Solutions
                    For Your Business</h1>
                <p className="solutions-text">Empower your finance team. The onestop plateform for all financial management of small and medium-sized business.</p>
            </div>

            <div className="input-container my-5">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your email adress"
                />
                 <Buttons   className="btn-container" nameBtn="Book a Demo"/>
                {/* <button className="btn-container"
                //   style={{ position: 'absolute' }}
                  style={{ backgroundColor: 'var(--button-bg-color)', color: 'var(--button-text-color)', position: 'absolute'}}
                >
                    Book a Demo
                </button> */}
            </div>
            <div>
                <div>
                    <Team />
                </div>
                <p className="text-user mb-5">1,200+ reviews (4.9 of 5)</p>
            </div>
        </Container>
    )
}

export default Header
