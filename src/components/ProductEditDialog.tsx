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
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export const ProductEditDialog = ({ product, open, onOpenChange }: ProductEditDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[925px] max-h-[90vh] bg-white rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-[#081F4D] text-xl font-semibold">Ürün Düzenle</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[calc(90vh-100px)]">
          <div className="grid gap-4 pb-4">
            <Tabs defaultValue="general">
              <TabsList className="w-full bg-[#F2F4F4] p-1 rounded-2xl">
                <TabsTrigger 
                  value="general"
                  className="data-[state=active]:bg-white data-[state=active]:text-[#FF602E] rounded-xl"
                >
                  Genel Bilgiler
                </TabsTrigger>
                <TabsTrigger 
                  value="marketplaces"
                  className="data-[state=active]:bg-white data-[state=active]:text-[#FF602E] rounded-xl"
                >
                  Pazaryeri Bilgileri
                </TabsTrigger>
                <TabsTrigger 
                  value="images"
                  className="data-[state=active]:bg-white data-[state=active]:text-[#FF602E] rounded-xl"
                >
                  Görseller
                </TabsTrigger>
                <TabsTrigger 
                  value="attributes"
                  className="data-[state=active]:bg-white data-[state=active]:text-[#FF602E] rounded-xl"
                >
                  Özellikler
                </TabsTrigger>
                <TabsTrigger 
                  value="shipping"
                  className="data-[state=active]:bg-white data-[state=active]:text-[#FF602E] rounded-xl"
                >
                  Kargo Bilgileri
                </TabsTrigger>
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
    </Dialog>
  );
};