import { Box } from "@chakra-ui/react"
import { PrimaryButton } from "components"
import { useState, useRef, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa"

export const HomeScreen = () => {
    const [showNavBackground, setShowNavBackground] = useState(false)
    const navRef = useRef()

    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 50
            setShowNavBackground(show)
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])
    return (
        <div>
            <nav className={`navbar navbar-expand-lg fixed-top navbar-dark px-3  px-md-5 ${showNavBackground ? 'navbar-scrolled' : 'bg-transparent'}`}>
                <a className="navbar-brand" href="#">
                    <img src={require('../../assets/images/logo-white.png')} className="img-fluid" width={'50px'}/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto ms-5 ">
                        <li className="nav-item active">
                            <a className="nav-link fw-bold" href="#">PLAYER <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-bold" href="#">FEATURES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-bold" href="#">MANAGER</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fw-bold" href="#">FAN</a>
                        </li>
                    </ul>
                    <div className="d-flex ms-auto">
                        <div className="me-5 align-self-center">
                            <a className="nav-link fw-bold" href="#">LOGIN</a>
                        </div>

                        <PrimaryButton
                            size={'lg'}
                            style={{
                                background: 'linear-gradient(81.72deg, #D037E9 -26.37%, #7AF2B9 144.09%)',
                                borderRadius: '16px 0px 16px 0px'
                            }}
                        >
                            SIGNUP
                        </PrimaryButton>
                    </div>
                </div>
            </nav>
            <Box className="section-entrance">
                <div className="container-fluid">
                    <Row>
                        <Col xs={12} md={6}>
                            <div className="d-flex justify-content-end h-100 ps-md-5">
                                <div className="text-start align-self-center mt-5 mt-md-0">
                                    <div className="fw-bold text-start display-2 mb-3 mt-5 mt-md-0">
                                        <div>PLAY THE </div>
                                        <div style={{ color: "#7AF2B9" }}>BEAUTIFUL GAME</div>
                                    </div>
                                    <div className="w-100 ms-auto mb-4 text-start">
                                        The go-to destination for everything from player profiles to tactical analysis, all delivered with style and substance. So whether you're a seasoned fan
                                    </div>
                                    <div className="py-2">
                                        <PrimaryButton
                                            size={'lg'}
                                            style={{
                                                background: 'linear-gradient(81.72deg, #D037E9 -26.37%, #7AF2B9 144.09%)',
                                                borderRadius: '16px 0px 16px 0px'
                                            }}
                                        >
                                            Get Started
                                        </PrimaryButton>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div className="d-flex justify-content-center">
                                <img
                                    className="img-fluid rounded rounded-2"
                                    src={require('../../assets/images/player-balling.png')}
                                />
                            </div>
                        </Col>
                    </Row>

                </div>
            </Box>
            <Box className="section-container-1">
                <Box className="py-4 px-4">
                    <div className="container-fluid section-game_on my-5">
                        <Row>
                            <Col xs={12} md={6}>
                                <div className="d-flex justify-content-end h-100 ps-md-5">
                                    <div className="text-start align-self-center">
                                        <div className="fw-bold text-start display-6 mb-4">
                                            <div className="mb-3">THE ULTIMATE DESTINATION FOR  </div>
                                            <div style={{ color: "#FFA600" }}>FOOTBALL FANS</div>
                                        </div>

                                        <div className="py-2 d-flex ">
                                            <div className="me-4 mb-3 mb-md-0">
                                                <PrimaryButton
                                                    size={'lg'}
                                                    style={{
                                                        background: 'linear-gradient(81.72deg, #D037E9 -26.37%, #7AF2B9 144.09%)',
                                                        borderRadius: '16px 0px 16px 0px'
                                                    }}
                                                >
                                                    Get Started
                                                </PrimaryButton>
                                            </div>
                                            <div className="align-self-center">
                                                <div className="flex-grow-1 text-muted ">
                                                    Mobile app launching soon.
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className="d-flex justify-content-center">
                                    <img
                                        className="img-fluid rounded rounded-2"
                                        src={require('../../assets/images/soccer-stadium.png')}
                                        style={{ borderRadius: '51.4815px' }}
                                    />
                                </div>
                            </Col>
                        </Row>

                    </div>
                </Box>
                <Box className="py-4 px-4">
                    <div className="container-fluid py-5">
                        <Row>
                            <Col xs={12} md={6}>
                                <div className="d-flex justify-content-end h-100 ps-md-5 mb-5 mb-md-0">
                                    <div className="text-start align-self-center">
                                        <div className="fw-bold text-start display-5 mb-3">
                                            <div>PLAY THE </div>
                                            <div style={{ color: "#7AF2B9" }}>BEAUTIFUL GAME</div>
                                        </div>
                                        <div className="w-100 ms-auto mb-4 text-start">
                                            The go-to destination for everything from player profiles to tactical analysis, all delivered with style and substance. So whether you're a seasoned fan
                                        </div>
                                        <div className="py-2">
                                            <PrimaryButton
                                                size={'lg'}
                                                style={{
                                                    background: 'linear-gradient(81.72deg, #D037E9 -26.37%, #7AF2B9 144.09%)',
                                                    borderRadius: '16px 0px 16px 0px'
                                                }}
                                            >
                                                Get Started
                                            </PrimaryButton>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className="d-flex justify-content-center">
                                    <img
                                        className="img-fluid"
                                        src={require('../../assets/images/website-view-1.png')}
                                        style={{ borderRadius: '10px' }}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Box>
                <Box className="py-4 px-4">
                    <div className="container-fluid py-5">
                        <Row>
                            <Col xs={12} md={6} >
                                <div className="d-flex justify-content-center mb-5 mb-md-0">
                                    <img
                                        className="img-fluid"
                                        src={require('../../assets/images/website-view-2.png')}
                                        style={{ borderRadius: '10px' }}
                                    />
                                </div>
                            </Col>
                            <Col xs={12} md={6}>
                                <div className="d-flex justify-content-end h-100 pe-md-5">
                                    <div className="text-end align-self-center">
                                        <div className="fw-bold text-end display-5 mb-3">
                                            <div>PLAY THE </div>
                                            <div style={{ color: "#7AF2B9" }}>BEAUTIFUL GAME</div>
                                        </div>
                                        <div className="w-100 ms-auto mb-4 text-end">
                                            The go-to destination for everything from player profiles to tactical analysis, all delivered with style and substance. So whether you're a seasoned fan
                                        </div>
                                        <div className="py-2">
                                            <PrimaryButton
                                                size={'lg'}
                                                style={{
                                                    background: 'linear-gradient(81.72deg, #D037E9 -26.37%, #7AF2B9 144.09%)',
                                                    borderRadius: '16px 0px 16px 0px'
                                                }}
                                            >
                                                Get Started
                                            </PrimaryButton>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Box>
            </Box>
            <Box className="py-4 px-4">
                <div className="card-section-1">
                    <div className="p-3 p-md-4 h-100 card-section-1-gradient">
                        <div className="d-flex justify-content-center h-100">
                            <div className="text-center align-self-center">
                                <div className="fw-bold display-4 mb-3">
                                    EXPERIENCE THE GAME
                                </div>
                                <div className="w-75 mx-auto mb-4">
                                    The go-to destination for everything from player profiles to tactical analysis, all delivered with style and substance. So whether you're a seasoned fan
                                </div>
                                <div className="py-2">
                                    <PrimaryButton
                                        size={'lg'}
                                        style={{
                                            background: 'linear-gradient(81.72deg, #D037E9 -26.37%, #7AF2B9 144.09%)',
                                            borderRadius: '16px 0px 16px 0px'
                                        }}
                                    >
                                        Get Started
                                    </PrimaryButton>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Box>
            <Box className="py-4 px-4">
                <Row className="p-0 p-md-5">
                    <Col xs={12} md={5}>
                        <p className="w-75">
                            Whether you're a die-hard fan or a casual observer, you'll find everything you need right here to stay on top of the latest trends and make the most of every matchday. So come on in and let's kick thin with whistlepages.
                        </p>
                    </Col>
                    <Col xs={12} md={2}>
                        <div className="footer-quick_actions">
                            <div>
                                <b>Company</b>
                            </div>
                            <div>Home</div>
                            <div>Features</div>
                            <div>Fans</div>
                            <div>Managers</div>
                        </div>
                    </Col>
                    <Col xs={12} md={2}>
                        <div className="footer-quick_actions">
                            <div>
                                <b>Legal</b>
                            </div>
                            <div>Terms</div>
                            <div>Privacy</div>
                            <div>Security</div>
                        </div></Col>
                    <Col xs={12} md={3}>
                        <div className="footer-quick_actions">
                            <div>
                                <b>Contact</b>
                            </div>
                            <div>Support@whistlepages.com</div>
                            <div>01988778998</div>
                            <div>
                                <Row>
                                    <Col xs={2}><FaFacebook size={20} /></Col>
                                    <Col xs={2}><FaGoogle size={20} /></Col>
                                    <Col xs={2}><FaTwitter size={20} /></Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Box>
        </div >
    )
}