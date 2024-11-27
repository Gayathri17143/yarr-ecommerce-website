import React, { useState, useEffect, useRef } from "react";
import "./Details.css";

import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Container, Link, Typography, Box } from "@mui/material";
import { FaStar } from "react-icons/fa";
import fan from "../assets/fan.png";
import { Description } from "@mui/icons-material";

const product = {
  id: 1,
  title: "Yarr Mini Kitchen Fan (Black Gold)",
  img: fan,
  Price: 3499,
  desc: "This unique tower fan is a game changer in the world of Kitchen cooling. With a high-powered 90-watt motor and a high 2200 RPM, it provides a customized air blower with boosted air flow and 25% enhanced air circulation. The premium quality plastic body ensures durability and longevity. With 3 speed options (LOW | MEDIUM | HIGH), you can adjust the fan according to your needs.",
  images: [
    "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=1600,height=1600,quality=75/product/Yarr-mini-kitchen-fan-black-gold-COlor-Front-View-Image.png",
    "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=1600,height=1600,quality=75/product/Yarr-mini-kitchen-fan-black-gold-Right-View.png",
    "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=1600,height=1600,quality=75/product/Yarr-mini-kitchen-fan-black-gold-Right-View.png",
    "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=1600,height=1600,quality=75/product/Yarr-mini-kitchen-fan-black-gold-Back-View.png",
  ],
  emi: "Standard EMI starts from ₹ 180/month for RBL Bank",
  brand: "YAAR",
  subtitle: "KITCHEN UTILITY",
  rating: 4.2,
  reviews: 6,
  quantity: 1,
  discountedPrice: 2999,
  // discount: "43% OFF",
  main_title: "Description",
  description_title:
    "Keep your Kitchen Cool And Comforatable With Our High Speed Kitchen Portable Tower Fan!",
  // colors: [
  //   { id: 1, name: "black", color: "black", url: "/Details/id" },
  //   { id: 2, name: "blue", color: "blue", url: "/Details/id" },
  //   { id: 3, name: "white", color: "white", url: "/ProductColors" },
  //   { id: 4, name: "gray", color: "gray", url: "/ProductColors" },
  // ],
  // variants: [
  //   {
  //     id: 1,

  //     storage: "64GB",
  //   },
  //   {
  //     id: 2,

  //     storage: "128GB",
  //   },
  //   {
  //     id: 3,

  //     storage: "256GB",
  //   },
  // ],

  features: [
    {
      title: "Powerful and Efficient Cooling",
      details: [
        "High-powered 90-watt motor with 2200 RPM for boosted air flow and 25% enhanced air circulation",
        "Customizable 3-speed settings (LOW, MEDIUM, HIGH) to suit your needs",
        "Advanced aerodynamic design for maximum airflow and circulation",
        "High-velocity air stream for effective cooling and ventilation",
        "Increased airflow rate for faster cooling and comfort",
        "Optimized fan blades for reduced energy consumption and noise",
        "Intelligent motor control for efficient and silent operation",
      ],
    },
    {
      title: "Smart Air Circulation Technology",
      details: [
        "Unique Venturi Effect-based mechanism for efficient air circulation",
        "120° air circulation with an impressive air throw of up to 15 feet",
        "Wide-angle air distribution for uniform cooling and ventilation",
        "Advanced airflow dynamics for reduced dead spots and improved coverage",
        "Intelligent air circulation algorithm for optimized performance",
        "Automatic air flow adjustment based on temperature and humidity",
        "Smart sensors for detecting and responding to changes in the environment",
        "Advanced air purification and filtration system (if applicable)",
      ],
    },
    {
      title: "Convenience and Portability",
      details: [
        "Whisper-quiet operation at 50 dB, perfect for any room",
        "Fast USB mobile charging port for convenient device charging",
        "Lightweight and easy to handle, making it portable for use in any room or outdoors",
        "Compact and sleek design for easy placement and storage",
        "Ergonomic handle for comfortable grip and carrying",
        "Cordless design for unrestricted movement for use",
        "Rechargeable battery with long-lasting life",
        "Easy to use controls and intuitive interface",
        "Space-saving design for convenient storage and transport",
      ],
    },
  ],
};

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

const Details = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [width, setWidth] = useState(0);
  const [start, setStart] = useState(0);
  const [change, setChange] = useState(9);
  const [selectedColor, setSelectedColor] = useState("Select Color");
  const slideRef = useRef();
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };
  useEffect(() => {
    if (!slideRef.current) return;
    const scrollWidth = slideRef.current.scrollWidth;
    const childrenElementCount = slideRef.current.childrenElementCount;
    const width = scrollWidth / childrenElementCount;
    setWidth(width);
  }, []);

  function plusSlides(n) {
    setSlideIndex((prev) => prev + n);
    slideShow(slideIndex + n);
  }

  function slideShow(n) {
    if (n > product.images.length) {
      setSlideIndex(1);
    }
    if (n < 1) {
      setSlideIndex(product.images.length);
    }
  }

  //drag

  function dragStart(e) {
    setStart(e.clientX);
  }
  function dragOver(e) {
    let touch = e.clientX;
    setChange(start - touch);
  }
  function dragEnd(e) {
    //drag left chang >0
    //drag right chang <0
    if (change > 0) {
      slideRef.current.scrollLeft += width;
    } else {
      slideRef.current.scrollLeft -= width;
    }
  }

  useEffect(() => {
    if (!slideRef.current || !width) return;
    let numOfThumb = Math.round(slideRef.current.offsetWidth / width);
    slideRef.current.scrollLeft =
      slideIndex > numOfThumb ? (slideIndex - 1) * width : 0;
  }, [width, slideIndex]);

  //add to cart

  //  const [cartsVisibilty, setCartVisible] = useState(false);
  const [productsInCart] = useState(
    JSON.parse(localStorage.getItem("shopping-cart")) || []
  );
  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(productsInCart));
  }, [productsInCart]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleColorSelect = (color) => {
    setSelectedColor(color);
    handleClose();
  };
  return (
    <React.Fragment>
      <Container>
        <section className="product-detail">
          <div className="product-page-img">
            <div className="big-images">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className="mySlides"
                  style={{
                    display: index + 1 === slideIndex ? "block" : "none",
                  }}
                >
                  <div className="numbertext">
                    {index + 1}/{product.images.length}
                  </div>
                  <img src={image} alt={`Product ${index + 1}`} />
                </div>
              ))}
              <a href="#!" className="prev" onClick={() => plusSlides(-1)}>
                &#10094;
              </a>
              <a href="#!" className="next" onClick={() => plusSlides(1)}>
                &#10095;
              </a>
            </div>
            <div
              className="slider-img"
              draggable={true}
              ref={slideRef}
              onDragStart={dragStart}
              onDragOver={dragOver}
              onDragEnd={dragEnd}
            >
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className={`slider-box ${
                    index + 1 === slideIndex ? "active" : ""
                  }`}
                  onClick={() => setSlideIndex(index + 1)}
                >
                  <img src={image} alt={`Thumbnail ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
          <div className="product-page-details">
            <p
              className=" "
              style={{
                textAlign: "left",
                marginBottom: "0px",
                fontSize: "13px",
                fontWeight: "600",
                opacity: "0.7",
              }}
            >
              {product.subtitle}
            </p>
            <h3
              style={{ textAlign: "left", marginTop: "10px", fontSize: "23px" }}
            >
              {product.title}
            </h3>
            <p className="product-pri">
              <del>₹{product.Price}</del>₹
              {Math.round(product.Price - product.discountedPrice / 100)}
              {/* <button className="dis"> {product.discount}</button> */}
            </p>
            <p style={{ textAlign: "left" }}>
              {product.emi}{" "}
              <Link to="/" sx={{ textDecoration: "none" }}>
                <span> View Plans </span>
              </Link>
            </p>
            <p style={{ textAlign: "left" }}>BRAND {product.brand}</p>

            <div style={{ textAlign: "left" }}>
              <div className="rating">
                {Array.from({ length: 5 }, (v, i) => (
                  <FaStar
                    key={i}
                    color={
                      i < Math.round(product.rating) ? "#ffc107" : "#e4e5e9"
                    }
                  />
                ))}
                <span> ({product.reviews} Customer reviews)</span>
              </div>
            </div>
            <div style={{ textAlign: "left" }}>
              DESCRIPTION:
              <p className="small-desc">{product.desc}</p>
            </div>

            <div>
              <Typography
                variant="body1"
                sx={{ color: "#000", textAlign: "left", mb: 1 }}
              >
                COLOR
              </Typography>
              <Button
                id="color-select-button"
                aria-controls={open ? "color-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                sx={{
                  border: "1px solid #ccc",
                  color: "#000",
                  width: "100%",
                  justifyContent: "space-between",
                }}
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon sx={{ marginLeft: "auto" }} />}
              >
                {selectedColor}
              </Button>
              <Menu
                id="color-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "color-select-button",
                }}
              >
                {["Black", "White", "Blue", "Grey"].map((color) => (
                  <MenuItem
                    key={color}
                    onClick={() => handleColorSelect(color)}
                  >
                    {color}
                  </MenuItem>
                ))}
              </Menu>
            </div>
            <Box display="flex" alignItems="center" gap={2} sx={{ mt: 2 }}>
              <Button
                variant="outlined"
                onClick={handleDecrement}
                disabled={quantity === 1} // Optional: disable button if quantity is 1
              >
                -
              </Button>
              <Typography variant="body1">{quantity}</Typography>
              <Button variant="outlined" onClick={handleIncrement}>
                +
              </Button>
            </Box>
            <div className="cart-btns">
              <a href="/ " className="  buy-now">
                Shop Now
              </a>
            </div>
          </div>
        </section>
        <div>
          <h3 className="center-head">{product.main_title}</h3>
          <h5 className="desc-title">{product.description_title}</h5>
        </div>
        <section className="product-features">
          {product.features.map((feature, index) => (
            <div
              key={index}
              style={{
                // border: "1px solid #ccc",
                padding: "20px",
                // margin: "20px",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "600" }}>
                {feature.title}
              </Typography>
              <ul>
                {feature.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </Container>
    </React.Fragment>
  );
};

export default Details;
