
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
  import MentorHeader from "components/Headers/MentorHeader.js";
  import DemoFooter from "components/Footers/DemoFooter.js";
  
  function Mentors() {
    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
      document.body.classList.add("profile-page");
      return function cleanup() {
        document.body.classList.remove("profile-page");
      };
    });
    const [Mentor, SetMentor] = useState([]);
    useEffect(() => {
      axios.get('http://localhost:3000/mentors')
    .then(res =>{
      console.log(res);
      SetMentor(res.data.mentors);
    })
    }, [])
    

    return (
     
      <>
        
        <ExamplesNavbar />
        <MentorHeader />
        <div className="main">
          <div className="section text-center">
         
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="8">
                  <h2 className="title">With Gratitude</h2>
                  <h5 className="description">
                  We would like to thank our mentors for always being there for us and guiding us in the right direction. Our mentors are leaders, innovators and visionnaire from all fields of technology and from all walks of life, constantly sharing their experience and knowledge with our team.
                  </h5>
                  <br />
                </Col>
              </Row>
              </Container>
           
              <Container>
              <Row>
                   {Mentor.map(ment =>(
                <Col md="3">
                  <div className="info">
                  <Card style={{width: '15rem'}}>
    <CardImg top src={require("assets/img/default-avatar.png")} alt="..."/>
    <CardBody>
    <CardTitle>  <b> {ment.name} </b> </CardTitle>
                   <CardText>
                     <div><b>Designation</b> : {ment.Designation}</div>
                     <div><b>Company</b> : {ment.Company}</div>
                     <div><b>Specialization</b> : {ment.Specailization}</div>
                     </CardText>
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
  
  
  export default Mentors;
  