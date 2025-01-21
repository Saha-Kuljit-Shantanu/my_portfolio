import { useState, useEffect } from "react";
import { Card, Button, Container } from "react-bootstrap";

function CfCard() {
  const cfUsername = "kuljit"; // Replace with your CodeForces username
  const [cfStats, setCfStats] = useState({
    currentRating: null,
    maxRating: null,
    maxRank: null,
    problemsSolved: 0,
  });

  useEffect(() => {
    // Fetch CodeForces user stats using their API
    fetch(`https://codeforces.com/api/user.info?handles=${cfUsername}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "OK") {
          const user = data.result[0];
          setCfStats({
            currentRating: user.rating,
            maxRating: user.maxRating,
            maxRank: user.maxRank
          });
        }
      })
      .catch((error) => console.error("Error fetching CodeForces stats:", error));
      fetch(`https://codeforces.com/api/user.status?handle=${cfUsername}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "OK") {
          // Calculate problems solved based on submissions
          const solvedProblems = new Set(
            data.result
              .filter((submission) => submission.verdict === "OK")
              .map((submission) => submission.problem.contestId + submission.problem.index)
          );
          setCfStats((prevStats) => ({
            ...prevStats,
            problemsSolved: solvedProblems.size,
          }));
        }
      })
      .catch((error) => console.error("Error fetching user status:", error));
  }, [cfUsername]);




  return (
    <Container className="animate d-flex flex-column align-items-left mt-5">
      {/* Header Section */}
      <header className="custom-header">
        <h1>CodeForces Activity</h1>
      </header>

      {/* Card Section */}
      <Card style={{ width: "40rem", backgroundColor: "#a3aadd" }} className="shadow-sm mt-3">
        <Card.Body>
          <Card.Text className="mb-3 text-center">
            CodeForces Stats
          </Card.Text>
          <div
            className="stats-wrapper"
            style={{
              backgroundColor: "#222",
              padding: "10px",
              borderRadius: "8px"
            }}
          >
            <p className="text-center text-light">Current Rating: {cfStats.currentRating ?? "N/A"}</p>
            <p className="text-center text-light">Max Rating: {cfStats.maxRating ?? "N/A"}</p>
            <p className="text-center text-light">Max Ranking: {cfStats.maxRank ?? "N/A"}</p>
            <p className="text-center text-light">Number of Problems: {cfStats.problemsSolved ?? "N/A"}</p>
          </div>
          <p className="text-center mt-3">Showing CodeForces profile.</p>
        </Card.Body>
        <Card.Footer className="text-center" style={{ border: "none", backgroundColor: "#a3aadd" }}>
          <Button
            variant="primary"
            className="visit-btn"
            href={`https://codeforces.com/profile/${cfUsername}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit my CodeForces profile
          </Button>
        </Card.Footer>
      </Card>
    </Container>
  );
}

export default CfCard;
