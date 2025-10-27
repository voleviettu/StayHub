import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { 
  Wifi, 
  Car, 
  Utensils, 
  Tv, 
  Wind, 
  Droplet,
  ArrowLeft
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import PhotoGallery from "@/components/PhotoGallery";
import HomestayInfo from "@/components/HomestayInfo";
import AmenitiesSection from "@/components/AmenitiesSection";
import HostInfo from "@/components/HostInfo";
import BookingCard from "@/components/BookingCard";
import detailBackground from "@/assets/image/background/detail-background.jpg";
import detail1 from "@/assets/image/mock/detail-1.jpg";
import detail2 from "@/assets/image/mock/detail-2.jpg";
import detail3 from "@/assets/image/mock/detail-3.jpg";
import detail4 from "@/assets/image/mock/detail-4.jpg";
import detail5 from "@/assets/image/mock/detail-5.jpg";

// Mock data - replace with API call
const homestayData = {
  id: "1",
  name: "Cozy Mountain Retreat",
  location: "Bali, Indonesia",
  rating: 4.8,
  reviews: 124,
  price: 89,
  host: "Sarah Johnson",
  guests: 4,
  bedrooms: 2,
  bathrooms: 2,
  description: "Experience the perfect blend of comfort and nature in this stunning mountain retreat. Wake up to breathtaking views and enjoy modern amenities in a serene setting. Perfect for families or groups looking for a peaceful getaway.",
  images: [
    detail1,
    detail2,
    detail3,
    detail4,
    detail5,
  ],
  amenities: [
    { icon: Wifi, name: "Free WiFi", available: true },
    { icon: Car, name: "Free Parking", available: true },
    { icon: Utensils, name: "Kitchen", available: true },
    { icon: Tv, name: "TV", available: true },
    { icon: Wind, name: "Air Conditioning", available: true },
    { icon: Droplet, name: "Hot Water", available: true },
  ]
};

const HomestayDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div 
      className="min-h-screen"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${detailBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <Navbar />
      
      <div className="container mx-auto px-4 pt-28 pb-8 max-w-7xl">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="animate-fade-in">
              <PhotoGallery images={homestayData.images} name={homestayData.name} />
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <HomestayInfo
                name={homestayData.name}
                location={homestayData.location}
                rating={homestayData.rating}
                reviews={homestayData.reviews}
                guests={homestayData.guests}
                bedrooms={homestayData.bedrooms}
                bathrooms={homestayData.bathrooms}
                description={homestayData.description}
              />
            </div>

            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <AmenitiesSection amenities={homestayData.amenities} />
            </div>

            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <HostInfo hostName={homestayData.host} />
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1 animate-fade-in">
            <BookingCard
              price={homestayData.price}
              rating={homestayData.rating}
              reviews={homestayData.reviews}
              maxGuests={homestayData.guests}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomestayDetail;
