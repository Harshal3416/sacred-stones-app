import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Sparkles } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen">
      <div className="bg-primary/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-center" data-testid="text-about-title">
            About Sacred Stones
          </h1>
          <p className="text-center text-muted-foreground mt-4 max-w-2xl mx-auto">
            Your trusted partner in spiritual wellness and healing
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-muted-foreground leading-relaxed">
            Welcome to Sacred Stones, where ancient wisdom meets modern spirituality. We are dedicated to providing
            authentic healing crystals, spiritual tools, and mystical products that support your journey toward
            inner peace and enlightenment.
          </p>
          <p className="text-muted-foreground leading-relaxed mt-4">
            Founded with a passion for spiritual wellness, our mission is to make authentic spiritual tools and
            guidance accessible to everyone seeking balance, healing, and transformation in their lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">Authentic Products</h3>
              <p className="text-sm text-muted-foreground">
                We source only genuine, ethically obtained crystals and spiritual tools
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">Trusted Guidance</h3>
              <p className="text-sm text-muted-foreground">
                Expert spiritual practitioners with years of experience in healing arts
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">Holistic Approach</h3>
              <p className="text-sm text-muted-foreground">
                Comprehensive spiritual services for mind, body, and soul wellness
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-serif font-bold mb-4">Our Commitment</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At Sacred Stones, we believe in the transformative power of spiritual practices and healing energies.
              Every product in our collection is carefully selected for its authenticity, energy, and healing properties.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're seeking healing crystals, spiritual guidance through tarot, Reiki healing, or Vastu
              consultation for your space, we're here to support your spiritual journey with integrity, compassion,
              and expertise.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
