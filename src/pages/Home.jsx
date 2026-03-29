import Socials from "../components/Socials";
import Projects from "../components/Projects";
import "./Home.css";

const socialLinks = [
  {
    service: "GitHub",
    account: "salihefee",
    url: "https://github.com/salihefee",
    disabled: false,
  },
  { service: "Last.fm", account: "REDACTED", url: "", disabled: true },
  {
    service: "YouTube",
    account: "@salihefee",
    url: "https://www.youtube.com/@salihefee",
    disabled: false,
  },
  {
    service: "osu!",
    account: "salihefee",
    url: "https://osu.ppy.sh/u/salihefee",
    disabled: false,
  },
];

const projects = [
  {
    title: "BadAppleMinecraft",
    lang: "Java, Bukkit",
    desc: "A Minecraft plugin that plays the Bad Apple!! music video (or any video you want).",
    date: "Jan 23, 2024",
    projectLink: "https://github.com/salihefee/BadAppleMinecraft",
  },
  {
    title: "spectacle-autoimgur",
    lang: "C, libcurl",
    desc: "A program that will watch the screenshots folder and upload any new images to Imgur.",
    date: "Jan 21, 2025",
    projectLink: "https://github.com/salihefee/spectacle-autoimgur",
  },
  {
    title: "MapDownloader",
    lang: "C#",
    desc: 'A "proxy" that will intercept links to the browser and download if they are osu! beatmaps. My first actual project.',
    date: "Aug 11, 2023",
    projectLink: "https://github.com/salihefee/MapDownloader",
  },
  {
    title: "MineStorage",
    lang: "Java, Bukkit",
    desc: "A Minecraft plugin that will basically store files in a minecraft world by encoding them into blocks. A recreation of BK Binary's project.",
    date: "Jan 28, 2024",
    projectLink: "https://github.com/salihefee/MineStorage",
  },
  {
    title: "osu-rpc",
    lang: "C#, DiscordRPC",
    desc: "A better version of the osu! discord presence. Also one of my first projects. Obviously.",
    date: "Sep 6, 2023",
    projectLink: "https://github.com/salihefee/osu-rpc",
  },
  {
    title: "c-raycaster",
    lang: "C, raylib",
    desc: "My first C project, a simple raycaster. Also bundles a memory eater for FREE!",
    date: "Feb 1, 2024",
    projectLink: "https://github.com/salihefee/c-raycaster",
  },
];

const calculateAge = () => {
  const birthDate = new Date("2007-09-19T00:00:00+03:00");

  const now = new Date();
  const todayStr = now.toLocaleDateString("en-CA", { timeZone: "Europe/Istanbul" });
  const [year, month, day] = todayStr.split("-").map(Number);

  let age = year - birthDate.getFullYear();
  const monthDiff = month - (birthDate.getMonth() + 1);

  if (monthDiff < 0 || (monthDiff === 0 && day < birthDate.getDate())) {
    age--;
  }

  return age;
};

function Home({ theme, setTheme }) {
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
          Programmer • {calculateAge()} • Turkey • Istanbul
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
