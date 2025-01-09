export interface Marketplace {
  name: string;
  isConnected: boolean;
}

export interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  brand: string;
  marketplaces: Marketplace[];
  status: string;
  price: number;
  stock: number;
  source: "Platform" | "Buyer";
  description?: string;
  createdAt?: string;
  updatedAt?: string;
  weight?: string;
  dimensions?: string;
  origin?: string;
  stockCountry?: string;
  hsCode?: string;
  packageQuantity?: number;
  estimatedDeliveryTime?: string;
  currency?: string;
  vat?: string;
  cost?: number;
  packageDimensions?: {
    width: number;
    length: number;
    height: number;
    weight: number;
    desi: number;
  };
}