import React, { Component } from "react";
import { Container, Image, Button } from "react-bootstrap";
import logo from "../logo/Spotify_Logo_Black.png";
import fb from "../logo/fb.png";
import "bootstrap/dist/css/bootstrap.min.css";

class SignUp extends Component {
  render() {
    return (
      <Container fluid id="signup-page-wrapper">
        <div className="sign-logo-wrapper">
          <Image src={logo} id="signup-page-logo" />
        </div>
        <div className="signup-items">
          <Button className="signup-btn fb my-2">
            <Image src={fb} id="fb" />
            CONTINUE WITH FACEBOOK
          </Button>
          <Button className="signup-btn apple my-2">CONTINUE WITH APPLE</Button>
          <Button className="signup-btn google my-2">
            CONTINUE WITH GOOGLE
          </Button>
        </div>
      </Container>
    );
  }
}

export default SignUp;
