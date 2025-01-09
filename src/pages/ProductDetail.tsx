import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const ProductDetail = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Ürün Bilgileri</h1>
            <Button variant="outline">Geri</Button>
          </div>

          <Card>
            <CardContent className="p-6">
              <form className="space-y-8">
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

                <div className="flex justify-end space-x-4">
                  <Button variant="outline">İptal</Button>
                  <Button>Kaydet</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;