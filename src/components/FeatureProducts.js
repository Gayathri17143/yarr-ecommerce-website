import * as React from "react";
import PropTypes from "prop-types";

import {
  Box,
  Container,
  Tab,
  Tabs,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import Products1 from "./Products1";
import Products from "./Products";
import Products2 from "./Products2";
import Products3 from "./Products3";
import Products4 from "./Products4";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

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
            variant={isMobile ? "scrollable" : "standard"} // Scrollable tabs for mobile
            scrollButtons={isMobile ? "auto" : false}
            sx={{
              "& .MuiTabs-indicator": {
                backgroundColor: "#f7941e", // Set the indicator background color
              },
            }}
            textColor="#fff" // Ensure the text doesn't interfere
          >
            {tabLabels.map((tab, index) => (
              <Tab
                key={index}
                sx={{
                  border: "1px solid #ccc",
                  margin: isMobile ? "5px" : "10px",
                  background: value === index ? "#f7941e" : "#ecebeb", // Highlight selected tab background
                  color: value === index ? "#fff" : "#000", // Highlight selected tab text color
                  borderRadius: "0% 20%",
                  textTransform: "none",
                  fontWeight: "600!important",
                  fontSize: isMobile ? "14px" : "16px", // Adjust font size for mobile
                  minWidth: isMobile ? "80px" : "auto", // Narrower tabs for mobile
                }}
                label={tab.label}
                {...a11yProps(index)}
              />
            ))}
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Products />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Products1 />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Products2 />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <Products3 />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          <Products4 />
        </CustomTabPanel>
      </Box>
    </Container>
  );
}
