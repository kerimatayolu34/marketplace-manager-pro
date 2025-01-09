import { Navbar } from "@/components/Navbar";
import { ProductTable } from "@/components/ProductTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const products = [
  {
    id: "1",
    name: "Giysi İçin Vakumlu Saklama Torbası",
    sku: "AL48YT0048",
    category: "Hurç",
    brand: "Buffer",
    marketplace: "Trendyol",
    status: "Satışta",
    price: 394.99,
    stock: 690,
    isConnected: true,
  },
  {
    id: "2",
    name: "Katlanabilir Organizer Çanta",
    sku: "AL48YT0049",
    category: "Organizer",
    brand: "HomeStore",
    marketplace: "Amazon",
    status: "Satışta",
    price: 249.99,
    stock: 450,
    isConnected: true,
  },
  {
    id: "3",
    name: "Çok Amaçlı Dolap İçi Düzenleyici",
    sku: "AL48YT0050",
    category: "Düzenleyici",
    brand: "SmartHome",
    marketplace: "Hepsiburada",
    status: "Satışta",
    price: 179.99,
    stock: 320,
    isConnected: true,
  },
  {
    id: "4",
    name: "Ayakkabı Saklama Kutusu",
    sku: "AL48YT0051",
    category: "Saklama",
    brand: "Buffer",
    marketplace: "Trendyol",
    status: "Stokta Yok",
    price: 129.99,
    stock: 0,
    isConnected: true,
  },
  {
    id: "5",
    name: "Makyaj Organizeri",
    sku: "AL48YT0052",
    category: "Organizer",
    brand: "BeautyBox",
    marketplace: "Amazon",
    status: "Satışta",
    price: 299.99,
    stock: 250,
    isConnected: false,
  },
  {
    id: "6",
    name: "Çekmece İçi Bölme Düzenleyici",
    sku: "AL48YT0053",
    category: "Düzenleyici",
    brand: "HomeStore",
    marketplace: "Hepsiburada",
    status: "Satışta",
    price: 149.99,
    stock: 180,
    isConnected: true,
  },
  {
    id: "7",
    name: "Gardırop Düzenleyici Set",
    sku: "AL48YT0054",
    category: "Düzenleyici",
    brand: "SmartHome",
    marketplace: "Trendyol",
    status: "Satışta",
    price: 599.99,
    stock: 120,
    isConnected: true,
  },
  {
    id: "8",
    name: "Takı Organizeri",
    sku: "AL48YT0055",
    category: "Organizer",
    brand: "BeautyBox",
    marketplace: "Amazon",
    status: "Satışta",
    price: 199.99,
    stock: 300,
    isConnected: true,
  }
];

const Products = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Ürünler</h1>
            <Button>Ürün Ekle</Button>
          </div>
          
          <div className="mb-6 flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Ürün adı veya Ürün barkodu ile ara"
                className="pl-10"
              />
            </div>
            <Button variant="outline">Detaylı Filtrele</Button>
          </div>

          <ProductTable products={products} />
        </div>
      </main>
    </div>
  );
};

export default Products;