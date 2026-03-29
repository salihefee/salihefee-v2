import ServerDetails from "../components/ServerDetails";
import "./Minecraft.css";

const serverDetails = [
  { label: "address", value: "mc.salihefeergur.com.tr" },
  { label: "version", value: "1.21.11" },
  { label: "software", value: "Paper" },
  { label: "voice chat", value: "Simple Voice Chat" },
  { label: "access", value: "Whitelist" },
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
        <p className="title-sub">Private • Whitelisted • mc.salihefeergur.com.tr</p>
      </header>

      <section className="bio-section">
        <p>
          A private Paper server running 1.21.11 for friends. Has Simple Voice Chat
          installed. No setup needed on your end, just the mod.
        </p>
        <p>
          It's whitelisted. DM me on any platform to get added.
        </p>
      </section>

      <span className="eyebrow">01 • server info</span>
      <section id="server-info">
        <ServerDetails serverDetails={serverDetails} />
      </section>

      <span className="eyebrow">02 • how to join</span>
      <section id="how-to-join">
        <div className="mc-steps">
          <div className="mc-step">
            <span className="mc-step-num">01</span>
            <div className="mc-step-content">
              <p className="mc-step-title">Get whitelisted</p>
              <p className="mc-step-desc">DM me on any platform.</p>
            </div>
          </div>
          <div className="mc-step">
            <span className="mc-step-num">02</span>
            <div className="mc-step-content">
              <p className="mc-step-title">Install voice chat (optional)</p>
              <p className="mc-step-desc">Download the Simple Voice Chat mod for your loader. It auto-connects when you join. No config needed.</p>
            </div>
          </div>
          <div className="mc-step">
            <span className="mc-step-num">03</span>
            <div className="mc-step-content">
              <p className="mc-step-title">Connect</p>
              <p className="mc-step-desc">Add <code className="mc-code">mc.salihefeergur.com.tr</code> as a server in your multiplayer list and join.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Minecraft;
