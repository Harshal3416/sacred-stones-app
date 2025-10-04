import { Link } from "wouter";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Product, CartItem } from "@shared/schema";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  showDescription?: boolean;
}

export function ProductCard({ product, onAddToCart, showDescription = false }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden hover-elevate transition-all duration-300" data-testid={`card-product-${product.id}`}>
      <Link href={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            data-testid={`img-product-${product.id}`}
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-serif text-lg font-semibold mb-2 line-clamp-1 hover:text-primary transition-colors" data-testid={`text-product-title-${product.id}`}>
            {product.title}
          </h3>
        </Link>
        {showDescription && (
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2" data-testid={`text-product-description-${product.id}`}>
            {product.shortDescription}
          </p>
        )}
        <div className="flex items-center justify-between gap-2">
          <p className="text-2xl font-bold text-primary" data-testid={`text-product-price-${product.id}`}>
            ${product.price}
          </p>
          <Button
            size="sm"
            onClick={(e) => {
              e.preventDefault();
              onAddToCart(product);
            }}
            className="gap-1"
            data-testid={`button-add-to-cart-${product.id}`}
          >
            <ShoppingCart className="h-4 w-4" />
            Add
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
