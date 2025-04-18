import React, { useContext, useState } from 'react';
import { View, TextInput, Button, ActivityIndicator, Text } from 'react-native';
import { WeatherContext } from '../context/WeatherContext';
import { WeatherCard } from '../components/WeatherCard';
import { useWeather } from '../hooks/useWeather';


export const HomeScreen = () => {
  const { city, setCity } = useContext(WeatherContext);
  const [input, setInput] = useState(city || '');
  const { weatherData, getWeather, loading, error } = useWeather();

  const handleSearch = () => {
    getWeather(input);
    setCity(input);
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Enter city name"
        value={input}
        onChangeText={setInput}
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          marginBottom: 10,
          padding: 10,
          borderRadius: 5,
        }}
      />
      <Button title="Get Weather" onPress={handleSearch} />
      {loading && <ActivityIndicator style={{ marginTop: 10 }} />}
      {error && <Text style={{ color: 'red', marginTop: 10 }}>{error}</Text>}
      {weatherData && <WeatherCard data={weatherData} />}
    </View>
  );
};
