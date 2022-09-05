import React from "react";
import style from './footer.module.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FooterComponent = ()=>{
    
    return (
        <>
            <footer style={{ backgroundImage: 'url("img/footerbg.png")'}} className={style.customeFooter}>
                <Container fluid>
                    <Row>
                        <Col>
                            <div className={style.copyRightText}>
                                Copyrights © 2022 All Rights Reserved by R.A.M
                            </div>
                            <ul>
                                <li>
                                    <span>Follow us :- </span>
                                </li>
                                <li>
                                    <a style={{backgroundImage:'url(/img/social_icons.jpg)'}} href="https://www.facebook.com/IamRohitAzad" target="_blank" rel="noreferrer" className={style.fb}>facebook</a>
                                </li>
                                <li>
                                    <a style={{backgroundImage:'url(/img/social_icons.jpg)'}} href="https://twitter.com/rohitazad"   target="_blank" rel="noreferrer" className={style.twit}>twitter</a>
                                </li>
                                <li>
                                    <a style={{backgroundImage:'url(/img/social_icons.jpg)'}} href="https://www.linkedin.com/in/rohitazad/"  target="_blank" rel="noreferrer" className={style.linkden}>linkdeen</a>
                                </li>
                                <li>
                                    <a style={{backgroundImage:'url(/img/social_icons.jpg)'}} href="https://www.instagram.com/rohit_azad_malik/" rel="noreferrer"  target="_blank" className={style.insta}>instagram</a>
                                </li>
                                <li>
                                    <a style={{backgroundImage:'url(/img/social_icons.jpg)'}} href="https://wa.me/+919953878727?text=Hi  Rohit " rel="noreferrer"  target="_blank" className={style.wat}>watsup</a>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}

export default FooterComponent;