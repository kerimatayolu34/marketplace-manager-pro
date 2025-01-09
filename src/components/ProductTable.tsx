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
  origin?: string;
  stockCountry?: string;
  hsCode?: string;
  packageQuantity?: number;
  minPurchaseQuantity?: number;
  estimatedDeliveryTime?: string;
  currency?: string;
  vat?: string;
  cost?: number;
  tags?: string;
  packageDimensions?: {
    width: number;
    length: number;
    height: number;
    weight: number;
    desi: number;
  };
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
    <DialogContent className="sm:max-w-[925px]">
      <DialogHeader>
        <DialogTitle>Ürün Düzenle</DialogTitle>
      </DialogHeader>
      <div className="grid gap-4">
        <div className="grid grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div className="grid gap-1.5">
                <Label htmlFor="name">Ürün Adı</Label>
                <Input id="name" defaultValue={product.name} readOnly className="bg-gray-50" />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="brand">Marka</Label>
                <Input id="brand" defaultValue={product.brand} readOnly className="bg-gray-50" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="grid gap-1.5">
                <Label htmlFor="origin">Menşei</Label>
                <Input id="origin" defaultValue={product.origin || "Belirtilmemiş"} readOnly className="bg-gray-50" />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="stockCountry">Stok Ülkesi</Label>
                <Input id="stockCountry" defaultValue={product.stockCountry || "Belirtilmemiş"} readOnly className="bg-gray-50" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="grid gap-1.5">
                <Label htmlFor="sku">Stok Kodu</Label>
                <Input id="sku" defaultValue={product.sku} readOnly className="bg-gray-50" />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="hsCode">HS Kod/GTIP</Label>
                <Input id="hsCode" defaultValue={product.hsCode || "Belirtilmemiş"} readOnly className="bg-gray-50" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="grid gap-1.5">
                <Label htmlFor="stock">Stok Miktarı</Label>
                <Input id="stock" type="number" defaultValue={product.stock} readOnly className="bg-gray-50" />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="packageQuantity">Koli İçi Adet</Label>
                <Input id="packageQuantity" type="number" defaultValue={product.packageQuantity || 0} readOnly className="bg-gray-50" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="grid gap-1.5">
                <Label htmlFor="minPurchaseQuantity">Min Satın Alma Miktarı</Label>
                <Input id="minPurchaseQuantity" type="number" defaultValue={product.minPurchaseQuantity || 1} readOnly className="bg-gray-50" />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="estimatedDeliveryTime">Tahmini Teslim Süresi (Gün)</Label>
                <Input id="estimatedDeliveryTime" defaultValue={product.estimatedDeliveryTime || "1"} readOnly className="bg-gray-50" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="grid gap-1.5">
                <Label htmlFor="currency">Döviz</Label>
                <Input id="currency" defaultValue={product.currency || "TL"} readOnly className="bg-gray-50" />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="vat">KDV (%)</Label>
                <Input id="vat" defaultValue={product.vat || "20,00"} readOnly className="bg-gray-50" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="grid gap-1.5">
                <Label htmlFor="price">Satış Fiyatı (KDV Dahil)</Label>
                <Input id="price" type="number" defaultValue={product.price} />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="cost">Maliyet (KDV Dahil)</Label>
                <Input id="cost" type="number" defaultValue={product.cost || product.price} readOnly className="bg-gray-50" />
              </div>
            </div>

            <div className="grid gap-1.5">
              <Label htmlFor="tags">Etiketler (Anahtar Kelimeler)</Label>
              <Input id="tags" defaultValue={product.tags || ""} readOnly className="bg-gray-50" />
            </div>

            <div className="space-y-2">
              <Label>Ürün Paket Boyutları</Label>
              <div className="grid grid-cols-3 gap-3">
                <div className="grid gap-1.5">
                  <Label htmlFor="width">En (cm)</Label>
                  <Input id="width" type="number" defaultValue={product.packageDimensions?.width || 0} readOnly className="bg-gray-50" />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="length">Boy (cm)</Label>
                  <Input id="length" type="number" defaultValue={product.packageDimensions?.length || 0} readOnly className="bg-gray-50" />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="height">Yükseklik (cm)</Label>
                  <Input id="height" type="number" defaultValue={product.packageDimensions?.height || 0} readOnly className="bg-gray-50" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="grid gap-1.5">
                  <Label htmlFor="weight">Ağırlık (gr)</Label>
                  <Input id="weight" type="number" defaultValue={product.packageDimensions?.weight || 0} readOnly className="bg-gray-50" />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="desi">Desi</Label>
                  <Input id="desi" type="number" defaultValue={product.packageDimensions?.desi || 0} readOnly className="bg-gray-50" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <Tabs defaultValue={product.marketplaces[0]?.name.toLowerCase() || "trendyol"} className="w-full">
              <TabsList className="w-full flex flex-wrap gap-1">
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
                  <div className="grid gap-3 py-2">
                    <div className="grid gap-1.5">
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
                    <div className="grid gap-1.5">
                      <Label>Pazaryeri Ürün Kodu</Label>
                      <Input placeholder="Pazaryeri ürün kodunu giriniz" readOnly className="bg-gray-50" />
                    </div>
                    <div className="grid gap-1.5">
                      <Label>Pazaryeri Komisyon Oranı (%)</Label>
                      <Input type="number" placeholder="Komisyon oranını giriniz" readOnly className="bg-gray-50" />
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
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

  const sampleProducts = [
    {
      id: "1",
      name: "Sample Product 1",
      sku: "SKU123",
      category: "Electronics",
      brand: "Brand X",
      marketplaces: [
        { name: "Trendyol", isConnected: true },
        { name: "Amazon", isConnected: true },
        { name: "Hepsiburada", isConnected: true },
        { name: "N11", isConnected: true },
        { name: "GittiGidiyor", isConnected: false },
        { name: "Çiçeksepeti", isConnected: true },
        { name: "Morhipo", isConnected: true },
        { name: "Boyner", isConnected: false }
      ],
      status: "Satışta",
      price: 299.99,
      stock: 50,
      source: "Platform" as const,
      description: "This is a sample product description",
      createdAt: "2024-02-20",
      updatedAt: "2024-02-25",
      weight: "1.5 kg",
      dimensions: "30x20x10 cm"
    },
    {
      id: "2",
      name: "Makyaj Sabitleyici 100 ml Make-up Fixing Spray",
      sku: "8681933080127",
      category: "Cosmetics",
      brand: "balera",
      marketplaces: [
        { name: "Trendyol", isConnected: true },
        { name: "Amazon", isConnected: true }
      ],
      status: "Satışta",
      price: 102.00,
      stock: 240,
      source: "Platform" as const,
      description: "Make-up Fixing Spray",
      createdAt: "2024-02-20",
      updatedAt: "2024-02-25",
      weight: "200 gr",
      dimensions: "10x10x20 cm",
      origin: "Türkiye",
      stockCountry: "Türkiye",
      hsCode: "HS Code",
      packageQuantity: 36,
      minPurchaseQuantity: 3,
      estimatedDeliveryTime: "1",
      currency: "TL",
      vat: "20,00",
      cost: 102.00,
      tags: "makeup, spray",
      packageDimensions: {
        width: 10,
        length: 10,
        height: 20,
        weight: 200,
        desi: 1
      }
    },
    // ... keep existing code (other products)
  ];

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
