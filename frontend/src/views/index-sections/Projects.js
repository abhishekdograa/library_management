
import React, { useState, useEffect } from "react";

import {
    Button,
    Card,
    CardBody,
    CardTitle,
    Container,
    Row,
    Col,
    CardImg,
    CardText
  } from "reactstrap";

  import axios from "axios";
  // core components
  import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
  import ProjectHeader from "components/Headers/ProjectHeader.js";
  import DemoFooter from "components/Footers/DemoFooter.js";
  // import IndexNavbar from "components/Navbars/IndexNavbar";
  
  function Instruments() {
    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
      document.body.classList.add("profile-page");
      return function cleanup() {
        document.body.classList.remove("profile-page");
      };
    });
    const [Instr, SetInstr] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:5000/products')
    .then(res =>{
      console.log(res);
      SetInstr(res.data.products);
    })
    }, [])
    

    return (
     
      <>
        
        <ExamplesNavbar />
        <ProjectHeader />
        <div className="main">
          <div className="section text-center">
         
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="8">
                  <h2 className="title">Lets Talk</h2>
                  <h5 className="description">
                  The projects displayed below are made by students in the robotics community of UIET under the guidance and with the support of the robotics lab of UIET. If you wish to learn more about the projects we encourage you to contact their developers or visit our lab. 
                  </h5>
                  <br />
                </Col>
              </Row>
              </Container>
           
              <Container>
              <Row>
                   {Instr.map(inst =>(
                <Col md="3">
                  <div className="info">
                  <Card style={{width: '15rem'}}>
    <CardImg top src={require("assets/img/L293D-Motor-DriverServo-Shield-for-Arduino-3.jpg")} alt="..."/>
    <CardBody>
    <CardTitle key ={inst.id}>  <b> {inst.name} </b> </CardTitle>
                   <CardText>{inst.description}</CardText>
        <Button color="primary" href="/profile-page">See More</Button>
        
    </CardBody>
</Card>
                  </div>


                </Col>
                ))} 
              </Row>
            </Container>
             
          </div>
        </div>
        <DemoFooter />
       
      </>
    );
  }
  
  
  export default Instruments;
  