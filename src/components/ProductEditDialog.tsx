import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Store, ShoppingCart, Package, Image as ImageIcon } from "lucide-react";
import { Product, Marketplace, ProductAttribute } from "@/types/product";
import { ScrollArea } from "./ui/scroll-area";

const getMarketplaceIcon = (name: string) => {
  const props = {
    className: `h-5 w-5 ${
      name.toLowerCase() === "trendyol" ? "text-orange-500" :
      name.toLowerCase() === "amazon" ? "text-yellow-500" :
      name.toLowerCase() === "hepsiburada" ? "text-red-500" : "text-gray-500"
    }`
  };

  switch (name.toLowerCase()) {
    case "trendyol":
      return <Store {...props} aria-label="Trendyol" />;
    case "amazon":
      return <ShoppingCart {...props} aria-label="Amazon" />;
    case "hepsiburada":
      return <Package {...props} aria-label="Hepsiburada" />;
    default:
      return <Store {...props} aria-label={name} />;
  }
};

interface ProductEditDialogProps {
  product: Product;
}

export const ProductEditDialog = ({ product }: ProductEditDialogProps) => {
  return (
    <DialogContent className="sm:max-w-[925px] max-h-[90vh]">
      <DialogHeader>
        <DialogTitle>Ürün Düzenle</DialogTitle>
      </DialogHeader>
      <ScrollArea className="h-[calc(90vh-100px)]">
        <div className="grid gap-4 pb-4">
          <Tabs defaultValue="general">
            <TabsList className="w-full">
              <TabsTrigger value="general">Genel Bilgiler</TabsTrigger>
              <TabsTrigger value="marketplaces">Pazaryeri Bilgileri</TabsTrigger>
              <TabsTrigger value="images">Görseller</TabsTrigger>
              <TabsTrigger value="attributes">Özellikler</TabsTrigger>
              <TabsTrigger value="shipping">Kargo Bilgileri</TabsTrigger>
            </TabsList>

            <TabsContent value="general">
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="grid gap-1.5">
                    <Label htmlFor="name">Ürün Adı</Label>
                    <Input id="name" defaultValue={product.name} readOnly className="bg-gray-50" />
                  </div>
                  <div className="grid gap-1.5">
                    <Label htmlFor="brand">Marka</Label>
                    <Input id="brand" defaultValue={product.brand} readOnly className="bg-gray-50" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="grid gap-1.5">
                    <Label htmlFor="origin">Menşei</Label>
                    <Input id="origin" defaultValue={product.origin || "Belirtilmemiş"} readOnly className="bg-gray-50" />
                  </div>
                  <div className="grid gap-1.5">
                    <Label htmlFor="stockCountry">Stok Ülkesi</Label>
                    <Input id="stockCountry" defaultValue={product.stockCountry || "Belirtilmemiş"} readOnly className="bg-gray-50" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="grid gap-1.5">
                    <Label htmlFor="sku">Stok Kodu</Label>
                    <Input id="sku" defaultValue={product.sku} readOnly className="bg-gray-50" />
                  </div>
                  <div className="grid gap-1.5">
                    <Label htmlFor="hsCode">HS Kod/GTIP</Label>
                    <Input id="hsCode" defaultValue={product.hsCode || "Belirtilmemiş"} readOnly className="bg-gray-50" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="grid gap-1.5">
                    <Label htmlFor="stock">Stok Miktarı</Label>
                    <Input id="stock" type="number" defaultValue={product.stock} />
                  </div>
                  <div className="grid gap-1.5">
                    <Label htmlFor="packageQuantity">Koli İçi Adet</Label>
                    <Input id="packageQuantity" type="number" defaultValue={product.packageQuantity || 0} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="grid gap-1.5">
                    <Label htmlFor="price">Satış Fiyatı (KDV Dahil)</Label>
                    <Input id="price" type="number" defaultValue={product.price} />
                  </div>
                  <div className="grid gap-1.5">
                    <Label htmlFor="currency">Döviz</Label>
                    <Input id="currency" defaultValue={product.currency || "TL"} readOnly className="bg-gray-50" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="grid gap-1.5">
                    <Label htmlFor="vat">KDV (%)</Label>
                    <Input id="vat" defaultValue={product.vat || "20,00"} readOnly className="bg-gray-50" />
                  </div>
                  <div className="grid gap-1.5">
                    <Label htmlFor="cost">Maliyet (KDV Dahil)</Label>
                    <Input id="cost" type="number" defaultValue={product.cost || product.price} readOnly className="bg-gray-50" />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="marketplaces">
              <Tabs defaultValue={product.marketplaces[0]?.name.toLowerCase() || "trendyol"} className="w-full">
                <TabsList className="w-full flex flex-wrap gap-1">
                  {product.marketplaces.map((marketplace, index) => (
                    <TabsTrigger 
                      key={index} 
                      value={marketplace.name.toLowerCase()}
                      className="flex items-center gap-2"
                    >
                      {getMarketplaceIcon(marketplace.name)}
                      {marketplace.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {product.marketplaces.map((marketplace, index) => (
                  <TabsContent key={index} value={marketplace.name.toLowerCase()}>
                    <div className="grid gap-3 py-2">
                      <div className="grid gap-1.5">
                        <Label>Pazaryeri Durumu</Label>
                        <Select defaultValue={marketplace.isConnected ? "connected" : "disconnected"}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="connected">Bağlı</SelectItem>
                            <SelectItem value="disconnected">Bağlı Değil</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-1.5">
                        <Label>Pazaryeri Ürün ID</Label>
                        <Input defaultValue={marketplace.marketplaceId || ""} placeholder="Pazaryeri ürün ID giriniz" />
                      </div>
                      <div className="grid gap-1.5">
                        <Label>Pazaryeri Kategori ID</Label>
                        <Input defaultValue={marketplace.pimCategoryId || ""} placeholder="Pazaryeri kategori ID giriniz" />
                      </div>
                      <div className="grid gap-1.5">
                        <Label>Kargo Firma ID</Label>
                        <Input defaultValue={marketplace.cargoCompanyId || ""} placeholder="Kargo firma ID giriniz" />
                      </div>
                      <div className="grid gap-1.5">
                        <Label>Gönderim Adresi ID</Label>
                        <Input defaultValue={marketplace.shipmentAddressId || ""} placeholder="Gönderim adresi ID giriniz" />
                      </div>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </TabsContent>

            <TabsContent value="images">
              <div className="grid gap-4">
                <div className="grid grid-cols-4 gap-4">
                  {product.images?.map((image, index) => (
                    <div key={index} className="relative aspect-square rounded-lg border-2 border-dashed border-gray-200 p-4">
                      <img src={image.url} alt={`Ürün görseli ${index + 1}`} className="w-full h-full object-cover rounded" />
                      <div className="absolute top-2 right-2 bg-white rounded-full p-1">
                        {image.isDefault && <span className="text-xs text-green-600">Varsayılan</span>}
                      </div>
                    </div>
                  )) || (
                    <div className="col-span-4 aspect-video rounded-lg border-2 border-dashed border-gray-200 p-4 flex items-center justify-center">
                      <div className="text-center">
                        <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                        <p className="mt-2 text-sm text-gray-500">Henüz görsel eklenmemiş</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="attributes">
              <div className="grid gap-4">
                {product.attributes?.map((attribute, index) => (
                  <div key={index} className="grid grid-cols-2 gap-3">
                    <div className="grid gap-1.5">
                      <Label>Özellik Adı</Label>
                      <Input defaultValue={attribute.name} readOnly className="bg-gray-50" />
                    </div>
                    <div className="grid gap-1.5">
                      <Label>Değer</Label>
                      <Input defaultValue={attribute.value} />
                    </div>
                  </div>
                )) || (
                  <div className="text-center py-8 text-gray-500">
                    Henüz özellik eklenmemiş
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="shipping">
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="grid gap-1.5">
                    <Label>Genişlik (cm)</Label>
                    <Input type="number" defaultValue={product.shipping?.width || product.packageDimensions?.width} />
                  </div>
                  <div className="grid gap-1.5">
                    <Label>Uzunluk (cm)</Label>
                    <Input type="number" defaultValue={product.shipping?.length || product.packageDimensions?.length} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="grid gap-1.5">
                    <Label>Yükseklik (cm)</Label>
                    <Input type="number" defaultValue={product.shipping?.height || product.packageDimensions?.height} />
                  </div>
                  <div className="grid gap-1.5">
                    <Label>Ağırlık (kg)</Label>
                    <Input type="number" defaultValue={product.shipping?.weight || product.packageDimensions?.weight} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="grid gap-1.5">
                    <Label>Desi</Label>
                    <Input type="number" defaultValue={product.shipping?.desi || product.packageDimensions?.desi} readOnly className="bg-gray-50" />
                  </div>
                  <div className="grid gap-1.5">
                    <Label>Teslimat Süresi (Gün)</Label>
                    <Input type="number" defaultValue={product.shipping?.deliveryDuration || 3} />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </ScrollArea>
    </DialogContent>
  );
};