import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Product } from "@/types/product"

interface AttributesTabProps {
  product: Product;
}

export const AttributesTab = ({ product }: AttributesTabProps) => {
  return (
    <div className="grid gap-4">
      {product.attributes?.map((attribute, index) => (
        <div key={index} className="grid grid-cols-2 gap-3">
          <div className="grid gap-1.5">
            <Label>Özellik Adı</Label>
            <Input defaultValue={attribute.name} readOnly className="bg-gray-50" />
          </div>
          <div className="grid gap-1.5">
            <Label>Değer</Label>
            <Input defaultValue={attribute.value} />
          </div>
        </div>
      )) || (
        <div className="text-center py-8 text-gray-500">
          Henüz özellik eklenmemiş
        </div>
      )}
    </div>
  );
};