import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MarketplaceCardProps {
  name: string;
  logo: string;
  status: "active" | "inactive";
}

export const MarketplaceCard = ({ name, logo, status }: MarketplaceCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="space-y-1">
        <CardTitle className="text-xl">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <img src={logo} alt={name} className="h-12 w-auto" />
          <span className={`px-3 py-1 rounded-full text-sm ${
            status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
          }`}>
            {status === "active" ? "Aktif" : "Pasif"}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};