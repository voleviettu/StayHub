import { useState } from "react";
import { Star, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface BookingCardProps {
  price: number;
  rating: number;
  reviews: number;
  maxGuests: number;
}

const BookingCard = ({ price, rating, reviews, maxGuests }: BookingCardProps) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  const handleBooking = () => {
    console.log("Booking:", { checkIn, checkOut, guests });
    // Handle booking logic
  };

  return (
    <Card className="glass-strong rounded-3xl border-0 p-6 sticky top-28">
      <div className="mb-6">
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-3xl font-bold text-white">${price}</span>
          <span className="text-white/70">/ night</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="font-semibold text-white">{rating}</span>
          <span className="text-white/70">({reviews} reviews)</span>
        </div>
      </div>

      {/* Booking Form */}
      <div className="space-y-4 mb-6">
        <div className="glass rounded-xl p-4">
          <label className="text-sm font-medium text-white block mb-2">
            <Calendar className="h-4 w-4 inline mr-2" />
            Check-in
          </label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full bg-transparent border-0 text-white focus:outline-none"
          />
        </div>

        <div className="glass rounded-xl p-4">
          <label className="text-sm font-medium text-white block mb-2">
            <Calendar className="h-4 w-4 inline mr-2" />
            Check-out
          </label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full bg-transparent border-0 text-white focus:outline-none"
          />
        </div>

        <div className="glass rounded-xl p-4">
          <label className="text-sm font-medium text-white block mb-2">
            <Users className="h-4 w-4 inline mr-2" />
            Guests
          </label>
          <select
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="w-full bg-transparent border-0 text-white focus:outline-none"
          >
            {Array.from({ length: maxGuests }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                {num} {num === 1 ? 'guest' : 'guests'}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Book Button */}
      <Button
        onClick={handleBooking}
        className="w-full rounded-xl h-12 text-base font-medium bg-black text-white hover:bg-black/80 transition-colors"
      >
        Reserve Now
      </Button>

      <p className="text-center text-sm text-white/70 mt-4">
        You won't be charged yet
      </p>

      {/* Price Breakdown */}
      <div className="mt-6 pt-6 border-t border-white/20 space-y-3">
        <div className="flex justify-between text-white/80">
          <span>${price} × 5 nights</span>
          <span>${price * 5}</span>
        </div>
        <div className="flex justify-between text-white/80">
          <span>Service fee</span>
          <span>$50</span>
        </div>
        <div className="flex justify-between font-semibold text-white pt-3 border-t border-white/20">
          <span>Total</span>
          <span>${price * 5 + 50}</span>
        </div>
      </div>
    </Card>
  );
};

export default BookingCard;
