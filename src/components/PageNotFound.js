import React from "react";

import NotFoundImg from "../assets/page-404.png";
import { Button, Container } from "@mui/material";
import { Link } from "react-router-dom";
import "./PageNotFound.css";
const NotFound = () => {
  return (
    <Container>
      <section className="notFound">
        <div className="container-fluid">
          <div className="box">
            <img src={NotFoundImg} alt="not found" width={'100%'}/>
            <br />
            <br />
            <h1>Page Not Found</h1>
            <p>
              The link you clicked may be broken or the page may have been
              removed. visit the Homepage or Contact us about the problem
            </p>
            <br />

            <div className="d-flex">
              <Button className="btn-g btn-lg m-auto">
                <Link to={"/"}>Back to Home Page</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default NotFound;
