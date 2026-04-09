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
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = useMemo(
    () => [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Achieved", href: "#achieved" },
      { label: "Contact", href: "#contact" },
    ],
    []
  );

  return (
    <AppBar className="fixed" elevation={0} position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 } }}>
          <Typography
            component="a"
            href="#home"
            className="logo"
            sx={{
              mr: 2,
              textDecoration: "none",
              fontWeight: 800,
              letterSpacing: "0.08em",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            VK
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              aria-label="open navigation"
              onClick={() => setMobileOpen(true)}
              color="inherit"
              size="large"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Stack
            direction="row"
            spacing={0.5}
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, ml: 1 }}
          >
            {navItems.map((item) => (
              <Button
                key={item.href}
                href={item.href}
                className="nav_item"
                color="inherit"
                sx={{ px: 1.25 }}
              >
                {item.label}
              </Button>
            ))}
          </Stack>

          <Stack direction="row" spacing={0.5} sx={{ ml: "auto" }}>
            <IconButton
              aria-label="LinkedIn"
              href="https://www.linkedin.com/in/vikash-03/"
              target="_blank"
              rel="noreferrer"
              color="inherit"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              aria-label="GitHub"
              href="https://github.com/vikash93825"
              target="_blank"
              rel="noreferrer"
              color="inherit"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              aria-label="Twitter"
              href="https://twitter.com/vikash93825"
              target="_blank"
              rel="noreferrer"
              color="inherit"
            >
              <TwitterIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>

      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            backgroundImage:
              "radial-gradient(900px 600px at 30% 10%, rgba(6, 182, 212, 0.18), transparent 60%), radial-gradient(700px 500px at 80% 30%, rgba(124, 58, 237, 0.16), transparent 55%), linear-gradient(180deg, rgba(7,10,16,0.95), rgba(11,16,32,0.95))",
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography
            component="a"
            href="#home"
            onClick={() => setMobileOpen(false)}
            className="logo"
            sx={{ textDecoration: "none", display: "inline-block", mb: 2 }}
          >
            VK
          </Typography>
          <Stack spacing={0.5}>
            {navItems.map((item) => (
              <Button
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                variant="text"
                color="inherit"
                sx={{ justifyContent: "flex-start" }}
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
