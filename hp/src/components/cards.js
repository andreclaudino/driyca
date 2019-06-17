import 'bootstrap/dist/css/bootstrap.css';
import { Card, Row, Col, Button } from 'react-bootstrap';
import React from "react"

const Cards = ({cardList}) => {
    return (
        <Row xs={1} md={4} lg={6} sm={1}>
            {
                cardList.map(card => (
                makeCard(card.title, card.content, card.linkTitle, card.destination, card.imagePath)
                ))
            }
        </Row>        
    )
}

Cards.defaultProps = {
    cardList: []
}

function makeCard(title, content, linkTitle, destination, imagePath){
    return (<Col xs={1} md={1} lg={1} sm={1}>
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imagePath} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {content}
                </Card.Text>
                <Button variant="primary" as="a" href={destination}>
                    {linkTitle}
                </Button>
            </Card.Body>
            </Card>
        </Col>
    )
}

export default Cards;