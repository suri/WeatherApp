import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export const WeatherCard = ({ data }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.city}>{data.name}</Text>
      <Text style={styles.temp}>{Math.round(data.main.temp)}°C</Text>
      <Text>{data.weather[0].main}</Text>
      <Image
        source={{
          uri: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        }}
        style={styles.icon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 8,
    marginTop: 20,
  },
  city: { fontSize: 20, fontWeight: 'bold' },
  temp: { fontSize: 40 },
  icon: { width: 60, height: 60 },
});
