import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Product } from "@/types/product"

interface GeneralTabProps {
  product: Product;
}

export const GeneralTab = ({ product }: GeneralTabProps) => {
  return (
    <div className="grid gap-4">
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
          <Input id="stock" type="number" defaultValue={product.stock} />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="packageQuantity">Koli İçi Adet</Label>
          <Input id="packageQuantity" type="number" defaultValue={product.packageQuantity || 0} />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-1.5">
          <Label htmlFor="price">Satış Fiyatı (KDV Dahil)</Label>
          <Input id="price" type="number" defaultValue={product.price} />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="currency">Döviz</Label>
          <Input id="currency" defaultValue={product.currency || "TL"} readOnly className="bg-gray-50" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-1.5">
          <Label htmlFor="vat">KDV (%)</Label>
          <Input id="vat" defaultValue={product.vat || "20,00"} readOnly className="bg-gray-50" />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="cost">Maliyet (KDV Dahil)</Label>
          <Input id="cost" type="number" defaultValue={product.cost || product.price} readOnly className="bg-gray-50" />
        </div>
      </div>
    </div>
  );
};