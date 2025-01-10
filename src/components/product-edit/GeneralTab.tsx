import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Product } from "@/types/product"

interface GeneralTabProps {
  product: Product;
}

export const GeneralTab = ({ product }: GeneralTabProps) => {
  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-1.5">
          <Label htmlFor="barcode">Barkod</Label>
          <Input id="barcode" defaultValue={product.barcode} />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="title">Ürün Adı</Label>
          <Input id="title" defaultValue={product.name} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-1.5">
          <Label htmlFor="productMainId">Ana Ürün ID</Label>
          <Input id="productMainId" defaultValue={product.productMainId} readOnly className="bg-gray-50" />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="brand">Marka</Label>
          <Input id="brand" defaultValue={product.brand} />
        </div>
      </div>

      <div className="grid gap-1.5">
        <Label htmlFor="description">Ürün Açıklaması</Label>
        <Textarea 
          id="description" 
          defaultValue={product.description} 
          className="min-h-[100px]"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-1.5">
          <Label htmlFor="categoryId">Kategori ID</Label>
          <Input id="categoryId" defaultValue={product.categoryId} />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="quantity">Stok Adedi</Label>
          <Input id="quantity" type="number" defaultValue={product.stock} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-1.5">
          <Label htmlFor="listPrice">Liste Fiyatı</Label>
          <Input id="listPrice" type="number" defaultValue={product.listPrice || product.price} />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="salePrice">Satış Fiyatı</Label>
          <Input id="salePrice" type="number" defaultValue={product.price} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-1.5">
          <Label htmlFor="vatRate">KDV Oranı (%)</Label>
          <Input id="vatRate" type="number" defaultValue={product.vat || 18} />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="currencyType">Para Birimi</Label>
          <Select defaultValue={product.currency || "TRY"}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="TRY">TL</SelectItem>
              <SelectItem value="USD">USD</SelectItem>
              <SelectItem value="EUR">EUR</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-1.5">
          <Label htmlFor="stockCode">Stok Kodu</Label>
          <Input id="stockCode" defaultValue={product.sku} />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="dimensionalWeight">Desi</Label>
          <Input 
            id="dimensionalWeight" 
            type="number" 
            defaultValue={product.shipping?.desi || product.packageDimensions?.desi} 
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-1.5">
          <Label htmlFor="cargoCompanyId">Kargo Firması ID</Label>
          <Input id="cargoCompanyId" defaultValue={product.shipping?.cargoCompanyId} />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="deliveryDuration">Teslimat Süresi (Gün)</Label>
          <Input 
            id="deliveryDuration" 
            type="number" 
            defaultValue={product.shipping?.deliveryDuration || 3} 
          />
        </div>
      </div>
    </div>
  );
};