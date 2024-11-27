import React, { useContext } from "react";
import logo from "../assets/Yarr/header/logo.png";
import Coupon from "../assets/Yarr/header/Coupon-code.gif";
// import "./Navbar.css";
import {
  Grid,
  Box,
  IconButton,
  Button,
  Typography,
  Tooltip,
  Avatar,
  Menu,
  MenuItem,
  Paper,
  InputBase,
  Divider,
  Drawer,
  List,
  Collapse,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { styled } from "@mui/material/styles";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { CartContext } from "../components/CartContext";
import LoginModal from "./LoginModal";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const StyledMenu = styled(Menu)(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.text.primary,
    boxShadow:
      "rgba(0, 0, 0, 0.05) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
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
        backgroundColor: theme.palette.action.selectedOpacity,
      },
    },
  },
}));

function ResponsiveAppBar({ handleOpenLoginModal }) {
  const [open, setOpen] = React.useState(false);
  const [loginModalOpen, setLoginModalOpen] = React.useState(false);
  const token = localStorage.getItem("access_token");
  const isLoginned = !!token;
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { cartCount } = useContext(CartContext);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [categoriesOpen, setCategoriesOpen] = React.useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    handleCloseUserMenu();
  };
  const handleCategoriesToggle = () => {
    setCategoriesOpen(!categoriesOpen);
  };
  const handleOpen = () => {
    setLoginModalOpen(true);
  };

  const handleCloseLoginModal = () => {
    setLoginModalOpen(false);
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <Grid
      container
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        background: "#161616",
        padding: "10px",
        position: "sticky",
        top: 0, 
        zIndex: 1000, 
        "@media (max-width: 899px)": {
          justifyContent:"space-between"
        },
      }}
    >
       
      <Box
        sx={{
          backgroundColor: "#171717",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
           
        }}
      >
        <a href="/">
          <img
            alt="logo" 
            height="50px"
            src={logo}
          />
        </a>
      </Box>

      {/* Burger Menu Icon for Mobile */}
      <IconButton
        sx={{
          display: { xs: "flex", md: "none" },
          color: "#fff",
          p: "10px",
         
        }}
        aria-label="menu"
        onClick={handleDrawerToggle}
      >
        <MenuIcon sx={{ fontSize: "1.9rem" }} />
      </IconButton>

      {/* Drawer for Mobile View */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            padding: "3px",
            margin: "10px",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search for products..."
            inputProps={{ "aria-label": "search" }}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon sx={{ color: "#f7941e" }} />
          </IconButton>
        </Paper>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="/">
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>

          {/* Categories with Dropdown */}
          <ListItem disablePadding>
            <ListItemButton onClick={handleCategoriesToggle}>
              <ListItemText primary="Categories" />
              {categoriesOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
          </ListItem>

          {/* Nested Category List */}
          <Collapse in={categoriesOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding sx={{ pl: 4 }}>
              <ListItem disablePadding>
                <ListItemButton component="a" href="/categories/mobile">
                  <ListItemText primary="Mobile" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="/categories/laptop">
                  <ListItemText primary="Laptop" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="/categories/television">
                  <ListItemText primary="Television" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="/categories/smartwatch">
                  <ListItemText primary="Smartwatch" />
                </ListItemButton>
              </ListItem>
            </List>
          </Collapse>

          {isLoginned && (
            <ListItem disablePadding>
              <ListItemButton component="a" href="/shopcart">
                <ListItemText primary={`Cart (${cartCount})`} />
              </ListItemButton>
            </ListItem>
          )}
          {isLoginned ? (
            <>
              <ListItem disablePadding>
                <ListItemButton component="a" href="/profile">
                  <ListItemText primary="My Profile" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="/yourorders">
                  <ListItemText primary="Your Orders" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component="a" href="/wishlist">
                  <ListItemText primary="Wishlist" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={handleLogout}>
                  <ListItemText primary="Logout" />
                </ListItemButton>
              </ListItem>
            </>
          ) : (
            <ListItem disablePadding>
              <ListItemButton onClick={handleOpenLoginModal}>
                <ListItemText primary="Login" />
              </ListItemButton>
            </ListItem>
          )}
        </List>
      </Drawer>

      {/* Search Bar and Categories */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          flexDirection: { xs: "column", sm: "row" },
          marginTop: { xs: "10px", sm: 0 },
        }}
      >
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            background: "#efefef",
            boxShadow: "none",
            mb: { xs: 1, sm: 0 },
             
          }}
        >
          <Button
            id="demo-customized-button"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            sx={{
              color: "#000",
              fontWeight: "600",
              fontSize: "16px",
              padding: "10px",
              textTransform: "none!important",
            }}
            onClick={handleClick}
            endIcon={<KeyboardArrowDownIcon sx={{ color: "#000" }} />}
          >
            All Categories
          </Button>
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{ "aria-labelledby": "demo-customized-button" }}
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
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
            sx={{ ml: 1, flex: 1  }}
            placeholder="Search for products..."
            inputProps={{ "aria-label": "search" }}
          />
          <IconButton sx={{ p: "10px", color: "#f7941e" }} aria-label="search">
            <SearchIcon sx={{ fontSize: "1.9rem" }} />
          </IconButton>
        </Paper>
        <Box sx={{ display: "block",marginLeft:"10px" }}>
          <a href="/coupon">
            <img alt="coupon" width="100%" height="50px" src={Coupon} />
          </a>
        </Box>
      </Grid>
      <Grid
        item
        sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
      >
        {isLoginned && (
          <>
            <ShoppingCartOutlinedIcon sx={{ color: "#eee", m: 1 }} />
            <a href="/shopcart" style={{ textDecoration: "none" }}>
              <Typography sx={{ color: "#eee" }}>Cart ({cartCount})</Typography>
            </a>
          </>
        )}
        <LoginModal open={loginModalOpen} onClose={handleCloseLoginModal} />
        <Box sx={{ flexGrow: 0 }}>
          {isLoginned ? (
            <>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="User Avatar"
                    src="/static/images/avatar/2.jpg"
                    sx={{ backgroundColor: "#f7941e" }}
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu}>
                  <Button href="/profile">My Profile</Button>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Button href="/yourorders">Your Orders</Button>
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Button href="/wishlist">Wishlist</Button>
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <Button>Logout</Button>
                </MenuItem>
              </Menu>
            </>
          ) : (
            <Button
              onClick={handleOpen}
              sx={{
                color: "#f7941e",
                background: "#fff",
                fontSize: "16px",
                cursor: "pointer",
                textTransform: "none",
                fontWeight: "600",
              }}
            >
              <AccountCircleIcon sx={{ mr: 1 }} />
              Login
            </Button>
          )}
        </Box>
      </Grid>
      
    </Grid>
  );
}

export default ResponsiveAppBar;
