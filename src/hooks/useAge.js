import { useState, useEffect } from "react";

const birthDate = { year: 2007, month: 9, day: 19 };

const getIstanbulDate = (date = new Date()) => {
  const parts = new Intl.DateTimeFormat("en", {
    timeZone: "Europe/Istanbul",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).formatToParts(date);

  return Object.fromEntries(
    parts
      .filter(({ type }) => type !== "literal")
      .map(({ type, value }) => [type, Number(value)])
  );
};

const getAge = () => {
  const { year, month, day } = getIstanbulDate();

  let age = year - birthDate.year;
  const monthDiff = month - birthDate.month;
  if (monthDiff < 0 || (monthDiff === 0 && day < birthDate.day)) {
    age--;
  }
  return age;
};

export const useAge = () => {
  const [age, setAge] = useState(getAge);

  useEffect(() => {
    const updateAtMidnight = () => {
      const now = new Date();
      const { year, month, day } = getIstanbulDate(now);
      const nextMidnight = Date.UTC(year, month - 1, day + 1) - 3 * 60 * 60 * 1000;

      return setTimeout(() => {
        setAge(getAge());
        timeout = updateAtMidnight();
      }, nextMidnight - now.getTime());
    };

    let timeout = updateAtMidnight();

    return () => clearTimeout(timeout);
  }, []);

  return age;
};
