import React from "react";
import { Box, Container, Divider, Paper, Stack, Typography } from "@mui/material";
import "../styles/contact.css";
import { themeTokens } from "../themeTokens";

const Contact = () => {
  return (
    <Box
      className="contact-section-bg"
      id="contact"
      sx={{
        background: `linear-gradient(180deg, ${themeTokens.bg} 0%, ${themeTokens.cyanPale} 35%, ${themeTokens.bg} 100%)`,
      }}
    >
      <Container maxWidth="xl" sx={{ pt: 6, pb: 6 }}>
        <Box sx={{ maxWidth: 720 }}>
          <Typography variant="h3" sx={{ mb: 2 }}>
            <span className="chonburi-font green-text">Con</span>tact
          </Typography>

          <Typography sx={{ color: "text.secondary", mb: 3 }}>
            For any information regarding my work kindly, contact me through the following
            phone number or email address.
          </Typography>

          <Paper sx={{ p: { xs: 2, md: 3 } }}>
            <Stack spacing={1.5}>
              <Stack spacing={0.25}>
                <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
                  Phone
                </Typography>
                <Typography variant="h6">+91 9382579600</Typography>
              </Stack>

              <Divider sx={{ borderColor: themeTokens.border }} />

              <Stack spacing={0.25}>
                <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
                  Email
                </Typography>
                <Typography variant="h6">vikashkumar.kk@gmail.com</Typography>
              </Stack>

              <Divider sx={{ borderColor: themeTokens.border }} />

              <Stack spacing={0.25}>
                <Typography variant="subtitle2" sx={{ color: "text.secondary" }}>
                  GitHub
                </Typography>
                <Typography variant="h6">github.com/vikash93825</Typography>
              </Stack>
            </Stack>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export { Contact };
