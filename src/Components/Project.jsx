import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import "../styles/project.css";

const myProjects = [
  {
    image: "/images/airbnb.png",
    title: "Airbnb Clone",
    description:
      "A booking website where users can create new places and make a booking.",
    source: "https://github.com/vikash93825/airbnb-clone",
    demoLink: "https://vikash-booking.vercel.app/",
  },
  {
    image: "/images/yourstory.png",
    title: "Yourstory Clone",
    description:
      "A website that provides the latest news and related stories on Indian startups.",
    source: "https://github.com/vikash93825/Yourstory-clone",
    demoLink: "https://yourstory-clone-iota.vercel.app/",
  },
  {
    image: "/images/instagram.png",
    title: "Instagram Clone",
    description:
      "A social media website where users can see and comment on the post and post their own content.",
    source: "https://github.com/MahenParameshwar/Instagram-Clone-React",
    demoLink: "https://instagram-cloned-app.netlify.app/login",
  },
  {
    image: "/images/db.png",
    title: "Quiz DB",
    description:
      "A Web quiz app for conducting quizzes and easy management of results.",
    source: "https://github.com/vikash93825/masai-sprint-3",
    demoLink: "https://vikash93825.github.io/masai-sprint-3/",
  },
  {
    image: "/images/trello.png",
    title: "Trello Task",
    description:
      "A web application for users to manage their tasks and add and edit tasks.",
    source: "https://github.com/vikash93825/trello-app",
    demoLink: "https://trello-task.netlify.app/",
  },
  {
    image: "/images/bookShop.png",
    title: "Book Shop",
    description:
      "A web book app where users can see a list of all books and add the book to the cart.",
    source: "https://github.com/vikash93825/ECS-project",
    demoLink: "https://bookapplist.netlify.app/",
  },
  {
    image: "/images/expense.png",
    title: "Expense Manager",
    description:
      "It is an application that helps you manage and track your daily expenses.",
    source: "https://github.com/vikash93825/Expense_project",
    demoLink: "https://expense-project.netlify.app/index.html",
  },
];

const Project = () => {
  const sectionRef = useRef(null);
  const [sectionInView, setSectionInView] = useState(false);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) {
      setSectionInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setSectionInView(true);
      },
      { threshold: 0.06, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="projects" id="projects" ref={sectionRef}>
      <Container maxWidth="xl" sx={{ pt: 5, pb: 5, px: { xs: 2, sm: 3 } }}>
        <Box
          className={`heading-section project-heading-reveal${sectionInView ? " project-heading-reveal--visible" : ""}`}
          sx={{ textAlign: "center", mb: 3 }}
        >
          <Typography variant="h3" sx={{ fontSize: { xs: "1.75rem", sm: "2rem" } }}>
            <span className="chonburi-font green-text">Pro</span>jects
          </Typography>
        </Box>

        <Grid container spacing={2.25}>
          {myProjects.map((project, index) => (
            <Grid key={project.title} item xs={12} sm={6} md={3}>
              <Card
                className={`project-card project-card-reveal${sectionInView ? " project-card-reveal--visible" : ""}`}
                style={{
                  animationDelay: sectionInView ? `${72 + index * 58}ms` : undefined,
                }}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  bgcolor: "background.paper",
                  borderRadius: 1,
                }}
              >
                <Box sx={{ position: "relative" }} className="img-section">
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                    sx={{ height: 152, objectFit: "cover" }}
                  />
                  <Box className="imageCardEffect" sx={{ pointerEvents: "none" }} />
                </Box>

                <CardContent
                  className={`project-card-body${sectionInView ? " project-card-body--visible" : ""}`}
                  style={{
                    animationDelay: sectionInView ? `${120 + index * 58}ms` : undefined,
                  }}
                  sx={{ flexGrow: 1, pt: 1.5, px: 2, pb: 1 }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 0.75, lineHeight: 1.35 }}>
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "text.secondary",
                      lineHeight: 1.55,
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {project.description}
                  </Typography>
                </CardContent>

                <CardActions sx={{ px: 2, pt: 0, pb: 1.5, gap: 1 }}>
                  <Stack direction="row" spacing={1} sx={{ width: "100%" }}>
                    <Button
                      href={project.source}
                      target="_blank"
                      rel="noreferrer"
                      variant="outlined"
                      size="small"
                      fullWidth
                      sx={{
                        borderRadius: 999,
                        py: 0.65,
                        fontSize: "0.8125rem",
                        transition: "transform 0.2s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.2s ease",
                        "&:hover": { transform: "translateY(-1px)" },
                        "&:active": { transform: "scale(0.98)" },
                      }}
                    >
                      Source
                    </Button>
                    <Button
                      href={project.demoLink}
                      target="_blank"
                      rel="noreferrer"
                      variant="contained"
                      color="primary"
                      size="small"
                      fullWidth
                      sx={{
                        borderRadius: 999,
                        py: 0.65,
                        fontSize: "0.8125rem",
                        transition: "transform 0.2s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.2s ease",
                        "&:hover": { transform: "translateY(-1px)" },
                        "&:active": { transform: "scale(0.98)" },
                      }}
                    >
                      Demo
                    </Button>
                  </Stack>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export { Project };
