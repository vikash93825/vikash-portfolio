import React from "react";
import { Box, Container, Divider, Link, Paper, Stack, Typography } from "@mui/material";
import "../styles/contact.css";
import { themeTokens } from "../themeTokens";

const Contact = () => {
  return (
    <Box
      className="contact-section-bg"
      id="contact"
      sx={{
        background: `linear-gradient(180deg, ${themeTokens.darkBg} 0%, ${themeTokens.bgAlt} 42%, ${themeTokens.darkBg} 100%)`,
      }}
    >
      <Container maxWidth="xl" sx={{ pt: 4, pb: 4 }}>
        <Stack spacing={1.5}>
          <Typography variant="h4" sx={{ mb: 0 }}>
            <span className="chonburi-font green-text">Con</span>tact
          </Typography>

          <Typography variant="body2" sx={{ color: "text.secondary", mb: 0, lineHeight: 1.4 }}>
            Reach out via phone, email, or GitHub.
          </Typography>

          <Paper
            sx={{
              py: 1.25,
              px: { xs: 1.5, sm: 2 },
              display: "flex",
              flexWrap: "nowrap",
              alignItems: "center",
              gap: { xs: 1.25, sm: 2 },
              overflowX: "auto",
              WebkitOverflowScrolling: "touch",
            }}
          >
            <Stack direction="row" spacing={0.75} alignItems="baseline" sx={{ flexShrink: 0 }}>
              <Typography variant="caption" sx={{ color: "text.secondary", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Phone
              </Typography>
              <Link href="tel:+919382579600" underline="hover" color="inherit" sx={{ fontWeight: 600, fontSize: "0.95rem", whiteSpace: "nowrap" }}>
                +91 9382579600
              </Link>
            </Stack>

            <Divider orientation="vertical" flexItem sx={{ borderColor: themeTokens.border, height: 22, alignSelf: "center" }} />

            <Stack direction="row" spacing={0.75} alignItems="baseline" sx={{ flexShrink: 0 }}>
              <Typography variant="caption" sx={{ color: "text.secondary", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                Email
              </Typography>
              <Link
                href="mailto:vikashkumar.kk@gmail.com"
                underline="hover"
                color="inherit"
                sx={{ fontWeight: 600, fontSize: "0.95rem", whiteSpace: "nowrap" }}
              >
                vikashkumar.kk@gmail.com
              </Link>
            </Stack>

            <Divider orientation="vertical" flexItem sx={{ borderColor: themeTokens.border, height: 22, alignSelf: "center" }} />

            <Stack direction="row" spacing={0.75} alignItems="baseline" sx={{ flexShrink: 0 }}>
              <Typography variant="caption" sx={{ color: "text.secondary", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                GitHub
              </Typography>
              <Link
                href="https://github.com/vikash93825"
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                color="inherit"
                sx={{ fontWeight: 600, fontSize: "0.95rem", whiteSpace: "nowrap" }}
              >
                vikash93825
              </Link>
            </Stack>
          </Paper>
        </Stack>
      </Container>
    </Box>
  );
};

export { Contact };
