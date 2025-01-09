import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Product } from "@/types/product"

interface HepsiburadaTabProps {
  product: Product;
}

export const HepsiburadaTab = ({ product }: HepsiburadaTabProps) => {
  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-1.5">
          <Label>Garanti Süresi (Ay)</Label>
          <Input type="number" defaultValue={product.guaranteePeriod || 24} />
        </div>
        <div className="grid gap-1.5">
          <Label>Vergi (%)</Label>
          <Input type="number" defaultValue={product.tax || 18} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-1.5">
          <Label>Ürün Durumu</Label>
          <Select defaultValue={product.productCondition || "NEW"}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="NEW">Yeni</SelectItem>
              <SelectItem value="USED">Kullanılmış</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-1.5">
          <Label>Garanti Tipi</Label>
          <Input defaultValue={product.warranty || "İthalatçı Garantili"} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-1.5">
          <Label>Ürün Durumu</Label>
          <Select defaultValue={product.productStockStatus || "ACTIVE"}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ACTIVE">Aktif</SelectItem>
              <SelectItem value="PASSIVE">Pasif</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};