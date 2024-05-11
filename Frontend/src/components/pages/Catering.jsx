import React, { useContext } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../assets/css/Birthday.css";
import Navbar from "../NavBar";
import Footer from "../Footer";
import { PackageContext } from "../shared/PackageContext"; 

const Catering = () => {
  const titleStyle = {
    fontFamily: "Roboto, sans-serif",
    fontWeight: "bold",
    color: "#ff6f61",
  };

  const textStyle = {
    fontFamily: "Roboto, sans-serif",
  };

  const { setPackageData } = useContext(PackageContext); // Access context

  const handleBookPackage = (packageData) => {
    setPackageData(packageData); // Update context with selected package
  };

  return (
    <div>
      <Navbar />
      <Container>
        <h2 style={titleStyle} className="package-title">
          Catering Packages
        </h2>
        <Row xs={1} sm={2} md={2} lg={4}>
          <Col>
            <Card className="package-card">
              <Card.Body>
                <Card.Title style={titleStyle}>Basic Package</Card.Title>
                <Card.Text style={textStyle}>Buffet Catering</Card.Text>
                <Card.Text style={textStyle}>
                  Includes: Main Course, Side Dishes
                </Card.Text>
                <Card.Text style={textStyle}>Price: $15 per person</Card.Text>
                <Link
                  to="/conform" // Use Link for navigation
                  onClick={() =>
                    handleBookPackage({
                      title: "Basic Package",
                      description: "Buffet Catering",
                      includes: "Main Course, Side Dishes",
                      price: 15,
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
                <Card.Text style={textStyle}>Sit-Down Dinner</Card.Text>
                <Card.Text style={textStyle}>
                  Includes: Multi-course Meal, Dessert
                </Card.Text>
                <Card.Text style={textStyle}>Price: $30 per person</Card.Text>
                <Link
                  to="/conform"
                  onClick={() =>
                    handleBookPackage({
                      title: "Premium Package",
                      description: "Sit-Down Dinner",
                      includes: "Multi-course Meal, Dessert",
                      price: 30,
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
                <Card.Title style={titleStyle}>Gourmet Package</Card.Title>
                <Card.Text style={textStyle}>Fine Dining Experience</Card.Text>
                <Card.Text style={textStyle}>
                  Includes: Specialty Dishes, Wine Pairing
                </Card.Text>
                <Card.Text style={textStyle}>Price: $50 per person</Card.Text>
                <Link
                  to="/conform"
                  onClick={() =>
                    handleBookPackage({
                      title: "Gourmet Package",
                      description: "Fine Dining Experience",
                      includes: "Specialty Dishes, Wine Pairing",
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
                <Card.Title style={titleStyle}>Custom Package</Card.Title>
                <Card.Text style={textStyle}>Tailored to Your Needs</Card.Text>
                <Card.Text style={textStyle}>
                  Price: Contact for Pricing
                </Card.Text>
                <Button variant="primary" block disabled>
                  Contact Us
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Catering;
