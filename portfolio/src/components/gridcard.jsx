import { Card, Row, Col, Container } from 'react-bootstrap';

const cardData = [
  { title: 'Programming', text: 'This is card 1', imgSrc: 'prog.png' },
  { title: 'Web developing', text: 'This is card 2', imgSrc: 'dev.png' },
  { title: 'Computer Vision', text: 'This is card 3', imgSrc: 'cv.png' },
  { title: 'Machine Learning', text: 'This is card 4', imgSrc: 'ML.svg' },
];

function Gridcard(){

    return (
        <Container className="animate">
          <span className='responsive-text'> Interested In</span>
          <Row xs={2} sm={2} md={2} lg={4} className="g-4 py-4">
            {cardData.map((card, index) => (
              <Col key={index}>
                <Card className="hover-grid-card text-center">
                <Card.Img variant="top" src={card.imgSrc} />
                <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      );
}

export default Gridcard