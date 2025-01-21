import { Container, Row } from "react-bootstrap";
import Projectcard from "./projectcard";

function ProjectBanner(){

    return(
        <Container className="banner-content">
            <Row className="align-center py-5">
                <Projectcard />
            </Row>
        </Container>
    )
}

export default ProjectBanner