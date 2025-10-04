import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CartItem } from "@shared/schema";
import { Trash2, Plus, Minus } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { contactInfo } from "@/lib/contact-info";
import { Link } from "wouter";

interface CheckoutProps {
  cart: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
}

export default function Checkout({ cart, onUpdateQuantity, onRemoveItem }: CheckoutProps) {
  const subtotal = cart.reduce((sum, item) => sum + parseFloat(item.product.price) * item.quantity, 0);
  const total = subtotal;

  const generateWhatsAppMessage = () => {
    const orderDetails = cart.map((item) => 
      `${item.product.title} x ${item.quantity} - $${(parseFloat(item.product.price) * item.quantity).toFixed(2)}`
    ).join('\n');

    const message = `Hello! I would like to place an order:\n\n${orderDetails}\n\nTotal: $${total.toFixed(2)}`;
    return encodeURIComponent(message);
  };

  const whatsappLink = `https://wa.me/${contactInfo.whatsappNumber}?text=${generateWhatsAppMessage()}`;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4" data-testid="text-empty-cart-title">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-8">Add some spiritual treasures to your collection</p>
          <Link href="/products">
            <Button size="lg" data-testid="button-continue-shopping">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="bg-primary/5 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-center" data-testid="text-checkout-title">
            Shopping Cart
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <Card key={item.product.id} data-testid={`card-cart-item-${item.product.id}`}>
                <CardContent className="p-4 sm:p-6">
                  <div className="flex gap-4">
                    <div className="w-24 h-24 flex-shrink-0 overflow-hidden rounded-md bg-muted">
                      <img
                        src={item.product.image}
                        alt={item.product.title}
                        className="w-full h-full object-cover"
                        data-testid={`img-cart-item-${item.product.id}`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="font-serif text-lg font-semibold mb-1" data-testid={`text-cart-item-title-${item.product.id}`}>
                            {item.product.title}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-2">
                            {item.product.shortDescription}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => onRemoveItem(item.product.id)}
                          data-testid={`button-remove-${item.product.id}`}
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => onUpdateQuantity(item.product.id, -1)}
                            disabled={item.quantity <= 1}
                            data-testid={`button-decrease-${item.product.id}`}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center font-medium" data-testid={`text-quantity-${item.product.id}`}>
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => onUpdateQuantity(item.product.id, 1)}
                            data-testid={`button-increase-${item.product.id}`}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <p className="text-xl font-bold text-primary" data-testid={`text-item-total-${item.product.id}`}>
                          ${(parseFloat(item.product.price) * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <h2 className="font-serif text-2xl font-bold mb-6">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span data-testid="text-subtotal">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-4 flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-primary" data-testid="text-total">${total.toFixed(2)}</span>
                  </div>
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button size="lg" className="w-full gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white" data-testid="button-buy-now">
                    <FaWhatsapp className="h-5 w-5" />
                    Buy Now via WhatsApp
                  </Button>
                </a>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  Order will be sent via WhatsApp for confirmation
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
