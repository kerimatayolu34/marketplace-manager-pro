import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProductDetail = () => {
  return (
    <div className="min-h-screen bg-[#F2F4F4]">
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-[#081F4D]">Ürün Bilgileri</h1>
            <Button variant="outline">Geri</Button>
          </div>

          <Card>
            <CardContent className="p-6">
              <Tabs defaultValue="general" className="space-y-4">
                <TabsList>
                  <TabsTrigger value="general">Genel Bilgiler</TabsTrigger>
                  <TabsTrigger value="attributes">Özellikler</TabsTrigger>
                  <TabsTrigger value="images">Görseller</TabsTrigger>
                  <TabsTrigger value="marketplaces">Pazaryerleri</TabsTrigger>
                  <TabsTrigger value="shipping">Kargo</TabsTrigger>
                </TabsList>

                <TabsContent value="general">
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Ürün Adı</Label>
                        <Input id="name" placeholder="Ürün adı giriniz" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="brand">Markası</Label>
                        <Input id="brand" placeholder="Marka giriniz" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="sku">Stok Kodu</Label>
                        <Input id="sku" placeholder="Stok kodu giriniz" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="barcode">Barkod</Label>
                        <Input id="barcode" placeholder="Barkod giriniz" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="status">Ürün Satış Durumu</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Satış durumu seçiniz" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="active">Satışa Açık</SelectItem>
                            <SelectItem value="inactive">Satışa Kapalı</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="price">Satış Fiyatı</Label>
                        <Input id="price" type="number" placeholder="0.00" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Açıklama</Label>
                      <Textarea id="description" placeholder="Ürün açıklaması giriniz" />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="attributes">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Ürün Özellikleri</h3>
                    {/* Attributes content will be implemented */}
                  </div>
                </TabsContent>

                <TabsContent value="images">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Ürün Görselleri</h3>
                    {/* Images content will be implemented */}
                  </div>
                </TabsContent>

                <TabsContent value="marketplaces">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Pazaryeri Entegrasyonları</h3>
                    {/* Marketplaces content will be implemented */}
                  </div>
                </TabsContent>

                <TabsContent value="shipping">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Kargo Bilgileri</h3>
                    {/* Shipping content will be implemented */}
                  </div>
                </TabsContent>
              </Tabs>

              <div className="flex justify-end space-x-4 mt-6">
                <Button variant="outline">İptal</Button>
                <Button>Kaydet</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;