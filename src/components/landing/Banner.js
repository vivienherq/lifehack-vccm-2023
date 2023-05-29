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
                Welcome to VCCM, a revolutionary educational platform designed
                to empower the future generation through technology and provide
                a seamless learning experience in our increasingly digitized
                world. In the post-COVID-19 era, traditional educational methods
                have undergone a significant transformation, and it is crucial
                to adapt to these changes to ensure students' success at all
                levels of education. Our mission is to bridge the gap between
                students and technology, catering to learners from elementary
                school to postgraduate education. Whether a student is just
                starting their educational journey or seeking advanced knowledge
                in a specific field, VCCM offers comprehensive resources and
                tools to support their growth and development.
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
