import { Header } from "../components/header/index";
import { Hero } from "../components/hero";
import { About } from "../components/about";
import { Services } from "../components/services";
import styles from "../styles/Home.module.css";
import { Skills } from "../components/skills";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";
import { ArrowButton } from "../components/arrowbutton";

export default function Home() {
  return (
    <div>
      <Header />

      <main className="container m-8 mx-auto">
        <Hero />
        <div id="about" className="my-16">
          <br />
        </div>
        <About />
        <div id="services" className="my-16">
          <br />
        </div>
        <Services />
        <div id="skills" className="my-16">
          <br />
        </div>
        <Skills />
        <div id="contact" className="my-16">
          <br />
        </div>
        <Contact />
      </main>
      <Footer />
      <ArrowButton />
    </div>
  );
}
