import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import "./navBar.css"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import Buttons from "../Buttons/Buttons"
// import Buttons from "../Buttons/Buttons"
const NavBar = () => {

  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) return null
  return (
    <Navbar expand="lg" className="nv-container">
    <Container >
      <Navbar.Brand href="#">FinBiz</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mx-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll >
          <Nav.Link href="product">Product</Nav.Link>
          <NavDropdown title="Pages" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
              Something else here
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#action2">Integrations</Nav.Link>
          <Nav.Link href="#action2">Blog</Nav.Link>
          <Nav.Link href="#action2">Pricing</Nav.Link>

        </Nav>  
        <Buttons className ="navbar-btn" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}  nameBtn= {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'} />
          {/* <Button className ="navbar-btn"   onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} > {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}</Button> */}
      </Navbar.Collapse>
    </Container>
  </Navbar>

  )
}

export default NavBar
