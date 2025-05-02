import React, { useState } from "react";
import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  Container,
  Breadcrumbs,
  Link,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const steps = [
  {
    label: " ",
    question:
      "1. What is the main advantage of e-commerce over traditional retail?",
    options: [
      "High prices",
      "24/7 availability",
      "Limited product range",
      "Slower delivery times",
    ],
  },
  {
    label: " ",
    question:
      "2. Which of these is NOT a payment method commonly used in e-commerce?",
    options: [
      "Credit Card",
      "Cash on Delivery",
      "Check by mail",
      "Bank Transfer",
    ],
  },
  {
    label: " ",
    question: "3. What does SEO stand for in digital marketing?",
    options: [
      "Social Engagement Operations",
      "Search Engine Optimization",
      "Sales Enhancement Opportunity",
      "Systematic E-commerce Operations",
    ],
  },
  {
    label: " ",
    question: "4. What does e-commerce stand for?",
    options: [
      "Economic Commerce",
      "Easy Commerce",
      "Electronic Commerce",
      "Environment Commerce",
    ],
  },
  {
    label: " ",
    question: "5. What color is the Yarr logo?",
    options: ["Blue", "Black", "Green", "Red"],
  },
];

export default function HorizontalLinearAlternativeLabelStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSelectedAnswer(""); // Reset answer on each step
    }
  };
  const handleBreadcrumbClick = (event, index) => {
    event.preventDefault();
    console.log(`Breadcrumb clicked. Navigating to step ${index}`); // Debugging output
    setActiveStep(index);
    setSelectedAnswer(""); // Reset answer on each step change
  };
  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="orange"
      href="/"
      onClick={handleClick}
      sx={{fontWeight:"600"}}
    >
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="#000"
      href="/coupon"
      onClick={handleClick}
      sx={{fontWeight:"600"}}
    >
      Coupon Code
    </Link>,
  ];

  return (
    <Container>
      <Box sx={{ width: "100%", marginTop: "20px" }}>
        <Box sx={{ bgcolor: "white", p: 1, borderRadius: 1, mb: 2 }}>
          <Stack spacing={2}>
            <Breadcrumbs separator="\" aria-label="breadcrumb">
              {breadcrumbs}
            </Breadcrumbs>
          </Stack>
        </Box>
        <Stepper
          sx={{ pt: 2, border: "1px solid #ccc", borderRadius: "5px" }}
          activeStep={activeStep}
          alternativeLabel
        >
          {steps.map((step, index) => (
            <Step key={`${step.label}-${index}`}>
              <StepLabel
                sx={{
                  "& .MuiStepLabel-label": {
                    color: index === activeStep ? "white" : "black",
                  },
                  "& .MuiStepIcon-root": {
                    color: index === activeStep ? "black" : "orange",
                  },
                  "& .MuiStepIcon-text": {
                    fill: index === activeStep ? "white" : "black", // changes text color within the icon
                  },
                }}
              >
                {step.label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        <Typography
          sx={{
            color: "#000",
            paddingTop: "30px",
            fontWeight: "600",
            fontSize: "21px",
          }}
        >
          Best of lucky.......
        </Typography>
        <Box
          sx={{ mt: 1, p: 4, borderRadius: "5px", border: "1px solid #ccc" }}
        >
          <Typography variant="h6">{steps[activeStep].question}</Typography>
          <Typography
            sx={{
              color: "#fff",
              background: "#31bff7",
              padding: "12px",
              borderRadius: "5px",
              margin: "10px",
            }}
          >
            {" "}
            Choose one answer that most apply to you
          </Typography>
          <RadioGroup value={selectedAnswer} onChange={handleAnswerChange}>
            {steps[activeStep].options.map((option, index) => (
              <FormControlLabel
                key={`${option}-${index}`}
                value={option}
                control={<Radio />}
                label={option}
              />
            ))}
          </RadioGroup>
        </Box>
        <Box sx={{ m: 2, textAlign: "end" }}>
          <Button
            variant="contained"
            onClick={handleNext}
            sx={{
              color: "#fff!important",
              background: "#f7941e!important",
              borderRadius: "30px",
              textTransform: "none",
              fontSize: "15px",
              paddingLeft: "15px",
            }}
            disabled={!selectedAnswer || activeStep === steps.length - 1}
          >
            {activeStep === steps.length - 1 ? "Finish" : "Next Question"}
            <ArrowRightAltIcon />
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
