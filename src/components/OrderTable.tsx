import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface Order {
  id: string;
  orderNumber: string;
  customerName: string;
  marketplace: string;
  status: string;
  date: string;
  total: number;
  items: number;
  source: string;
}

interface OrderTableProps {
  orders: Order[];
}

export const OrderTable = ({ orders }: OrderTableProps) => {
  return (
    <div className="yt-card">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="text-[#626E99] font-semibold h-6 py-2">Sipariş No</TableHead>
            <TableHead className="text-[#626E99] font-semibold h-6 py-2">Müşteri</TableHead>
            <TableHead className="text-[#626E99] font-semibold h-6 py-2">Pazaryeri</TableHead>
            <TableHead className="text-[#626E99] font-semibold h-6 py-2">Kaynak</TableHead>
            <TableHead className="text-[#626E99] font-semibold h-6 py-2">Durum</TableHead>
            <TableHead className="text-[#626E99] font-semibold h-6 py-2">Tarih</TableHead>
            <TableHead className="text-[#626E99] font-semibold h-6 py-2">Toplam</TableHead>
            <TableHead className="text-[#626E99] font-semibold h-6 py-2">Ürün Adedi</TableHead>
            <TableHead className="text-[#626E99] font-semibold h-6 py-2"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id} className="hover:bg-[#F6F7F7] transition-colors">
              <TableCell className="font-medium h-4 py-1">{order.orderNumber}</TableCell>
              <TableCell className="h-4 py-1">{order.customerName}</TableCell>
              <TableCell className="h-4 py-1">{order.marketplace}</TableCell>
              <TableCell className="h-4 py-1">
                <span className={`yt-status-badge ${
                  order.source === "Platform" ? "bg-blue-100 text-blue-800" :
                  "bg-purple-100 text-purple-800"
                }`}>
                  {order.source}
                </span>
              </TableCell>
              <TableCell className="h-4 py-1">
                <span className={`yt-status-badge ${
                  order.status === "Tamamlandı" ? "yt-status-success" :
                  order.status === "Hazırlanıyor" ? "yt-status-warning" :
                  "yt-status-error"
                }`}>
                  {order.status}
                </span>
              </TableCell>
              <TableCell className="h-4 py-1">{new Date(order.date).toLocaleDateString('tr-TR')}</TableCell>
              <TableCell className="font-semibold h-4 py-1">{order.total.toLocaleString('tr-TR')}₺</TableCell>
              <TableCell className="h-4 py-1">{order.items}</TableCell>
              <TableCell className="h-4 py-1">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  asChild
                  className="hover:bg-[#FF602E] hover:text-white transition-colors"
                >
                  <Link to={`/orders/${order.id}`}>Detay</Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};