import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import DescriptionIcon from "@mui/icons-material/Description";
import { themeTokens } from "../themeTokens";
import { portfolioSkills } from "../data/portfolioSkills";
import ThreeBackground from "./ThreeBackground";
import "../styles/home.css";

const RING_CLASS = {
  inner: "home-ring-ccw",
  mid: "home-ring-cw",
  outer: "home-ring-slow",
};

/** Rotating gradient headline — one entry per dot */
const HERO_HEADLINE_CAROUSEL = [
  "DEVELOPER",
  "ENGINEER",
  "UI BUILDER",
  "REACT DEV",
  "DEVOPS",
];

function OrbitIconTile({ name, src, index }) {
  return (
    <Box
      className="home-orbit-icon-wrap"
      sx={{
        textAlign: "center",
        width: 72,
        animationDelay: `${0.32 + index * 0.08}s`,
      }}
    >
      <Box
        className="home-orbit-icon-inner"
        sx={{
          animationDelay: `${index * 0.45}s`,
        }}
      >
        <Box
          sx={{
            width: 48,
            height: 48,
            mx: "auto",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(145deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.85))",
            border: "1px solid rgba(45, 212, 191, 0.35)",
            boxShadow: `
              0 0 0 1px rgba(0,0,0,0.4),
              0 4px 24px rgba(0, 0, 0, 0.4),
              inset 0 1px 0 rgba(255,255,255,0.08),
              0 0 20px rgba(45, 212, 191, 0.12)
            `,
            transition: "transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease",
            "&:hover": {
              transform: "scale(1.08)",
              borderColor: "rgba(45, 212, 191, 0.65)",
              boxShadow: `
                0 0 0 1px rgba(45, 212, 191, 0.2),
                0 8px 32px rgba(0, 0, 0, 0.45),
                0 0 28px rgba(45, 212, 191, 0.25)
              `,
            },
          }}
        >
          <Box
            component="img"
            src={src}
            alt=""
            sx={{
              width: 28,
              height: 28,
              objectFit: "contain",
              filter: "drop-shadow(0 0 10px rgba(45, 212, 191, 0.35))",
            }}
          />
        </Box>
        <Typography
          sx={{
            fontSize: "0.6rem",
            color: "rgba(148, 163, 184, 0.95)",
            mt: 0.5,
            letterSpacing: "0.04em",
            lineHeight: 1.2,
            fontWeight: 500,
          }}
        >
          {name}
        </Typography>
      </Box>
    </Box>
  );
}

export function Home() {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("md"));
  const isNarrow = useMediaQuery(theme.breakpoints.down("sm"));
  const stageRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [carouselIndex, setCarouselIndex] = useState(0);

  const { orbitNodes, ringRadii, stageSize, stageMaxWidth, hubRadius } = useMemo(() => {
    const base = {
      inner: 162,
      mid: 252,
      outer: 342,
    };
    const scale = isNarrow ? 0.5 : isSm ? 0.68 : 1;
    const radii = {
      inner: Math.round(base.inner * scale),
      mid: Math.round(base.mid * scale),
      outer: Math.round(base.outer * scale),
    };
    const size = Math.round(radii.outer * 2 + 200);
    const maxW = size + 140;

    const n = portfolioSkills.length;
    const step = (2 * Math.PI) / n;
    const nodes = portfolioSkills.map((item, i) => {
      const angle = -Math.PI / 2 + i * step;
      const r = radii.outer;
      return {
        id: item.id,
        name: item.name,
        src: item.logo,
        ring: "outer",
        angle,
        x: Math.cos(angle) * r,
        y: Math.sin(angle) * r,
        r,
      };
    });

    const hubRadius = Math.round(
      Math.min(radii.inner * 0.52, isNarrow ? 52 : isSm ? 72 : 102)
    );

    return {
      orbitNodes: nodes,
      ringRadii: radii,
      stageSize: size,
      stageMaxWidth: maxW,
      hubRadius,
    };
  }, [isSm, isNarrow]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return undefined;
    const id = window.setInterval(() => {
      setCarouselIndex((i) => (i + 1) % HERO_HEADLINE_CAROUSEL.length);
    }, 4000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (isSm) return undefined;
    const el = stageRef.current;
    if (!el) return undefined;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      setTilt({ x: px * 7, y: py * -5 });
    };
    const onLeave = () => setTilt({ x: 0, y: 0 });

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [isSm]);

  return (
    <Box
      id="home"
      className="fix"
      sx={{
        position: "relative",
        minHeight: "100vh",
        pt: { xs: 10, md: 12 },
        pb: { xs: 6, md: 8 },
        bgcolor: themeTokens.darkBg,
        overflow: "hidden",
      }}
    >
      <ThreeBackground />

      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: { xs: "auto", md: "calc(100vh - 96px)" },
          px: { xs: 1, sm: 2 },
        }}
      >
        <Box
          ref={stageRef}
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: stageMaxWidth,
            height: stageSize,
            minHeight: stageSize,
            mx: "auto",
            mt: { xs: 2, md: 0 },
            mb: { xs: 2, md: 0 },
            transform: isSm
              ? undefined
              : `perspective(1200px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
            transformStyle: "preserve-3d",
            transition: "transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {["inner", "mid", "outer"].map((ringKey, idx) => {
            const r = ringRadii[ringKey];
            const d = r * 2;
            return (
              <Box
                key={ringKey}
                className={RING_CLASS[ringKey]}
                sx={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  width: d,
                  height: d,
                  marginLeft: 0,
                  marginTop: 0,
                  transform: "translate(-50%, -50%)",
                  borderRadius: "50%",
                  border: "1px dashed",
                  borderColor:
                    idx === 2
                      ? "rgba(45, 212, 191, 0.24)"
                      : "rgba(148, 163, 184, 0.16)",
                  pointerEvents: "none",
                  boxShadow:
                    idx === 2
                      ? "0 0 48px rgba(45, 212, 191, 0.06)"
                      : "none",
                }}
              />
            );
          })}

          <Box
            className="home-ring-ccw"
            sx={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: ringRadii.outer * 2 + 80,
              height: ringRadii.outer * 2 + 80,
              marginLeft: 0,
              marginTop: 0,
              transform: "translate(-50%, -50%)",
              borderRadius: "50%",
              border: "1px dashed",
              borderColor: "rgba(45, 212, 191, 0.1)",
              pointerEvents: "none",
            }}
          />

          <Box
            aria-hidden
            className="home-glow-pulse"
            sx={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: { xs: "min(92%, 320px)", md: 420 },
              height: { xs: 440, md: 500 },
              marginLeft: 0,
              marginTop: 0,
              transform: "translate(-50%, -50%)",
              background: `
                radial-gradient(
                  ellipse 55% 45% at 50% 45%,
                  rgba(45, 212, 191, 0.16) 0%,
                  rgba(34, 211, 238, 0.08) 38%,
                  transparent 72%
                )
              `,
              filter: "blur(3px)",
              zIndex: 1,
              pointerEvents: "none",
            }}
          />

          <Box
            component="svg"
            viewBox={`0 0 ${stageSize} ${stageSize}`}
            preserveAspectRatio="xMidYMid meet"
            aria-hidden
            sx={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              zIndex: 2,
              pointerEvents: "none",
              overflow: "visible",
            }}
          >
            <defs>
              <filter id="orbit-spoke-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="1.2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {orbitNodes.map((node, spokeIdx) => {
              const cx = stageSize / 2;
              const cy = stageSize / 2;
              const a = node.angle;
              const rOrbit = node.r;
              const tileInset = 30;
              const x1 = cx + Math.cos(a) * hubRadius;
              const y1 = cy + Math.sin(a) * hubRadius;
              const x2 = cx + Math.cos(a) * (rOrbit - tileInset);
              const y2 = cy + Math.sin(a) * (rOrbit - tileInset);
              const ringX = cx + Math.cos(a) * rOrbit;
              const ringY = cy + Math.sin(a) * rOrbit;
              return (
                <g key={`spoke-${node.id}`}>
                  <line
                    className="home-spoke-line"
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="rgba(45, 212, 191, 0.5)"
                    strokeWidth={1.15}
                    strokeLinecap="round"
                    filter="url(#orbit-spoke-glow)"
                    style={{ animationDelay: `${spokeIdx * 0.12}s` }}
                  />
                  <circle
                    className="home-spoke-node"
                    cx={ringX}
                    cy={ringY}
                    r={3.5}
                    fill="rgba(45, 212, 191, 0.95)"
                    stroke="rgba(15, 23, 42, 0.95)"
                    strokeWidth={1}
                    style={{ animationDelay: `${spokeIdx * 0.2}s` }}
                  />
                </g>
              );
            })}
          </Box>

          {orbitNodes.map((node, i) => (
            <Box
              key={node.id}
              sx={{
                position: "absolute",
                left: `calc(50% + ${node.x}px)`,
                top: `calc(50% + ${node.y}px)`,
                transform: "translate(-50%, -50%)",
                zIndex: 3,
              }}
            >
              <OrbitIconTile name={node.name} src={node.src} index={i} />
            </Box>
          ))}

          <Stack
            alignItems="center"
            justifyContent="center"
            spacing={1.25}
            sx={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 4,
              textAlign: "center",
              maxWidth: 460,
              px: { xs: 2, sm: 2.75 },
              py: { xs: 2.25, sm: 2.75 },
              borderRadius: "20px",
              border: "1px solid rgba(45, 212, 191, 0.14)",
              background:
                "linear-gradient(155deg, rgba(15, 23, 42, 0.55) 0%, rgba(15, 23, 42, 0.12) 100%)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              boxShadow: `
                0 0 0 1px rgba(0,0,0,0.35),
                0 24px 80px rgba(0, 0, 0, 0.35),
                inset 0 1px 0 rgba(255,255,255,0.05)
              `,
            }}
          >
            <Typography
              className="home-hero-fade-up"
              sx={{
                color: themeTokens.mutedOnDark,
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.2em",
                animationDelay: "0.12s",
              }}
            >
              HELLO! I&apos;M
            </Typography>

            <Typography
              className="home-hero-fade-up"
              variant="h3"
              sx={{
                fontWeight: 800,
                color: themeTokens.textOnDark,
                fontSize: { xs: "1.85rem", sm: "2.25rem" },
                lineHeight: 1.15,
                animationDelay: "0.22s",
              }}
            >
              Vikash Kumar
            </Typography>

            <Typography
              className="home-hero-fade-up"
              sx={{
                color: themeTokens.mutedOnDark,
                fontSize: { xs: "0.95rem", sm: "1.05rem" },
                lineHeight: 1.5,
                maxWidth: 380,
                animationDelay: "0.34s",
              }}
            >
              A passionate{" "}
              <Box component="span" sx={{ color: themeTokens.neon, fontWeight: 600 }}>
                Frontend
              </Box>{" "}
              developer crafting{" "}
              <Box component="span" sx={{ color: themeTokens.neon, fontWeight: 600 }}>
                React
              </Box>{" "}
              &amp; polished UIs.
            </Typography>

            <Box
              className="home-hero-fade-up"
              sx={{
                width: "100%",
                animationDelay: "0.46s",
                minHeight: { xs: "2.85rem", sm: "3.85rem", md: "4.1rem" },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mt: 0.5,
              }}
            >
              <Typography
                key={carouselIndex}
                className="home-dev-carousel-item"
                component="span"
                sx={{
                  display: "block",
                  fontWeight: 900,
                  fontSize: { xs: "2.1rem", sm: "3rem", md: "3.35rem" },
                  lineHeight: 1.05,
                  letterSpacing: "0.04em",
                  textAlign: "center",
                  background: themeTokens.heroGradient,
                  backgroundSize: "220% auto",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "rgba(0,0,0,0)",
                }}
              >
                {HERO_HEADLINE_CAROUSEL[carouselIndex]}
              </Typography>
            </Box>

            <Stack
              component="nav"
              direction="row"
              spacing={0.9}
              alignItems="center"
              justifyContent="center"
              className="home-hero-fade-up"
              aria-label="Headline carousel"
              sx={{ mt: 0.25, animationDelay: "0.56s" }}
            >
              {HERO_HEADLINE_CAROUSEL.map((label, i) => {
                const active = i === carouselIndex;
                return (
                  <Box
                    key={label}
                    component="button"
                    type="button"
                    title={label}
                    aria-label={`Show headline: ${label}`}
                    aria-current={active ? "true" : undefined}
                    onClick={() => setCarouselIndex(i)}
                    className={active ? "home-dot-active" : undefined}
                    sx={{
                      p: 0.75,
                      m: -0.75,
                      minWidth: 32,
                      minHeight: 32,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "none",
                      cursor: "pointer",
                      background: "transparent",
                      borderRadius: "50%",
                      "&:focus-visible": {
                        outline: `2px solid ${themeTokens.neon}`,
                        outlineOffset: 2,
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: active ? 8 : 6,
                        height: active ? 8 : 6,
                        borderRadius: "50%",
                        bgcolor: active
                          ? themeTokens.neon
                          : "rgba(148, 163, 184, 0.35)",
                        boxShadow: active
                          ? `0 0 12px ${themeTokens.neonDim}`
                          : "none",
                        transition: "transform 0.2s ease, background-color 0.2s ease",
                      }}
                    />
                  </Box>
                );
              })}
            </Stack>

            <Typography
              className="home-hero-fade-up"
              sx={{
                color: themeTokens.mutedOnDark,
                fontSize: "0.82rem",
                lineHeight: 1.65,
                maxWidth: 400,
                mt: 0.25,
                animationDelay: "0.66s",
              }}
            >
              I build fast, accessible interfaces with Material UI, modern JavaScript, and
              thoughtful UX — from idea to production.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.5}
              className="home-hero-fade-up"
              sx={{ mt: 2, width: "100%", justifyContent: "center", animationDelay: "0.78s" }}
            >
              <Button
                href="#contact"
                variant="contained"
                color="secondary"
                size="large"
                startIcon={<ChatBubbleOutlineIcon />}
                sx={{
                  borderRadius: 999,
                  px: 3,
                  py: 1.2,
                  bgcolor: "#f8fafc",
                  color: "#020617",
                  fontWeight: 700,
                  boxShadow: "0 0 28px rgba(248, 250, 252, 0.15)",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                  "&:hover": {
                    bgcolor: "#e2e8f0",
                    transform: "translateY(-2px)",
                    boxShadow: "0 12px 40px rgba(248, 250, 252, 0.2)",
                  },
                }}
              >
                Let&apos;s Talk
              </Button>
              <Button
                href="#projects"
                variant="outlined"
                size="large"
                className="home-cta-outline-pulse"
                endIcon={<ArrowForwardIosIcon sx={{ fontSize: "0.75rem !important" }} />}
                sx={{
                  borderRadius: 999,
                  px: 3,
                  py: 1.2,
                  borderWidth: 1.5,
                  borderColor: "rgba(248, 250, 252, 0.45)",
                  color: "#f8fafc",
                  fontWeight: 700,
                  transition: "transform 0.25s ease, border-color 0.25s ease",
                  "&:hover": {
                    borderColor: themeTokens.neon,
                    bgcolor: "rgba(45, 212, 191, 0.1)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                View Projects
              </Button>
            </Stack>

            <Button
              className="home-hero-fade-up"
              href="https://drive.google.com/file/d/1ydOxcH2GInRWH369bBOwlbZ8-Wu8QxKG/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              size="small"
              startIcon={<DescriptionIcon sx={{ fontSize: "1.1rem !important" }} />}
              sx={{
                mt: 0.5,
                color: themeTokens.mutedOnDark,
                animationDelay: "0.9s",
                transition: "color 0.2s ease, transform 0.2s ease",
                "&:hover": {
                  color: themeTokens.neon,
                  transform: "translateY(-1px)",
                },
              }}
            >
              Resume &amp; CV
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
