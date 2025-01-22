import { Card, Row, Col, Container } from "react-bootstrap";

const cardData = [
  {
    title: "Programming",
    bgColor: "info", // Blue
    icon: "prg.svg",
    skills: [
      { icon: "c.png", name: "C/C++" },
      { icon: "java.webp", name: "Java" },
      { icon: "python.png", name: "Python" },
      { icon: "js.png", name: "JavaScript" },
      { icon: "ts.png", name: "TypeScript" },
    ],
  },
  {
    title: "Databases",
    bgColor: "warning", // Yellow
    icon: "db.webp",
    skills: [
      { icon: "mysql.png", name: "MySQL" },
      /* { icon: "mongodb.png", name: "MongoDB" },*/
      { icon: "postgres.png", name: "PostgreSQL" },
      { icon: "oracle.png", name: "Oracle"},
      { icon: "supabase.png", name: "Supabase"}
    ],
  },
  {
    title: "Development",
    bgColor: "primary", // Blue
    icon: "dev.png",
    skills: [
      { icon: "react.svg", name: "React" },
      { icon: "svelte.svg", name: "Svelte" },
      { icon: "vite.svg", name: "Vite" },
      { icon: "tailwind.png", name: "Tailwind CSS"},
      { icon: "node.png", name: "Node" },
      { icon: "express.png", name: "Express" },
      /*{ icon: "springboot.svg", name: "Spring Boot"}*/
      { icon: "flask.png", name: "Flask"}
    ],
 },
  {
    title: "Deployment and Testing",
    bgColor: "purple", // Yellow
    icon: "dep.webp",
    skills: [
      { icon: "vercel.png", name: "Vercel" },
      /* { icon: "render.webp", name: "Render" },*/
      { icon: "test.webp", name: "Unit and Integration Testing" }

    ], 
  },
  {
    title: "Tools",
    bgColor: "success", // Yellow
    icon: "tools.svg",
    skills: [
      { icon: "git.png", name: "Github" },
      { icon: "z.png", name: "SSLCommerZ" },
      { icon: "postman.svg", name: "PostMan" },
      { icon: "LT.svg", name: "LTspice"}
    ],
  },
  {
    title: "AI and ML",
    bgColor: "info", // Yellow
    icon: "ML.svg",
    skills: [
      { icon: "ML.png", name: "Machine Learning" },
      /* { icon: "mongodb.png", name: "MongoDB" },*/
      { icon: "opencv.webp", name: "openCV" }
      // { icon: "oracle.png", name: "Oracle"}
    ],
  },
  {
    title: "Presentation and UI Design",
    bgColor: "orange",
    icon: "presentation.svg",
    skills: [
      { icon: "latex.png", name: "Latex" },
      /* { icon: "mongodb.png", name: "MongoDB" },*/
      { icon: "canva.webp", name: "Canva" },
      { icon: "figma.png", name: "Figma"}
    ],
  },
  {
    title: "Language and Communication",
    bgColor: "danger", // Yellow
    icon: "speak.svg",
    skills: [
      { icon: "eng.svg", name: "English" },
      /* { icon: "mongodb.png", name: "MongoDB" },*/
      { icon: "ban.svg", name: "Bangla" },
      { icon: "hindi.svg", name: "Hindi"},
      { icon: "german.svg", name: "German(A1)"},
      { icon: "fra.svg", name: "French(Beginner)"}
    ],
  },
  
    
];

function SkillCard() {
  return (
    <Container>
      <span className="responsive-text pb-3 mb-3">My skillset in different fields</span>
      <Row xs={1} sm={1} md={2} lg={3} className="g-4 py-4">
        {cardData.map((card, index) => (
          <Col key={index} className="skill-card d-flex flex-column" 
          style={{ "--animation-delay": `${index * 0.2}s` }}>
            <Card className="animate text-white shadow-sm mt-3 h-100" style={{backgroundColor: "#223", padding: '0 0 0 0'}}>
              
              <Card.Header
                className={`skill-card-header bg-${card.bgColor} d-flex align-items-center`}
                style={{ borderTopLeftRadius: "10px", borderTopRightRadius: "10px"}}
              >
                <img
                  src={card.icon}
                  alt={card.title}
                  style={{ width: "48px", height: "48px", marginRight: "1rem" }}
                ></img>
                <span>{card.title}</span>
              </Card.Header>

              
              <Card.Body style={{borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", backgroundColor: "#556"}}>
                {card.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="skill-glow responsive-medium-text d-flex align-items-center bg-secondary mx-3 my-3 py-3 px-3 rounded"
                    style={{height: "80px"}}
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      style={{ width: "40px", height: "40px", marginRight: "0.8rem"}}
                    />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default SkillCard;
