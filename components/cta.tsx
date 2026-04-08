import { Button } from "@/components/ui/button"
import { MessageCircle, Instagram } from "lucide-react"
import Link from "next/link"

export function CTA() {
  return (
    <section id="contato" className="py-20">
      <div className="container mx-auto px-4">
        <div className="relative bg-gradient-to-br from-secondary via-card to-secondary rounded-3xl p-8 md:p-16 overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-primary via-amber-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-primary-foreground font-bold text-3xl" style={{ fontFamily: "var(--font-playfair)" }}>II</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              Garanta o seu <span className="text-primary">agora!</span>
            </h2>
            
            <p className="text-muted-foreground mb-8 text-lg">
              Entre em contato conosco pelo WhatsApp ou Instagram e garanta já o seu smartwatch ou AirPods com brindes exclusivos!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://wa.me/5500000000000?text=Olá! Vim do site e gostaria de saber mais sobre os produtos." target="_blank">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white gap-2 w-full sm:w-auto">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </Button>
              </Link>
              <Link href="https://instagram.com/_smarttwins" target="_blank">
                <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary gap-2 w-full sm:w-auto">
                  <Instagram className="w-5 h-5" />
                  @_smarttwins
                </Button>
              </Link>
            </div>
            
            <p className="text-sm text-muted-foreground mt-8">
              Respondemos em até 5 minutos durante o horário comercial
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
