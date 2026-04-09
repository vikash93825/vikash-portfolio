import React from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import "../styles/home.css";
import ThreeBackground from "./ThreeBackground";


const Home = () => {
  
  return (
    <Box
      id="home"
      className="fix"
      sx={{
        minHeight: "100vh",
        pt: { xs: 10, md: 12 },
      }}
    >
      <ThreeBackground />
      <div className="bg-image">
        <Container maxWidth="xl" className="home-page-intro">
          <Grid container className="home-row" spacing={3}>
            <Grid item xs={12} md={8}>
              <Box className="intro-section glass hero-card" sx={{ p: { xs: 2.5, md: 4 } }}>
                <Typography variant="h6" sx={{ mb: 3, color: "text.secondary" }}>
                  Welcome to my portfolio
                </Typography>
                <Typography variant="h2" sx={{ mb: 2, lineHeight: 1.1 }}>
                  Hi, I&apos;m{" "}
                  <span className="chonburi-font green-text">Vikash</span> Kumar
                </Typography>
                <Typography variant="h5" sx={{ mb: 0, color: "text.secondary" }}>
                  Frontend Developer building fast, polished web experiences
                </Typography>

                <Stack direction="row" spacing={1.5} sx={{ mt: 3, flexWrap: "wrap" }}>
                  <Button
                    href="#projects"
                    variant="contained"
                    sx={{
                      borderRadius: 999,
                      px: 2.25,
                      py: 1.1,
                      background:
                        "linear-gradient(90deg, rgba(6, 182, 212, 1), rgba(124, 58, 237, 1))",
                      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.25)",
                      "&:hover": {
                        filter: "brightness(1.05)",
                        background:
                          "linear-gradient(90deg, rgba(6, 182, 212, 1), rgba(124, 58, 237, 1))",
                      },
                    }}
                  >
                    View Projects
                  </Button>
                  <Button
                    href="#contact"
                    variant="outlined"
                    sx={{
                      borderRadius: 999,
                      px: 2.25,
                      py: 1.1,
                      borderColor: "rgba(255,255,255,0.18)",
                      background: "rgba(255, 255, 255, 0.03)",
                      "&:hover": { borderColor: "rgba(255,255,255,0.35)" },
                    }}
                  >
                    Contact
                  </Button>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Box>
  );
};

export {Home};
