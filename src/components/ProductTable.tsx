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
import { Store, ShoppingBag, Package } from "lucide-react";

interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  brand: string;
  marketplaces: Array<{
    name: string;
    isConnected: boolean;
  }>;
  status: string;
  price: number;
  stock: number;
  source: "Platform" | "Buyer";
}

interface ProductTableProps {
  products: Product[];
}

const placeholderImages = [
  "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
  "https://images.unsplash.com/photo-1518770660439-4636190af475",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
];

const getMarketplaceIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case 'trendyol':
      return <Store className="inline-block mr-1" size={14} />;
    case 'amazon':
      return <ShoppingBag className="inline-block mr-1" size={14} />;
    case 'hepsiburada':
      return <Package className="inline-block mr-1" size={14} />;
    default:
      return <Store className="inline-block mr-1" size={14} />;
  }
};

export const ProductTable = ({ products }: ProductTableProps) => {
  return (
    <div className="yt-card">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="text-[#626E99] font-semibold h-10">Görsel</TableHead>
            <TableHead className="text-[#626E99] font-semibold h-10">Ürün Adı</TableHead>
            <TableHead className="text-[#626E99] font-semibold h-10">Barkod</TableHead>
            <TableHead className="text-[#626E99] font-semibold h-10">Kategori</TableHead>
            <TableHead className="text-[#626E99] font-semibold h-10">Marka</TableHead>
            <TableHead className="text-[#626E99] font-semibold h-10">Pazaryeri</TableHead>
            <TableHead className="text-[#626E99] font-semibold h-10">Durum</TableHead>
            <TableHead className="text-[#626E99] font-semibold h-10">Fiyat</TableHead>
            <TableHead className="text-[#626E99] font-semibold h-10">Stok</TableHead>
            <TableHead className="text-[#626E99] font-semibold h-10">Kaynak</TableHead>
            <TableHead className="text-[#626E99] font-semibold h-10"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product, index) => (
            <TableRow key={product.id} className="hover:bg-[#F6F7F7] transition-colors">
              <TableCell className="h-16">
                <img 
                  src={placeholderImages[index % placeholderImages.length]} 
                  alt={product.name}
                  className="w-12 h-12 object-cover rounded-lg"
                />
              </TableCell>
              <TableCell className="font-medium h-16">{product.name}</TableCell>
              <TableCell className="h-16">{product.sku}</TableCell>
              <TableCell className="h-16">{product.category}</TableCell>
              <TableCell className="h-16">{product.brand}</TableCell>
              <TableCell className="h-16">
                {product.marketplaces.map((marketplace, i) => (
                  <span
                    key={i}
                    className={`inline-flex items-center mr-1 px-2 py-1 rounded-full text-xs ${
                      marketplace.isConnected
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {getMarketplaceIcon(marketplace.name)}
                    {marketplace.name}
                  </span>
                ))}
              </TableCell>
              <TableCell className="h-16">
                <span className={`yt-status-badge ${
                  product.status === "Satışta" ? "yt-status-success" :
                  product.status === "Stokta Yok" ? "yt-status-error" :
                  "yt-status-warning"
                }`}>
                  {product.status}
                </span>
              </TableCell>
              <TableCell className="font-semibold h-16">{product.price.toLocaleString('tr-TR')}₺</TableCell>
              <TableCell className="h-16">{product.stock}</TableCell>
              <TableCell className="h-16">
                <span className={`yt-status-badge ${
                  product.source === "Platform" ? "bg-blue-100 text-blue-800" :
                  "bg-purple-100 text-purple-800"
                }`}>
                  {product.source}
                </span>
              </TableCell>
              <TableCell className="h-16">
                <Button 
                  variant="ghost" 
                  size="sm"
                  asChild
                  className="hover:bg-[#FF602E] hover:text-white transition-colors"
                >
                  <Link to={`/products/${product.id}`}>Detay</Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};