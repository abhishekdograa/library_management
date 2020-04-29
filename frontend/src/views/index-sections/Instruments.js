
import React, { useState, useEffect } from "react";

import {
    Button,
    Card,
    CardBody,
    Modal, ModalHeader, ModalBody, ModalFooter,
    CardTitle,
    Input,
    InputGroupAddon,
    InputGroup,
    Container,
    Row,
    Col,
    CardImg,
    CardText
  } from "reactstrap";

  import axios from "axios";
  // core components
  import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
  import InstrumentHeader from "components/Headers/InstrumentHeader.js";
  import DemoFooter from "components/Footers/DemoFooter.js";
  // import IndexNavbar from "components/Navbars/IndexNavbar";
  let Token= sessionStorage.getItem("TokenKey");

  function Instruments() {
    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
      document.body.classList.add("profile-page");
      return function cleanup() {
        document.body.classList.remove("profile-page");
      };
    });
    const [Instr, SetInstr] = useState([]);
    const [search , SetSearch] = useState("");
    const [modal, setModal] = useState(false);
    let auth ="none";
    if(Token)
    {
      auth = ""
    }
    useEffect(() => {
      axios.get('http://localhost:5000/products')
    .then(res =>{
      console.log(res);
      SetInstr(res.data.products);
    })
    }, [])

    let searchinstr = Instr.filter(
      (e)=> {return e.name.toUpperCase().includes(search.toUpperCase());
      }
    );
    const toggle =()=> setModal(!modal);
    
    
    return (
     
      <>
        
        <ExamplesNavbar />
        <InstrumentHeader />
        <div className="main">
          <div className="section text-center">
         {console.log(search)}
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="8">
                  <h2 className="title">Disclaimer</h2>
                  <h5 className="description">
                  The instruments displayed below are to be issued with the permission and under the guidance of the robotics lab incharge and have to be returned within the given time frame.
                  </h5>
                  <br />
                </Col>
                <InputGroup>
                <InputGroupAddon >
                {/* <InputGroupText>?</InputGroupText> */}
                </InputGroupAddon>
                <Input value={search} style={{textAlign:"center"}} placeholder="Can I help you Find Something ?" onChange={e =>{SetSearch(e.target.value)}}/>
                </InputGroup>
                </Row>
                </Container>
    
              <Container>
              <Row>
                   {searchinstr.map(inst =>(
                <Col md="3">
                  <div className="info">
                     <Card style={{width: '15rem'}}>
                     <CardImg top src={require("assets/img/L293D-Motor-DriverServo-Shield-for-Arduino-3.jpg")} alt="..."/>
                       <CardBody>
                        <CardTitle>  <b> {inst.name} </b> </CardTitle>
                        <CardText>{inst.quantity}</CardText>
                        <Button color="primary"  onClick ={toggle}> See More</Button> 
                        <Modal isOpen={modal} toggle={toggle}>
                   <ModalHeader toggle={toggle}>{inst.name}</ModalHeader>
                          <ModalBody>
                            Quantity: {inst.quantity}
                          </ModalBody>
                          <ModalBody>
                          {inst.description}
                          </ModalBody>
                          <ModalFooter>
                            <Button color="primary" onClick={toggle}  style={{display: auth}} >Issue</Button>
                            <Button color="secondary" onClick={toggle} style={{display: auth}} >Edit</Button>
                            <Button color="secondary" onClick={toggle} style={{display: auth}} >Delete</Button>
                          </ModalFooter>
                        </Modal>
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