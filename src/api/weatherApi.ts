import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000/api",
});

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
  };
};

export const getWeather = async (latitude: number, longitude: number) => {
  const response = await api.get("/weather", {
    params: { latitude, longitude },
  });

  return response.data;
};