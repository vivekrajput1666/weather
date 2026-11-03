import axios from "axios";

export const getCoordinates = async (city: string) => {
  const response = await axios.get(
    "https://geocoding-api.open-meteo.com/v1/search",
    { params: { name: city, count: 1 } }
  );

  const place = response.data.results?.[0];
  if (!place) throw new Error("City not found");

  return {
    latitude: place.latitude as number,
    longitude: place.longitude as number,
    name: place.name as string,
    country: place.country as string,
  };
};

export const getWeather = async (latitude: number, longitude: number) => {
  const response = await axios.get("https://api.open-meteo.com/v1/forecast", {
    params: {
      latitude,
      longitude,
      current: "temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code",
    },
  });

  // Same shape as your backend returned, so App.tsx stays unchanged
  return { success: true, data: response.data };
};