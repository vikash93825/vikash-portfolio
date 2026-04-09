import React from "react";
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
  return (
    <div className="projects" id="projects">
      <Container maxWidth="xl" sx={{ pt: 6, pb: 6 }}>
        <Box className="heading-section" sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h3">
            <span className="chonburi-font green-text">Pro</span>jects
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {myProjects.map((project) => (
            <Grid key={project.title} item xs={12} sm={6} md={4}>
              <Card
                className="project-card"
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                  background: "rgba(255,255,255,0.05)",
                }}
              >
                <Box sx={{ position: "relative" }} className="img-section">
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                    sx={{ height: 210 }}
                  />
                  <Box className="imageCardEffect" sx={{ pointerEvents: "none" }} />
                </Box>

                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 800, mb: 1 }}>
                    {project.title}
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    {project.description}
                  </Typography>
                </CardContent>

                <CardActions sx={{ px: 2, pb: 2 }}>
                  <Stack direction="row" spacing={1} sx={{ width: "100%" }}>
                    <Button
                      href={project.source}
                      target="_blank"
                      rel="noreferrer"
                      variant="outlined"
                      fullWidth
                      sx={{ borderRadius: 999 }}
                    >
                      Source
                    </Button>
                    <Button
                      href={project.demoLink}
                      target="_blank"
                      rel="noreferrer"
                      variant="contained"
                      fullWidth
                      sx={{
                        borderRadius: 999,
                        background:
                          "linear-gradient(90deg, rgba(6, 182, 212, 1), rgba(124, 58, 237, 1))",
                        "&:hover": {
                          background:
                            "linear-gradient(90deg, rgba(6, 182, 212, 1), rgba(124, 58, 237, 1))",
                          filter: "brightness(1.05)",
                        },
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
