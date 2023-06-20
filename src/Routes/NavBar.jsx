import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "../styles/nav.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

const NavBar = () => {
  return (
    <div className="fixed">
      <div className={window.innerWidth > 767 ? "px-5" : "px-2"}>
        <Navbar collapseOnSelect expand="lg" className={"p-0"}>
          <Navbar.Brand href="/" className="logo p-0">
            VK
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto ml-4 nav-left-side container-fluid">
              <Nav.Link href="#home" className="nav_item nav">
                Home
              </Nav.Link>
              <Nav.Link href="#about" className="nav_item">
                About
              </Nav.Link>

              <Nav.Link href="#skills" className="nav_item">
                Skills
              </Nav.Link>
              <Nav.Link href="#projects" className="nav_item">
                Projects
              </Nav.Link>
              <Nav.Link href="#achieved" className="nav_item">
                Achieved
              </Nav.Link>
              <Nav.Link href="#contact" className="nav_item">
                Contact
              </Nav.Link>
            </Nav>
            <Nav
              className={`ml-auto ${
                window.innerWidth > 767 ? "w-25" : "w-100"
              }`}
            >
              <div className="d-flex justify-content-between w-100">
                <Nav.Link
                  href="https://www.linkedin.com/in/vikash-03/"
                  className="nav_item cursor-pointer"
                  target="_blank"
                >
                  <LinkedInIcon />
                </Nav.Link>
                <Nav.Link
                  href="https://github.com/vikash93825"
                  className="nav_item cursor-pointer"
                  target="_blank"
                >
                  <GitHubIcon />
                </Nav.Link>
                <Nav.Link
                  href="https://twitter.com/vikash93825"
                  className="nav_item cursor-pointer"
                >
                  <TwitterIcon />
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export {NavBar};
