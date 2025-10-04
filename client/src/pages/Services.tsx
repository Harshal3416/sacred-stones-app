import { Card, CardContent } from "@/components/ui/card";
import { Heart, Sparkles, Star, Home as HomeIcon, Wind } from "lucide-react";

const services = [
  {
    title: "Reiki Healing",
    description: "Experience the transformative power of Reiki energy healing. Our certified practitioners channel universal life force energy to promote physical, emotional, and spiritual well-being.",
    fullDescription: "Reiki is a Japanese healing technique that promotes relaxation, reduces stress, and encourages healing. Through gentle touch or hovering hands, practitioners channel energy to help balance your body's energy centers.",
    icon: Heart,
    benefits: [
      "Reduces stress and promotes relaxation",
      "Accelerates natural healing processes",
      "Balances energy centers (chakras)",
      "Enhances emotional clarity"
    ]
  },
  {
    title: "Tarot Card Reading",
    description: "Unlock the wisdom of the tarot with our experienced readers. Gain insights into your past, present, and future through the ancient art of card divination.",
    fullDescription: "Our professional tarot readers use their intuitive abilities combined with traditional card meanings to provide guidance on life's questions and challenges.",
    icon: Sparkles,
    benefits: [
      "Gain clarity on life decisions",
      "Understand relationship dynamics",
      "Discover career path guidance",
      "Connect with spiritual insights"
    ]
  },
  {
    title: "Kundali Matching",
    description: "Traditional Vedic astrology for perfect compatibility analysis. Discover the cosmic harmony between partners through detailed birth chart matching.",
    fullDescription: "Kundali matching is an ancient Vedic practice that analyzes the compatibility between two individuals based on their birth charts, ensuring harmonious relationships.",
    icon: Star,
    benefits: [
      "Assess marriage compatibility",
      "Understand personality traits",
      "Identify potential challenges",
      "Strengthen relationship bonds"
    ]
  },
  {
    title: "Numerology",
    description: "Decode the mystical significance of numbers in your life. Discover your life path, destiny, and soul urge through the ancient science of numerology.",
    fullDescription: "Numerology reveals the hidden meanings behind numbers in your life, providing insights into your personality, life purpose, and future possibilities.",
    icon: HomeIcon,
    benefits: [
      "Discover your life path number",
      "Understand personal year cycles",
      "Reveal hidden talents and abilities",
      "Make informed life decisions"
    ]
  },
  {
    title: "Vastu Consultant",
    description: "Harmonize your living and working spaces with ancient Vastu Shastra principles. Create balanced environments that promote prosperity and well-being.",
    fullDescription: "Vastu Shastra is the ancient Indian science of architecture and design. Our consultants help align your space with natural energies for optimal harmony and success.",
    icon: Wind,
    benefits: [
      "Enhance positive energy flow",
      "Improve health and prosperity",
      "Optimize space utilization",
      "Create harmonious environments"
    ]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen">
      <div className="bg-primary/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-center" data-testid="text-services-page-title">
            Our Sacred Services
          </h1>
          <p className="text-center text-muted-foreground mt-4 max-w-2xl mx-auto">
            Discover spiritual guidance and healing through our authentic services
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-service-detail-${index}`}>
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="h-10 w-10 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-serif font-bold mb-4" data-testid={`text-service-detail-title-${index}`}>
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {service.fullDescription}
                      </p>
                      <div className="mt-6">
                        <h3 className="font-semibold mb-3">Benefits:</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-start gap-2" data-testid={`text-service-benefit-${index}-${i}`}>
                              <span className="text-primary mt-1">•</span>
                              <span className="text-sm text-muted-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
