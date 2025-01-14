import React from 'react';
import { PortfolioSummary } from './components/PortfolioSummary';
import { InvestmentList } from './components/InvestmentList';
import { Investment } from './types';
import { Wallet } from 'lucide-react';

// Sample data - in a real app, this would come from an API or database
const sampleInvestments: Investment[] = [
  {
    id: '1',
    symbol: 'AAPL',
    name: 'Apple Inc.',
    shares: 10,
    purchasePrice: 150,
    currentPrice: 175,
    type: 'stock'
  },
  {
    id: '2',
    symbol: 'BTC',
    name: 'Bitcoin',
    shares: 0.5,
    purchasePrice: 40000,
    currentPrice: 42000,
    type: 'crypto'
  },
  {
    id: '3',
    symbol: 'VTI',
    name: 'Vanguard Total Stock Market ETF',
    shares: 20,
    purchasePrice: 200,
    currentPrice: 220,
    type: 'etf'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Wallet className="w-8 h-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">Portfolio Tracker</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PortfolioSummary investments={sampleInvestments} />
        <InvestmentList investments={sampleInvestments} />
      </main>
    </div>
  );
}

export default App;
