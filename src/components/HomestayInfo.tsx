import { MapPin, Star, Users, Bed, Bath } from "lucide-react";
import { Card } from "@/components/ui/card";

interface HomestayInfoProps {
  name: string;
  location: string;
  rating: number;
  reviews: number;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  description: string;
}

const HomestayInfo = ({
  name,
  location,
  rating,
  reviews,
  guests,
  bedrooms,
  bathrooms,
  description,
}: HomestayInfoProps) => {
  return (
    <Card className="glass-strong rounded-3xl border-0 p-8">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            {name}
          </h1>
          <div className="flex items-center gap-2 text-white/80 mb-3">
            <MapPin className="h-5 w-5" />
            <span className="text-lg">{location}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 glass-strong rounded-full px-4 py-2">
          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          <span className="font-semibold text-white">{rating}</span>
          <span className="text-white/70">({reviews} reviews)</span>
        </div>
      </div>

      {/* Property Details */}
      <div className="flex flex-wrap gap-6 mb-6 pb-6 border-b border-white/20">
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-primary" />
          <span className="text-white/90">{guests} guests</span>
        </div>
        <div className="flex items-center gap-2">
          <Bed className="h-5 w-5 text-primary" />
          <span className="text-white/90">{bedrooms} bedrooms</span>
        </div>
        <div className="flex items-center gap-2">
          <Bath className="h-5 w-5 text-primary" />
          <span className="text-white/90">{bathrooms} bathrooms</span>
        </div>
      </div>

      {/* Description */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-3">About this place</h2>
        <p className="text-white/80 leading-relaxed">
          {description}
        </p>
      </div>
    </Card>
  );
};

export default HomestayInfo;
