import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import "../styles/about.css";

const About = () => {
  return (
    <div id="about" className="about pb-6 pt-6">
      <Container maxWidth="xl">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={5} sx={{ textAlign: "center" }}>
            <Box
              component="img"
              className="about-img glass"
              src="/images/vikash.JPG"
              alt="Vikash Kumar"
              sx={{ maxWidth: { xs: 280, md: 360 }, width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} md={7}>
            <Box className="about-info">
              <Typography variant="h3" sx={{ mb: 3 }}>
                <span className="chonburi-font green-text">Abo</span>ut Me
              </Typography>

              <Typography sx={{ color: "text.secondary", mb: 2 }}>
                I am a full-time coder molded and shaped by Masai School. With
                time coding has become a huge part of my life and I am
                determined to push relevant codes on GitHub every day. I love to
                take on new projects and learn new things as it satisfies me.
              </Typography>

              <Stack direction="row" spacing={1.25} alignItems="center" sx={{ mt: 2 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  Resume
                </Typography>
                <Button
                  href="https://drive.google.com/file/d/1ydOxcH2GInRWH369bBOwlbZ8-Wu8QxKG/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  variant="outlined"
                  size="small"
                  sx={{ borderRadius: 999 }}
                >
                  View
                </Button>
              </Stack>

              <Paper sx={{ mt: 4, p: { xs: 2, md: 3 } }}>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                  <LocalLibraryIcon />
                  <Typography variant="h6">Professional Experience</Typography>
                </Stack>
                <Divider sx={{ mb: 2, borderColor: "rgba(255,255,255,0.12)" }} />

                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  Software Engineer - Frontend, Sivive Enterprise Solutions Private Limited
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
                  01/2022 – present
                </Typography>
                <List dense sx={{ py: 0 }}>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: 99,
                          background:
                            "linear-gradient(90deg, rgba(6,182,212,1), rgba(124,58,237,1))",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText primary="Built a React Website using Material-UI which uses the lazy loading concept to test and provide new features." />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: 99,
                          background:
                            "linear-gradient(90deg, rgba(6,182,212,1), rgba(124,58,237,1))",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText primary="Integrate the API with frontend design." />
                  </ListItem>
                </List>

                <Divider sx={{ my: 2, borderColor: "rgba(255,255,255,0.12)" }} />

                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  Frontend Developer, OneZeroPoint Technologies
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
                  03/2021 – 12/2021
                </Typography>
                <List dense sx={{ py: 0 }}>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: 99,
                          background:
                            "linear-gradient(90deg, rgba(6,182,212,1), rgba(124,58,237,1))",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText primary="Developed multiple reusable components using React, Semantic-UI, and Redux-Saga." />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: 99,
                          background:
                            "linear-gradient(90deg, rgba(6,182,212,1), rgba(124,58,237,1))",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText primary="Design dynamic and browser-compatible pages using React js." />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: 99,
                          background:
                            "linear-gradient(90deg, rgba(6,182,212,1), rgba(124,58,237,1))",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText primary="Integrate the API with the front-end design." />
                  </ListItem>
                </List>
              </Paper>

              <Paper sx={{ mt: 3, p: { xs: 2, md: 3 } }}>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ mb: 1 }}>
                  <LocalLibraryIcon />
                  <Typography variant="h6">Education</Typography>
                </Stack>
                <Divider sx={{ mb: 2, borderColor: "rgba(255,255,255,0.12)" }} />

                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  Masai School
                </Typography>
                <Typography sx={{ color: "text.secondary", mb: 2 }}>
                  Completed (HTML5, CSS, JavaScript, React, Redux.) Training from Masai
                  School, Bangalore.
                </Typography>

                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  B.tech
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Graduated in Information Technology engineering from Haldia institute of
                  Technology in 2020.
                </Typography>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default About;
