import { Link } from "wouter";
import { Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { contactInfo } from "@/lib/contact-info";

export function Footer() {
  const whatsappLink = `https://wa.me/${contactInfo.whatsappNumber}`;

  return (
    <footer className="border-t bg-card mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">About Sacred Stones</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted source for authentic healing crystals, spiritual tools, and mystical products. 
              We source ethically and provide genuine spiritual guidance.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-footer-home">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-footer-products">Products</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-footer-services">Services</span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer" data-testid="link-footer-about">About Us</span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a 
                href={`tel:${contactInfo.phone}`} 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-phone"
              >
                <Phone className="h-4 w-4" />
                {contactInfo.phone}
              </a>
              <a 
                href={`mailto:${contactInfo.email}`} 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-email"
              >
                <Mail className="h-4 w-4" />
                {contactInfo.email}
              </a>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#25D366] hover:text-[#128C7E] transition-colors"
                data-testid="link-whatsapp"
              >
                <FaWhatsapp className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Sacred Stones. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
