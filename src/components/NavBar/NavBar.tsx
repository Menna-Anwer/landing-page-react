import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import "./navBar.css"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
const NavBar = () => {

  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) return null
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container >
      <Navbar.Brand href="#">FinBiz</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mx-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll >
          <Nav.Link href="#action1">Product</Nav.Link>
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
          <Button className ="navbar-btn"   onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} > {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}</Button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    // <Navbar className="">
    //   <Container  className="navbar-container">
    //     <Row className=""> 
    //       <Col lg={4}> 
    //       <Navbar.Brand href="#home">FinBiz</Navbar.Brand>
    //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //       </Col>
    //       <Col lg={8}>
    //         <Navbar.Collapse id="basic-navbar-nav">
    //           <Row >
    //             <Col lg={6}>
    //               <Nav className="me-auto">
    //                 <Nav.Link href="#home">Product</Nav.Link>
    //                 <NavDropdown title="Pages" id="basic-nav-dropdown">
    //                   <NavDropdown.Item href="#action/3.1">Pages</NavDropdown.Item>
    //                   <NavDropdown.Item href="#action/3.2">
    //                     Another action
    //                   </NavDropdown.Item>
    //                   <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    //                   <NavDropdown.Divider />
    //                   <NavDropdown.Item href="#action/3.4">
    //                     Separated link
    //                   </NavDropdown.Item>
    //                 </NavDropdown>
    //                 <Nav.Link href="#link">Integrations</Nav.Link>
    //                 <Nav.Link href="#link">Blog</Nav.Link>
    //                 <Nav.Link href="#link">Pricing</Nav.Link>
    //               </Nav>
    //             </Col>
    //             <Col lg={6}>
    //               <Button variant="light">Light</Button>
    //             </Col>
    //           </Row>
    //         </Navbar.Collapse>
    //       </Col>
    //     </Row>
    //   </Container>
    // </Navbar>
  )
}

export default NavBar
