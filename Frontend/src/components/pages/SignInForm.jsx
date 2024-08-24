import * as React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";

const defaultTheme = createTheme();

export default function SignInSide() {
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let isValid = true;
    const newErrors = { ...formErrors };

    if (!formData.email || !formData.email.includes("@")) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    setFormErrors(newErrors);

    if (isValid) {
      console.log("Form is valid, submitting data:", formData);

      // Simulate admin login check (mocked check)
      const isAdmin = formData.email === "admin@example.com";

      // Clear the form after submission
      setFormData({
        email: "",
        password: "",
      });

      // Navigate based on user role
      if (isAdmin) {
        toast.success("You have successfully signed in as Admin.", {
          position: "top-center",
          autoClose: 2000,
          onClose: () => {
            setTimeout(() => {
              navigate("/admin-dashboard");
            }, 1000);
          },
        });
      } else {
        toast.success("You have successfully signed in.", {
          position: "top-center",
          autoClose: 2000,
          onClose: () => {
            setTimeout(() => {
              navigate("/home");
            }, 1000);
          },
        });
      }
    } else {
      console.log("Form has errors");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
        autoFocus
        value={formData.email}
        onChange={handleChange}
        error={!!formErrors.email}
        helperText={formErrors.email}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
        value={formData.password}
        onChange={handleChange}
        error={!!formErrors.password}
        helperText={formErrors.password}
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign In
      </Button>
    </Box>
  );
}
