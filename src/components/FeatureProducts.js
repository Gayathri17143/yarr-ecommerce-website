import React from "react";
import { Box, Container, Tab, Tabs, Typography, useTheme, useMediaQuery } from "@mui/material";
import Products from "./Products";
import Products1 from "./Products1";
import Products2 from "./Products2";
import Products3 from "./Products3";
import Products4 from "./Products4";

export default function BasicTabsWithCarousel() {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabLabels = [
    { label: "All", id: 0 },
    { label: "Casting Iron", id: 1 },
    { label: "Kitchen Electronics", id: 2 },
    { label: "Cute Product", id: 3 },
    { label: "Electronics", id: 4 },
  ];

  return (
    <Container>
      <Box sx={{ width: "100%" }}>
        <Typography
          sx={{
            paddingTop: "50px",
            fontSize: isMobile ? "20px" : "27px",
            fontWeight: "600",
            margin: isMobile ? "10px" : "20px",
          }}
        >
          Browse Featured Products
        </Typography>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            variant={isMobile ? "scrollable" : "standard"}
            scrollButtons={isMobile ? "auto" : false}
            sx={{
              "& .MuiTabs-indicator": { backgroundColor: "#f7941e" },
            }}
          >
            {tabLabels.map((tab, index) => (
              <Tab
                key={index}
                sx={{
                  border: "1px solid #ccc",
                  margin: isMobile ? "5px" : "10px",
                  background: value === index ? "#f7941e" : "#ecebeb",
                  color: value === index ? "#fff!important" : "#000",
                  borderRadius: "0% 20%",
                  textTransform: "none",
                  fontWeight: "600!important",
                  fontSize: isMobile ? "14px" : "16px",
                  minWidth: isMobile ? "80px" : "auto",
                }}
                label={tab.label}
              />
            ))}
          </Tabs>
        </Box>
        <Box>
          {value === 0 && <Products />}
          {value === 1 && <Products1 />}
          {value === 2 && <Products2 />}
          {value === 3 && <Products3 />}
          {value === 4 && <Products4 />}
        </Box>
      </Box>
    </Container>
  );
}
