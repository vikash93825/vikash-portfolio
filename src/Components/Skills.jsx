import React from "react";
import { Avatar, Box, Container, Grid, Paper, Typography } from "@mui/material";
import { portfolioSkills } from "../data/portfolioSkills";
import "../styles/skills.css";

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
          {portfolioSkills.map((skill) => (
            <Grid key={skill.id} item xs={6} sm={4} md={3} lg={2}>
              <Paper
                className="skills"
                sx={{
                  p: 2,
                  textAlign: "center",
                  transition: "transform 160ms ease, box-shadow 160ms ease",
                  bgcolor: "background.paper",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 12px 36px rgba(0, 0, 0, 0.45)",
                    borderColor: "rgba(45, 212, 191, 0.35)",
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
