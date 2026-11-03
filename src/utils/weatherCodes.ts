export const getcondition = (Code:number) => {
  if (Code === 0) return { label:"clear sky" , icon : "sun" };
  if (Code <= 3)return {label : "party cloudes" , icon : " cloud-sun"};
  if (Code <= 48) return { label: "Foggy", icon: "cloud-fog" };
  if (Code <= 57) return { label: "Drizzle", icon: "cloud-drizzle" };
  if (Code <= 67) return { label: "Rain", icon: "cloud-rain" };
  if (Code <= 77) return { label: "Snow", icon: "snowflake" };
  if (Code <= 82) return { label: "Rain showers", icon: "cloud-rain" };
  if (Code <= 86) return { label: "Snow showers", icon: "snowflake" };
  return { label: "Thunderstorm", icon: "cloud-lightning" };
};  
