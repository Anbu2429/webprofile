import React from "react";
import {
  Container,
  Typography,
  Grid,
  IconButton,
  Box,
  Card,
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Contact = () => {
  return (
    <footer
      id="contact"
      style={{
        background: "linear-gradient(to bottom, #0f172a, #1e293b)",
        color: "white",
        padding: "80px 0",
      }}
    >
      <Container maxWidth="sm" style={{ textAlign: "center" }}>
        {/* Card Glass Background */}
        <Card
          sx={{
            background: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(12px)",
            color: "white",
            padding: 4,
            borderRadius: 4,
            boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          {/* Title */}
          <Typography
            variant="h4"
            fontWeight={700}
            gutterBottom
            sx={{
              background: "linear-gradient(90deg, #60a5fa, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Contact Me
          </Typography>

          <Typography variant="body1" sx={{ mb: 4, fontSize: "1.1rem" }}>
            I'd love to hear from you. Let's collaborate or connect!
          </Typography>

          {/* Social Icons */}
          <Grid container spacing={3} justifyContent="center">
            <Grid item>
              <IconButton
                href="mailto:727823tuad009@skct.edu.in"
                sx={{
                  color: "white",
                  transition: "0.3s",
                  "&:hover": { color: "#60a5fa", transform: "scale(1.15)" },
                }}
              >
                <EmailIcon sx={{ fontSize: 40 }} />
              </IconButton>
            </Grid>

            <Grid item>
              <IconButton
                href="https://www.linkedin.com/in/anbuselvan2429/"
                target="_blank"
                sx={{
                  color: "white",
                  transition: "0.3s",
                  "&:hover": { color: "#60a5fa", transform: "scale(1.15)" },
                }}
              >
                <LinkedInIcon sx={{ fontSize: 40 }} />
              </IconButton>
            </Grid>

            <Grid item>
              <IconButton
                href="https://www.instagram.com/cute_rider_2_49_0_98?igsh=cThzZGxod2Jtandi"
                target="_blank"
                sx={{
                  color: "white",
                  transition: "0.3s",
                  "&:hover": { color: "#60a5fa", transform: "scale(1.15)" },
                }}
              >
                <InstagramIcon sx={{ fontSize: 40 }} />
              </IconButton>
            </Grid>

            <Grid item>
              <IconButton
                href="https://www.facebook.com/anbusundaram.anbusundaram.520"
                target="_blank"
                sx={{
                  color: "white",
                  transition: "0.3s",
                  "&:hover": { color: "#60a5fa", transform: "scale(1.15)" },
                }}
              >
                <FacebookIcon sx={{ fontSize: 40 }} />
              </IconButton>
            </Grid>
          </Grid>

          {/* Footer Text */}
          <Box mt={4}>
            <Typography variant="body2" color="#9ca3af">
              © {new Date().getFullYear()} Anbuselvan — All Rights Reserved.
            </Typography>
          </Box>
        </Card>
      </Container>
    </footer>
  );
};

export default Contact;
