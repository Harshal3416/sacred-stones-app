import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { carouselImages } from "@/lib/carousel-images";

export function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-lg group">
      {carouselImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 to-transparent z-10" />
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
            data-testid={`img-carousel-${index}`}
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-start px-6 md:px-16 max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-4" data-testid={`text-carousel-title-${index}`}>
              {image.title}
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 max-w-xl" data-testid={`text-carousel-subtitle-${index}`}>
              {image.subtitle}
            </p>
          </div>
        </div>
      ))}

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={goToPrevious}
        data-testid="button-carousel-prev"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
        onClick={goToNext}
        data-testid="button-carousel-next"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-8" : "bg-white/50"
            }`}
            data-testid={`button-carousel-dot-${index}`}
          />
        ))}
      </div>
    </div>
  );
}
