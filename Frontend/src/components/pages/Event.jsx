import React, { useState, useEffect } from "react";
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
  Typography,
} from "@mui/material";
import { getAllEvents, createEvent, updateEvent, deleteEvent } from "../services/Api";

function EventTable() {
  const [events, setEvents] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formData, setFormData] = useState({
    eventName: "",
    imageUrl: "",
  });

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const data = await getAllEvents();
      setEvents(data);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setSelectedEvent(null);
    setFormData({
      eventName: "",
      imageUrl: "",
    });
  };

  const handleDelete = async (index) => {
    try {
      await deleteEvent(events[index].id);
      setEvents((prevEvents) => prevEvents.filter((event, i) => i !== index));
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (selectedEvent !== null) {
        await updateEvent(events[selectedEvent].id, formData); 
        setEvents((prevEvents) =>
          prevEvents.map((event, i) =>
            i === selectedEvent ? { ...event, ...formData } : event
          )
        );
      } else {
        await createEvent(formData);
        setEvents((prevEvents) => [...prevEvents, formData]); 
      }
      handleClose();
    } catch (error) {
      console.error("Error submitting event:", error);
    }
  };

  const handleEdit = (index) => {
    const event = events[index];
    setFormData(event);
    setSelectedEvent(index);
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
          Add Event
        </Button>
      </Grid>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Event Id
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Event Name
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Event Url
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Action
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {events.map((event, index) => (
                <TableRow key={index}>
                  <TableCell>{event.id}</TableCell>
                  <TableCell>{event.eventName}</TableCell>
                  <TableCell>{event.imageUrl}</TableCell>
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
          {selectedEvent !== null ? "Edit" : "Add"} Event
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
                {selectedEvent !== null ? "Update" : "Add"}
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

export default EventTable;
