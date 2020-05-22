
import React,{useState} from "react";

// import {
//     ListGroup,
//     ListGroupItem,
//   } from "reactstrap";

  import axios from "axios";
  // core components
  import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
  import DemoFooter from "components/Footers/DemoFooter.js";
  // import IndexNavbar from "components/Navbars/IndexNavbar";
  var cart = JSON.parse(localStorage.getItem("cart"));
  const instr= [{}];
  var decision = true;
  function Cart() {
    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
      document.body.classList.add("profile-page");
      return function cleanup() {
        document.body.classList.remove("profile-page");
      };
    });
    const [carting, setCarting] = useState([]);
    
    // useEffect(() => {
    //   axios.get('http://tranquil-fortress-57962.herokuapp.com/products')
    // .then(res =>{
    //   console.log(res);
    //   SetInstr(res.data.products);
    // })
    // }, [])
    if (decision){
    cart.forEach(element => {
            axios.get('http://tranquil-fortress-57962.herokuapp.com/products/'+element)
            .then(res =>{
               instr.push(res.data) 
            })
        })
        decision = false;
        setCarting(instr);
      }
    return (
      <>
        {console.log("entering")}
        {console.log(carting)}
        {/* <ExamplesNavbar /> */}
        <div className="main">
          <h1>Hi Hello</h1>
          {carting.map( e =>
            <div>
              {console.log("hi")}
              <li>
                Hi Hello
              </li>
            <li>
              {}
            </li>
            </div>
             )}
             <p>Very Good</p>
        </div>
        {/* <DemoFooter /> */}
       
      </>
    );
  }
  
  
  export default Cart;
  