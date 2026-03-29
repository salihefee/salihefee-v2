import { useState, useEffect } from "react";

const birthDate = new Date("2007-09-19T00:00:00+03:00");

const getAge = () => {
  const now = new Date();
  const todayStr = now.toLocaleDateString("en-CA", {
    timeZone: "Europe/Istanbul",
  });
  const [year, month, day] = todayStr.split("-").map(Number);

  let age = year - birthDate.getFullYear();
  const monthDiff = month - (birthDate.getMonth() + 1);
  if (monthDiff < 0 || (monthDiff === 0 && day < birthDate.getDate())) {
    age--;
  }
  return age;
};

export const useAge = () => {
  const [age, setAge] = useState(getAge);

  useEffect(() => {
    const now = new Date();
    const istanbulMidnight = new Date(
      now.toLocaleDateString("en-CA", { timeZone: "Europe/Istanbul" }) + "T00:00:00+03:00"
    );
    const msUntilMidnight = istanbulMidnight.getTime() + 86400000 - now.getTime();

    const timeout = setTimeout(() => {
      setAge(getAge());
    }, msUntilMidnight);

    return () => clearTimeout(timeout);
  }, [age]);

  return age;
};