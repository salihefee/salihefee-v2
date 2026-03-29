export const calculateAge = () => {
  const birthDate = new Date("2007-09-19T00:00:00+03:00");

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