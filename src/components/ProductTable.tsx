import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Store, Package } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Marketplace {
  name: string;
  isConnected: boolean;
}

interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  brand: string;
  marketplaces: Marketplace[];
  status: string;
  price: number;
  stock: number;
}

interface ProductTableProps {
  products: Product[];
}

const getMarketplaceIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case "trendyol":
      return <Store className="h-5 w-5 text-orange-500" />;
    case "amazon":
      return <ShoppingCart className="h-5 w-5 text-yellow-500" />;
    case "hepsiburada":
      return <Package className="h-5 w-5 text-red-500" />;
    default:
      return <Store className="h-5 w-5 text-gray-500" />;
  }
};

const ProductEditDialog = ({ product }: { product: Product }) => {
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Ürün Düzenle</DialogTitle>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Ürün Adı</Label>
          <Input id="name" defaultValue={product.name} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="sku">Ürün Barkodu</Label>
          <Input id="sku" defaultValue={product.sku} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="price">Fiyat</Label>
          <Input id="price" type="number" defaultValue={product.price} />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="stock">Stok</Label>
          <Input id="stock" type="number" defaultValue={product.stock} />
        </div>
      </div>
    </DialogContent>
  );
};

export const ProductTable = ({ products }: ProductTableProps) => {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[300px]">Ürün Bilgisi</TableHead>
            <TableHead>Ürün Barkodu</TableHead>
            <TableHead>Ürün Kategorisi</TableHead>
            <TableHead>Marka</TableHead>
            <TableHead>Pazaryeri</TableHead>
            <TableHead>Durum</TableHead>
            <TableHead>Fiyat</TableHead>
            <TableHead>Stok</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.sku}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{product.brand}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  {product.marketplaces
                    .filter((marketplace) => marketplace.isConnected)
                    .map((marketplace, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-1 bg-gray-100 rounded-full px-3 py-1"
                        title={marketplace.name}
                      >
                        {getMarketplaceIcon(marketplace.name)}
                        <span className="text-sm">{marketplace.name}</span>
                      </div>
                    ))}
                </div>
              </TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded-full text-sm ${
                  product.status === "Satışta" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                }`}>
                  {product.status}
                </span>
              </TableCell>
              <TableCell>{product.price}₺</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="sm">
                      Düzenle
                    </Button>
                  </DialogTrigger>
                  <ProductEditDialog product={product} />
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};