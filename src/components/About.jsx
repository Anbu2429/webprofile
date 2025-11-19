import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Chip,
  Box,
  Link,
} from "@mui/material";
import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "UI/UX Design",
  "Python",
  "Java",
  "C++",
  "MySQL",
];

const achievements = [
  {
    title: "Pixelpunk - App Design Contest",
    description: `Proud to have participated in the "Pixelpunk-An App Design Contest" organized by Encipher's Club and the Department of IT at Sri Krishna College of Technology, Kovaipudur. 🌟
It was an enriching experience that allowed me to explore creativity and technical skills. Special thanks to Dr. T. Rajesh Kumar and Dr. M. G. Sumithra for their guidance.`,
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    description: `Completed the AWS Cloud Practitioner Essentials course from AWS Training and Certification. 🚀 
Gained strong foundational knowledge in cloud computing and AWS services. Excited to explore more in cloud technologies! ☁️💪`,
  },
  {
    title: "AutoCAD & SketchUp Workshops",
    description: `Participated in hands-on workshops by NIT Trichy and NIT Calicut for AutoCAD 2024 & SketchUp. 
Learned 2D & 3D modeling, constructional drawings, electrical diagrams, and technical design workflows.`,
  },
  {
    title: "MongoDB Learning Journey",
    description: `Deep dive into MongoDB core & advanced capabilities:
Schema design patterns, CRUD operations, aggregation fundamentals, indexing & query optimization, sharding, security, and AI-powered applications.`,
  },
];

const About = () => {
  const [startIndex, setStartIndex] = useState(0);

  // Rotate achievements every 7 seconds (digital board style)
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 2) % achievements.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const visibleCards = [
    achievements[startIndex],
    achievements[(startIndex + 1) % achievements.length],
  ];

  const flipVariants = {
    initial: { rotateX: -90, opacity: 0 },
    animate: {
      rotateX: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
      rotateX: 90,
      opacity: 0,
      transition: { duration: 0.6, ease: "easeIn" },
    },
  };

  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #0f172a, #111827)",
        padding: "80px 0",
      }}
    >
      <Container>
        <Grid container spacing={6} justifyContent="center">
          {/* ABOUT ME + SKILLS */}
          <Grid item xs={12} md={8}>
            <Card
              sx={{
                background: "rgba(31, 41, 55, 0.85)",
                backdropFilter: "blur(12px)",
                color: "white",
                padding: 4,
                borderRadius: "22px",
                boxShadow: "0 12px 32px rgba(0,0,0,0.4)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <CardContent>
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  gutterBottom
                  sx={{
                    background: "linear-gradient(90deg, #60a5fa, #a78bfa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  About Me
                </Typography>

                <Typography variant="body1" paragraph sx={{ fontSize: "1.15rem" }}>
                  Hi, I'm <strong style={{ color: "#93c5fd" }}>Anbuselvan</strong>,
                  a passionate student pursuing{" "}
                  <strong style={{ color: "#a5b4fc" }}>
                    Artificial Intelligence and Data Science
                  </strong>{" "}
                  at Sri Krishna College of Technology, Coimbatore.
                </Typography>

                <Typography variant="body1" paragraph sx={{ fontSize: "1.15rem" }}>
                  I love building innovative tech solutions, exploring machine learning,
                  and developing modern web applications with clean UI and strong
                  functionality. My goal is to become a top-tier frontend or full-stack
                  developer.
                </Typography>

                {/* LINKEDIN */}
                <Typography variant="body2" sx={{ mt: 2 }}>
                  Check out my LinkedIn:{" "}
                  <Link
                    href="https://www.linkedin.com/in/anbuselvan2429/recent-activity/all/"
                    target="_blank"
                    sx={{ color: "#60a5fa" }}
                  >
                    My LinkedIn Activity
                  </Link>
                </Typography>

                {/* SKILLS */}
                <Box mt={4}>
                  <Typography
                    variant="h5"
                    fontWeight="600"
                    gutterBottom
                    sx={{ color: "#93c5fd" }}
                  >
                    Skills
                  </Typography>

                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 1.5,
                      marginTop: 1,
                    }}
                  >
                    {skills.map((skill, index) => (
                      <Chip
                        key={index}
                        label={skill}
                        sx={{
                          padding: "10px",
                          fontSize: "1rem",
                          borderRadius: "12px",
                          backgroundColor: "rgba(255,255,255,0.1)",
                          color: "white",
                          border: "1px solid rgba(255,255,255,0.2)",
                          "&:hover": {
                            backgroundColor: "rgba(255,255,255,0.2)",
                            transform: "scale(1.05)",
                            transition: "0.3s",
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Box>
              </CardContent>
            </Card>

            {/* ACHIEVEMENTS TITLE LINK */}
            <Box mt={6} mb={2}>
              <Link
                href="https://www.linkedin.com/in/anbuselvan2429/recent-activity/all/"
                target="_blank"
                underline="none"
              >
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  sx={{
                    textAlign: "center",
                    background: "linear-gradient(90deg, #60a5fa, #a78bfa)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    cursor: "pointer",
                  }}
                >
                  Achievements, Certifications, Workshops & Learning Journey
                </Typography>
              </Link>
            </Box>

            {/* FLIP ANIMATION SECTION */}
            <Box
              sx={{
                display: "grid",
                gap: 3,
                marginTop: 3,
              }}
            >
              {visibleCards.map((item, idx) => (
                <motion.div
                  key={`${startIndex}-${idx}`}
                  variants={flipVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <Card
                    sx={{
                      background: "rgba(31, 41, 55, 0.85)",
                      backdropFilter: "blur(12px)",
                      color: "white",
                      padding: 3,
                      borderRadius: "20px",
                      border: "1px solid rgba(255,255,255,0.08)",
                      boxShadow: "0 10px 28px rgba(0,0,0,0.3)",
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        gutterBottom
                        sx={{ color: "#60a5fa" }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "#d1d5db", whiteSpace: "pre-line" }}
                      >
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default About;