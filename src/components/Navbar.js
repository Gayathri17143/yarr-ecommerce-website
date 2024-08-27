import React,{useContext} from "react";
import logo from "../assets/yarr-logo.webp";
import "./Navbar.css";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { CartContext } from "../components/CartContext"; 

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
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

function ResponsiveAppBar() {
  const { cartCount } = useContext(CartContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="logo">
        <a href="/">
          {" "}
          <img
            alt="logo"
            width="100px"
            height="50px"
            src={logo}
            className="log"
          />
        </a>
      </div>
      <div style={{ display: "block", margin: "0 auto", width: "70%" }}>
        <Grid container sx={{ color: "text.primary", margin: "20px" }}>
          <Grid item md={10}>
            <Paper
              component="form"
              sx={{
                p: "1px",
                display: "flex",
                alignItems: "center",
                width: "100%",
                height: "90%",
                background: "#efefef",
                boxShadow: "none",
              }}
            >
              <Button
                id="demo-customized-button"
                aria-controls={open ? "demo-customized-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                sx={{ color: "#000", fontWeight: "600", fontSize: "12px" }}
                disableElevation
                disableFocusRipple
                disableRipple
                disableTouchRipple
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon sx={{ color: "#ccc" }} />}
              >
                All Products
              </Button>
              <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                  "aria-labelledby": "demo-customized-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose} disableRipple>
                  Mobile
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                  Laptop
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={handleClose} disableRipple>
                  Television
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                  Smartwatch
                </MenuItem>
              </StyledMenu>

              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search..."
                inputProps={{ "aria-label": "search" }}
              />

              <IconButton
                color="primary"
                sx={{ p: "10px", background: "green", borderRadius: "0%" }}
                aria-label="directions"
              >
                <SearchIcon sx={{ color: "#fff" }} />
              </IconButton>
            </Paper>
          </Grid>
          <Grid
            item
            md={2}
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PersonOutlineOutlinedIcon />
            <Typography
              sx={{ marginRight: "10px", color: "#000", cursor: "pointer" }}
            >
              Login
            </Typography>
            <ShoppingCartOutlinedIcon />
            <a href="/shopcart" style={{ textDecoration: "none" }}>
              <Typography
                sx={{ marginRight: "10px", cursor: "pointer", color: "#000" }}
              >
                Cart ({cartCount})
              </Typography>
            </a>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
export default ResponsiveAppBar;
