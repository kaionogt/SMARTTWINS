import Link from "next/link"
import { Instagram, MessageCircle, Mail } from "lucide-react"

const links = [
  { name: "Início", href: "#inicio" },
  { name: "Smartwatches", href: "#smartwatches" },
  { name: "AirPods", href: "#airpods" },
  { name: "Clientes", href: "#clientes" },
  { name: "Contato", href: "#contato" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary via-amber-500 to-pink-500 flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg" style={{ fontFamily: "var(--font-playfair)" }}>II</span>
              </div>
              <span className="text-foreground font-semibold text-lg">SmartTwins</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              Especialistas em Smartwatches e AirPods. Mais de 700 aparelhos vendidos com qualidade garantida.
            </p>
            <div className="flex gap-3">
              <Link 
                href="https://instagram.com/_smarttwins" 
                target="_blank"
                className="w-10 h-10 rounded-full bg-secondary border border-border hover:border-primary flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </Link>
              <Link 
                href="https://wa.me/5500000000000" 
                target="_blank"
                className="w-10 h-10 rounded-full bg-secondary border border-border hover:border-primary flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </Link>
              <Link 
                href="mailto:contato@smarttwins.com" 
                className="w-10 h-10 rounded-full bg-secondary border border-border hover:border-primary flex items-center justify-center transition-colors"
              >
                <Mail className="w-5 h-5 text-muted-foreground hover:text-primary" />
              </Link>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Links Rápidos</h4>
            <nav className="flex flex-col gap-2">
              {links.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Atendimento</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Segunda a Sexta: 9h às 18h</p>
              <p>Sábado: 9h às 13h</p>
              <p className="text-primary">WhatsApp: (00) 00000-0000</p>
              <p>contato@smarttwins.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} SmartTwins. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
