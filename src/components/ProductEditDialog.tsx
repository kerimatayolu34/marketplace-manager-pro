import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Product } from "@/types/product"
import { ScrollArea } from "./ui/scroll-area"
import { GeneralTab } from "./product-edit/GeneralTab"
import { MarketplacesTab } from "./product-edit/MarketplacesTab"
import { ImagesTab } from "./product-edit/ImagesTab"
import { AttributesTab } from "./product-edit/AttributesTab"
import { ShippingTab } from "./product-edit/ShippingTab"

interface ProductEditDialogProps {
  product: Product;
}

export const ProductEditDialog = ({ product }: ProductEditDialogProps) => {
  return (
    <DialogContent className="sm:max-w-[925px] max-h-[90vh]">
      <DialogHeader>
        <DialogTitle>Ürün Düzenle</DialogTitle>
      </DialogHeader>
      <ScrollArea className="h-[calc(90vh-100px)]">
        <div className="grid gap-4 pb-4">
          <Tabs defaultValue="general">
            <TabsList className="w-full">
              <TabsTrigger value="general">Genel Bilgiler</TabsTrigger>
              <TabsTrigger value="marketplaces">Pazaryeri Bilgileri</TabsTrigger>
              <TabsTrigger value="images">Görseller</TabsTrigger>
              <TabsTrigger value="attributes">Özellikler</TabsTrigger>
              <TabsTrigger value="shipping">Kargo Bilgileri</TabsTrigger>
            </TabsList>

            <TabsContent value="general">
              <GeneralTab product={product} />
            </TabsContent>

            <TabsContent value="marketplaces">
              <MarketplacesTab product={product} />
            </TabsContent>

            <TabsContent value="images">
              <ImagesTab product={product} />
            </TabsContent>

            <TabsContent value="attributes">
              <AttributesTab product={product} />
            </TabsContent>

            <TabsContent value="shipping">
              <ShippingTab product={product} />
            </TabsContent>
          </Tabs>
        </div>
      </ScrollArea>
    </DialogContent>
  );
};