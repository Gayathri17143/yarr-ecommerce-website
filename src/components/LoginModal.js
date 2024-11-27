// src/components/LoginModal.js
import axios from "axios";
import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
 
  
import ForgotPasswordModal from './ForgotPasswordModal';
import SignupModal from './SignupModal';
import { TextField, Button, Container, Typography, Link } from "@mui/material";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const LoginModal = ({ open, onClose, closeDialog }) => {
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  const handleForgotPasswordOpen = () => {
    setForgotPasswordOpen(true);
    onClose();
  };

  const handleSignupOpen = () => {
    setSignupOpen(true);
    onClose();
  };
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        " https://api.escuelajs.co/api/v1/auth/login",
        formData
      );
      console.log(response.data); // handle success response
      const { access_token } = response.data; // Extract access token from response
      localStorage.setItem("access_token", access_token);
      if (typeof closeDialog === 'function') {
        closeDialog(); // Close the dialog after successful login
    }
    window.location.reload();
    } catch (error) {
      console.error(error); // handle error response
    }
  };

  return (
    <div>
      <Modal open={open} onClose={onClose}>
        <Box sx={style}>
        <Typography variant="h5">Login</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />

        <Typography align="right" mt={2} mb={2}>
          <Link onClick={handleForgotPasswordOpen}>Forget Password?</Link>
        </Typography>

        <Button type="submit" variant="contained" color="primary" fullWidth>
          Login
        </Button>

        <Typography mt={2}>
          Don't have an account?{" "}
          <Link href="#" onClick={handleSignupOpen} >
            Register
          </Link>
        </Typography>
      </form>
        </Box>
      </Modal>
      <ForgotPasswordModal open={forgotPasswordOpen} onClose={() => setForgotPasswordOpen(false)} />
      <SignupModal open={signupOpen} onClose={() => setSignupOpen(false)} />
    </div>
  );
};

export default LoginModal;
