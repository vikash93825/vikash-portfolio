import "./App.css";
import { Home } from "./Components/Home";
import About from "./Components/About";
import { Skills } from "./Components/Skills";
import { Project } from "./Components/Project";
import { Contact } from "./Components/Contact";
import { Achieved } from "./Components/Achieved";
import { NavBar } from "./Routes/NavBar";
import { Fab } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { themeTokens } from "./themeTokens";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Achieved />
      <Contact />
      <Fab
        component="a"
        href="#contact"
        color="primary"
        aria-label="email"
        sx={{
          position: "fixed",
          right: 24,
          bottom: 24,
          zIndex: 1200,
          boxShadow: `0 8px 32px ${themeTokens.neonDim}`,
        }}
      >
        <EmailIcon />
      </Fab>
    </div>
  );
}

export default App;
