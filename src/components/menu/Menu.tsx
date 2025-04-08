import { Nav, Navbar } from "react-bootstrap"
import './menu.css'
const Menu = () => {
    return (
        <div>
            <Navbar  className="menu-container" >
                    <Nav className="nav me-auto">
                        <Nav.Link className="nav-link" href="#Product">Product</Nav.Link>
                        <Nav.Link className="nav-link" href="#Integration">Integration</Nav.Link>
                        <Nav.Link className="nav-link" href="#Demo">Demo</Nav.Link>
                        <Nav.Link  className="nav-link"href="#pricing">Pricing</Nav.Link>
                        <Nav.Link className="nav-link"  href="#Login">Login</Nav.Link>

                    </Nav>
            </Navbar>
        </div>
    )
}

export default Menu
