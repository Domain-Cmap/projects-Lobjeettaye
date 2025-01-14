export interface Investment {
  id: string;
  symbol: string;
  name: string;
  shares: number;
  purchasePrice: number;
  currentPrice: number;
  type: 'stock' | 'crypto' | 'etf';
}

export interface AssetAllocation {
  type: string;
  percentage: number;
  value: number;
}
