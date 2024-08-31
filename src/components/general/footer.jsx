import React from "react";
import { Box, Typography, Grid, IconButton } from "@mui/material";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import { Link } from 'react-router-dom';
import XIcon from '@mui/icons-material/X';
const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#1c1b1bba", color: "#fff", p: { xs: 2, sm: 4 } }}>
      <Grid container spacing={4}>
        {/* About Section */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" gutterBottom>
            About Us
          </Typography>
          <Typography variant="body2">
            We are a leading e-commerce platform, providing quality products at the best prices.
          </Typography>
        </Grid>

        {/* Links Section */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6" gutterBottom>
            Quick Links
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Link to="/" style={{ display: "block", marginBottom: "0.5rem", textDecoration: "none", color: "#ffffff" }}>
              Home
            </Link>
            <Link to="/products" style={{ display: "block", marginBottom: "0.5rem", textDecoration: "none", color: "#ffffff" }}>
              Products
            </Link>
            <Link to="/cart" style={{ display: "block", marginBottom: "0.5rem", textDecoration: "none", color: "#ffffff" }}>
              Cart
            </Link>
            <Link to="/aboutus" style={{ display: "block", marginBottom: "0.5rem", textDecoration: "none", color: "#ffffff" }}>
              About Us
            </Link>
            <Link to="/contactus" style={{ display: "block", marginBottom: "0.5rem", textDecoration: "none", color: "#ffffff" }}>
              Contact Us
            </Link>
          </Box>
        </Grid>

        {/* Follow Us Section */}
        <Grid item xs={12} sm={12} md={4}>
          <Typography variant="h6" gutterBottom>
            Follow Us
          </Typography>
          <Box sx={{ display: "flex", justifyContent: { xs: "center", sm: "center" }, gap: 1 }}>
            <IconButton href="https://www.facebook.com/profile.php?id=100070137104593" sx={{ color: "#fff" }}>
              <Facebook />
            </IconButton>
            <IconButton href="https://x.com/viren0210" sx={{ color: "#fff" }}>
              <XIcon />
            </IconButton>
            <IconButton href="https://www.instagram.com/_http.viren/" sx={{ color: "#fff" }}>
              <Instagram />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/viren-kevat/" sx={{ color: "#fff" }}>
              <LinkedIn />
            </IconButton>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ mt: 4, textAlign: "center", borderTop: "1px solid #555", pt: 2 }}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} Team 7.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
