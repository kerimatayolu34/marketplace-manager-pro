import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Store, Package, Calendar, Weight, Ruler } from "lucide-react";
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
import { Textarea } from "@/components/ui/textarea";
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
  source: "Platform" | "Buyer";
  description?: string;
  createdAt?: string;
  updatedAt?: string;
  weight?: string;
  dimensions?: string;
}

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

const ProductEditDialog = ({ product }: { product: Product }) => {
  return (
    <DialogContent className="sm:max-w-[725px]">
      <DialogHeader>
        <DialogTitle>Ürün Düzenle</DialogTitle>
      </DialogHeader>
      <div className="grid gap-6">
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="name">Ürün Adı</Label>
              <Input id="name" defaultValue={product.name} readOnly className="bg-gray-50" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="sku">Ürün Barkodu</Label>
              <Input id="sku" defaultValue={product.sku} readOnly className="bg-gray-50" />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="category">Kategori</Label>
              <Input id="category" defaultValue={product.category} readOnly className="bg-gray-50" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="brand">Marka</Label>
              <Input id="brand" defaultValue={product.brand} readOnly className="bg-gray-50" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="price">Satış Fiyatı</Label>
              <Input id="price" type="number" defaultValue={product.price} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="stock">Stok</Label>
              <Input id="stock" type="number" defaultValue={product.stock} readOnly className="bg-gray-50" />
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="status">Durum</Label>
            <Select defaultValue={product.status}>
              <SelectTrigger className="bg-gray-50">
                <SelectValue placeholder="Durum seçiniz" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Satışta">Satışta</SelectItem>
                <SelectItem value="Stokta Yok">Stokta Yok</SelectItem>
                <SelectItem value="Taslak">Taslak</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <div className="grid gap-2">
              <Label>Ürün Açıklaması</Label>
              <Textarea 
                value={product.description || "Ürün açıklaması bulunmamaktadır."} 
                readOnly 
                className="bg-gray-50 min-h-[100px]"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Oluşturulma Tarihi
                </Label>
                <Input 
                  value={product.createdAt || new Date().toLocaleDateString('tr-TR')} 
                  readOnly 
                  className="bg-gray-50"
                />
              </div>
              <div className="grid gap-2">
                <Label className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Son Güncelleme
                </Label>
                <Input 
                  value={product.updatedAt || new Date().toLocaleDateString('tr-TR')} 
                  readOnly 
                  className="bg-gray-50"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label className="flex items-center gap-2">
                  <Weight className="h-4 w-4" />
                  Ağırlık
                </Label>
                <Input 
                  value={product.weight || "Belirtilmemiş"} 
                  readOnly 
                  className="bg-gray-50"
                />
              </div>
              <div className="grid gap-2">
                <Label className="flex items-center gap-2">
                  <Ruler className="h-4 w-4" />
                  Boyutlar
                </Label>
                <Input 
                  value={product.dimensions || "Belirtilmemiş"} 
                  readOnly 
                  className="bg-gray-50"
                />
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue={product.marketplaces[0]?.name.toLowerCase() || "trendyol"} className="w-full">
          <TabsList className="w-full">
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
                    <SelectTrigger className="bg-gray-50">
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
                  <Input placeholder="Pazaryeri ürün kodunu giriniz" readOnly className="bg-gray-50" />
                </div>
                <div className="grid gap-2">
                  <Label>Pazaryeri Komisyon Oranı (%)</Label>
                  <Input type="number" placeholder="Komisyon oranını giriniz" readOnly className="bg-gray-50" />
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
