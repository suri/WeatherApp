import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [city, setCity] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('lastCity').then((savedCity) => {
      if (savedCity) {
        setCity(savedCity);
      }
    });
  }, []);

  const saveCity = (newCity) => {
    setCity(newCity);
    AsyncStorage.setItem('lastCity', newCity);
  };

  return (
    <WeatherContext.Provider value={{ city, setCity: saveCity }}>
      {children}
    </WeatherContext.Provider>
  );
};
