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
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { ProductEditDialog } from "./ProductEditDialog";
import { Product, Marketplace } from "@/types/product";

interface ProductTableProps {
  products: Product[];
}

const getMarketplaceIcon = (name: string) => {
  const props = {
    className: `h-5 w-5 ${
      name.toLowerCase() === "trendyol" ? "text-orange-500" :
      name.toLowerCase() === "amazon" ? "text-yellow-500" :
      name.toLowerCase() === "hepsiburada" ? "text-red-500" : "text-gray-500"
    }`
  };

  switch (name.toLowerCase()) {
    case "trendyol":
      return <Store {...props} aria-label="Trendyol" />;
    case "amazon":
      return <ShoppingCart {...props} aria-label="Amazon" />;
    case "hepsiburada":
      return <Package {...props} aria-label="Hepsiburada" />;
    default:
      return <Store {...props} aria-label={name} />;
  }
};

export const ProductTable = ({ products }: ProductTableProps) => {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedProducts(products.map(product => product.id));
    } else {
      setSelectedProducts([]);
    }
  };

  const handleSelectProduct = (productId: string, checked: boolean) => {
    if (checked) {
      setSelectedProducts([...selectedProducts, productId]);
    } else {
      setSelectedProducts(selectedProducts.filter(id => id !== productId));
    }
  };

  const handleBulkAction = () => {
    console.log('Selected products:', selectedProducts);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Button
          onClick={handleBulkAction}
          disabled={selectedProducts.length === 0}
          className="gap-2"
        >
          <ShoppingCart className="h-4 w-4" />
          Toplu Satışa Aç ({selectedProducts.length})
        </Button>
      </div>
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <Checkbox
                  checked={selectedProducts.length === products.length}
                  onCheckedChange={(checked) => handleSelectAll(checked as boolean)}
                />
              </TableHead>
              <TableHead className="w-[300px]">Ürün Bilgisi</TableHead>
              <TableHead>Ürün Barkodu</TableHead>
              <TableHead>Ürün Kategorisi</TableHead>
              <TableHead>Marka</TableHead>
              <TableHead className="w-[100px]">Pazaryeri</TableHead>
              <TableHead>Durum</TableHead>
              <TableHead>Kaynak</TableHead>
              <TableHead>Fiyat</TableHead>
              <TableHead>Stok</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedProducts.includes(product.id)}
                    onCheckedChange={(checked) => 
                      handleSelectProduct(product.id, checked as boolean)
                    }
                  />
                </TableCell>
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
                          className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full"
                          title={marketplace.name}
                        >
                          {getMarketplaceIcon(marketplace.name)}
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
                <TableCell>
                  <span className={`px-2 py-1 rounded-full text-sm ${
                    product.source === "Platform" ? "bg-blue-100 text-blue-800" : "bg-purple-100 text-purple-800"
                  }`}>
                    {product.source}
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
    </div>
  );
};