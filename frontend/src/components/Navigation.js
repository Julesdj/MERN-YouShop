//imports
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

function Navigation () {
    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Container style={{display: "flex", justifyContent: "space-between"}}>
                    <Navbar.Brand>YouShop</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home" style={{margin: "0 2px 0 2px"}}>Home</Nav.Link>
                        <Nav.Link href="#about" style={{margin: "0 2px 0 2px"}}>About</Nav.Link>
                        <Nav.Link href="#products" style={{margin: "0 2px 0 2px"}}>Products</Nav.Link>
                        <Nav.Link href="#cart" style={{margin: "0 2px 0 2px"}}>Cart</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
export default Navigation;