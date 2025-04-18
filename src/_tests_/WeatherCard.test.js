// __tests__/WeatherCard.test.js
import React from 'react';
import { render } from '@testing-library/react-native';
import { WeatherCard } from '../components/WeatherCard';

describe('WeatherCard', () => {
  const mockData = {
    name: 'New York',
    main: {
      temp: 21.4,
    },
    weather: [
      {
        main: 'Cloudy',
        icon: '04d',
      },
    ],
  };

  it('renders city name, temperature, and condition', () => {
    const { getByText } = render(<WeatherCard data={mockData} />);

    expect(getByText('New York')).toBeTruthy();
    expect(getByText('21°C')).toBeTruthy(); // Rounds down from 21.4
    expect(getByText('Cloudy')).toBeTruthy();
  });
});
