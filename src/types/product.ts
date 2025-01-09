export interface Marketplace {
  name: string;
  isConnected: boolean;
  marketplaceId?: string;  // Specific ID for each marketplace
  pimCategoryId?: string;  // Trendyol category ID
  shipmentAddressId?: string;
  cargoCompanyId?: string;
}

export interface ProductAttribute {
  name: string;
  value: string;
}

export interface ProductImage {
  url: string;
  order: number;
  isDefault: boolean;
}

export interface ShippingInfo {
  width: number;
  length: number;
  height: number;
  weight: number;
  desi: number;
  cargoCompanyId?: string;
  shipmentAddressId?: string;
  deliveryDuration: number;  // in days
}

export interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  categoryId?: string;  // Platform specific category ID
  brand: string;
  brandId?: string;    // Platform specific brand ID
  marketplaces: Marketplace[];
  status: string;
  price: number;
  stock: number;
  source: "Platform" | "Buyer";
  description?: string;
  createdAt?: string;
  updatedAt?: string;
  origin?: string;
  stockCountry?: string;
  hsCode?: string;
  packageQuantity?: number;
  estimatedDeliveryTime?: string;
  currency?: string;
  vat?: string;
  cost?: number;
  images?: ProductImage[];
  attributes?: ProductAttribute[];
  shipping?: ShippingInfo;
  packageDimensions?: {
    width: number;
    length: number;
    height: number;
    weight: number;
    desi: number;
  };
}