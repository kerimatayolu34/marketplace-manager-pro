import { Box, Building2, Factory, Package, ShoppingBag, ShoppingCart, Store, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { useState } from "react"

interface Marketplace {
  id: string
  name: string
  icon: React.ComponentType<any>
}

export default function Integrations() {
  const [selectedMarketplace, setSelectedMarketplace] = useState<Marketplace | null>(null)
  const [isEnabled, setIsEnabled] = useState(false)
  const [autoSync, setAutoSync] = useState(false)

  const marketplaces: Marketplace[] = [
    {
      id: "trendyol",
      name: "Trendyol",
      icon: ShoppingBag
    },
    {
      id: "amazon",
      name: "Amazon",
      icon: Box
    },
    {
      id: "shopify",
      name: "Shopify",
      icon: Store
    },
    {
      id: "n11",
      name: "N11",
      icon: ShoppingCart
    },
    {
      id: "gittigidiyor",
      name: "GittiGidiyor",
      icon: Box
    },
    {
      id: "hepsiburada",
      name: "Hepsiburada",
      icon: Store
    },
    {
      id: "ciceksepeti",
      name: "Çiçeksepeti",
      icon: Truck
    },
    {
      id: "morhipo",
      name: "Morhipo",
      icon: Building2
    },
    {
      id: "boyner",
      name: "Boyner",
      icon: Store
    },
    {
      id: "pazarama",
      name: "Pazarama",
      icon: Factory
    },
    {
      id: "aliexpress",
      name: "AliExpress",
      icon: Package
    },
    {
      id: "epttavm",
      name: "ePttAVM",
      icon: Store
    },
    {
      id: "evidea",
      name: "Evidea",
      icon: Store
    }
  ]

  return (
    <div className="container mx-auto p-6 bg-background text-foreground min-h-screen">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Entegrasyonlar</h1>
        <p className="text-muted-foreground mt-1">Pazaryeri entegrasyonlarınızı yapılandırın</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {marketplaces.map((marketplace) => (
          <Dialog key={marketplace.id}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="w-full h-32 flex flex-col items-center justify-center gap-4 hover:bg-accent bg-card"
                onClick={() => setSelectedMarketplace(marketplace)}
              >
                <marketplace.icon size={32} />
                <span className="font-medium text-lg">{marketplace.name}</span>
              </Button>
            </DialogTrigger>
            
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>{marketplace.name} Entegrasyonu</DialogTitle>
              </DialogHeader>
              
              <div className="space-y-6 py-4">
                <p className="text-muted-foreground">
                  Entegrasyon için gerekli API bilgilerini girin ve bağlantıyı test edin
                </p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="apiKey" className="text-sm font-medium">API Anahtarı</label>
                    <Input
                      id="apiKey"
                      placeholder={`${marketplace.name} API anahtarınızı girin`}
                      className="w-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="secretKey" className="text-sm font-medium">Gizli Anahtar</label>
                    <Input
                      id="secretKey"
                      type="password"
                      placeholder={`${marketplace.name} gizli anahtarınızı girin`}
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-4 pt-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="text-sm font-medium">Entegrasyonu Etkinleştir</div>
                        <div className="text-sm text-muted-foreground">
                          Bu pazaryeri entegrasyonunu etkinleştirin veya devre dışı bırakın
                        </div>
                      </div>
                      <Switch
                        checked={isEnabled}
                        onCheckedChange={setIsEnabled}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="text-sm font-medium">Otomatik Senkronizasyon</div>
                        <div className="text-sm text-muted-foreground">
                          Ürünleri ve siparişleri otomatik olarak senkronize et
                        </div>
                      </div>
                      <Switch
                        checked={autoSync}
                        onCheckedChange={setAutoSync}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button variant="outline" className="flex-1">
                    Bağlantıyı Test Et
                  </Button>
                  <Button className="flex-1">
                    Değişiklikleri Kaydet
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  )
}