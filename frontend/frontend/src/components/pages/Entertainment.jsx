import React, { useContext } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../assets/css/Birthday.css"; 
import Navbar from "../NavBar";
import Footer from "../Footer";
import { PackageContext } from "../shared/PackageContext"; 

const Entertainment = () => {
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
          Entertainment Packages
        </h2>
        <Row xs={1} sm={2} md={2} lg={4}>
          <Col>
            <Card className="package-card">
              <Card.Body>
                <Card.Title style={titleStyle}>DJ Package</Card.Title>
                <Card.Text style={textStyle}>Professional DJ</Card.Text>
                <Card.Text style={textStyle}>
                  Includes: DJ Services, Sound System
                </Card.Text>
                <Card.Text style={textStyle}>Price: $200</Card.Text>
                <Link
                  to="/conform" 
                  onClick={() =>
                    handleBookPackage({
                      title: "DJ Package",
                      description: "Professional DJ",
                      includes: "DJ Services, Sound System",
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
                <Card.Title style={titleStyle}>Live Band Package</Card.Title>
                <Card.Text style={textStyle}>Live Music Performance</Card.Text>
                <Card.Text style={textStyle}>
                  Includes: Live Band, Sound System
                </Card.Text>
                <Card.Text style={textStyle}>Price: $500</Card.Text>
                <Link
                  to="/conform"
                  onClick={() =>
                    handleBookPackage({
                      title: "Live Band Package",
                      description: "Live Music Performance",
                      includes: "Live Band, Sound System",
                      price: 500,
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
                <Card.Title style={titleStyle}>Magician Package</Card.Title>
                <Card.Text style={textStyle}>Magical Entertainment</Card.Text>
                <Card.Text style={textStyle}>
                  Includes: Magic Show, Props
                </Card.Text>
                <Card.Text style={textStyle}>Price: $300</Card.Text>
                <Link
                  to="/conform"
                  onClick={() =>
                    handleBookPackage({
                      title: "Magician Package",
                      description: "Magical Entertainment",
                      includes: "Magic Show, Props",
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

          <Col>
            <Card className="package-card">
              <Card.Body>
                <Card.Title style={titleStyle}>Comedy Show Package</Card.Title>
                <Card.Text style={textStyle}>
                  Stand-up Comedy Performance
                </Card.Text>
                <Card.Text style={textStyle}>
                  Includes: Comedian, Stage Setup
                </Card.Text>
                <Card.Text style={textStyle}>Price: $400</Card.Text>
                <Link
                  to="/conform"
                  onClick={() =>
                    handleBookPackage({
                      title: "Comedy Show Package",
                      description: "Stand-up Comedy Performance",
                      includes: "Comedian, Stage Setup",
                      price: 400,
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

export default Entertainment;
