import React from "react";
import profileImage from '../profile.jpeg';
import {
  Container,
  Typography,
  Grid,
  Box,
  Button,
  Avatar,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Home = () => {
  return (
    <section
      id="home"
      style={{
        height: "100vh",
        backgroundImage:
          "url('https://kathir.ac.in/wp-content/uploads/2021/12/ai-nuclear-energy-background-future-innovation-disruptive-technology-1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        padding: "20px",
        color: "white",
      }}
    >
      {/* Dark Gradient Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(to bottom right, rgba(15,23,42,0.8), rgba(30,41,59,0.8))",
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
        >
          {/* Profile Image */}
          <Grid item xs={12} md={4} textAlign="center">
            <Avatar
              src={profileImage}
              alt="Profile"
              sx={{
                width: 240,
                height: 240,
                margin: "auto",
                border: "5px solid rgba(255,255,255,0.6)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.6)",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0 12px 45px rgba(0,0,0,0.7)",
                },
              }}
            />
          </Grid>

          {/* Introduction Section */}
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
                padding: { xs: "20px", md: "40px" },
                borderRadius: "20px",
                boxShadow: "0 10px 35px rgba(0,0,0,0.4)",
                border: "1px solid rgba(255,255,255,0.15)",
                animation: "fadeInUp 1s ease-out",
              }}
            >
              <Typography
                variant="h3"
                fontWeight={800}
                gutterBottom
                sx={{
                  background: "linear-gradient(90deg, #60a5fa, #a78bfa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Hi, I'm Anbuselvan
              </Typography>

              <Typography
                variant="h6"
                sx={{ mb: 2, fontWeight: 400, color: "#d1d5db" }}
              >
                A passionate developer exploring AI, ML, and Full-Stack Web Development.
              </Typography>

              <Typography
                variant="body1"
                sx={{ mb: 3, fontWeight: 400, color: "#d1d5db" }}
              >
                I am currently a B-Tech AI & DS student at Sri Krishna College of Technology. I love building innovative projects, experimenting with AI & Data Science concepts, and continuously learning new technologies.
              </Typography>

              <Button
                variant="contained"
                size="large"
                href="#projects"
                sx={{
                  padding: "10px 28px",
                  fontSize: "1rem",
                  borderRadius: "30px",
                  background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
                  ":hover": {
                    background: "linear-gradient(90deg, #2563eb, #7c3aed)",
                  },
                  mb: 2,
                }}
              >
                View My Projects
              </Button>

              <Typography
                variant="body2"
                sx={{ color: "#9ca3af", mt: 1 }}
              >
                Always learning, building, and exploring the world of AI & Web Development.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Scroll Down Arrow */}
      <Box
        sx={{
          position: "absolute",
          bottom: 25,
          left: "50%",
          transform: "translateX(-50%)",
          cursor: "pointer",
          zIndex: 3,
          animation: "bounce 1.5s infinite",
        }}
      >
        <a href="#about" style={{ color: "white" }}>
          <KeyboardArrowDownIcon sx={{ fontSize: 45 }} />
        </a>
      </Box>
    </section>
  );
};

export default Home;
