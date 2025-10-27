import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";

interface PhotoGalleryProps {
  images: string[];
  name: string;
}

const PhotoGallery = ({ images, name }: PhotoGalleryProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const nextImage = () => {
    setDirection('right');
    setCurrentImageIndex((prev) => 
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setDirection('left');
    setCurrentImageIndex((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const goToImage = (index: number) => {
    setDirection(index > currentImageIndex ? 'right' : 'left');
    setCurrentImageIndex(index);
  };

  return (
    <Card className="glass-strong rounded-3xl overflow-hidden border-0 p-0">
      {/* Main Image */}
      <div className="relative h-96 md:h-[500px] overflow-hidden group">
        <img
          key={currentImageIndex}
          src={images[currentImageIndex]}
          alt={`${name} - Image ${currentImageIndex + 1}`}
          className="w-full h-full object-cover animate-scale-in"
        />
        
        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 glass-strong rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 glass-strong rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/20"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 glass-strong rounded-full px-4 py-2">
          <span className="text-white text-sm font-medium">
            {currentImageIndex + 1} / {images.length}
          </span>
        </div>
      </div>

      {/* Thumbnail Grid */}
      <div className="grid grid-cols-5 gap-2 p-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`relative h-20 rounded-xl overflow-hidden transition-all ${
              index === currentImageIndex
                ? "ring-2 ring-primary scale-105"
                : "opacity-70 hover:opacity-100"
            }`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </Card>
  );
};

export default PhotoGallery;
