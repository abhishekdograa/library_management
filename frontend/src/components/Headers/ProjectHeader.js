
import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function ProjectPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage: "url(" + require("assets/img/Projects.jpg") + ")"
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>Our Projects</h1>
            <h3>The beautiful thing about learning is that nobody can take it away from you</h3>
            <br />
            <Button 
            href = "https://robokits.co.in/" target="_blank"
            className="btn-round" color="neutral" type="button" outline>
              Learn More
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default ProjectPageHeader;
