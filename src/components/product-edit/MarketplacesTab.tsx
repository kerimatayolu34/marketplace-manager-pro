import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Store, ShoppingCart, Package } from "lucide-react"
import { Product } from "@/types/product"

interface MarketplacesTabProps {
  product: Product;
}

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

export const MarketplacesTab = ({ product }: MarketplacesTabProps) => {
  return (
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
  );
};