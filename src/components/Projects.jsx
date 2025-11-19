import React, { useState } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Modal,
  Box,
  Button,
} from "@mui/material";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: "project1",
      name: "Toy Store",
      description:
        "A basic e-commerce platform for toys with a seamless shopping experience. Built using React.",
      link: "https://github.com/Anbu2429/ProjectToy",
    },
    {
      id: "project2",
      name: "Weather Report",
      description:
        "A basic weather forecasting application created using Python.",
      link: "https://github.com/Anbu2429/Weather",
    },
    {
      id: "project3",
      name: "Toy Store - REST API",
      description:
        "A reactive project based on REST API. This is an ongoing project.",
      link: "https://github.com/iamneo-production/6790f512-37ea-4ab7-b830-d013c047fb92-ff820c0d-bd97-4537-97f1-35afc30b98ec/tree/main",
    },
    {
      id: "project4",
      name: "My Website",
      description:
        "A personal website for my family built using React.js and deployed on Netlify.",
      link: "https://ag2429.netlify.app/",
    },
    {
      id: "project5",
      name: "Education UI/UX",
      description:
        "A responsive UI/UX design project created in Figma with a team.",
      link: "https://www.figma.com/proto/wiljGDznMfFdUGTjovOnOF/Think_Innova",
    },
  ];

  // Right → Left scrolling animation
  const marqueeStyle = {
    display: "inline-block",
    whiteSpace: "nowrap",
    animation: "marquee 8s linear infinite",
  };

  return (
    <>
      {/* Inject marquee keyframes */}
      <style>
        {`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        `}
      </style>

      <section
        id="projects"
        style={{
          minHeight: "100vh",
          padding: "80px 20px",
          background: "linear-gradient(to bottom right, #0f172a, #1e293b)",
          color: "white",
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h3"
            fontWeight={800}
            align="center"
            gutterBottom
            sx={{
              mb: 6,
              background: "linear-gradient(90deg, #60a5fa, #a78bfa)",
              WebkitTextFillColor: "transparent",
              WebkitBackgroundClip: "text",
            }}
          >
            My Projects
          </Typography>

          {/* Grid Cards */}
          <Grid container spacing={4}>
            {projects.map((project) => (
              <Grid item xs={12} sm={6} md={4} key={project.id}>
                <Card
                  sx={{
                    background: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(12px)",
                    borderRadius: "16px",
                    padding: "10px",
                    cursor: "pointer",
                    border: "1px solid rgba(255,255,255,0.15)",
                    height: "200px",
                    color: "white",
                    transition: "0.35s",
                    overflow: "hidden",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.4)",
                    ":hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 12px 35px rgba(0,0,0,0.55)",
                      background: "rgba(255,255,255,0.15)",
                    },
                  }}
                  onClick={() => setSelectedProject(project)}
                >
                  <CardContent sx={{ overflow: "hidden" }}>

                    {/* Title — FIXED */}
                    <Typography
                      variant="h5"
                      fontWeight={700}
                      sx={{
                        mb: 1,
                        width: "100%",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {project.name}
                    </Typography>

                    {/* Description — MARQUEE */}
                    <Typography
                      variant="body2"
                      sx={{
                        opacity: 0.9,
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        width: "100%",
                      }}
                    >
                      <span style={marqueeStyle}>
                        {project.description}
                      </span>
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Project Modal */}
          <Modal
            open={!!selectedProject}
            onClose={() => setSelectedProject(null)}
          >
            <Box
              sx={{
                width: "90%",
                maxWidth: 520,
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(14px)",
                padding: "35px",
                borderRadius: "18px",
                boxShadow: "0 15px 45px rgba(0,0,0,0.6)",
                border: "1px solid rgba(255,255,255,0.2)",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "white",
              }}
            >
              {selectedProject && (
                <>
                  <Typography variant="h4" fontWeight={800} gutterBottom>
                    {selectedProject.name}
                  </Typography>

                  <Typography variant="body1" sx={{ mb: 3 }}>
                    {selectedProject.description}
                  </Typography>

                  <Button
                    variant="contained"
                    href={selectedProject.link}
                    target="_blank"
                    fullWidth
                    sx={{
                      mb: 2,
                      padding: "10px",
                      background: "linear-gradient(90deg,#3b82f6,#8b5cf6)",
                      borderRadius: "30px",
                      fontSize: "1rem",
                    }}
                  >
                    View Project
                  </Button>

                  <Button
                    variant="outlined"
                    fullWidth
                    sx={{
                      color: "white",
                      borderColor: "white",
                      ":hover": { borderColor: "#a5b4fc" },
                    }}
                    onClick={() => setSelectedProject(null)}
                  >
                    Close
                  </Button>
                </>
              )}
            </Box>
          </Modal>
        </Container>
      </section>
    </>
  );
};

export default Projects;
