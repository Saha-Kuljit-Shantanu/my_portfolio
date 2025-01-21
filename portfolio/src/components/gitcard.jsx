import { Card, Button, Container } from "react-bootstrap";

function GitHubCard() {
  const githubUsername = "Saha-Kuljit-Shantanu"; // Replace with your GitHub username

  return (
    <Container className="animate d-flex flex-column align-items-left mt-5">
      {/* Header Section */}
      <header className="custom-header">
        <h1>GitHub Activity</h1>
      </header>

      {/* Card Section */}
      <Card style={{ width: "40rem", backgroundColor: "#a3aadd" }} className="shadow-sm mt-3">
        <Card.Body>
          <Card.Text className="mb-3 text-center">
            Yearly GitHub Commit Graph
          </Card.Text>
          <div
            className="chart-wrapper"
            style={{
              backgroundColor: "#222",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <iframe
              src={`https://ghchart.rshah.org/${githubUsername}`}
              title="GitHub Commit Graph"
              
              style={{
                width: "100%",
                height: "100px",
                border: "none",
                backgroundColor: "#222", // Match the wrapper background
                margin: "5% auto 5% auto",
              }}
            />
          </div>
          <p className="text-center mt-3">Showing contributions for the current year.</p>
        </Card.Body>
        <Card.Footer className="text-center" style={{ border: "none", backgroundColor: "#a3aadd"}}>
          <Button
            variant="primary"
            className="visit-btn"
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit my GitHub profile
          </Button>
        </Card.Footer>
      </Card>
    </Container>
  );
}

export default GitHubCard;
