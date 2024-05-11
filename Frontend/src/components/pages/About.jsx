import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Link, Slide } from '@mui/material';
import Navbar from '../NavBar';

const About = () => {
  return (
    <>
      <Navbar/>
      <Container sx={{ minHeight: '80vh', backgroundColor: 'whitesmoke', marginBottom: '20px' }}>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" gutterBottom>
            About Event Elite - Party Event Management
          </Typography>
          <Typography variant="body1" gutterBottom>
            Welcome to Event Elite, your premier destination for organizing various event parties. We are dedicated to creating unforgettable experiences for all your special occasions.
          </Typography>
          <Typography variant="body1" gutterBottom>
            Our mission is to provide exceptional event management services tailored to your preferences and budget. Whether it's a birthday celebration, corporate event, wedding reception, or any other special occasion, we have the expertise to make it extraordinary.
          </Typography>
          <Typography variant="body1" gutterBottom>
            What sets us apart:
          </Typography>
          <ul>
            <li>
              <Typography variant="body1">
                <strong>Packages:</strong> We offer a range packages to suit your specific needs and preferences, ensuring that your event is exactly how you envision it.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <strong>Expert Team:</strong> Our team of experienced event planners, coordinators, and vendors work tirelessly to bring your vision to life, handling every detail with precision and care.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <strong>Seamless Booking:</strong> With our user-friendly online platform, you can easily browse our packages, select your preferences, and securely book your event with just a few clicks.
              </Typography>
            </li>
            <li>
              <Typography variant="body1">
                <strong>Exceptional Service:</strong> Customer satisfaction is our top priority, and we go above and beyond to ensure that your 
                event is stress-free and exceeds your expectations.
              </Typography>
            </li>
          </ul>
          <Typography variant="body1" gutterBottom>
            Thank you for considering Event Elite for your event planning needs. 
            We look forward to creating magical moments that you and your guests will cherish forever.
          </Typography>
          <Typography variant="body1" gutterBottom>
            If you have any questions or would like to discuss your event requirements, please don't hesitate to <Link href="/contact">contact us</Link>.
          </Typography>
        </Box>
        <Box mt={6}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Slide direction="up" in timeout={1000}>
                <Paper elevation={3} sx={{ p: 2, textAlign: 'center', height: '100%', backgroundColor: 'rgb(184, 209, 214)' }}>
                  <Typography variant="h5" gutterBottom>
                    Our Mission
                  </Typography>
                  <Typography variant="body2">
                    At Event Elite, our mission is to create unforgettable experiences and magical moments for all your special occasions. 
                    We are dedicated to providing exceptional service and exceeding your expectations.
                  </Typography>
                </Paper>
              </Slide>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default About;
