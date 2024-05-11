import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../../assets/css/Birthday.css"; 
import Navbar from "../NavBar";
import Footer from "../Footer";
import { PackageContext } from "../shared/PackageContext"; 

const Bachelor = () => {
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
          Bachelor Party Packages
        </h2>
        <Row xs={1} sm={2} md={2} lg={4}>
          <Col>
            <Card className="package-card">
              <Card.Body>
                <Card.Title style={titleStyle}>Basic Package</Card.Title>
                <Card.Text style={textStyle}>Venue: Small Bar</Card.Text>
                <Card.Text style={textStyle}>
                  Capacity: Up to 10 guests
                </Card.Text>
                <Card.Text style={textStyle}>Includes: Drinks, Snacks</Card.Text>
                <Link
                  to="/confirmation"
                  onClick={() =>
                    handleBookPackage({
                      title: "Basic Package",
                      venue: "Small Bar",
                      capacity: "Up to 10 guests",
                      includes: "Drinks, Snacks",
                      price: "$3000",
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
                <Card.Text style={textStyle}>Venue: Nightclub</Card.Text>
                <Card.Text style={textStyle}>
                  Capacity: Up to 20 guests
                </Card.Text>
                <Card.Text style={textStyle}>
                  Includes: VIP Access, Bottle Service
                </Card.Text>
                <Link
                  to="/confirmation"
                  onClick={() =>
                    handleBookPackage({
                      title: "Premium Package",
                      venue: "Nightclub",
                      capacity: "Up to 20 guests",
                      includes: "VIP Access, Bottle Service",
                      price:"$5000",
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
                <Card.Text style={textStyle}>Venue: Private Yacht</Card.Text>
                <Card.Text style={textStyle}>
                  Capacity: Up to 30 guests
                </Card.Text>
                <Card.Text style={textStyle}>
                  Includes: Yacht Rental, Catering, Entertainment
                </Card.Text>
                <Link
                  to="/confirmation"
                  onClick={() =>
                    handleBookPackage({
                      title: "Luxury Package",
                      venue: "Private Yacht",
                      capacity: "Up to 30 guests",
                      includes: "Yacht Rental, Catering, Entertainment",
                      price:"$7000",
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
                <Card.Title style={titleStyle}>Extreme Package</Card.Title>
                <Card.Text style={textStyle}>Venue: Adventure Park</Card.Text>
                <Card.Text style={textStyle}>
                  Capacity: Up to 15 guests
                </Card.Text>
                <Card.Text style={textStyle}>
                  Includes: Zip-lining, Paintball, BBQ
                </Card.Text>
                <Link
                  to="/confirmation"
                  onClick={() =>
                    handleBookPackage({
                      title: "Extreme Package",
                      venue: "Adventure Park",
                      capacity: "Up to 15 guests",
                      includes: "Zip-lining, Paintball, BBQ",
                      price:"$10000",
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

export default Bachelor;

