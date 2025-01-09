import { ImageIcon } from "lucide-react"
import { Product } from "@/types/product"

interface ImagesTabProps {
  product: Product;
}

export const ImagesTab = ({ product }: ImagesTabProps) => {
  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-4 gap-4">
        {product.images?.map((image, index) => (
          <div key={index} className="relative aspect-square rounded-lg border-2 border-dashed border-gray-200 p-4">
            <img src={image.url} alt={`Ürün görseli ${index + 1}`} className="w-full h-full object-cover rounded" />
            <div className="absolute top-2 right-2 bg-white rounded-full p-1">
              {image.isDefault && <span className="text-xs text-green-600">Varsayılan</span>}
            </div>
          </div>
        )) || (
          <div className="col-span-4 aspect-video rounded-lg border-2 border-dashed border-gray-200 p-4 flex items-center justify-center">
            <div className="text-center">
              <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
              <p className="mt-2 text-sm text-gray-500">Henüz görsel eklenmemiş</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};