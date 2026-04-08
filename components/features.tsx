import { Shield, Truck, CreditCard, Headphones, Gift, RefreshCw } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Garantia Inclusa",
    description: "Todos os produtos possuem garantia de fábrica."
  },
  {
    icon: Truck,
    title: "Envio para Todo Brasil",
    description: "Entregamos em todas as regiões do país."
  },
  {
    icon: CreditCard,
    title: "Pagamento Seguro",
    description: "PIX, cartão de crédito e boleto bancário."
  },
  {
    icon: Headphones,
    title: "Suporte 24/7",
    description: "Atendimento rápido via WhatsApp."
  },
  {
    icon: Gift,
    title: "Brindes Exclusivos",
    description: "Ganhe brindes em todas as compras."
  },
  {
    icon: RefreshCw,
    title: "Troca Facilitada",
    description: "Processo de troca simples e rápido."
  },
]

export function Features() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
            Por que escolher a <span className="text-primary">SmartTwins</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferecemos a melhor experiência de compra com segurança e qualidade garantida.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-secondary border border-border group-hover:border-primary rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
