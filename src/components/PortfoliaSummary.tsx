import React from 'react';
import { DollarSign, TrendingUp, PieChart } from 'lucide-react';
import { Investment } from '../types';

interface Props {
  investments: Investment[];
}

export function PortfolioSummary({ investments }: Props) {
  const totalValue = investments.reduce(
    (sum, inv) => sum + inv.shares * inv.currentPrice,
    0
  );

  const totalGainLoss = investments.reduce(
    (sum, inv) => sum + (inv.currentPrice - inv.purchasePrice) * inv.shares,
    0
  );

  const percentageChange = (totalGainLoss / (totalValue - totalGainLoss)) * 100;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-blue-100 rounded-lg">
            <DollarSign className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Total Value</p>
            <p className="text-2xl font-bold">${totalValue.toLocaleString()}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-green-100 rounded-lg">
            <TrendingUp className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Total Gain/Loss</p>
            <p className={`text-2xl font-bold ${totalGainLoss >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {totalGainLoss >= 0 ? '+' : ''}{totalGainLoss.toLocaleString()} ({percentageChange.toFixed(2)}%)
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-purple-100 rounded-lg">
            <PieChart className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Number of Assets</p>
            <p className="text-2xl font-bold">{investments.length}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
