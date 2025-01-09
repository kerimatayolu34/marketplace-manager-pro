import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useState } from "react"

interface Marketplace {
  id: string
  name: string
  logo: string
}

export default function Integrations() {
  const [selectedMarketplace, setSelectedMarketplace] = useState<Marketplace | null>(null)

  const marketplaces: Marketplace[] = [
    {
      id: "trendyol",
      name: "Trendyol",
      logo: "/lovable-uploads/9198dc57-587a-471c-9cf7-05237ba11d53.png"
    },
    {
      id: "n11",
      name: "N11",
      logo: "/placeholder.svg"
    },
    {
      id: "hepsiburada",
      name: "Hepsiburada",
      logo: "/placeholder.svg"
    }
  ]

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Pazaryeri Entegrasyonları</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {marketplaces.map((marketplace) => (
          <Dialog key={marketplace.id}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="w-full h-32 flex flex-col items-center justify-center gap-4 hover:bg-accent"
                onClick={() => setSelectedMarketplace(marketplace)}
              >
                <img 
                  src={marketplace.logo} 
                  alt={`${marketplace.name} logo`}
                  className="h-16 w-16 object-contain"
                />
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