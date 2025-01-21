import { Container, Row } from "react-bootstrap";
import Skillcard from "./skillcard";

function SkillBanner(){

    return(
        <Container className="banner-content">
            <Row className="align-center py-5">
                <Skillcard />
            </Row>
        </Container>
    )
}

export default SkillBanner