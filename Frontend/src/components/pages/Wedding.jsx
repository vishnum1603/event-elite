import React, { useContext } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../assets/css/Birthday.css";
import Navbar from "../NavBar";
import Footer from "../Footer";
import { PackageContext } from "../shared/PackageContext";

const Wedding = () => {
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
          Wedding Party Packages
        </h2>
        <Row xs={1} sm={2} md={2} lg={4}>
          <Col>
            <Card className="package-card">
              <Card.Body>
                <Card.Title style={titleStyle}>Classic Package</Card.Title>
                <Card.Text style={textStyle}>Venue: Hotel Ballroom</Card.Text>
                <Card.Text style={textStyle}>
                  Capacity: Up to 50 guests
                </Card.Text>
                <Card.Text style={textStyle}>
                  Includes: Wedding Cake, Floral Decorations
                </Card.Text>
                <Link
                  to="/confirmation"
                  onClick={() =>
                    handleBookPackage({
                      title: "Classic Package",
                      venue: "Hotel Ballroom",
                      capacity: "Up to 50 guests",
                      includes: "Wedding Cake, Floral Decorations",
                      price: "$50000",
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
                <Card.Text style={textStyle}>Venue: Luxury Resort</Card.Text>
                <Card.Text style={textStyle}>
                  Capacity: Up to 100 guests
                </Card.Text>
                <Card.Text style={textStyle}>
                  Includes: Wedding Cake, Floral Decorations, Live Band
                </Card.Text>
                <Link
                  to="/confirmation"
                  onClick={() =>
                    handleBookPackage({
                      title: "Premium Package",
                      venue: "Luxury Resort",
                      capacity: "Up to 100 guests",
                      includes: "Wedding Cake, Floral Decorations, Live Band",
                      price: "$100000",
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
                <Card.Title style={titleStyle}>Deluxe Package</Card.Title>
                <Card.Text style={textStyle}>Venue: Beach Resort</Card.Text>
                <Card.Text style={textStyle}>
                  Capacity: Up to 200 guests
                </Card.Text>
                <Card.Text style={textStyle}>
                  Includes: Wedding Cake, Floral Decorations, DJ
                </Card.Text>
                <Link
                  to="/confirmation"
                  onClick={() =>
                    handleBookPackage({
                      title: "Deluxe Package",
                      venue: "Beach Resort",
                      capacity: "Up to 200 guests",
                      includes: "Wedding Cake, Floral Decorations, DJ",
                      price: "$150000",
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
                <Card.Text style={textStyle}>
                  Venue: Exclusive Country Club
                </Card.Text>
                <Card.Text style={textStyle}>
                  Capacity: Up to 300 guests
                </Card.Text>
                <Card.Text style={textStyle}>
                  Includes: Wedding Cake, Floral Decorations, Live Band,
                  Fireworks
                </Card.Text>
                <Link
                  to="/confirmation"
                  onClick={() =>
                    handleBookPackage({
                      title: "Luxury Package",
                      venue: "Exclusive Country Club",
                      capacity: "Up to 300 guests",
                      includes:
                        "Wedding Cake, Floral Decorations, Live Band, Fireworks",
                      price: "$200000",
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

export default Wedding;
