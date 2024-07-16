import { Component } from 'preact';

interface Stock {
  symbol: string;
  price: number;
}

interface StockWidgetState {
  stocks: Stock[];
}

export class StockWidget extends Component<{}, StockWidgetState> {
  state = {
    stocks: [
      { symbol: 'AAPL', price: 150.25 },
      { symbol: 'GOOGL', price: 2750.5 },
      { symbol: 'MSFT', price: 300.75 },
    ],
  };

  render() {
    return (
      <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Stocks</h2>
        <ul>
          {this.state.stocks.map((stock) => (
            <li key={stock.symbol} className="mb-2">
              {stock.symbol}: ${stock.price.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
