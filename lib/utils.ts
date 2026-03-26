import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type FormatCurrencyOptions = {
  currency?: string;
  locale?: string;
  maximumFractionDigits?: number;
  minimumFractionDigits?: number;
};

export function formatCurrency(
  value: number | null | undefined,
  {
    currency = 'USD',
    locale = 'en-US',
    maximumFractionDigits = 2,
    minimumFractionDigits = 2,
  }: FormatCurrencyOptions = {}
) {
  if (value === null || value === undefined || Number.isNaN(value)) return '—';

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    maximumFractionDigits,
    minimumFractionDigits,
  }).format(value);
}
