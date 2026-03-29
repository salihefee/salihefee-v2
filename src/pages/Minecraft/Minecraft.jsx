import { useTheme } from "../../hooks/useTheme";
import ServerDetails from "../../components/ServerDetails/ServerDetails";
import HowToJoin from "../../components/HowToJoin/HowToJoin";
import { serverDetails, serverSteps } from "../../data/serverdata";

function Minecraft() {
  const { theme, setTheme } = useTheme();

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
