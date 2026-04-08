"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Ana Silva",
    location: "São Paulo, SP",
    rating: 5,
    text: "Produto de excelente qualidade! Chegou antes do prazo e o atendimento foi impecável. Super recomendo!",
    product: "Smart Watch Ultra"
  },
  {
    name: "Carlos Eduardo",
    location: "Rio de Janeiro, RJ",
    rating: 5,
    text: "Já é o segundo smartwatch que compro com eles. Confiança total! Os brindes que vêm junto são ótimos.",
    product: "AirPods Pro 2"
  },
  {
    name: "Mariana Costa",
    location: "Belo Horizonte, MG",
    rating: 5,
    text: "Melhor custo-benefício do mercado. O fone tem uma qualidade sonora incrível e a bateria dura muito!",
    product: "EarBuds Sport"
  },
  {
    name: "Pedro Henrique",
    location: "Curitiba, PR",
    rating: 5,
    text: "Atendimento nota 10! Tive uma dúvida e me responderam super rápido. Produto original e bem embalado.",
    product: "Smart Watch Pro"
  },
  {
    name: "Juliana Santos",
    location: "Salvador, BA",
    rating: 5,
    text: "Comprei para presentear meu pai e ele amou! A qualidade é impressionante pelo preço.",
    product: "Smart Watch Fit"
  },
  {
    name: "Lucas Ferreira",
    location: "Brasília, DF",
    rating: 5,
    text: "Entrega rápida e produto conforme anunciado. Vendedor muito atencioso. Voltarei a comprar com certeza!",
    product: "TWS Compact"
  },
]

export function Testimonials() {
  return (
    <section id="clientes" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            O que nossos <span className="text-primary">clientes</span> dizem
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mais de 700 clientes satisfeitos em todo o Brasil. Confira alguns depoimentos!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/30 transition-colors">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {`"${testimonial.text}"`}
                </p>
                
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < testimonial.rating ? "fill-primary text-primary" : "text-muted"}`}
                    />
                  ))}
                </div>
                
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  <p className="text-xs text-primary mt-1">Comprou: {testimonial.product}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
