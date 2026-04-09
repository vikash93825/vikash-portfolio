import React from "react";
import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import styles from "../styles/achieved.module.css";
import GitHubCalendar from 'react-github-calendar';

const Achieved = () => {
  return (
    <div key="profi" id="achieved" className={styles.achieved}>
      <Container maxWidth="xl" sx={{ pt: 6, pb: 6 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography className={styles.pro} variant="h3">
            <span className="chonburi-font green-text">Profic</span>iencies
          </Typography>
        </Box>

        <Grid container spacing={2.5} sx={{ mb: 5 }}>
          {[
            {
              img: "images/reactApp.png",
              alt: "react_app",
              title: "React Apps",
              desc: "When it comes to react apps I have the strength of Atlas",
            },
            {
              img: "images/frontEnd.png",
              alt: "front-end",
              title: "Frontend",
              desc: "Now just that I can even host the show",
            },
            {
              img: "images/dataStructure.png",
              alt: "ds",
              title: "Data Structure",
              desc: "Putting the right blocks in the right place is just my thing",
            },
            {
              img: "images/backEnd.png",
              alt: "back-end",
              title: "Backend",
              desc: "I am the one who runs the show",
            },
          ].map((item) => (
            <Grid key={item.title} item xs={12} sm={6} md={3}>
              <Paper sx={{ p: 2.5, textAlign: "center", height: "100%" }}>
                <Box
                  component="img"
                  src={item.img}
                  alt={item.alt}
                  sx={{
                    width: { xs: "52%", md: "56%" },
                    maxWidth: 200,
                    mb: 1.5,
                    filter: "drop-shadow(0 12px 20px rgba(0,0,0,0.35))",
                  }}
                />
                <Typography className={styles.title} variant="h6" sx={{ mb: 1 }}>
                  {item.title}
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>{item.desc}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Box sx={{ overflowX: "auto" }}>
            <GitHubCalendar
              username="vikash93825"
              blockSize={16}
              blockMargin={4}
              color={"hsl(203, 82%, 33%)"}
            />
          </Box>
        </Box>

        <Box sx={{ textAlign: "center", mb: 3 }}>
          <Typography className={styles.pro} variant="h3">
            <span className="chonburi-font green-text">Pro</span>gress
          </Typography>
        </Box>

        <Grid container spacing={2.5} justifyContent="center" sx={{ textAlign: "center" }}>
          {[
            { value: "1500+", label: "Hours of Hands on Coding" },
            { value: "500+", label: "Commits" },
            { value: "400+", label: "Hours of Logic Building" },
            { value: "100+", label: "Hours of Soft Skills" },
          ].map((item) => (
            <Grid key={item.label} item xs={6} sm={3}>
              <Stack alignItems="center" spacing={1}>
                <Box
                  sx={{
                    border: "10px solid #128397",
                    height: 110,
                    width: 110,
                    borderRadius: "999px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(255,255,255,0.03)",
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 800 }}>
                    {item.value}
                  </Typography>
                </Box>
                <Typography sx={{ color: "text.secondary" }}>{item.label}</Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  )
};

export {Achieved};