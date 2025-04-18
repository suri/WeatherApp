const API_KEY = '936073faf033a469df086570872cc7c9';

export const fetchWeather = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );

  if (!response.ok) {
    throw new Error('City not found');
  }

  return await response.json();
};
