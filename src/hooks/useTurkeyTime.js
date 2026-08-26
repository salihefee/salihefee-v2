import { useState, useEffect } from "react";

export const useTurkeyTime = () => {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const tick = () => setTime(new Date());
    tick();

    let interval;
    const timeout = setTimeout(
      () => {
        tick();
        interval = setInterval(tick, 60000);
      },
      60000 - (Date.now() % 60000)
    );

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  return time?.toLocaleTimeString("en-GB", {
    timeZone: "Europe/Istanbul",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }) ?? "--:--";
};
