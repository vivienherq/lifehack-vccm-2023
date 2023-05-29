import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../../assets/info-chat-vector.png";

import classes from "./Banner.module.css";

const Banner = () => {
  const [loopNum, setLoopNom] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Assignments", "Essays", "Quizzes"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNom(loopNum + 1);
      setDelta(500);
    }
  };

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/login`;
    navigate(path);
  };

  return (
    <section className={classes.banner} id="None">
      <Container>
        <Row className="align-items-center">
          <Col>
            <div class="row">
              {/* <span className={classes["banner-tagline"]}>Hello World</span> */}
              <h1 className={classes["banner-h1"]}>
                {`Get help for your `}
                <span className="wrap">{text}</span>
              </h1>
              <p style={{ padding: 30 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <button onClick={routeChange}>
                Get Started
                <ArrowRightCircle size={25} />
              </button>
              <br></br>
              <br></br>
              <img src={headerImg} alt="Header Img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
