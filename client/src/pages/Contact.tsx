import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { contactInfo } from "@/lib/contact-info";

export default function Contact() {
  const whatsappLink = `https://wa.me/${contactInfo.whatsappNumber}?text=Hello! I'd like to know more about your products and services.`;

  return (
    <div className="min-h-screen">
      <div className="bg-primary/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-center" data-testid="text-contact-page-title">
            Get In Touch
          </h1>
          <p className="text-center text-muted-foreground mt-4 max-w-2xl mx-auto">
            We're here to guide you on your spiritual journey
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <Card className="hover-elevate transition-all">
            <CardContent className="p-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2 text-center">Call Us</h3>
              <a
                href={`tel:${contactInfo.phone}`}
                className="block text-center text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-contact-phone"
              >
                {contactInfo.phone}
              </a>
            </CardContent>
          </Card>

          <Card className="hover-elevate transition-all">
            <CardContent className="p-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2 text-center">Email Us</h3>
              <a
                href={`mailto:${contactInfo.email}`}
                className="block text-center text-muted-foreground hover:text-foreground transition-colors break-all"
                data-testid="link-contact-email"
              >
                {contactInfo.email}
              </a>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="p-8">
            <h2 className="text-2xl font-serif font-bold mb-6 text-center">Quick Contact</h2>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full p-4 rounded-lg bg-[#25D366] text-white hover:bg-[#128C7E] transition-colors"
              data-testid="link-whatsapp-contact"
            >
              <FaWhatsapp className="h-6 w-6" />
              <span className="font-semibold">Chat with us on WhatsApp</span>
            </a>
            <p className="text-sm text-muted-foreground text-center mt-4">
              Get instant responses to your queries
            </p>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <h3 className="font-serif text-xl font-semibold mb-4">Business Hours</h3>
          <p className="text-muted-foreground">Monday - Saturday: 9:00 AM - 7:00 PM</p>
          <p className="text-muted-foreground">Sunday: 10:00 AM - 5:00 PM</p>
        </div>
      </div>
    </div>
  );
}
