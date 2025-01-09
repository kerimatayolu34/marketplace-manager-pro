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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

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
      return <Store className="h-5 w-5 text-orange-500" title="Trendyol" />;
    case "amazon":
      return <ShoppingCart className="h-5 w-5 text-yellow-500" title="Amazon" />;
    case "hepsiburada":
      return <Package className="h-5 w-5 text-red-500" title="Hepsiburada" />;
    default:
      return <Store className="h-5 w-5 text-gray-500" title={name} />;
  }
};

const ProductEditDialog = ({ product }: { product: Product }) => {
  return (
    <DialogContent className="sm:max-w-[625px]">
      <DialogHeader>
        <DialogTitle>Ürün Düzenle</DialogTitle>
      </DialogHeader>
      <div className="grid gap-6">
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Ürün Adı</Label>
              <Input id="name" defaultValue={product.name} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="sku">Ürün Barkodu</Label>
              <Input id="sku" defaultValue={product.sku} />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="category">Kategori</Label>
              <Input id="category" defaultValue={product.category} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="brand">Marka</Label>
              <Input id="brand" defaultValue={product.brand} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="price">Fiyat</Label>
              <Input id="price" type="number" defaultValue={product.price} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="stock">Stok</Label>
              <Input id="stock" type="number" defaultValue={product.stock} />
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="status">Durum</Label>
            <Select defaultValue={product.status}>
              <SelectTrigger>
                <SelectValue placeholder="Durum seçiniz" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Satışta">Satışta</SelectItem>
                <SelectItem value="Stokta Yok">Stokta Yok</SelectItem>
                <SelectItem value="Taslak">Taslak</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Tabs defaultValue={product.marketplaces[0]?.name.toLowerCase() || "trendyol"} className="w-full">
          <TabsList className="w-full justify-start">
            {product.marketplaces.map((marketplace, index) => (
              <TabsTrigger 
                key={index} 
                value={marketplace.name.toLowerCase()}
                className="flex items-center gap-2"
              >
                {getMarketplaceIcon(marketplace.name)}
                {marketplace.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {product.marketplaces.map((marketplace, index) => (
            <TabsContent key={index} value={marketplace.name.toLowerCase()}>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label>Pazaryeri Durumu</Label>
                  <Select defaultValue={marketplace.isConnected ? "connected" : "disconnected"}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="connected">Bağlı</SelectItem>
                      <SelectItem value="disconnected">Bağlı Değil</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label>Pazaryeri Ürün Kodu</Label>
                  <Input placeholder="Pazaryeri ürün kodunu giriniz" />
                </div>
                <div className="grid gap-2">
                  <Label>Pazaryeri Komisyon Oranı (%)</Label>
                  <Input type="number" placeholder="Komisyon oranını giriniz" />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </DialogContent>
  );
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
    // Implement bulk action logic here
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
