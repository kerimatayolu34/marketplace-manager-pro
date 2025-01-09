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
}

interface OrderTableProps {
  orders: Order[];
}

export const OrderTable = ({ orders }: OrderTableProps) => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Sipariş No</TableHead>
            <TableHead>Müşteri</TableHead>
            <TableHead>Pazaryeri</TableHead>
            <TableHead>Durum</TableHead>
            <TableHead>Tarih</TableHead>
            <TableHead>Toplam</TableHead>
            <TableHead>Ürün Adedi</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.orderNumber}</TableCell>
              <TableCell>{order.customerName}</TableCell>
              <TableCell>{order.marketplace}</TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded-full text-sm ${
                  order.status === "Tamamlandı" ? "bg-green-100 text-green-800" :
                  order.status === "Hazırlanıyor" ? "bg-yellow-100 text-yellow-800" :
                  "bg-red-100 text-red-800"
                }`}>
                  {order.status}
                </span>
              </TableCell>
              <TableCell>{new Date(order.date).toLocaleDateString('tr-TR')}</TableCell>
              <TableCell>{order.total.toLocaleString('tr-TR')}₺</TableCell>
              <TableCell>{order.items}</TableCell>
              <TableCell>
                <Button variant="ghost" size="sm" asChild>
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