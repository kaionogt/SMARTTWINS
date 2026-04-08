"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Shield, Truck } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-secondary/50 border border-border rounded-full px-4 py-2 mb-6">
              <Star className="w-4 h-4 text-primary fill-primary" />
              <span className="text-sm text-muted-foreground">+700 aparelhos vendidos</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-balance" style={{ fontFamily: "var(--font-playfair)" }}>
              Smartwatches & AirPods{" "}
              <span className="text-primary">Premium</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              A melhor seleção de smartwatches e fones de ouvido com qualidade garantida. 
              Tecnologia de ponta com os melhores preços do mercado.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Link href="#smartwatches">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2 w-full sm:w-auto">
                  Ver Produtos
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="#contato">
                <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary w-full sm:w-auto">
                  Fale Conosco
                </Button>
              </Link>
            </div>
            
            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground">Garantia</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-2">
                  <Truck className="w-6 h-6 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground">Entrega Rápida</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mx-auto mb-2">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground">5 Estrelas</p>
              </div>
            </div>
          </div>
          
          {/* Hero Image / Product Showcase */}
          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main Product Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-amber-500/10 to-pink-500/20 rounded-full animate-pulse" />
              <div className="absolute inset-4 bg-secondary/50 rounded-full border border-border flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl md:text-8xl font-bold text-primary mb-4" style={{ fontFamily: "var(--font-playfair)" }}>II</div>
                  <p className="text-muted-foreground text-sm">SmartTwins</p>
                  <p className="text-xs text-muted-foreground mt-1">Especialistas em Tecnologia</p>
                </div>
              </div>
              
              {/* Floating Price Tag */}
              <div className="absolute -right-4 top-1/4 bg-card border border-border rounded-2xl p-4 shadow-xl">
                <p className="text-xs text-muted-foreground">A partir de</p>
                <p className="text-2xl font-bold text-primary">R$ 199</p>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -left-4 bottom-1/4 bg-card border border-border rounded-2xl p-4 shadow-xl">
                <p className="text-xs text-muted-foreground">Brindes</p>
                <p className="text-sm font-semibold text-foreground">Inclusos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
