export interface Marketplace {
  name: string;
  isConnected: boolean;
  marketplaceId?: string;
  pimCategoryId?: string;
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
  deliveryDuration: number;
  maxDeliveryDays?: number;
  dispatchTime?: number;
}

export interface ProductVariant {
  variantSku: string;
  attributes: ProductAttribute[];
  stock: number;
  price: number;
}

export interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  categoryId?: string;
  brand: string;
  brandId?: string;
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
  // Yeni eklenen Hepsiburada alanları
  guaranteePeriod?: number;
  tax?: number;
  productCondition?: "NEW" | "USED";
  warranty?: string;
  variants?: ProductVariant[];
  customTextOptionAttributes?: ProductAttribute[];
  productStockStatus?: "ACTIVE" | "PASSIVE";
}