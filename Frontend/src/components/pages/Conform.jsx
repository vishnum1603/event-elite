import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../NavBar";
import Footer from "../Footer";
import { PackageContext } from "../shared/PackageContext";
import img from "../../assets/images/conform.jpg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CheckCircle, Cancel } from "@mui/icons-material";
import "../../assets/css/Confirmation.css";

const Conform = () => {
  const location = useLocation();
  const { packageData } = useContext(PackageContext);
  const [selectedDate, setSelectedDate] = useState(null);
  const [availability, setAvailability] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const isAvailable = Math.random() < 0.5;
    setAvailability(isAvailable);
  };

  if (!packageData) {
    return (
      <div>
        <Navbar />
        <div>
          <h2>Error: Package Data Not Found</h2>
          <p>Please navigate back to select a package.</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <div className="confirmation-container">
        <div className="image-container">
          <img
            src={img}
            alt={packageData.title}
            className="confirmation-image"
          />
        </div>
        <div className="details-container">
          <h2 className="title">{packageData.title}</h2>
          <p className="text">Description: {packageData.description}</p>
          <p className="text">Includes: {packageData.includes}</p>
          <p className="text">Price: {packageData.price}</p>
          <div className="date-picker-container">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              placeholderText="Select a date"
            />
            {availability !== null && (
              <span className="availability-icon">
                {availability ? (
                  <CheckCircle style={{ color: "green" }} />
                ) : (
                  <Cancel style={{ color: "red" }} />
                )}
              </span>
            )}
          </div>
          <div className="button-container">
            <button className="next-button">Proceed to Pay</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Conform;
