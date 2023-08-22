import { BrowserRouter as Router } from "react-router-dom";

import {
  Navbar,
  Hero,
  About,
  Experience,
  Tech,
  Works,
  Feedbacks,
  Contact,
  StarsCanvas,
  BackGroundParticles,
} from "./components";

import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <Router>
      <ScrollToTop
        smooth
        color="white"
        width="35"
        height="40"
        className="flex items-center justify-center !z-50 !bg-[#755BB4] p-2"
      />

      <div className="bg-primary -z-20">
        <div className="relative z-10 ">
          <BackGroundParticles />
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <BackGroundParticles />
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
