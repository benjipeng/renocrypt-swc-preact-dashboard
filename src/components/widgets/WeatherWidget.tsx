import { FunctionComponent } from 'preact';
import { useWeather } from '../../hooks/useWeather';

export const WeatherWidget: FunctionComponent = () => {
  const { weather, loading, error } = useWeather();

  if (loading) return <div>Loading weather...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Weather</h2>
      <p className="text-4xl">{weather!.temperature!}°C</p>
      <p>{weather!.description!}</p>
    </div>
  );
};
