import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'


function Body() {
    return(
        <div>
            <Container>
                <CardGroup>
                    <Card>
                        <Card.Img src="/onlineShopping.jpg" alt="person shopping"/>
                    </Card>
                    <Card>
                        <Card.Body>
                            <Card.Title>YouShop</Card.Title>
                            <Card.Text>Your #1 Chioce For Online Shopping!</Card.Text>
                        </Card.Body>
                    </Card>
                 </CardGroup>    
            </Container>
        </div>
    )
}

export default Body;