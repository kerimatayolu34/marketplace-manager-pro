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
  barcode?: string;
  listPrice?: number;
}

export interface Product {
  id: string;
  name: string;
  sku: string;
  barcode?: string;
  category: string;
  categoryId?: string;
  brand: string;
  brandId?: string;
  marketplaces: Marketplace[];
  status: string;
  price: number;
  listPrice?: number;
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
  productMainId?: string;
  variants?: ProductVariant[];
  customTextOptionAttributes?: ProductAttribute[];
  productStockStatus?: "ACTIVE" | "PASSIVE";
  approved?: boolean;
  rejected?: boolean;
  hasImage?: boolean;
  onSale?: boolean;
  pimCategoryId?: string;
  shipmentAddressId?: string;
  cargoCompanyId?: string;
  deliveryDuration?: number;
  maxDeliveryDays?: number;
  dispatchTime?: number;
  dimensionalWeight?: number;
  description1?: string;
  description2?: string;
  description3?: string;
  description4?: string;
  gender?: string;
  ageGroup?: string;
  color?: string;
  size?: string;
  warrantyPeriod?: number;
  warrantyType?: string;
  guaranteePeriod?: number;
  tax?: number;
  productCondition?: "NEW" | "USED";
  warranty?: string;
}