import React from "react";
import {
  Avatar,
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import { themeTokens as tk } from "../themeTokens";
import "../styles/about.css";

const NAVY = tk.navy;
const CYAN = tk.cyan;
const SIDEBAR_GRAD =
  "linear-gradient(180deg, #115e59 0%, #0e7490 48%, #134e4a 100%)";
const RIBBON = tk.cyanDark;

const resumeRows = [
  {
    education: {
      date: "2016 – 2020",
      title: "B.TECH — INFORMATION TECHNOLOGY",
      body:
        "Graduated from Haldia Institute of Technology with a strong foundation in software engineering and web technologies.",
    },
    employment: {
      date: "03/2021 – 12/2021",
      title: "FRONTEND DEVELOPER, ONEZEROPOINT TECHNOLOGIES",
      body:
        "Built reusable React components with Redux-Saga, shipped responsive UIs, and integrated REST APIs into production apps.",
    },
  },
  {
    education: {
      date: "2019 – 2020",
      title: "MASAI SCHOOL — INTENSIVE TRAINING",
      body:
        "Completed full-time training in HTML5, CSS, JavaScript, React, and Redux with a focus on real-world product builds.",
    },
    employment: {
      date: "01/2022 – PRESENT",
      title: "SOFTWARE ENGINEER (FRONTEND), SIVIVE ENTERPRISE",
      body:
        "Delivered React + Material UI experiences with lazy-loaded features, performance-minded architecture, and API integration.",
    },
  },
];

function TimelineCard({ side, date, title, body }) {
  const isEdu = side === "left";
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 2.25,
        height: "100%",
        borderColor: tk.borderStrong,
        bgcolor: tk.paper,
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.35)",
        textAlign: isEdu ? { xs: "left", md: "right" } : "left",
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          color: isEdu ? CYAN : NAVY,
          fontWeight: 600,
          mb: 0.75,
          letterSpacing: "0.02em",
        }}
      >
        {date}
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          fontWeight: 800,
          color: NAVY,
          letterSpacing: "0.06em",
          fontSize: "0.82rem",
          lineHeight: 1.35,
          mb: 1,
        }}
      >
        {title}
      </Typography>
      <Typography variant="body2" sx={{ color: tk.navyMuted, lineHeight: 1.6 }}>
        {body}
      </Typography>
    </Paper>
  );
}

function TimelineDot({ variant }) {
  return (
    <Box
      sx={{
        width: 14,
        height: 14,
        borderRadius: "50%",
        bgcolor: variant === "dark" ? tk.neon : tk.neonBright,
        border: "3px solid #ffffff",
        boxShadow: `0 0 0 2px ${tk.neonDim}`,
        flexShrink: 0,
        zIndex: 2,
      }}
    />
  );
}

const About = () => {
  const theme = useTheme();
  const isWide = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      id="about"
      component="section"
      className="about-resume-root"
      sx={{
        bgcolor: tk.bg,
        color: NAVY,
        overflow: "hidden",
      }}
    >
      <Grid container sx={{ minHeight: { md: "min(100vh, 920px)" } }}>
        {/* Sidebar */}
        <Grid
          item
          xs={12}
          md={4}
          lg={3.5}
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pt: { xs: 5, md: 7 },
            pb: { xs: 8, md: 10 },
            px: 3,
            background: SIDEBAR_GRAD,
          }}
        >
          <Box
            className="about-sidebar-ribbon"
            aria-hidden
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: { xs: 100, md: 140 },
              bgcolor: RIBBON,
              clipPath: "polygon(0 35%, 100% 0%, 100% 100%, 0% 100%)",
              opacity: 0.95,
            }}
          />
          <Box
            className="about-sidebar-ribbon-accent"
            aria-hidden
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: "18%",
              height: { xs: 72, md: 100 },
              bgcolor: "#0e7490",
              clipPath: "polygon(0 55%, 100% 15%, 100% 100%, 0% 100%)",
              opacity: 0.85,
            }}
          />

          <Avatar
            src="/images/vikash.JPG"
            alt="Vikash Kumar"
            sx={{
              width: { xs: 200, sm: 220 },
              height: { xs: 260, sm: 288 },
              borderRadius: "32% / 48%",
              border: "4px solid rgba(255,255,255,0.95)",
              boxShadow: "0 18px 40px rgba(0, 0, 0, 0.45)",
              zIndex: 1,
            }}
          />

          <Typography
            variant="h4"
            sx={{
              mt: 3,
              fontWeight: 800,
              color: NAVY,
              textAlign: "center",
              zIndex: 1,
            }}
          >
            Vikash Kumar
          </Typography>
          <Typography
            sx={{
              mt: 1.5,
              maxWidth: 280,
              textAlign: "center",
              color: "rgba(248, 250, 252, 0.88)",
              fontSize: "0.95rem",
              lineHeight: 1.55,
              zIndex: 1,
            }}
          >
            Hi, I&apos;m a professional frontend developer focused on fast, accessible, and
            polished web experiences.
          </Typography>

          <Button
            href="https://drive.google.com/file/d/1ydOxcH2GInRWH369bBOwlbZ8-Wu8QxKG/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            variant="contained"
            sx={{
              mt: 3,
              zIndex: 1,
              borderRadius: 999,
              px: 3,
              fontWeight: 700,
              bgcolor: tk.neon,
              color: "#020617",
              "&:hover": { bgcolor: tk.neonBright },
            }}
          >
            View resume
          </Button>
        </Grid>

        {/* Main resume */}
        <Grid item xs={12} md={8} lg={8.5} sx={{ bgcolor: tk.bgAlt }}>
          <Box sx={{ px: { xs: 2, sm: 3, md: 5 }, py: { xs: 4, md: 5 } }}>
            <Typography
              component="h2"
              sx={{
                textAlign: "center",
                fontWeight: 700,
                fontSize: { xs: "1.05rem", sm: "1.2rem", md: "1.35rem" },
                lineHeight: 1.45,
                px: { xs: 0, sm: 2 },
              }}
            >
              <Box component="span" sx={{ color: NAVY }}>
                Personal Portfolio{" "}
              </Box>
              <Box component="span" sx={{ color: CYAN }}>
                of Frontend Developer and Web Developer
              </Box>
            </Typography>

            <Typography
              variant="h3"
              sx={{
                mt: 4,
                textAlign: "center",
                fontWeight: 900,
                letterSpacing: "0.28em",
                fontSize: { xs: "1.5rem", md: "1.85rem" },
                color: NAVY,
              }}
            >
              RESUME
            </Typography>

            <Grid container spacing={0} sx={{ mt: 1, mb: 3 }} alignItems="flex-end">
              <Grid item xs={5}>
                <Stack
                  direction="column"
                  alignItems={{ xs: "flex-start", md: "flex-end" }}
                  spacing={0.5}
                >
                  <SchoolIcon sx={{ color: CYAN, fontSize: 32 }} />
                  <Typography
                    variant="overline"
                    sx={{ color: NAVY, fontWeight: 800, letterSpacing: "0.2em" }}
                  >
                    Education
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={2} />
              <Grid item xs={5}>
                <Stack direction="column" alignItems="flex-start" spacing={0.5}>
                  <WorkIcon sx={{ color: CYAN, fontSize: 32 }} />
                  <Typography
                    variant="overline"
                    sx={{ color: NAVY, fontWeight: 800, letterSpacing: "0.2em" }}
                  >
                    Employment
                  </Typography>
                </Stack>
              </Grid>
            </Grid>

            <Box sx={{ position: "relative", mt: 2 }}>
              {isWide && (
                <Box
                  aria-hidden
                  sx={{
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    top: 24,
                    bottom: 24,
                    width: 3,
                    borderRadius: 1,
                    bgcolor: tk.neon,
                    zIndex: 0,
                  }}
                />
              )}

              {!isWide && (
                <Box
                  aria-hidden
                  sx={{
                    position: "absolute",
                    left: 10,
                    top: 28,
                    bottom: 28,
                    width: 3,
                    borderRadius: 1,
                    bgcolor: tk.neon,
                    zIndex: 0,
                  }}
                />
              )}

              <Stack spacing={3}>
                {resumeRows.map((row, index) => (
                  <Box key={index}>
                    {isWide ? (
                      <Grid container spacing={2} alignItems="stretch">
                        <Grid item xs={5}>
                          <TimelineCard side="left" {...row.education} />
                        </Grid>
                        <Grid
                          item
                          xs={2}
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "relative",
                            minHeight: 80,
                          }}
                        >
                          <TimelineDot variant={index % 2 === 0 ? "light" : "dark"} />
                        </Grid>
                        <Grid item xs={5}>
                          <TimelineCard side="right" {...row.employment} />
                        </Grid>
                      </Grid>
                    ) : (
                      <Box sx={{ position: "relative", pl: 4 }}>
                        <Box
                          sx={{
                            position: "absolute",
                            left: 3,
                            top: 28,
                            zIndex: 1,
                          }}
                        >
                          <TimelineDot variant={index % 2 === 0 ? "light" : "dark"} />
                        </Box>
                        <Stack spacing={2}>
                          <TimelineCard side="left" {...row.education} />
                          <TimelineCard side="right" {...row.employment} />
                        </Stack>
                      </Box>
                    )}
                  </Box>
                ))}
              </Stack>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
