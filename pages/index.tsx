import { Header } from "../components/header/index";
import { Hero } from "../components/hero";
import { About } from "../components/about";
import { Services } from "../components/services";
import styles from "../styles/Home.module.css";
import { Skills } from "../components/skills";
import { Contact } from "../components/contact";

export default function Home() {
  return (
    <div>
      <Header />
      <br />
      <main className="container mx-auto">
        <Hero />
        <br />
        <About />
        <br />
        <Services />
        <br />
        <Skills />
        <br />
        <Contact />
      </main>
    </div>
  );
}
