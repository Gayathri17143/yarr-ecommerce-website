import React from "react";
import {
  Box,
  Avatar,
  Typography,
  Button,
  Grid,
  Paper,
  Divider,
  Container,
  Stack,
} from "@mui/material";

const ProfilePage = () => {
  const user = {
    name: "John",
    email: "john@gmail.com",
    phone: "+91 9876543210",
    address: "123, Main Street, Chennai, India",
    avatarUrl: "https://i.pravatar.cc/150?img=3",
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Paper elevation={4} sx={{ borderRadius: 4, overflow: "hidden" }}>
        <Grid container>
          {/* Sidebar */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              bgcolor: "#5e95b5",
              color: "white",
              p: 4,
              textAlign: "center",
            }}
          >
            <Avatar
              src={user.avatarUrl}
              alt={user.name}
              sx={{ width: 100, height: 100, mx: "auto", mb: 2 }}
            />
            <Typography variant="h6" fontWeight={600}>
              {user.name}
            </Typography>
            {/* <Typography variant="body2" sx={{ mb: 2 }}>
              Member since 2023
            </Typography> */}
            <Divider sx={{ bgcolor: "white", my: 2 }} />
            <Stack spacing={2}>
              <Button variant="contained" color="warning" fullWidth>
                Edit Profile
              </Button>
              <Button variant="outlined" color="inherit" fullWidth>
                Logout
              </Button>
            </Stack>
          </Grid>

          {/* Details */}
          <Grid item xs={12} md={8} sx={{ p: 4 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Profile Details
            </Typography>
            <Divider sx={{ mb: 3 }} />

            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2" color="text.secondary">
                Email
              </Typography>
              <Typography variant="body1">{user.email}</Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
              <Typography variant="subtitle2" color="text.secondary">
                Phone
              </Typography>
              <Typography variant="body1">{user.phone}</Typography>
            </Box>

            <Box>
              <Typography variant="subtitle2" color="text.secondary">
                Address
              </Typography>
              <Typography variant="body1">{user.address}</Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default ProfilePage;
