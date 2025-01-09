import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Store, ShoppingCart, Package } from "lucide-react";
import { Editor } from '@tinymce/tinymce-react';
import { Product, Marketplace } from "@/types/product";

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
    <DialogContent className="sm:max-w-[925px]">
      <DialogHeader>
        <DialogTitle>Ürün Düzenle</DialogTitle>
      </DialogHeader>
      <div className="grid gap-4">
        <div className="grid grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
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
                <Input id="stock" type="number" defaultValue={product.stock} readOnly className="bg-gray-50" />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="packageQuantity">Koli İçi Adet</Label>
                <Input id="packageQuantity" type="number" defaultValue={product.packageQuantity || 0} readOnly className="bg-gray-50" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="grid gap-1.5">
                <Label htmlFor="estimatedDeliveryTime">Tahmini Teslim Süresi (Gün)</Label>
                <Input id="estimatedDeliveryTime" defaultValue={product.estimatedDeliveryTime || "1"} readOnly className="bg-gray-50" />
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
                <Label htmlFor="price">Satış Fiyatı (KDV Dahil)</Label>
                <Input id="price" type="number" defaultValue={product.price} />
              </div>
            </div>

            <div className="grid gap-1.5">
              <Label htmlFor="cost">Maliyet (KDV Dahil)</Label>
              <Input id="cost" type="number" defaultValue={product.cost || product.price} readOnly className="bg-gray-50" />
            </div>

            <div className="grid gap-1.5">
              <Label htmlFor="description">Ürün Açıklaması</Label>
              <Editor
                apiKey="your-api-key"
                initialValue={product.description || ""}
                init={{
                  height: 300,
                  menubar: false,
                  plugins: [
                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                    'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                  ],
                  toolbar: 'undo redo | blocks | ' +
                    'bold italic forecolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help',
                  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
              />
            </div>
          </div>

          {/* Right Column */}
          <div>
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
                        <SelectTrigger className="bg-gray-50">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="connected">Bağlı</SelectItem>
                          <SelectItem value="disconnected">Bağlı Değil</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-1.5">
                      <Label>Pazaryeri Ürün Kodu</Label>
                      <Input placeholder="Pazaryeri ürün kodunu giriniz" readOnly className="bg-gray-50" />
                    </div>
                    <div className="grid gap-1.5">
                      <Label>Pazaryeri Komisyon Oranı (%)</Label>
                      <Input type="number" placeholder="Komisyon oranını giriniz" readOnly className="bg-gray-50" />
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </DialogContent>
  );
};