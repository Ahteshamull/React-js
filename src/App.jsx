import React from "react";
import "./App.css";
import { Col, Row } from "react-bootstrap";

const App = () => {
  return (
    <>
      <nav class="navbar navbar-expand-sm navbar-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="images/SamCreative.png" alt="Samcreative" />
          </a>
          <buttonName
            className="navbar-toggler d-lg bg-light "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </buttonName>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Project</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>

            <button className="NavBtn">Contact me</button>
          </div>
        </div>
      </nav>
      <section id="Banner">
        <div className="container">
          <Row>
            <Col lg={6} xs={12} md={6}>
              <div className="bannerHeading">
                <h1 className="Bannerh1">Hello Buds</h1>
                <h2 className="bannerh2">
                  I am <span>Dimas Ardiansyah</span>
                </h2>
                <p className="bannerP1">UI / UX Design Enthusiast</p>
                <div className="bannerwww"></div>
                <p className="bannerp2">
                  I'm a person who has a keen interest in the design layout. I
                  think presenting an attractive design is a matter of concern
                  in developing a branding of products. To creates a good
                  design, I focus on proper composition and visual decoration
                  details in order to make it more professional. For the time
                  being, I’m developing the skill for acquiring the UI/UX design
                  for dynamic application and web development.
                </p>
                <div className="bannerbtn">
                  <button className="bannerbtn1">
                    {" "}
                    <i class="fa-solid fa-list-check bnicon"></i> Download
                  </button>
                  <button className="bannerbtn2">More</button>
                </div>
              </div>
            </Col>
            <Col lg={6} xs={12} md={6}md={6}>
              <div className="bannerImg">
                <img src="images/Picture.png" alt="Picture" />
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section id="Design">
        <div className="container">
          <h1 className="designHeading">What Do I Offer</h1>
          <h1 className="designHeading2">
            Creates Professional Design That’s Oriented Towards Client Needs
          </h1>
          <Row>
            <Col lg={4} xs={12}md={6}>
              <div className="itembox">
                <img className="boximg" src="images/3333.png" alt="3333" />
                <h1 className="boxTitle">Content Design</h1>
              </div>
            </Col>
            <Col lg={4} xs={12}md={6}>
              <div className="itembox">
                <img className="boximg" src="images/2222.png" alt="3333" />
                <h1 className="boxTitle">Mobile App Design</h1>
              </div>
            </Col>
            <Col lg={4} xs={12}md={6}>
              <div className="itembox">
                <img
                  className="boximg"
                  src="images/Picsart_22-07-29_18-18-20-134 1.png"
                  alt="Picsart_22"
                />
                <h1 className="boxTitle">Web Design</h1>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section id="Order">
        <div className="container">
          <Row>
            <Col lg={3} xs={12}md={6}>
              <div className="orderbox">
                <h1 className="orderboxh1">05</h1>
                <h1 className="orderboxh2">Clients Order</h1>
              </div>
            </Col>
            <Col lg={3} xs={12}md={6}>
              <div className="orderbox">
                <h1 className="orderboxh1">03</h1>
                <h1 className="orderboxh2">Completed Projects</h1>
              </div>
            </Col>
            <Col lg={3} xs={12}md={6}>
              <div className="orderbox">
                <h1 className="orderboxh1">4.5</h1>
                <h1 className="orderboxh2">Stars Rating</h1>
              </div>
            </Col>
            <Col lg={3} xs={12}md={6}>
              <div className="orderbox">
                <h1 className="orderboxh1">06</h1>
                <h1 className="orderboxh2">Months Of Experience</h1>
              </div>
            </Col>
          </Row>
        </div>
      </section>
      <section id="about">
        <div className="container">
          <h1 className="designHeading">Testimonials</h1>
          <h1 className="designHeading2">What Do They Say About Me</h1>
          <div className="aboutTitle">
            <Row>
              <Col lg={5} xs={12}md={6}>
                <img
                  className="aboutImg"
                  src="images/Group 9.png"
                  alt="Group9"
                />
              </Col>
              <Col lg={7} xs={12}md={6}>
                <p className="aboutp">
                  SamCreative has been the best designer I have ever worked
                  with. The UI designs he created are top-notch and the design
                  system he integrated allows for straight forward fixes
                  throughout every area of the app. I'm looking forward to
                  partner up with him on upcoming projects.{" "}
                </p>
                <h1 className="about1">Iqbal Hafish</h1>
                <h2 className="about2">Project Manager, DaurUang</h2>
              </Col>
            </Row>
          </div>
        </div>
      </section>
      <section id="skill">
        <div className="container">
          <h1 className="skillh1">Tools and Skills</h1>
          <div className="skillicon">
            <img src="images/Photoshop.png" alt="Photoshop" />
            <img src="images/Photoshop.png" alt="Photoshop" />

            <img src="images/HTML.png" alt="HTML" />
            <img src="images/CSS.png" alt="CSS" />
            <img src="images/XML (1).png" alt="XML" />
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="container">
          <Row>
            <Col lg={6} xs={12}md={6}>
              <h1 className="contacth1">Get in Touch</h1>
              <h1 className="contacth2">
                For business and partnership inquiry please contact me below!
              </h1>
              <div className="contactBox">
                <div className="contactIcon">
                  <img
                    className="ctin"
                    src="images/fluent_call-20-filled.png"
                    alt="fluent_call"
                  />
                </div>
                <div className="contacttext">
                  <h1 className="cth1">Phone</h1>
                  <a className="cth2" href="#">
                    0899-3415-875
                  </a>
                </div>
              </div>
              <div className="contactBox">
                <div className="contactIcon">
                  <img
                    className="ctin"
                    src="images/eva_email-fill.png"
                    alt="fluent_call"
                  />
                </div>
                <div className="contacttext">
                  <h1 className="cth1">Email</h1>
                  <a className="cth2" href="#">
                    dimasarsmith@gmail.com
                  </a>
                </div>
              </div>
              <div className="contactBox">
                <div className="contactIcon">
                  <img
                    className="ctin"
                    src="images/fluent_location-48-filled.png"
                    alt="fluent_call"
                  />
                </div>
                <div className="contacttext">
                  <h1 className="cth1">Address</h1>
                  <a className="cth2" href="#">
                    Griya Japan Raya Tahap 4 B2/01, Sooko, Mojokerto
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={6} xs={12}md={6}>
              <img
                className="contactimg"
                src="images/Vector.png"
                alt="Vector"
              />
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default App;
