import React, { useState } from "react";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import { styled } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import { Button, Typography } from "@mui/material";
import logo from "../assets/yarr-logo.webp";

// Move this OUTSIDE the component
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "#fff",
    border: "1px solid",
    fontSize: 16,
    width: "100%",
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
  },
}));

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubscribe = () => {
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
      alert("Thank you for subscribing!");
    }
  };

  return (
    <div
      style={{
        background: "#171717",
        padding: "30px",
        color: "#fff",
        fontSize: "16px",
        paddingTop: "20px",
                 
      }}
    >
      <div>
        <img
          src={logo}
          alt="logo"
          style={{ marginLeft: "12%", cursor: "pointer" }}
        />
      </div>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "20px",
          textAlign: "center",
          "@media (max-width: 600px)": {
            flexDirection: "column",
            gap: "10px",
          },
        }}
      >
        <Box>
          <ul
            style={{
              display: "flex",
              cursor: "pointer",
              gap: "15px",
              listStyle: "none",
              padding: 0,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {[
              "Home",
              "Blog",
              "Privacy Policy",
              "Terms and Conditions",
              "About",
            ].map((item, idx) => (
              <li
                key={idx}
                style={{ margin: "20px", listStyle: "none", textAlign: "left" }}
              >
                {item}
              </li>
            ))}
          </ul>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "@media (max-width: 600px)": {
              gap: "10px",
              display: "contents",
            },
          }}
        >
          <FormControl variant="standard">
            <InputLabel
              shrink
              htmlFor="bootstrap-input"
              sx={{ color: "#fff!important" }}
            >
              Stay up to date
            </InputLabel>
            <BootstrapInput
              id="bootstrap-input"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error && (
              <Typography variant="caption" color="error" sx={{ mt: 1 }}>
                {error}
              </Typography>
            )}
          </FormControl>

          <Button
            onClick={handleSubscribe}
            sx={{
              margin: "25px 0px 0px 10px",
              background: "#f7941e",
              borderRadius: "5px",
              fontWeight: "600",
              color: "#fff",
              textTransform: "none",
              padding: "10px 20px",
              "&:hover": {
                backgroundColor: "darkgreen",
                color: "#fff",
              },
              "@media (max-width: 600px)": {
                margin: "15px 0 0 0",
              },
            }}
          >
            Subscribe
          </Button>
          {/* {error && (
            <Typography variant="caption" color="error" sx={{ mt: 1 }}>
              {error}
            </Typography>
          )}

          {success && (
            <Typography variant="caption"  sx={{ mt: 1 ,color:"#fff"}}>
              {success}
            </Typography>
          )} */}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
          textAlign: "center",
          marginTop: "20px",
          "@media (max-width: 600px)": {
            gap: "10px",
          },
        }}
      >
        <Typography sx={{ marginRight: { sm: "10%", md: "20%" } }}>
          © 2024 TechConnect Theme. All Rights Reserved.
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: { xs: "40px", sm: "15px" },
            justifyContent: { xs: "start", sm: "center" },
          }}
        >
          <Typography sx={{ cursor: "pointer" }}>Instagram</Typography>
          <Typography sx={{ cursor: "pointer" }}>Facebook</Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
