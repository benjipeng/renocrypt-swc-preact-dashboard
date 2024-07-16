import { FunctionComponent } from 'preact';
import { WeatherWidget } from './widgets/WeatherWidget';
import { StockWidget } from './widgets/StockWidget';
import { TodoWidget } from './widgets/TodoWidget';

export const Dashboard: FunctionComponent = () => {
  return (
    <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <WeatherWidget />
        <StockWidget />
        <TodoWidget />
      </div>
    </main>
  );
};
