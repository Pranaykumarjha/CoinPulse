import React from 'react';
import DataTable from '@/components/DataTable';

const skeletonTrendingCoins: TrendingCoin[] = Array.from({ length: 6 }, (_, i) => ({
  item: {
    id: `skeleton-${i}`,
    name: '—',
    symbol: '—',
    market_cap_rank: 0,
    thumb: '/converter.svg',
    large: '/converter.svg',
    data: {
      price: 0,
      price_change_percentage_24h: {
        usd: 0,
      },
    },
  },
}));

const trendingCoinsFallbackColumns: DataTableColumn<TrendingCoin>[] = [
  {
    header: 'Name',
    cell: () => (
      <div className="name-cell">
        <div className="name-link">
          <div className="name-image skeleton animate-pulse" />
          <div className="name-line skeleton animate-pulse" />
        </div>
      </div>
    ),
  },
  {
    header: '24hr change',
    cell: () => (
      <div className="change-cell">
        <div className="price-change">
          <div className="change-icon skeleton animate-pulse" />
          <div className="change-line skeleton animate-pulse" />
        </div>
      </div>
    ),
  },
  {
    header: 'Price',
    cell: () => (
      <div className="price-cell">
        <div className="price-line skeleton animate-pulse" />
      </div>
    ),
  },
];

export function CoinOverviewFallback() {
  return (
    <div id="coin-overview-fallback">
      <div className="header pt-2">
        <div className="header-image skeleton animate-pulse" />
        <div className="info">
          <div className="header-line-sm skeleton animate-pulse" />
          <div className="header-line-lg skeleton animate-pulse" />
        </div>
      </div>
    </div>
  );
}

export function TrendingCoinsFallback() {
  return (
    <div id="trending-coins-fallback">
      <h4>Trending Coins</h4>

      <DataTable
        data={skeletonTrendingCoins}
        columns={trendingCoinsFallbackColumns}
        rowKey={(coin) => coin.item.id}
        tableClassName="trending-coins-table"
      />
    </div>
  );
}

