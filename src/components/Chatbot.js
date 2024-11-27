import React, { useState } from "react";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Paper,
  TextField,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Chat from "../assets/Yarr/Chat-bot-animation.gif";
import logo from "../assets/Yarr/header/logo.png";
const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: "user", text: input }]);
      setInput("");
      // Respond based on user input (optional enhancement)
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: "I'm sorry, I don't have an answer for that." },
      ]);
    }
  };
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 5,
        }}
      >
        {/* Chatbot Image */}
        <img
          src={Chat} // Replace with your chatbot image URL
          alt="Chatbot"
          onClick={handleClickOpen}
          style={{ cursor: "pointer",position:"fixed",bottom:"20px",right:"20px",zIndex:"1000",width:"10%" }}
        />
      </Box>
      {/* Popup Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between" 
            }}
          >
            <img
              src={logo} // Replace with your navbar image URL
              alt="Navbar"
              style={{ height: "40px" }} // Adjust height as needed
            />
            <IconButton onClick={handleClose} sx={{ color: "gray" }}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <Box sx={{ maxWidth: 400, margin: "auto", mt: 1 }}>
          <Paper
            elevation={3}
            sx={{ padding: 2, height: 400,width:360, overflowY: "visible" }}
          >
            {messages.map((message, index) => (
              <Box
                key={index}
                sx={{
                  textAlign: message.sender === "bot" ? "left" : "right",
                  mb: 1,
                }}
              >
                <Box
                  sx={{
                    display: "inline-block",
                    padding: 1,
                    borderRadius: 2,
                    backgroundColor:
                      message.sender === "bot" ? "#e0e0e0" : "#007bff",
                    color: message.sender === "user" ? "#fff" : "#000",
                  }}
                >
                  {message.text}
                </Box>
              </Box>
            ))}
          </Paper>
          <Box sx={{ display: "flex", m: 2 }}>
            <TextField
              variant="outlined"
              size="small"
              fullWidth
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <Button
              variant="contained"
              onClick={handleSendMessage}
              sx={{ ml: 1 }}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
};

export default Chatbot;
