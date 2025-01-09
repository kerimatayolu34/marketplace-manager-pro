import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, ShoppingCart, Package, DollarSign } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

// Mock API call - Replace with real API when available
const fetchSalesData = async () => {
  return [
    { id: 1, price: 1500, status: 'active' },
    { id: 2, price: 2000, status: 'active' },
    { id: 3, price: 1800, status: 'active' },
    { id: 4, price: 2500, status: 'active' },
    { id: 5, price: 1200, status: 'active' },
    { id: 6, price: 3000, status: 'active' },
    { id: 7, price: 2200, status: 'active' },
    { id: 8, price: 1900, status: 'active' },
  ];
};

const calculateMonthlyData = (data: any[]) => {
  const months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran'];
  return months.map((month, index) => ({
    name: month,
    value: data.reduce((acc, curr) => acc + curr.price, 0) / months.length,
  }));
};

const Index = () => {
  const { data: salesData, isLoading } = useQuery({
    queryKey: ['sales-data'],
    queryFn: fetchSalesData,
    initialData: [],
  });

  // Calculate statistics
  const totalSales = salesData?.reduce((acc: number, curr: any) => acc + (curr.price || 0), 0) || 0;
  const totalOrders = salesData?.length || 0;
  const activeProducts = salesData?.filter((product: any) => product.status === 'active')?.length || 0;
  const growthRate = ((totalSales / 100000) * 100).toFixed(1);

  const monthlyData = calculateMonthlyData(salesData);

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-foreground mb-8">Dashboard</h1>
        
        {/* İstatistik Kartları */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Toplam Satış</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₺{totalSales.toLocaleString('tr-TR')}</div>
              <p className="text-xs text-muted-foreground">+20.1% geçen aydan</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Yeni Siparişler</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalOrders}</div>
              <p className="text-xs text-muted-foreground">+201 geçen aydan</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Aktif Ürünler</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{activeProducts}</div>
              <p className="text-xs text-muted-foreground">+180 geçen aydan</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Büyüme</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+{growthRate}%</div>
              <p className="text-xs text-muted-foreground">+2.5% geçen aydan</p>
            </CardContent>
          </Card>
        </div>

        {/* Satış Grafiği */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Satış Grafiği</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Index;