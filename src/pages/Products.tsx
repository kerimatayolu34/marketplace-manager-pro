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
  },
  // Add more sample products as needed
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