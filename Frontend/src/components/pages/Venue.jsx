import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";

const initialVenues = [
  {
    venueName: "Grand Hall",
    capacity: 500,
    location: "Downtown",
    contactPerson: "John Doe",
    contactEmail: "john@example.com",
    contactPhone: "+1234567890",
  },
  {
    venueName: "Garden Plaza",
    capacity: 300,
    location: "Suburb",
    contactPerson: "Alice Smith",
    contactEmail: "alice@example.com",
    contactPhone: "+1987654321",
  },
  {
    venueName: "Ocean View",
    capacity: 200,
    location: "Coastal Area",
    contactPerson: "Robert Johnson",
    contactEmail: "robert@example.com",
    contactPhone: "+1122334455",
  },
  {
    venueName: "Mountain Lodge",
    capacity: 150,
    location: "Mountain Resort",
    contactPerson: "Emily Brown",
    contactEmail: "emily@example.com",
    contactPhone: "+1441122334",
  },
  {
    venueName: "Riverside Gardens",
    capacity: 250,
    location: "Riverside",
    contactPerson: "Michael Wilson",
    contactEmail: "michael@example.com",
    contactPhone: "+1567890123",
  },
  {
    venueName: "Skyline Ballroom",
    capacity: 400,
    location: "City Center",
    contactPerson: "Emma Taylor",
    contactEmail: "emma@example.com",
    contactPhone: "+1654321987",
  },
  {
    venueName: "Forest Retreat",
    capacity: 100,
    location: "Woodland",
    contactPerson: "William Anderson",
    contactEmail: "william@example.com",
    contactPhone: "+1789054321",
  },
  {
    venueName: "Lakefront Pavilion",
    capacity: 150,
    location: "Lakeside",
    contactPerson: "Olivia Martinez",
    contactEmail: "olivia@example.com",
    contactPhone: "+1876543210",
  },
  {
    venueName: "Sunset Terrace",
    capacity: 200,
    location: "Hilltop",
    contactPerson: "James Lee",
    contactEmail: "james@example.com",
    contactPhone: "+1999888777",
  },
  {
    venueName: "The Manor",
    capacity: 300,
    location: "Countryside",
    contactPerson: "Sophia Brown",
    contactEmail: "sophia@example.com",
    contactPhone: "+1122998877",
  },
];

function VenueTable() {
  const [venues, setVenues] = useState(initialVenues);
  const [open, setOpen] = useState(false);
  const [selectedVenue, setSelectedVenue] = useState(null);
  const [formData, setFormData] = useState({
    venueName: "",
    capacity: "",
    location: "",
    contactPerson: "",
    contactEmail: "",
    contactPhone: "",
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setSelectedVenue(null);
    setFormData({
      venueName: "",
      capacity: "",
      location: "",
      contactPerson: "",
      contactEmail: "",
      contactPhone: "",
    });
  };

  const handleDelete = (index) => {
    setVenues((prevVenues) => prevVenues.filter((venue, i) => i !== index));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedVenue !== null) {
      setVenues((prevVenues) =>
        prevVenues.map((venue, i) =>
          i === selectedVenue ? { ...venue, ...formData } : venue
        )
      );
    } else {
      setVenues((prevVenues) => [...prevVenues, formData]);
    }
    handleClose();
  };

  const handleEdit = (index) => {
    const venue = venues[index];
    setFormData(venue);
    setSelectedVenue(index);
    handleOpen();
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Button
          variant="contained"
          onClick={handleOpen}
          style={{ marginBottom: "20px" }}
        >
          Add Venue
        </Button>
      </Grid>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Venue Name
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Capacity
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Location
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Contact Person
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Contact Email
                  </Typography>

                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Contact Phone
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Actions
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {venues.map((venue, index) => (
                <TableRow key={index}>
                  <TableCell>{venue.venueName}</TableCell>
                  <TableCell>{venue.capacity}</TableCell>
                  <TableCell>{venue.location}</TableCell>
                  <TableCell>{venue.contactPerson}</TableCell>
                  <TableCell>{venue.contactEmail}</TableCell>
                  <TableCell>{venue.contactPhone}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {selectedVenue !== null ? "Edit" : "Add"} Venue
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            {Object.keys(formData).map((key) => (
              <TextField
                key={key}
                label={key.charAt(0).toUpperCase() + key.slice(1)}
                variant="outlined"
                fullWidth
                name={key}
                value={formData[key]}
                onChange={handleChange}
                margin="normal"
              />
            ))}
            <DialogActions>
              <Button type="submit" variant="contained" color="primary">
                {selectedVenue !== null ? "Update" : "Add"}
              </Button>
              <Button onClick={handleClose} variant="contained">
                Cancel
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </Grid>
  );
}

export default VenueTable;
