import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Navbar from "../NavBar";
import Footer from "../Footer";

const Services = () => {
  return (
    <>
      <Navbar />
      <Container
        sx={{
          minHeight: "60vh",
          backgroundColor: "whitesmoke",
          marginBottom: "20px",
        }}
      >
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" gutterBottom>
            Our Services
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 2,
                  textAlign: "left",
                  height: "100%",
                  backgroundColor: "rgb(184, 209, 214)",
                }}
              >
                <Typography variant="h5" gutterBottom>
                  Event Planning
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Our expert event planners will work with you to design and
                  execute every aspect of your event, ensuring that it is
                  seamless and unforgettable.
                </Typography>
                <Typography variant="body2">
                  Whether it's a birthday party, corporate event, wedding, or
                  any other special occasion, we'll handle everything from venue
                  selection and decoration to catering and entertainment.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 2,
                  textAlign: "left",
                  height: "100%",
                  backgroundColor: "rgb(184, 209, 214)",
                }}
              >
                <Typography variant="h5" gutterBottom>
                  Venue Selection
                </Typography>
                <Typography variant="body2" gutterBottom>
                  We'll help you find the perfect venue for your event, whether
                  it's an intimate gathering or a grand celebration, ensuring
                  that it meets all your requirements.
                </Typography>
                <Typography variant="body2">
                  Our team will scout various venues, negotiate contracts, and
                  coordinate logistics to ensure that your event location
                  reflects your vision and accommodates your guests comfortably.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 2,
                  textAlign: "left",
                  height: "100%",
                  backgroundColor: "rgb(184, 209, 214)",
                }}
              >
                <Typography variant="h5" gutterBottom>
                  Catering Services
                </Typography>
                <Typography variant="body2" gutterBottom>
                  From menu planning to food presentation, our catering services
                  will delight your guests with delicious and beautifully
                  crafted cuisine.
                </Typography>
                <Typography variant="body2">
                  We work with experienced chefs and vendors to create
                  customized menus that cater to your preferences and dietary
                  restrictions. Whether you prefer a buffet, plated meal, or
                  cocktail reception, we'll ensure that every bite is memorable.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 2,
                  textAlign: "left",
                  height: "100%",
                  backgroundColor: "rgb(184, 209, 214)",
                }}
              >
                <Typography variant="h5" gutterBottom>
                  Entertainment
                </Typography>
                <Typography variant="body2" gutterBottom>
                  We'll help you select and coordinate entertainment options
                  that will keep your guests engaged and entertained throughout
                  your event.
                </Typography>
                <Typography variant="body2">
                  Whether you're looking for live music, DJs, performers, or
                  interactive activities, we'll work with talented artists and
                  vendors to create a captivating entertainment experience that
                  complements your event theme and atmosphere.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Services;
