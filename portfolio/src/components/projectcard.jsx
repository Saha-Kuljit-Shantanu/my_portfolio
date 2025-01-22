import { Card, Row, Col, Container, Button } from "react-bootstrap";

const cardData = [
  {
    title: "Catch the Egg",
    description: "The traditional egg catching game where a hen or a bunch of hens is constantly moving and laying eggs and there is basket, which has to be dragged to move and catch the eggs, designed using iGraphics",
    github: "https://github.com/Saha-Kuljit-Shantanu/Catch-the-Egg",
    stack: [
      { icon: "c.png", name: "C/C++" }
    ],
  },
  {
    title: "Tower of Hanoi",
    description: "This project shows a visual representation of tower of Hanoi within 3 and 6 blocks, designed using iGraphics", 
    github: "https://github.com/Saha-Kuljit-Shantanu/Tower-of-Hanoi",
    stack: [
      { icon: "c.png", name: "C/C++" }
    ],
  },
  {
    title: "Football player Database with Networking",
    description: "This JavaFX project simulates a database of players who play for certain football clubs. Existing players can be searched based on different criteria. New players can be added to clubs. The project uses networking to buy and sell players.",
    github: "https://github.com/Saha-Kuljit-Shantanu/My_Java_Project_part_2",
    stack: [
      { icon: "java.webp", name: "Java/JavaFX"}
    ],
 },
  {
    title: "Series Movie Review Database (SMRDB)",
    description: "As goes by the name, this project implements a movie and TV series reviewing facility (e.g. IMDB, Rotten Tomatoes) for a user. Both user and Admin side are implemented.",
    github: "https://github.com/excellencior/SMRDB-project",
    stack: [
      { icon: "ejs.svg", name: "Embedded Javascript(EJS)" },
      { icon: "express.png", name: "Express" },
      { icon: "oracle.png", name: "Oracle" }
    ], 
  },
  {
    title: "Playing Mancala with AI",
    description: "Play the traditional Mancala game with the adversary AI acting with the better performing heuristics among the rest. But the Question is, Can you beat the AI?",
    github: "https://github.com/Saha-Kuljit-Shantanu/Playing-Mancala-with-the-AI",
    stack: [
      { icon: "c.png", name: "C/C++" }
    ],
  },
  {
    title: "eTravelKit",
    description: "This project is intended to implement a ticket-booking platform for Air,Train and Bus Services in perspective of Bangladesh. But currently it functions as a ticket management and scheduling system only for Train-Service due to shortage of time. Hoping to do better in future",
    github: "https://github.com/Superb-Man/e-TicketBooking",
    stack: [
      { icon: "svelte.svg", name: "Svelte" },
      { icon: "express.png", name: "Express" },
      { icon: "postgres.png", name: "PostGreSQL"}
    ],
  },
  {
    title: "Context Based Image Retrieval",
    description: "The system takes an image as input and retrieves images in a sequence of their distances with the Query image in ascending order for a chosen algorithm. This openCV project is on the go and is supposed to be prolonged until the thesis defense.",
    github: "https://github.com/Saha-Kuljit-Shantanu/Context_Based_image_Retrieval",
    stack: [
      { icon: "svelte.svg", name: "Svelte" },
      { icon: "flask.png", name: "Flask"}
    ],
  }
];

function ProjectCard() {
  return (
    <Container>
      <span className="responsive-text pb-3 mb-3">Here are some of my noteworthy Projects, either solo or in group</span>
      <Row xs={1} sm={1} md={1} lg={2} className="g-4 py-4">
        {cardData.map((card, index) => (
          <Col key={index} className="project-card d-flex flex-column" 
          style={{ "--animation-delay": `${index * 0.2}s` }}>
            <Card className="animate shadow-sm mt-3 h-100" 
              style={{ backgroundColor: "rgba(78, 78, 96, 0.75)", color: "#fff", borderRadius: "2%" }}>
              {/* Card Title and Description */}
              <Card.Body className="project-card-body">
                {/* Title and Description Section */}
                <div className="card-title-description">
                    <div className="responsive-text text-center mb-3" style={{ fontWeight: "700" }}>
                    {card.title}
                    </div>
                    <div className="responsive-medium-text mb-4" style={{ color: "#aaa" }}>
                    {card.description}
                    </div>
                </div>

                {/* First Horizontal Line */}
                <hr className="card-hr" />

                {/* Stack Icons and Names Section */}
                <div className="card-stack-section">
                    {card.stack.map((stack, idx) => (
                    <div key={idx} className="responsive-medium-text d-flex align-items-center py-2">
                        <img
                        src={stack.icon}
                        alt={stack.name}
                        style={{ width: "40px", height: "40px", marginRight: "1rem" }}
                        />
                        <span>{stack.name}</span>
                    </div>
                    ))}
                </div>

                {/* Second Horizontal Line */}
                <hr className="card-hr" />

                {/* GitHub Button */}
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <Button
                    href={card.github}
                    target="_blank"
                    variant="dark"
                    className="responsive-medium-text git-glow w-100 d-flex justify-content-between align-items-center"
                    style={{
                        backgroundColor: "#888",
                        borderColor: "#000",
                        padding: "0.8rem 1.5rem",
                    }}
                    >
                    <span style={{ flexGrow: 1, textAlign: "center" }}>Find in GitHub</span>
                    <img
                        src="redirect.png"
                        alt="redirect icon"
                        style={{ width: "24px", height: "24px", marginLeft: "1rem" }}
                    />
                    </Button>
                </div>
            </Card.Body>

    

            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProjectCard;
