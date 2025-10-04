import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Carousel } from "@/components/Carousel";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Product, CartItem } from "@shared/schema";
import { Heart, Sparkles, Star, Home as HomeIcon, Wind } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Phone, Mail } from "lucide-react";
import { contactInfo } from "@/lib/contact-info";

interface HomeProps {
  onAddToCart: (product: Product) => void;
}

const services = [
  {
    title: "Reiki Healing",
    description: "Experience holistic energy healing for mind, body, and spirit",
    icon: Heart,
  },
  {
    title: "Tarot Card",
    description: "Discover insights and guidance through mystical card readings",
    icon: Sparkles,
  },
  {
    title: "Kundali Matching",
    description: "Traditional vedic astrology for perfect compatibility",
    icon: Star,
  },
  {
    title: "Numerology",
    description: "Unlock the secrets hidden in numbers and dates",
    icon: HomeIcon,
  },
  {
    title: "Vastu Consultant",
    description: "Harmonize your space with ancient architectural wisdom",
    icon: Wind,
  },
];

export default function Home({ onAddToCart }: HomeProps) {
  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const featuredProducts = products?.slice(0, 5) || [];
  const whatsappLink = `https://wa.me/${contactInfo.whatsappNumber}?text=Hello! I'd like to know more about your products and services.`;

  return (
    <div className="min-h-screen">
      <Carousel />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4" data-testid="text-services-title">Our Sacred Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover spiritual guidance and healing through our authentic services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-service-${index}`}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold mb-2" data-testid={`text-service-title-${index}`}>
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground" data-testid={`text-service-description-${index}`}>
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2" data-testid="text-featured-title">Featured Products</h2>
            <p className="text-muted-foreground">Handpicked spiritual treasures for your journey</p>
          </div>
          <Link href="/products">
            <Button size="lg" data-testid="button-see-all">
              See All Products
            </Button>
          </Link>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[...Array(5)].map((_, i) => (
              <Card key={i} className="animate-pulse">
                <div className="aspect-square bg-muted" />
                <CardContent className="p-4">
                  <div className="h-4 bg-muted rounded mb-2" />
                  <div className="h-6 bg-muted rounded w-1/2" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        )}
      </section>

      <section className="bg-primary/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4" data-testid="text-contact-title">Get In Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions? We're here to guide you on your spiritual journey
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="flex items-center gap-4 p-4 rounded-lg hover-elevate active-elevate-2 transition-all"
                    data-testid="link-contact-phone"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Call us</p>
                      <p className="font-semibold" data-testid="text-phone">{contactInfo.phone}</p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="flex items-center gap-4 p-4 rounded-lg hover-elevate active-elevate-2 transition-all"
                    data-testid="link-contact-email"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email us</p>
                      <p className="font-semibold" data-testid="text-email">{contactInfo.email}</p>
                    </div>
                  </a>
                </div>

                <div className="mt-8 pt-8 border-t">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full p-4 rounded-lg bg-[#25D366] text-white hover:bg-[#128C7E] transition-colors"
                    data-testid="link-contact-whatsapp"
                  >
                    <FaWhatsapp className="h-6 w-6" />
                    <span className="font-semibold">Chat with us on WhatsApp</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
