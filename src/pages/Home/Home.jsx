import Socials from "../../components/Socials/Socials";
import Projects from "../../components/Projects/Projects";
import { projects } from "../../data/projects";
import { socialLinks } from "../../data/socials";
import { useTheme } from "../../hooks/useTheme";
import { useAge } from "../../hooks/useAge";

function Home() {
  const { theme, setTheme } = useTheme();
  const age = useAge();

  return (
    <>
      <header>
        <div className="name-header">
          <span className="name-first">Salih Efe</span>
          <button
            className="invisible-button"
            onClick={() => setTheme(theme === "pink" ? "blue" : "pink")}
          >
            <span className="name-last">Ergür</span>
          </button>
        </div>
        <p className="title-sub">
          Programmer • {age} • Turkey • Istanbul
        </p>
      </header>

      <section className="bio-section">
        <p>
          I'm a programmer based in Turkey. I'm interested in low-level concepts
          and inner workings of a computer.
        </p>
        <p>
          I'm also interested in aviation and enjoy learning about aircraft
          systems and flight mechanics.
        </p>
      </section>

      <span className="eyebrow">01 • socials</span>
      <section id="socials">
        <Socials socialLinks={socialLinks} />
      </section>

      <span className="eyebrow">02 • projects</span>
      <section id="projects">
        <Projects projects={projects} />
      </section>
    </>
  );
}

export default Home;