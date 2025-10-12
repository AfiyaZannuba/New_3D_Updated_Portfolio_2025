import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectsPage from "./Components/Projects/ProjectsPage"; // 👈 Add this

// import Contact from "./Components/Contact/Contact"
// import Hero from "./Components/Hero/Hero"
// import Portfolio from "./Components/Portfolio/Portfolio"
// import Services from "./Components/Services/Services"

import { lazy, Suspense } from "react"
import LazyLoad from "react-lazyload";

const Hero = lazy(() => import("./Components/Hero/Hero"));
const Services = lazy(() => import("./Components/Services/Services"));
const Portfolio = lazy(() => import("./Components/Portfolio/Portfolio"));
const Contact = lazy(() => import("./Components/Contact/Contact"));


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="container">
            <Suspense fallback={"loading..."}>
              <LazyLoad height={"100vh"} offset={-100}>
                <section id="#home">
                  <Hero />
                </section>
              </LazyLoad>
            </Suspense>

            <Suspense fallback={"loading..."}>
              <LazyLoad height={"100vh"} offset={-100}>
                <section id="#services">
                  <Services />
                </section>
              </LazyLoad>
            </Suspense>

            <Suspense fallback={"loading..."}>
              <LazyLoad height={"100vh"} offset={-100}>
                <Portfolio />
              </LazyLoad>
            </Suspense>

            <Suspense fallback={"loading..."}>
              <LazyLoad height={"100vh"} offset={-100}>
                <section id="#contact">
                  <Contact />
                </section>
              </LazyLoad>
            </Suspense>
          </div>
        } />

        {/* ✅ Add this route for ProjectsPage */}
        <Route path="/projects" element={
          <Suspense fallback={"loading..."}>
            <ProjectsPage />
          </Suspense>
        } />
      </Routes>
    </Router>
  );
};


export default App