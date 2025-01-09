import { OrderTable } from "@/components/OrderTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const Orders = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Siparişler</h1>
          </div>
          
          <div className="mb-6 flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Sipariş numarası veya müşteri adı ile ara"
                className="pl-10"
              />
            </div>
            <Button variant="outline">Detaylı Filtrele</Button>
          </div>

          <OrderTable orders={orders} />
        </div>
      </main>
    </div>
  );
};

// Örnek sipariş verileri
const orders = [
  {
    id: "1",
    orderNumber: "SP123456",
    customerName: "Ahmet Yılmaz",
    marketplace: "Trendyol",
    status: "Hazırlanıyor",
    date: "2024-01-09",
    total: 1250.99,
    items: 3,
  },
  {
    id: "2",
    orderNumber: "SP123457",
    customerName: "Mehmet Demir",
    marketplace: "Trendyol",
    status: "Tamamlandı",
    date: "2024-01-08",
    total: 2499.99,
    items: 5,
  },
  {
    id: "3",
    orderNumber: "SP123458",
    customerName: "Ayşe Kaya",
    marketplace: "Trendyol",
    status: "İptal Edildi",
    date: "2024-01-07",
    total: 799.99,
    items: 2,
  },
];

export default Orders;