"use client"

import { Watch, Headphones, Truck, Users, Lightbulb } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    name: "Entregas",
    icon: Truck,
    href: "#entregas",
    description: "Acompanhe suas entregas"
  },
  {
    name: "Clientes",
    icon: Users,
    href: "#clientes",
    description: "Veja nossos clientes satisfeitos"
  },
  {
    name: "Smartwatches",
    icon: Watch,
    href: "#smartwatches",
    description: "Relógios inteligentes"
  },
  {
    name: "AirPods",
    icon: Headphones,
    href: "#airpods",
    description: "Fones de ouvido premium"
  },
  {
    name: "Dicas",
    icon: Lightbulb,
    href: "#dicas",
    description: "Dicas e tutoriais"
  },
]

export function Categories() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group flex flex-col items-center gap-3"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-secondary border-2 border-border group-hover:border-primary transition-colors flex items-center justify-center">
                <category.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
              </div>
              <span className="text-xs md:text-sm text-muted-foreground group-hover:text-foreground transition-colors uppercase tracking-wider">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
