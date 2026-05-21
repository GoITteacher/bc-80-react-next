import AboutUs from "./AboutUs/AboutUs";
import Hero from "./Hero/Hero";
import Reviews from "./Reviews/Reviews";
import css from "./MainSection.module.css";
import Projects from "./Projects/Projects";

const MainSection = () => {
  return (
    <section className={css.wrapper}>
      <Hero />
      <AboutUs />
      <Reviews />
      <Projects />
    </section>
  );
};

export default MainSection;
