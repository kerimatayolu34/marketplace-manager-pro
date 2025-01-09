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
    brand: "Buffer",
    marketplaces: [
      { name: "Trendyol", isConnected: true },
      { name: "Amazon", isConnected: true }
    ],
    status: "Satışta",
    price: 394.99,
    stock: 690,
    source: "Platform" as const
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
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Ürünler</h1>
          </div>
          
          <div className="mb-6 flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Ürün adı veya Ürün barkodu ile ara"
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline">Detaylı Filtrele</Button>
          </div>

          <ProductTable products={filteredProducts} />
        </div>
      </main>
    </div>
  );
};

export default Products;