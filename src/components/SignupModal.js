// src/components/SignupModal.js
import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import axios from "axios"; 
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';   

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

const SignupModal = ({ open, onClose ,switchForm}) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    mobilenumber: "",
    avatar: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        " https://api.escuelajs.co/api/v1/users/",
        formData
      );
      console.log(response.data);
      onClose();
    //   Navigate("efehf");

      // localStorage.setItem("access_token", response.data.access_token); // handle success response
    } catch (error) {
      console.error(error); // handle error response
    }
  };
  return (
    <Container maxWidth="xs"> 
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
      
      <Typography variant="h5">Register</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="UserName"
          name="name"
          type="text"
          fullWidth
          margin="normal"
          value={formData.name}
          onChange={handleChange}
        />
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
        <TextField
          label="Mobile Number"
          // name="number"
          type="number"
          value={formData.number}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          type="url"
          fullWidth
          margin="normal"
          label="Avatar URL"
          name="avatar"
          value={formData.avatar}
          onChange={handleChange}
        />
        <Button
          sx={{ marginTop: 2 }}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Register
        </Button>
        {/* <Typography mt={2}>
          Already have an account?{" "}
          <Link href="#" onClick={() => switchForm("login")}>
            Login
          </Link>
        </Typography> */}
      </form>
   
      </Box>
    </Modal>
    </Container>
  );
};

export default SignupModal;
