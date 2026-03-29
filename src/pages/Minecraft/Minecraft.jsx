import ServerDetails from "../../components/ServerDetails/ServerDetails";
import HowToJoin from "../../components/HowToJoin/HowToJoin";
import "./Minecraft.css";

const serverDetails = [
  { label: "address", value: "mc.salihefeergur.com.tr" },
  { label: "version", value: "1.21.11" },
  { label: "software", value: "Paper" },
  { label: "voice chat", value: "Simple Voice Chat" },
  { label: "protection", value: "Whitelist + AuthMeReloaded + CoreProtect" },
  { label: "bedrock access", value: "Geyser + Floodgate" },
];

const serverSteps = [
  {
    num: "01",
    title: "Request to be added to the whitelist",
    desc: "Contact me on any platform and request to be added to the whitelist.",
  },
  {
    num: "02",
    title: "Install voice chat (optional)",
    desc: "Download the Simple Voice Chat mod for your loader. It auto-connects when you join. No config needed.",
  },
  {
    num: "03",
    title: "Connect",
    desc: (
      <>
        Add <code className="mc-code">mc.salihefeergur.com.tr</code> as a server
        in your multiplayer list and join.
      </>
    ),
  },
  {
    num: "04",
    title: "Claim your username",
    desc: (
      <>
        Type{" "}
        <code className="mc-code">
          {"/register <password> <password again>"}
        </code>{" "}
        in the chat to claim your username.
      </>
    ),
  },
];

function Minecraft({ theme, setTheme }) {
  return (
    <>
      <header>
        <div className="name-header">
          <span className="name-first">Minecraft</span>

          <button
            className="invisible-button"
            onClick={() => setTheme(theme === "pink" ? "blue" : "pink")}
          >
            <span className="name-last">Server</span>
          </button>
        </div>
        <p className="title-sub">
          Private • Whitelisted • mc.salihefeergur.com.tr
        </p>
      </header>

      <section className="bio-section">
        <p>
          A private Paper server running 1.21.11 for friends. Has Simple Voice
          Chat installed. No setup needed on your end, just the mod. Bedrock
          clients are also supported.
        </p>
        <p>
          This server uses a whitelist, AuthMeReloaded and CoreProtect for
          protection.
        </p>
      </section>

      <span className="eyebrow">01 • server info</span>
      <section id="server-info">
        <ServerDetails serverDetailsArray={serverDetails} />
      </section>

      <span className="eyebrow">02 • how to join</span>
      <section id="how-to-join">
        <HowToJoin steps={serverSteps} />
      </section>
    </>
  );
}

export default Minecraft;
