import React, { useContext } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../assets/css/Birthday.css"; 
import Navbar from "../NavBar";
import Footer from "../Footer";
import { PackageContext } from "../shared/PackageContext"; 

const Decorations = () => {
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
          Decorations Packages
        </h2>
        <Row xs={1} sm={2} md={2} lg={4}>
          <Col>
            <Card className="package-card">
              <Card.Body>
                <Card.Title style={titleStyle}>Basic Package</Card.Title>
                <Card.Text style={textStyle}>Balloons & Streamers</Card.Text>
                <Card.Text style={textStyle}>
                  Includes: 50 Balloons, 4 Streamers
                </Card.Text>
                <Card.Text style={textStyle}>Price: $50</Card.Text>
                <Link
                  to="/conform"
                  onClick={() =>
                    handleBookPackage({
                      title: "Basic Package",
                      description: "Balloons & Streamers",
                      includes: "50 Balloons, 4 Streamers",
                      price: 50,
                    })
                  }
                >
                  <Button variant="primary" block>
                    Book Now!!!
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="package-card">
              <Card.Body>
                <Card.Title style={titleStyle}>Premium Package</Card.Title>
                <Card.Text style={textStyle}>Theme Decoration</Card.Text>
                <Card.Text style={textStyle}>
                  Includes: Themed Props, Backdrops
                </Card.Text>
                <Card.Text style={textStyle}>Price: $100</Card.Text>
                <Link
                  to="/conform"
                  onClick={() =>
                    handleBookPackage({
                      title: "Premium Package",
                      description: "Theme Decoration",
                      includes: "Themed Props, Backdrops",
                      price: 100,
                    })
                  }
                >
                  <Button variant="primary" block>
                    Book Now!!!
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="package-card">
              <Card.Body>
                <Card.Title style={titleStyle}>Luxury Package</Card.Title>
                <Card.Text style={textStyle}>Customized Setup</Card.Text>
                <Card.Text style={textStyle}>
                  Includes: Custom Decorations, Lighting
                </Card.Text>
                <Card.Text style={textStyle}>Price: $200</Card.Text>
                <Link
                  to="/conform"
                  onClick={() =>
                    handleBookPackage({
                      title: "Luxury Package",
                      description: "Customized Setup",
                      includes: "Custom Decorations, Lighting",
                      price: 200,
                    })
                  }
                >
                  <Button variant="primary" block>
                    Book Now!!!
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="package-card">
              <Card.Body>
                <Card.Title style={titleStyle}>Exclusive Package</Card.Title>
                <Card.Text style={textStyle}>Premium Theme Setup</Card.Text>
                <Card.Text style={textStyle}>
                  Includes: Premium Decorations, Floral Arrangements
                </Card.Text>
                <Card.Text style={textStyle}>Price: $300</Card.Text>
                <Link
                  to="/conform"
                  onClick={() =>
                    handleBookPackage({
                      title: "Exclusive Package",
                      description: "Premium Theme Setup",
                      includes: "Premium Decorations, Floral Arrangements",
                      price: 300,
                    })
                  }
                >
                  <Button variant="primary" block>
                    Book Now!!!
                  </Button>
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

export default Decorations;
