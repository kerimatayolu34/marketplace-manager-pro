import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Product } from "@/types/product"

interface ShippingTabProps {
  product: Product;
}

export const ShippingTab = ({ product }: ShippingTabProps) => {
  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-1.5">
          <Label>Genişlik (cm)</Label>
          <Input type="number" defaultValue={product.shipping?.width || product.packageDimensions?.width} />
        </div>
        <div className="grid gap-1.5">
          <Label>Uzunluk (cm)</Label>
          <Input type="number" defaultValue={product.shipping?.length || product.packageDimensions?.length} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-1.5">
          <Label>Yükseklik (cm)</Label>
          <Input type="number" defaultValue={product.shipping?.height || product.packageDimensions?.height} />
        </div>
        <div className="grid gap-1.5">
          <Label>Ağırlık (kg)</Label>
          <Input type="number" defaultValue={product.shipping?.weight || product.packageDimensions?.weight} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-1.5">
          <Label>Desi</Label>
          <Input type="number" defaultValue={product.shipping?.desi || product.packageDimensions?.desi} readOnly className="bg-gray-50" />
        </div>
        <div className="grid gap-1.5">
          <Label>Teslimat Süresi (Gün)</Label>
          <Input type="number" defaultValue={product.shipping?.deliveryDuration || 3} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="grid gap-1.5">
          <Label>Maksimum Teslimat Günü</Label>
          <Input type="number" defaultValue={product.shipping?.maxDeliveryDays || 7} />
        </div>
        <div className="grid gap-1.5">
          <Label>Sevk Süresi (Gün)</Label>
          <Input type="number" defaultValue={product.shipping?.dispatchTime || 1} />
        </div>
      </div>
    </div>
  );
};