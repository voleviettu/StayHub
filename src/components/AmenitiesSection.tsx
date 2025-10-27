import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Amenity {
  icon: LucideIcon;
  name: string;
  available: boolean;
}

interface AmenitiesSectionProps {
  amenities: Amenity[];
}

const AmenitiesSection = ({ amenities }: AmenitiesSectionProps) => {
  return (
    <Card className="glass-strong rounded-3xl border-0 p-8">
      <h2 className="text-2xl font-semibold text-white mb-6">Amenities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {amenities.map((amenity, index) => {
          const Icon = amenity.icon;
          return (
            <div
              key={index}
              className="glass-strong rounded-2xl p-5 flex items-center gap-4 transition-all hover:scale-105 hover:shadow-lg"
            >
              <div className="glass-strong rounded-xl p-3">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <span className="text-white font-medium">{amenity.name}</span>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default AmenitiesSection;
