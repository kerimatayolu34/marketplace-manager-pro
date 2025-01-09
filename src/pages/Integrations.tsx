import { Box, Building2, Factory, Package, ShoppingBag, ShoppingCart, Store, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useState } from "react"

interface Marketplace {
  id: string
  name: string
  icon: React.ComponentType<any>
}

export default function Integrations() {
  const [selectedMarketplace, setSelectedMarketplace] = useState<Marketplace | null>(null)

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
                <span className="font-medium">{marketplace.name}</span>
              </Button>
            </DialogTrigger>
            
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>{marketplace.name} API Bilgileri</DialogTitle>
              </DialogHeader>
              
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <label htmlFor="apiKey" className="text-sm font-medium">API Key</label>
                  <Input
                    id="apiKey"
                    placeholder="API Key giriniz"
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="secretKey" className="text-sm font-medium">Secret Key</label>
                  <Input
                    id="secretKey"
                    type="password"
                    placeholder="Secret Key giriniz"
                    className="w-full"
                  />
                </div>
                
                <Button className="w-full">
                  Kaydet
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  )
}