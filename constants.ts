import { ChartDataPoint, InstallmentItem, Transaction } from "./types";

export const CHART_DATA: ChartDataPoint[] = [
  { date: 'Nov 1', value: 20000 },
  { date: 'Nov 5', value: 85000 },
  { date: 'Nov 10', value: 85000 },
  { date: 'Nov 15', value: 160000 },
  { date: 'Nov 20', value: 160000 },
  { date: 'Nov 25', value: 240000 }, // Peak
  { date: 'Nov 30', value: 245000 },
];

export const RECENT_TRANSACTIONS: Transaction[] = [
  {
    id: '1',
    merchant: 'Amazon.com',
    merchantLogo: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg',
    date: 'Nov 18, 2025 • 9:17 AM',
    amount: 89.71,
    type: 'expense'
  },
  {
    id: '2',
    merchant: 'Temu.com',
    merchantLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Temu_border_logo.svg/1200px-Temu_border_logo.svg.png', // Placeholder approach
    date: 'Sep 13, 2025 • 8:49 PM',
    amount: 30.45,
    type: 'expense'
  },
  {
    id: '3',
    merchant: 'Apple Store',
    merchantLogo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    date: 'Sep 12, 2025 • 10:33 AM',
    amount: 261.92,
    type: 'expense'
  }
];

export const INSTALLMENTS: InstallmentItem[] = [
  {
    id: '1',
    productName: 'PS5',
    merchant: 'Amazon.com',
    productImage: 'https://images.unsplash.com/photo-1606318801954-d46d46d3360a?auto=format&fit=crop&q=80&w=150&h=150',
    price: 836.94,
    dueDate: '18',
    currentInstallment: 1,
    totalInstallments: 4
  },
  {
    id: '2',
    productName: 'Nikon Camera',
    merchant: 'Amazon.com',
    productImage: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=150&h=150',
    price: 563.04,
    dueDate: '18',
    currentInstallment: 3,
    totalInstallments: 4
  },
  {
    id: '3',
    productName: 'Gaming Laptop',
    merchant: 'Apple.com',
    productImage: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=150&h=150',
    price: 1746.94,
    dueDate: '18',
    currentInstallment: 2,
    totalInstallments: 4
  }
];
