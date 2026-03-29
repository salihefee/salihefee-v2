export const serverDetails = [
  { label: "address", value: "mc.salihefeergur.com.tr" },
  { label: "version", value: "1.21.11" },
  { label: "software", value: "Paper" },
  { label: "voice chat", value: "Plasmo Voice" },
  { label: "protection", value: "Whitelist + AuthMeReloaded + CoreProtect" },
  { label: "bedrock access", value: "Geyser + Floodgate" },
];

export const serverSteps = [
  {
    num: "01",
    title: "Request to be added to the whitelist",
    desc: "Contact me on any platform and request to be added to the whitelist.",
  },
  {
    num: "02",
    title: "Install voice chat (optional)",
    desc: "Download the Plasmo Voice mod for your loader. It auto-connects when you join. No config needed.",
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