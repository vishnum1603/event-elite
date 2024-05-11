import React, { useState, useContext } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from "../NavBar";
import Footer from "../Footer";
import { PackageContext } from "../shared/PackageContext";

const Birthday = () => {
  const titleStyle = {
    fontFamily: "Roboto, sans-serif",
    fontWeight: "bold",
    color: "#ff6f61",
  };

  const textStyle = {
    fontFamily: "Roboto, sans-serif",
  };

  const { setPackageData } = useContext(PackageContext);

  const handleBookPackage = (packageData) => {
    setPackageData(packageData);
  };

  return (
    <div>
      <Navbar />
      <Container>
        <h2 style={titleStyle} className="package-title">
          Birthday Party Packages
        </h2>
        <Row xs={1} sm={2} md={2} lg={4}>
          <Col>
            <Card className="package-card">
              <Card.Body>
                <Card.Title style={titleStyle}>Basic Package</Card.Title>
                <Card.Text style={textStyle}>Venue: Small Hall</Card.Text>
                <Card.Text style={textStyle}>
                  Capacity: Up to 20 members
                </Card.Text>
                <Card.Text style={textStyle}>
                  Includes: Cake, Party Hats
                </Card.Text>
                <Link
                  to={{
                    pathname: "/confirmation",
                  }}
                  onClick={() =>
                    handleBookPackage({
                      title: "Basic Package",
                      venue: "Small Hall",
                      capacity: "Up to 20 members",
                      includes: "Cake, Party Hats",
                      price:"$4000",
                    })
                  }
                >
                  <Button variant="primary">Book Now!!!</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="package-card">
              <Card.Body>
                <Card.Title style={titleStyle}>Standard Package</Card.Title>
                <Card.Text style={textStyle}>Venue: Medium Hall</Card.Text>
                <Card.Text style={textStyle}>
                  Capacity: Up to 50 members
                </Card.Text>
                <Card.Text style={textStyle}>
                  Includes: Cake, Party Hats, Games
                </Card.Text>
                <Link
                  to={{
                    pathname: "/confirmation",
                  }}
                  onClick={() =>
                    handleBookPackage({
                      title: "Standard Package",
                      venue: "Medium Hall",
                      capacity: "Up to 50 members",
                      includes: "Cake, Party Hats, Games",
                      price:"$10000",
                    })
                  }
                >
                  <Button variant="primary">Book Now!!!</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="package-card">
              <Card.Body>
                <Card.Title style={titleStyle}>Premium Package</Card.Title>
                <Card.Text style={textStyle}>Venue: Large Hall</Card.Text>
                <Card.Text style={textStyle}>
                  Capacity: Up to 100 members
                </Card.Text>
                <Card.Text style={textStyle}>
                  Includes: Cake, Party Hats, Games, Decorations
                </Card.Text>
                <Link
                  to={{
                    pathname: "/confirmation",
                  }}
                  onClick={() =>
                    handleBookPackage({
                      title: "Premium Package",
                      venue: "Large Hall",
                      capacity: "Up to 100 members",
                      includes: "Cake, Party Hats, Games, Decorations",
                      price:"$15000",
                    })
                  }
                >
                  <Button variant="primary">Book Now!!!</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="package-card">
              <Card.Body>
                <Card.Title style={titleStyle}>Deluxe Package</Card.Title>
                <Card.Text style={textStyle}>Venue: Garden</Card.Text>
                <Card.Text style={textStyle}>
                  Capacity: Up to 30 members
                </Card.Text>
                <Card.Text style={textStyle}>
                  Includes: Cake, Party Hats, Magic Show
                </Card.Text>
                <Link
                  to={{
                    pathname: "/confirmation",
                  }}
                  onClick={() =>
                    handleBookPackage({
                      title: "Deluxe Package",
                      venue: "Garden",
                      capacity: "Up to 30 members",
                      includes: "Cake, Party Hats, Magic Show",
                      price:"$20000"
                    })
                  }
                >
                  <Button variant="primary">Book Now!!!</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Birthday;
