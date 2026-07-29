import Hero from "../component/Hero/Hero";
import About from "../component/About/About";
import Skills from "../component/skill/skills";
import Projects from "../component/project/Project";
import Experience from "../component/Experience/Experience";
import Services from "../component/Services/Service";
import Contact from "../component/Contact/Contact";
import Stats from "../component/Stats/Stats";
import GitHubProjects from "../component/GitHub/GitHubProject";

function Home() {
  return (
    <>
      <Hero />

      <Stats />

      <About />

      <Skills />

      <Projects />

      <GitHubProjects />

      <Experience />

      <Services />

      <Contact />
    </>
  );
}

export default Home;
