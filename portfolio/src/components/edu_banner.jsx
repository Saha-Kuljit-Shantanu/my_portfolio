import { Container, Row } from "react-bootstrap";
import Educard from "./educard";

function EduBanner(){

    return(
        <Container className="banner-content">
            <Row className="align-center py-5">
                <Educard />
            </Row>
        </Container>
    )
}

export default EduBanner