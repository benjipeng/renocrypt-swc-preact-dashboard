import { useState, useEffect } from 'preact/hooks';

interface WeatherData {
  temperature: number;
  description: string;
}

export const useWeather = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulating an API call
    setTimeout(() => {
      setWeather({
        temperature: 22,
        description: 'Partly cloudy',
      });
      setLoading(false);
    }, 1000);
  }, []);

  return { weather, loading, error };
};
