import React from "react";
import { Col, Row } from "react-bootstrap";
import "../styles/contact.css"

const Contact = () => {
  return (
    <div className="contact-section-bg" id="contact">
      <div className="container pt-6 pb-6 ">
        <Row className="justify-content-between">
          <Col md={6}>
            <h1>
              <span className="chonburi-font green-text">Con</span>tact
            </h1>
            <p className="mb-5">
              For any information regarding my work kindly, contact me though
              the following phone number or email address.
            </p>
            <h5 className="mb-4">
              <span className="chonburi-font green-text">PhoneNo:</span> +91
              9382579600
            </h5>
            <h5 className="mb-4">
              <span className="chonburi-font green-text">Email:</span>{" "}
              vikashkumar.kk@gmail.com
            </h5>
            <h5 className="mb-4">
              <span className="chonburi-font green-text">Github:</span>{" "}
                github.com/vikash93825
            </h5>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export { Contact };
