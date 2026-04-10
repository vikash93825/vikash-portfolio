import React from "react";
import { Box, Container, Link, Stack } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import GitHubCalendar from "react-github-calendar";
import styles from "../styles/achieved.module.css";
import { themeTokens } from "../themeTokens";

const GITHUB_USERNAME = "vikash93825";

/** Update these to match your profiles; swap numbers anytime. */
const STATS = [
  { value: "7+", label: "Projects Built" },
  { value: "5+", label: "GitHub Stars" },
  { value: "28+", label: "GitHub Streak days" },
];

const calendarTheme = {
  dark: [
    "rgba(51, 65, 85, 0.35)",
    "rgba(34, 211, 238, 0.22)",
    "rgba(34, 211, 238, 0.42)",
    "rgba(6, 182, 212, 0.65)",
    "rgba(34, 211, 238, 0.95)",
  ],
};

const Achieved = () => {
  return (
    <Box
      key="profi"
      id="achieved"
      className={styles.achieved}
      sx={{
        bgcolor: themeTokens.darkBg,
        color: "text.primary",
      }}
    >
      <Container maxWidth="lg" sx={{ pt: 6, pb: 6, px: { xs: 2, sm: 3 } }}>
        <div className={styles.statGrid}>
          {STATS.map((item) => (
            <div key={item.label} className={styles.statCard}>
              <div className={styles.statValue}>{item.value}</div>
              <div className={styles.statLabel}>{item.label}</div>
            </div>
          ))}
        </div>

        <Box sx={{ mt: 4 }}>
          <div className={styles.graphCard}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              flexWrap="wrap"
              gap={1.5}
              sx={{ mb: 2 }}
            >
              <Stack direction="row" alignItems="center" spacing={1.25}>
                <span className={styles.graphDot} aria-hidden />
                <span className={styles.graphHeaderLabel}>GITHUB CONTRIBUTIONS</span>
              </Stack>
              <Link
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.5,
                  color: themeTokens.mutedOnDark,
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  "&:hover": { color: themeTokens.neonBright },
                }}
              >
                {GITHUB_USERNAME}
                <OpenInNewIcon sx={{ fontSize: 16, opacity: 0.85 }} />
              </Link>
            </Stack>

            <div className={styles.calendarWrap}>
              <GitHubCalendar
                username={GITHUB_USERNAME}
                colorScheme="dark"
                theme={calendarTheme}
                blockSize={12}
                blockMargin={3}
                blockRadius={2}
                fontSize={11}
                showWeekdayLabels={["mon", "wed", "fri"]}
                labels={{
                  legend: { less: "Less", more: "More" },
                }}
              />
            </div>
          </div>
        </Box>



      </Container>
    </Box>
  );
};

export { Achieved };
