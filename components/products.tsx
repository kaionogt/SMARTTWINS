"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Heart, Star, Zap } from "lucide-react"
import Link from "next/link"

const smartwatches = [
  {
    id: 1,
    name: "Smart Watch Ultra",
    price: 299,
    originalPrice: 399,
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop",
    badge: "Mais Vendido",
    rating: 5,
    features: ["GPS", "Bluetooth", "Monitor Cardíaco"]
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 249,
    originalPrice: 329,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop",
    badge: "Novo",
    rating: 5,
    features: ["Tela AMOLED", "5ATM", "NFC"]
  },
  {
    id: 3,
    name: "Smart Watch Series X",
    price: 199,
    originalPrice: 279,
    image: "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?w=400&h=400&fit=crop",
    badge: "Promoção",
    rating: 4,
    features: ["Bateria 7 dias", "SpO2", "Sono"]
  },
  {
    id: 4,
    name: "Smart Watch Fit",
    price: 179,
    originalPrice: 229,
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&h=400&fit=crop",
    badge: null,
    rating: 4,
    features: ["Leve", "Esportes", "Notificações"]
  },
]

const airpods = [
  {
    id: 5,
    name: "AirPods Pro Max",
    price: 399,
    originalPrice: 499,
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400&h=400&fit=crop",
    badge: "Premium",
    rating: 5,
    features: ["ANC", "Transparência", "Audio Espacial"]
  },
  {
    id: 6,
    name: "AirPods Pro 2",
    price: 299,
    originalPrice: 379,
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&h=400&fit=crop",
    badge: "Destaque",
    rating: 5,
    features: ["ANC Adaptativo", "USB-C", "Touch"]
  },
  {
    id: 7,
    name: "EarBuds Sport",
    price: 199,
    originalPrice: 249,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
    badge: null,
    rating: 4,
    features: ["IPX5", "30h Bateria", "Baixa Latência"]
  },
  {
    id: 8,
    name: "TWS Compact",
    price: 149,
    originalPrice: 199,
    image: "https://images.unsplash.com/photo-1631176093617-63490a3d785a?w=400&h=400&fit=crop",
    badge: "Econômico",
    rating: 4,
    features: ["Compacto", "20h Bateria", "AAC"]
  },
]

function ProductCard({ product }: { product: typeof smartwatches[0] }) {
  const [isLiked, setIsLiked] = useState(false)
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

  return (
    <Card className="group bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden">
      <CardContent className="p-0">
        {/* Image Container */}
        <div className="relative aspect-square bg-secondary/50 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.badge && (
              <Badge className="bg-primary text-primary-foreground">
                {product.badge}
              </Badge>
            )}
            <Badge variant="secondary" className="bg-card/80 text-foreground">
              -{discount}%
            </Badge>
          </div>
          
          {/* Like Button */}
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="absolute top-3 right-3 w-10 h-10 rounded-full bg-card/80 flex items-center justify-center hover:bg-card transition-colors"
          >
            <Heart className={`w-5 h-5 ${isLiked ? "fill-red-500 text-red-500" : "text-muted-foreground"}`} />
          </button>
          
          {/* Quick Action */}
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-background/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <Link href={`https://wa.me/5500000000000?text=Olá! Tenho interesse no ${product.name}`} target="_blank">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                <MessageCircle className="w-4 h-4" />
                Comprar via WhatsApp
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-4">
          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${i < product.rating ? "fill-primary text-primary" : "text-muted"}`}
              />
            ))}
          </div>
          
          <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          
          {/* Features */}
          <div className="flex flex-wrap gap-1 mb-3">
            {product.features.map((feature) => (
              <span key={feature} className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded">
                {feature}
              </span>
            ))}
          </div>
          
          {/* Price */}
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-primary">
              R$ {product.price}
            </span>
            <span className="text-sm text-muted-foreground line-through">
              R$ {product.originalPrice}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function Products() {
  return (
    <>
      {/* Smartwatches Section */}
      <section id="smartwatches" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary text-foreground">
              <Zap className="w-3 h-3 mr-1" />
              Coleção Smartwatches
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              Smartwatches <span className="text-primary">Premium</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Os melhores relógios inteligentes com tecnologia de ponta, design elegante e funcionalidades avançadas.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {smartwatches.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* AirPods Section */}
      <section id="airpods" className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-secondary text-foreground">
              <Zap className="w-3 h-3 mr-1" />
              Coleção AirPods
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              Fones <span className="text-primary">AirPods</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Fones de ouvido sem fio com qualidade sonora excepcional, cancelamento de ruído e bateria de longa duração.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {airpods.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
