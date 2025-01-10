import { ProductTable } from "@/components/ProductTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

const products = [
  {
    id: "1",
    name: "Giysi İçin Vakumlu Saklama Torbası",
    sku: "AL48YT0048",
    category: "Hurç",
    categoryId: "411",
    brand: "Buffer",
    brandId: "1522",
    marketplaces: [
      { 
        name: "Trendyol", 
        isConnected: true,
        marketplaceId: "15789456",
        pimCategoryId: "411",
        shipmentAddressId: "12345",
        cargoCompanyId: "10"
      },
      { 
        name: "Amazon", 
        isConnected: true,
        marketplaceId: "AMZN123456"
      }
    ],
    status: "Satışta",
    price: 394.99,
    stock: 690,
    source: "Platform" as const,
    images: [
      {
        url: "/placeholder.svg",
        order: 1,
        isDefault: true
      },
      {
        url: "/placeholder.svg",
        order: 2,
        isDefault: false
      }
    ],
    attributes: [
      {
        name: "Renk",
        value: "Şeffaf"
      },
      {
        name: "Boyut",
        value: "Büyük"
      }
    ],
    shipping: {
      width: 30,
      length: 40,
      height: 10,
      weight: 0.5,
      desi: 2,
      deliveryDuration: 3,
      cargoCompanyId: "10",
      shipmentAddressId: "12345"
    }
  },
  {
    id: "2",
    name: "Katlanabilir Organizer Çanta",
    sku: "AL48YT0049",
    category: "Organizer",
    brand: "HomeStore",
    marketplaces: [
      { name: "Amazon", isConnected: true },
      { name: "Hepsiburada", isConnected: true }
    ],
    status: "Satışta",
    price: 249.99,
    stock: 450,
    source: "Buyer" as const
  },
  {
    id: "3",
    name: "Çok Amaçlı Dolap İçi Düzenleyici",
    sku: "AL48YT0050",
    category: "Düzenleyici",
    brand: "SmartHome",
    marketplaces: [
      { name: "Hepsiburada", isConnected: true }
    ],
    status: "Satışta",
    price: 179.99,
    stock: 320,
    source: "Platform" as const
  },
  {
    id: "4",
    name: "Ayakkabı Saklama Kutusu",
    sku: "AL48YT0051",
    category: "Saklama",
    brand: "Buffer",
    marketplaces: [
      { name: "Trendyol", isConnected: true },
      { name: "Amazon", isConnected: false }
    ],
    status: "Stokta Yok",
    price: 129.99,
    stock: 0,
    source: "Buyer" as const
  },
  {
    id: "5",
    name: "Makyaj Organizeri",
    sku: "AL48YT0052",
    category: "Organizer",
    brand: "BeautyBox",
    marketplaces: [
      { name: "Amazon", isConnected: false }
    ],
    status: "Satışta",
    price: 299.99,
    stock: 250,
    source: "Platform" as const
  },
  {
    id: "6",
    name: "Çekmece İçi Bölme Düzenleyici",
    sku: "AL48YT0053",
    category: "Düzenleyici",
    brand: "HomeStore",
    marketplaces: [
      { name: "Hepsiburada", isConnected: true },
      { name: "Trendyol", isConnected: true }
    ],
    status: "Satışta",
    price: 149.99,
    stock: 180,
    source: "Buyer" as const
  },
  {
    id: "7",
    name: "Gardırop Düzenleyici Set",
    sku: "AL48YT0054",
    category: "Düzenleyici",
    brand: "SmartHome",
    marketplaces: [
      { name: "Trendyol", isConnected: true }
    ],
    status: "Satışta",
    price: 599.99,
    stock: 120,
    source: "Platform" as const
  },
  {
    id: "8",
    name: "Takı Organizeri",
    sku: "AL48YT0055",
    category: "Organizer",
    brand: "BeautyBox",
    marketplaces: [
      { name: "Amazon", isConnected: true },
      { name: "Hepsiburada", isConnected: true }
    ],
    status: "Satışta",
    price: 199.99,
    stock: 300,
    source: "Buyer" as const
  }
];

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter((product) => {
    const searchLower = searchQuery.toLowerCase();
    return (
      product.name.toLowerCase().includes(searchLower) ||
      product.sku.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="min-h-screen bg-[#F2F4F4]">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-[#081F4D]">Ürünler</h1>
          </div>
          
          <div className="mb-6 flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#626C85]" />
              <Input
                placeholder="Ürün adı veya Ürün barkodu ile ara"
                className="pl-10 bg-white border-[#E3E7F1] rounded-2xl"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button 
              variant="outline" 
              className="bg-white text-[#090E24] border-[#E3E7F1] rounded-2xl hover:bg-[#F2F4F4]"
            >
              Detaylı Filtrele
            </Button>
          </div>

          <ProductTable products={filteredProducts} />
        </div>
      </main>
    </div>
  );
};

export default Products;