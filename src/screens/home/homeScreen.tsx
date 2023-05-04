import { Box } from "@chakra-ui/react"
import { PrimaryButton } from "components"
import { Col, Container, Row } from "react-bootstrap"

export const HomeScreen = () => {
    return (
        <div>
            <Box>
                <div>
                    <div>
                        <div>
                            EXPERIENCE THE GAME
                        </div>
                        <div>
                            The go-to destination for everything from player profiles to tactical analysis, all delivered with style and substance. So whether you're a seasoned fan
                        </div>
                        <div>
                            <PrimaryButton>Get Started</PrimaryButton>
                        </div>
                    </div>
                </div>
            </Box>
            <Container>
                <Row>
                    <Col>
                        <p>
                            Whether you're a die-hard fan or a casual observer, you'll find everything you need right here to stay on top of the latest trends and make the most of every matchday. So come on in and let's kick thin with whistlepages.
                        </p>
                    </Col>
                    <Col>
                        <div>
                            <div>
                                <b>Company</b>
                            </div>
                            <div>Home</div>
                            <div>Features</div>
                            <div>Fans</div>
                            <div>Managers</div>
                        </div>
                    </Col>
                    <Col>
                        <div>
                            <div>
                                <b>Company</b>
                            </div>
                            <div>Home</div>
                            <div>Features</div>
                            <div>Fans</div>
                            <div>Managers</div>
                        </div></Col>
                    <Col>
                        <div>
                            <div>
                                <b>Contact</b>
                            </div>
                            <div>Support@whistlepages.com</div>
                            <div>01988778998</div>
                            <div>
                                <Row>
                                    <Col></Col>
                                    {/* <Col><FaFacebook /></Col>
                                    <Col><Fa/></Col> */}
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}