import React, { useMemo, useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import "../styles/nav.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import { themeTokens } from "../themeTokens";

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const centerLinks = useMemo(
    () => [
      { label: "PROJECTS", href: "#projects" },
      { label: "CREDENTIALS", href: "#achieved" },
      { label: "SKILLS", href: "#skills" },
      { label: "ABOUT", href: "#about" },
    ],
    []
  );

  const drawerLinks = useMemo(
    () => [
      { label: "Home", href: "#home" },
      ...centerLinks,
      { label: "CONTACT", href: "#contact" },
    ],
    [centerLinks]
  );

  return (
    <AppBar className="fixed" elevation={0} position="fixed" color="inherit">
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 60, md: 68 }, position: "relative" }}>
          <Button
            component="a"
            href="#home"
            className="logo-pill"
            sx={{
              px: 2,
              py: 0.75,
              borderRadius: 999,
              border: "1px solid rgba(45, 212, 191, 0.45)",
              color: themeTokens.neon,
              textTransform: "none",
              fontWeight: 600,
              boxShadow: `0 0 20px ${themeTokens.neonDim}`,
              flexShrink: 0,
            }}
          >
            vikash.dev
          </Button>

          <Box sx={{ flex: 1, display: { xs: "flex", md: "none" }, justifyContent: "flex-end" }}>
            <IconButton
              aria-label="open navigation"
              onClick={() => setMobileOpen(true)}
              color="inherit"
              size="large"
              sx={{ color: themeTokens.textOnDark }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Stack
            direction="row"
            spacing={0.25}
            alignItems="center"
            sx={{
              display: { xs: "none", md: "flex" },
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <IconButton
              href="#home"
              color="inherit"
              size="small"
              className="nav_item"
              sx={{ mr: 0.5 }}
              aria-label="Home"
            >
              <HomeOutlinedIcon fontSize="small" />
            </IconButton>
            {centerLinks.map((item) => (
              <Button
                key={item.href}
                href={item.href}
                className="nav_item"
                color="inherit"
                sx={{ px: 1, minWidth: 0 }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>

          <Stack
            direction="row"
            spacing={0.5}
            alignItems="center"
            sx={{ ml: "auto", display: { xs: "none", md: "flex" } }}
          >
            <Button
              href="https://drive.google.com/file/d/1ydOxcH2GInRWH369bBOwlbZ8-Wu8QxKG/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              variant="outlined"
              size="small"
              startIcon={<CloudOutlinedIcon />}
              sx={{
                borderRadius: 999,
                borderColor: "rgba(248, 250, 252, 0.35)",
                color: themeTokens.textOnDark,
                mr: 0.5,
                px: 1.5,
                "&:hover": { borderColor: themeTokens.neon },
              }}
            >
              Resume
            </Button>
            <IconButton aria-label="Theme" size="small" sx={{ color: themeTokens.mutedOnDark }}>
              <DarkModeOutlinedIcon fontSize="small" />
            </IconButton>
            <IconButton
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/vikash-03/"
              target="_blank"
              rel="noreferrer"
              color="inherit"
              className="nav_item"
            >
              <LinkedInIcon fontSize="small" />
            </IconButton>
            <IconButton
              aria-label="GitHub"
              href="https://github.com/vikash93825"
              target="_blank"
              rel="noreferrer"
              color="inherit"
              className="nav_item"
            >
              <GitHubIcon fontSize="small" />
            </IconButton>
            <IconButton
              aria-label="Twitter"
              href="https://twitter.com/vikash93825"
              target="_blank"
              rel="noreferrer"
              color="inherit"
              className="nav_item"
            >
              <TwitterIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            bgcolor: themeTokens.darkBgElevated,
            borderLeft: `1px solid ${themeTokens.borderOnDark}`,
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography
            sx={{
              color: themeTokens.neon,
              fontWeight: 700,
              letterSpacing: "0.08em",
              mb: 2,
            }}
          >
            Menu
          </Typography>
          <Stack spacing={0.5}>
            {drawerLinks.map((item) => (
              <Button
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                variant="text"
                className="nav_item"
                sx={{
                  justifyContent: "flex-start",
                  color: `${themeTokens.textOnDark} !important`,
                }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export { NavBar };
