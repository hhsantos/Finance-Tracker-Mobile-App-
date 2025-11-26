export interface Transaction {
  id: string;
  merchant: string;
  merchantLogo: string;
  date: string;
  amount: number;
  type: 'expense' | 'income';
}

export interface InstallmentItem {
  id: string;
  productName: string;
  merchant: string;
  productImage: string;
  price: number;
  dueDate: string;
  currentInstallment: number;
  totalInstallments: number;
}

export interface ChartDataPoint {
  date: string;
  value: number;
}

export enum Tab {
  HOME = 'Home',
  WALLET = 'Wallet',
  ANALYTICS = 'Analytics' // Mapped to "Progress" visually in prompt, usually Analytics functionality
}
