import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { CalendarMonth, MapPinAlt, Book } from "flowbite-react-icons/solid";

const CardData = [
    {
        degree: "B.Sc in Computer Science and Engineering",
        book: "violet",
        name: "Bangladesh University of Engineering Technology",
        logo: "buet.png",
        duration: "Feb 2020 - Mar 2025",
        location: "Dhaka, Bangladesh",
        map: "https://maps.app.goo.gl/1dbW4u1Bb5y8BfDF8",
    },
    {
        degree: "Higher Secondary Certificate (HSC)",
        book: "yellow",
        name: "Notre Dame College",
        logo: "ndc.png",
        duration: "2017 - 2019",
        location: "Dhaka, Bangladesh",
        map: "https://maps.app.goo.gl/tvZYv5te8gv46jfC9",
    },
    {
        degree: "Senior Secondary Certificate (SSC)",
        book: "green",
        name: "Dhaka Residential Model College",
        logo: "drmc.png",
        duration: "2015 - 2017",
        location: "Dhaka, Bangladesh",
        map: "https://maps.app.goo.gl/LmA9i56y1QNR2vTB9",
    },
];

function EduCard() {
    return (
        <Container>
            {CardData.map((card, index) => (
            <div style = {{ "--animation-delay": `${index*0.2}s`}}>
                <Card
                    key={index}
                    className="animate mb-4 p-3"
                    style={{ backgroundColor: "#334", color: "white", borderLeft: "8px solid purple", borderRadius: "12px" }}
                >
                    {/* Title */}
                    <Row className="align-items-center mb-3">
                        <Col xs="auto">
                            <Book className="me-2" size={48} style={{color: card.book}}/>
                        </Col>
                        <Col>
                            <div className="responsive-text my-3" style={{fontWeight: "700"}}>{card.degree}</div>
                        </Col>
                    </Row>

                    {/* University/College Name */}
                    <Row className="align-items-center mb-3 py-2" style={{ paddingLeft: "2rem" }}>
                        <Col xs="auto">
                            <img
                                src={card.logo}
                                alt={card.name}
                                style={{ width: "40px", height: "40px", marginRight: "1rem" }}
                            />
                        </Col>
                        <Col>
                            <h2 className="responsive-medium-text mb-0" style={{ fontWeight: "400" }}>
                                {card.name}
                            </h2>
                        </Col>
                    </Row>

                    {/* Duration */}
                    <Row className="align-items-center mb-2" style={{ paddingLeft: "2rem" }}>
                        <Col xs="auto">
                            <CalendarMonth className="me-2" size={36} style={{color: "cyan"}}/>
                        </Col>
                        <Col>
                            <h4 className="my-2">{card.duration}</h4>
                        </Col>
                    </Row>

                    {/* Location */}
                    <Row className="align-items-center" style={{ paddingLeft: "2rem" }}>
                        <Col xs="auto">
                            <MapPinAlt
                                className="me-2 map-icon"
                                size={36}
                                style={{ cursor: "pointer", transition: "color 0.3s" }}
                                onClick={() => window.open(card.map, "_blank")}
                            />
                        </Col>
                        <Col>
                            <h4 className="my-2">{card.location}</h4>
                        </Col>
                    </Row>
                </Card>
            </div>
            ))}
        </Container>
    );
}

export default EduCard;
