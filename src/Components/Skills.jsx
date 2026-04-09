import React from "react";
import { Avatar, Box, Container, Grid, Paper, Typography } from "@mui/material";
import "../styles/skills.css";

const skills = [
  { 
    id:"1",
    logo: "/images/html.png",
    name: "Html",
  },
  {
    id:"2",
    logo: "/images/css-3.png",
    name: "Css",
  },
  {
    id:"3",
    logo: "/images/js.png",
    name: "Javascript",
  },
  {
    id:"4",
    logo: "/images/git-logo.png",
    name: "Git",
  },
  { 
    id:"5",
    logo: "/images/bootstrap.png",
    name: "Bootstrap",
  },
  {
    id:"6",
    logo: "/images/react.png",
    name: "React",
  },
  {
    id:"7",
    logo: "/images/redux.png",
    name: "Redux",
  }
];

const Skills = () => {
  return (
    <div id="skills" className="skills-section">
      <Container maxWidth="xl">
        <Box className="heading-section" sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h3">
            <span className="chonburi-font green-text">Ski</span>lls
          </Typography>
        </Box>

        <Grid container spacing={2.25} justifyContent="center">
          {skills.map((skill) => (
            <Grid key={skill.id} item xs={6} sm={4} md={3} lg={2.4}>
              <Paper
                className="skills"
                sx={{
                  p: 2,
                  textAlign: "center",
                  transition: "transform 160ms ease, box-shadow 160ms ease",
                  bgcolor: "background.paper",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 12px 28px rgba(11, 31, 58, 0.1)",
                  },
                }}
              >
                <Avatar
                  src={skill.logo}
                  alt={skill.name}
                  sx={{
                    width: 56,
                    height: 56,
                    mx: "auto",
                    mb: 1.25,
                    bgcolor: "transparent",
                  }}
                  variant="rounded"
                />
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  {skill.name}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export {Skills};
