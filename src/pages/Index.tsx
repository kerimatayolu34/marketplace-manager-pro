import { MarketplaceCard } from "@/components/MarketplaceCard";
import { Navbar } from "@/components/Navbar";

const marketplaces = [
  { name: "Trendyol", logo: "/placeholder.svg", status: "active" as const },
  { name: "N11", logo: "/placeholder.svg", status: "active" as const },
  { name: "Hepsiburada", logo: "/placeholder.svg", status: "active" as const },
  { name: "Amazon", logo: "/placeholder.svg", status: "inactive" as const },
  { name: "Etsy", logo: "/placeholder.svg", status: "inactive" as const },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Pazar Yerleri</h1>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {marketplaces.map((marketplace) => (
              <MarketplaceCard
                key={marketplace.name}
                name={marketplace.name}
                logo={marketplace.logo}
                status={marketplace.status}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;