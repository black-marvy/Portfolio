import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Layout
import Navbar from "./component/layout/Navbar";
import Footer from "./component/layout/Footer";
import Background from "./component/Background/Background";
import Loader from "./component/Loader/Loader";
import ScrollProgress from "./component/ScrollProgress/ScrollProgress";
import ScrollTop from "./component/ScrollTop/ScrollTop";
import ThemeToggle from "./component/ThemeToggle/ThemeToggle";
import CursorGlow from "./component/CursorGlow/CursorGlow";

// Pages
import Home from "./page/Home";
import About from "./page/About";
import Project from "./page/Project";
import Services from "./page/Service";
import Contact from "./page/Contact";
import Blog from "./page/Blog";
import Resume from "./page/Resume";
import NotFound from "./page/NotFound";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <AnimatePresence mode="wait">
        <Loader />
      </AnimatePresence>
    );
  }

  return (
    <>
    <ScrollProgress />
      <Background />
       <CursorGlow />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/resume" element={<Resume />} />
          

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <ThemeToggle />
      <ScrollTop />
      <Footer />
    </>
  );
}

export default App;
