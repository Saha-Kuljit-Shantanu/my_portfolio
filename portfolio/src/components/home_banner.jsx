import { useState, useEffect } from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Gridcard from './gridcard.jsx';
import GitHubCard from './gitcard.jsx';
import CfCard from './cfCard.jsx';

function HomeBanner() {
  const [text, setText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false); // Tracks typing completion
  const fullText = 'SAHA KULJIT SHANTANU';
  const period = 75; // Typing speed in milliseconds

  useEffect(() => {
    let i = 1;
    const ticker = setInterval(() => {
      let updatedText = fullText.substring(0, i);
      setText(updatedText);
      i++;
      if (i > fullText.length) {
        clearInterval(ticker); // Stop typing effect
        setIsTypingComplete(true); // Set typing as complete
      }
    }, period);

    return () => clearInterval(ticker); // Cleanup interval on unmount
  }, []);

  return (
    
      <Container className='banner-content'>
        <Row className = "align-center py-5">
          <span className="typing-effect">{text}</span>
          {isTypingComplete && ( // Render additional content after typing finishes
            <div className="additional-content py-5" style={{"--animation-delay" : "0.5s"}}>
              <p className='animate responsive-text'>Programmer | Developer | Machine Vision Enthusiast</p>
            </div>
          )}
        </Row>
        <Row className='align-center py-5' style={{"--animation-delay" : "0.75s"}}>
        {isTypingComplete && (
          <Gridcard/>
        )}
        </Row>
        <Row xs={1} sm={1} md={1} lg={2} className="g-4" style={{"--animation-delay" : "1s"}}>
          <Col className='align-center py-5'>
          {isTypingComplete && (
            <GitHubCard />
          )}
          </Col>
          <Col className='align-center py-5'>
          {isTypingComplete && (
            <CfCard />
          )}
          </Col>
        </Row>
      </Container>
  );
}

export default HomeBanner;
