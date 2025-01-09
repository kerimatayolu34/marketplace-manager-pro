import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Store, ShoppingCart, Package, Building2, Factory } from "lucide-react"
import { Product } from "@/types/product"

interface MarketplacesTabProps {
  product: Product;
}

const getMarketplaceIcon = (name: string) => {
  const props = {
    className: `h-5 w-5 ${
      name.toLowerCase() === "trendyol" ? "text-orange-500" :
      name.toLowerCase() === "amazon" ? "text-yellow-500" :
      name.toLowerCase() === "hepsiburada" ? "text-red-500" :
      name.toLowerCase() === "n11" ? "text-blue-500" :
      name.toLowerCase() === "gittigidiyor" ? "text-purple-500" :
      name.toLowerCase() === "ciceksepeti" ? "text-pink-500" :
      "text-gray-500"
    }`
  };

  switch (name.toLowerCase()) {
    case "trendyol":
      return <Store {...props} aria-label="Trendyol" />;
    case "amazon":
      return <ShoppingCart {...props} aria-label="Amazon" />;
    case "hepsiburada":
      return <Package {...props} aria-label="Hepsiburada" />;
    case "n11":
      return <Building2 {...props} aria-label="N11" />;
    case "gittigidiyor":
      return <Store {...props} aria-label="GittiGidiyor" />;
    case "ciceksepeti":
      return <Factory {...props} aria-label="Çiçeksepeti" />;
    default:
      return <Store {...props} aria-label={name} />;
  }
};

export const MarketplacesTab = ({ product }: MarketplacesTabProps) => {
  const allMarketplaces = [
    { name: "Trendyol", isConnected: false, ...product.marketplaces.find(m => m.name.toLowerCase() === "trendyol") },
    { name: "Amazon", isConnected: false, ...product.marketplaces.find(m => m.name.toLowerCase() === "amazon") },
    { name: "Hepsiburada", isConnected: false, ...product.marketplaces.find(m => m.name.toLowerCase() === "hepsiburada") },
    { name: "N11", isConnected: false, ...product.marketplaces.find(m => m.name.toLowerCase() === "n11") },
    { name: "GittiGidiyor", isConnected: false, ...product.marketplaces.find(m => m.name.toLowerCase() === "gittigidiyor") },
    { name: "Çiçeksepeti", isConnected: false, ...product.marketplaces.find(m => m.name.toLowerCase() === "ciceksepeti") }
  ];

  return (
    <Tabs defaultValue={allMarketplaces[0]?.name.toLowerCase()} className="w-full">
      <TabsList className="w-full flex flex-wrap gap-1">
        {allMarketplaces.map((marketplace, index) => (
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
      
      {allMarketplaces.map((marketplace, index) => (
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
            
            {marketplace.name.toLowerCase() === "hepsiburada" && (
              <>
                <div className="grid gap-1.5">
                  <Label>Garanti Süresi (Ay)</Label>
                  <Input type="number" placeholder="Garanti süresini giriniz" />
                </div>
                <div className="grid gap-1.5">
                  <Label>Maksimum Teslimat Süresi (Gün)</Label>
                  <Input type="number" placeholder="Maksimum teslimat süresini giriniz" />
                </div>
                <div className="grid gap-1.5">
                  <Label>Sevkiyat Süresi (Gün)</Label>
                  <Input type="number" placeholder="Sevkiyat süresini giriniz" />
                </div>
                <div className="grid gap-1.5">
                  <Label>Ürün Durumu</Label>
                  <Select defaultValue="new">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="new">Yeni</SelectItem>
                      <SelectItem value="used">Kullanılmış</SelectItem>
                      <SelectItem value="refurbished">Yenilenmiş</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-1.5">
                  <Label>Stok Durumu</Label>
                  <Select defaultValue="inStock">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="inStock">Stokta</SelectItem>
                      <SelectItem value="outOfStock">Stokta Yok</SelectItem>
                      <SelectItem value="preorder">Ön Sipariş</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </>
            )}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
};