
import React, { useState } from "react";
import axios from 'axios';
// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";

function LoginPage() {
  const [email , setEmail] = useState("");
  const [password, setPassword] = useState("");
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });
  function handleLogin(){
 
    axios({
        method: 'post',
        url: "http://localhost:5000/users/login/",
        headers: {}, 
        data: {
            email: email,
            password: password
        }
      }).then(res =>{
            alert(res.data.message);
           const token = res.data.token;
            console.log(token);
           sessionStorage.setItem('TokenKey', token);
           window.location.href = "/index";
        })
}
  return (
    <>
      <ExamplesNavbar />
      <div
        className="page-header"
        style={{
          backgroundImage: "url(" + require("assets/img/login-image.jpg") + ")"
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto">Welcome</h3>
                <div className="social-line text-center">
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="facebook"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-facebook-square" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon mr-1"
                    color="google"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-google-plus" />
                  </Button>
                  <Button
                    className="btn-neutral btn-just-icon"
                    color="twitter"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-twitter" />
                  </Button>
                </div>
                <Form className="register-form">
                  <label>Email</label>
                  <Input placeholder="Email" type="text" value ={email} onChange={e =>{setEmail(e.target.value)}} />
                  <label>Password</label>
                  <Input placeholder="Password" type="password" value ={password} onChange={e =>{setPassword(e.target.value)}}/>
                  <Button block className="btn-round" color="danger"
                  onClick={handleLogin}
                  
                  >
                    Sign in
                  </Button>
                </Form>
                <div className="forgot">
                  <Button
                    className="btn-link"
                    color="danger"
                    href="#pablo"
                    
                  >
                    Forgot password?
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
        {/* <div className="footer register-footer text-center">
          <h6>
            © {new Date().getFullYear()}, made with{" "}
            <i className="fa fa-heart heart" />
          </h6>
        </div> */}
      </div>
    </>
  );
}

export default LoginPage;
