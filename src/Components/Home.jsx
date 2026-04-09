import React from "react";
import { Box, Button, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import { themeTokens } from "../themeTokens";
import "../styles/home.css";

const Home = () => {
  return (
    <Box
      id="home"
      className="fix"
      sx={{
        minHeight: "100vh",
        pt: { xs: 10, md: 12 },
        background: `linear-gradient(165deg, ${themeTokens.cyanPale} 0%, ${themeTokens.bg} 38%, ${themeTokens.bgAlt} 100%)`,
      }}
    >
      <div className="bg-image">
        <Container maxWidth="xl" className="home-page-intro">
          <Grid container className="home-row" spacing={3}>
            <Grid item xs={12} md={8}>
              <Paper
                className="intro-section hero-card"
                elevation={0}
                sx={{
                  p: { xs: 2.5, md: 4 },
                  maxWidth: 820,
                  border: `1px solid ${themeTokens.border}`,
                  boxShadow: "0 16px 48px rgba(11, 31, 58, 0.08)",
                  bgcolor: "rgba(255,255,255,0.92)",
                }}
              >
                <Typography variant="h6" sx={{ mb: 3, color: "text.secondary" }}>
                  Welcome to my portfolio
                </Typography>
                <Typography variant="h2" sx={{ mb: 2, lineHeight: 1.1, color: "text.primary" }}>
                  Hi, I&apos;m{" "}
                  <span className="chonburi-font green-text">Vikash</span> Kumar
                </Typography>
                <Typography variant="h5" sx={{ mb: 0, color: "text.secondary" }}>
                  Frontend Developer building fast, polished web experiences
                </Typography>

                <Stack direction="row" spacing={1.5} sx={{ mt: 3, flexWrap: "wrap" }}>
                  <Button href="#projects" variant="contained" color="primary" size="large">
                    View Projects
                  </Button>
                  <Button href="#contact" variant="outlined" color="secondary" size="large">
                    Contact
                  </Button>
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Box>
  );
};

export { Home };
