import { createFileRoute } from "@tanstack/react-router";
import { Check, ShieldCheck, Truck, Star, Leaf, FlaskConical, Sparkles, Award, MessageCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import product from "@/assets/nova/product.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nova Beauty Sérum — Pague só na entrega | O fim das rugas" },
      { name: "description", content: "Sérum facial com 5 ativos que reativam as células da juventude. Ácido hialurônico, resveratrol, vitamina E, aloe vera e D-pantenol. Pague só na entrega." },
    ],
  }),
  component: SalesPage,
});

const KIT_LINK_1 = "https://entrega.logzz.com.br/pay/1-serum-197";
const KIT_LINK_2 = "https://entrega.logzz.com.br/pay/3-potes-brinde";
const KIT_LINK_3 = "https://entrega.logzz.com.br/pay/6-meses-brinde";
const WHATS = "https://wa.me/";

function CTAButton({ href = KIT_LINK_2, children = "Sim! Quero aproveitar agora!" }: { href?: string; children?: React.ReactNode }) {
  return (
    <a
      href={href}
      className="pulse-cta inline-flex items-center justify-center rounded-full bg-gradient-cta px-8 py-5 text-base sm:text-lg font-bold uppercase tracking-wide text-cta-foreground transition hover:opacity-95"
    >
      {children}
    </a>
  );
}

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`px-4 py-14 sm:py-20 ${className}`}><div className="mx-auto max-w-6xl">{children}</div></section>;
}

function SalesPage() {
  return (
    <main>
      {/* Top bar */}
      <div className="sticky top-0 z-50 bg-destructive py-3 text-center">
        <p className="text-sm sm:text-xl font-bold uppercase tracking-wider text-destructive-foreground">
          🚚 Pague só na entrega
        </p>
      </div>

      {/* Hero */}
      <Section className="bg-background">
        <div className="text-center">
          <h1 className="mx-auto max-w-4xl text-3xl sm:text-5xl leading-tight">
            <span className="text-gold">Ritual noturno, botox em casa e o fim das rugas com Nova Beauty!</span>
            <br />
            <span className="text-foreground">Um sérum que reativa as células da juventude na sua pele</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground">
            5 ativos que revertem o relógio biológico da pele. Deixe a ciência e tecnologia trazer de volta sua pele livre das rugas — não a promessa.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute inset-0 -z-10 bg-gradient-gold opacity-20 blur-3xl" />
            <img src={product} alt="Frasco do Nova Beauty Sérum" className="mx-auto w-full max-w-md drop-shadow-2xl" />
          </div>
          <ul className="space-y-4 text-base sm:text-lg">
            {[
              "Trata e elimina linhas finas e rugas",
              "Firma a pele",
              "Promove o clareamento de manchas",
              "Hidratação profunda e duradoura",
              "Devolve viço, brilho e luminosidade",
              "Fórmula 100% natural — aprovado pela ANVISA",
            ].map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-gold">
                  <Check className="h-4 w-4 text-gold-foreground" strokeWidth={3} />
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex justify-center">
          <CTAButton />
        </div>
      </Section>

      {/* Benefits */}
      <Section className="bg-card">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl">
            <span className="text-gold">Veja os benefícios do Nova Beauty Sérum</span>
            <br />para a sua pele!
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            O Nova Beauty não é um sérum comum. Possui uma fórmula exclusiva e potente que age nos sinais reais do envelhecimento.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Sparkles, t: "Reduz Rugas", d: "Suaviza linhas finas e marcas profundas." },
            { icon: ShieldCheck, t: "Combate a Flacidez", d: "Devolve firmeza e elasticidade." },
            { icon: Leaf, t: "Clareia Manchas", d: "Uniformiza o tom da pele." },
            { icon: Award, t: "Mais Luminosidade", d: "Pele com viço e brilho natural." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-border bg-background p-6 text-center transition hover:border-gold">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold">
                <Icon className="h-7 w-7 text-gold-foreground" />
              </div>
              <h3 className="text-lg">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center"><CTAButton /></div>
      </Section>

      {/* Natural / ANVISA */}
      <Section>
        <div className="rounded-3xl border border-gold/30 bg-card p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl">
            <span className="text-gold">Nova Beauty é natural</span> e aprovado pela ANVISA
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Nova Beauty Sérum é totalmente natural e livre de efeitos colaterais. Uma fórmula segura, eficaz e desenvolvida em laboratório de alto padrão.
          </p>
          <div className="mt-8 flex justify-center"><CTAButton /></div>
        </div>
      </Section>

      {/* How it works / weeks */}
      <Section className="bg-card">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl">
            <span className="text-gold">Como o Nova Beauty Sérum funciona</span>
            <br />para que você tenha uma pele sem rugas
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
            A fórmula inovadora tem como ativo principal o extrato da casca de uva francesa, conhecida pelas suas propriedades antioxidantes e rejuvenescedoras.
          </p>
        </div>

        <div className="mt-12 space-y-6">
          {[
            { w: "Primeira semana", d: "Você começa a perceber uma melhora na hidratação e uma sensação de suavidade, reduzindo linhas finas e proporcionando uma pele mais macia." },
            { w: "Segunda semana", d: "A textura da pele começa a ficar visivelmente mais uniforme. Manchas leves começam a clarear." },
            { w: "Terceira semana", d: "Firmeza e viço retornam. As rugas estão mais suaves e a pele mais luminosa." },
            { w: "Quarta semana em diante", d: "Resultado completo: pele rejuvenescida, firme, hidratada e com aspecto saudável." },
          ].map((s, i) => (
            <div key={s.w} className="flex flex-col gap-4 rounded-2xl border border-border bg-background p-6 sm:flex-row sm:items-center">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-gold text-xl font-bold text-gold-foreground">
                {i + 1}
              </div>
              <div>
                <h3 className="text-lg text-gold">{s.w}</h3>
                <p className="mt-1 text-muted-foreground">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center"><CTAButton /></div>
      </Section>

      {/* Active ingredients */}
      <Section>
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl">
            <span className="text-gold">Conheça os principais ativos</span>
            <br />da fórmula inovadora do Nova Beauty
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { t: "Ácido Hialurônico", d: "Hidratação profunda e preenchimento natural das rugas." },
            { t: "Resveratrol", d: "Antioxidante poderoso, combate radicais livres." },
            { t: "D-Pantenol", d: "Restaura, acalma e fortalece a barreira da pele." },
            { t: "Vitamina E", d: "Protege contra danos e melhora a textura." },
            { t: "Aloe Vera", d: "Hidrata, acalma e cicatriza." },
          ].map((a) => (
            <div key={a.t} className="rounded-2xl border border-border bg-card p-6 text-center transition hover:border-gold hover:shadow-glow">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold">
                <FlaskConical className="h-7 w-7 text-gold-foreground" />
              </div>
              <h3 className="text-base text-gold">{a.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{a.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center"><CTAButton /></div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-card">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl">
            Depoimentos de <span className="text-gold">clientes</span>
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { n: "Maria, 52", t: "Em 3 semanas minhas linhas finas sumiram. Minha pele nunca esteve tão firme!" },
            { n: "Cláudia, 47", t: "Os benefícios apareceram rápido. Hoje recebo elogios todos os dias." },
            { n: "Patrícia, 58", t: "Tentei vários tratamentos caros e nenhum funcionou como o Nova Beauty." },
          ].map((c) => (
            <div key={c.n} className="rounded-2xl border border-border bg-background p-6">
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-4 italic text-muted-foreground">"{c.t}"</p>
              <p className="mt-4 font-semibold">— {c.n}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Pricing */}
      <Section>
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl">
            Escolha a melhor <span className="text-gold">promoção para você</span>
          </h2>
          <p className="mt-4 text-muted-foreground">Frete grátis e pagamento na entrega para todo o Brasil.</p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            { title: "Experimente", subtitle: "Tratamento para 60 dias", units: "1 Pote", oldPrice: "R$ 357,00", price: "R$ 197,00", installment: "12x R$ 21,00", href: KIT_LINK_1, featured: false },
            { title: "Pague 2 Leve 4", subtitle: "Tratamento para 4 meses", units: "4 Potes", oldPrice: "R$ 557,00", price: "R$ 297,00", installment: "12x R$ 31,70", href: KIT_LINK_2, featured: true, badge: "MAIS VENDIDO" },
            { title: "Pague 3 Leve 6", subtitle: "Tratamento para 6 meses", units: "6 Potes", oldPrice: "R$ 657,00", price: "R$ 397,00", installment: "12x R$ 42,00", href: KIT_LINK_3, featured: false, badge: "MELHOR CUSTO" },
          ].map((p) => (
            <a
              key={p.title}
              href={p.href}
              className={`relative flex flex-col rounded-3xl border p-8 text-center transition hover:-translate-y-1 ${
                p.featured ? "border-gold bg-card shadow-glow" : "border-border bg-card hover:border-gold"
              }`}
            >
              {p.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-gold px-4 py-1 text-xs font-bold uppercase text-gold-foreground">
                  {p.badge}
                </span>
              )}
              <h3 className="text-2xl text-gold">{p.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.subtitle}</p>
              <img src={product} alt={p.title} className="mx-auto my-6 h-40 w-40 object-contain" />
              <p className="text-sm text-muted-foreground">{p.units}</p>
              <p className="mt-4 text-sm text-muted-foreground line-through">de {p.oldPrice}</p>
              <p className="text-4xl font-bold text-foreground">{p.price}</p>
              <p className="mt-1 text-sm text-muted-foreground">ou {p.installment} no cartão</p>
              <span className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-cta px-6 py-3 font-bold uppercase text-cta-foreground">
                Comprar agora
              </span>
            </a>
          ))}
        </div>
      </Section>

      {/* WhatsApp helper */}
      <Section className="bg-card">
        <div className="rounded-3xl border border-border bg-background p-8 sm:p-12 text-center">
          <h3 className="text-xl sm:text-2xl">
            <b>Não sabe</b> comprar pelo site? <br />
            Chame um atendente agora mesmo:
          </h3>
          <a
            href={WHATS}
            className="mt-6 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-8 py-4 font-bold text-white transition hover:opacity-90"
          >
            <MessageCircle className="h-5 w-5" />
            Falar no WhatsApp
          </a>
        </div>
      </Section>

      {/* Guarantee */}
      <Section>
        <div className="grid items-center gap-10 rounded-3xl border border-gold/40 bg-card p-8 sm:p-12 lg:grid-cols-2">
          <div className="text-center">
            <div className="mx-auto flex h-44 w-44 items-center justify-center rounded-full bg-gradient-gold">
              <ShieldCheck className="h-24 w-24 text-gold-foreground" strokeWidth={1.5} />
            </div>
            <p className="mt-4 text-2xl font-bold">Garantia 90 dias</p>
          </div>
          <div>
            <h2 className="text-3xl">
              <span className="text-gold">Desafio 90 dias</span>
              <br />Pacto Nova Beauty
            </h2>
            <p className="mt-4 text-muted-foreground">
              Nova Beauty Sérum oferece uma garantia incondicional. Se você não ficar totalmente satisfeito com os resultados, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><Truck className="h-5 w-5 text-gold" /> Frete grátis</span>
              <span className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-gold" /> Pague na entrega</span>
              <span className="flex items-center gap-2"><Award className="h-5 w-5 text-gold" /> Aprovado pela ANVISA</span>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-card">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl">
            <span className="text-gold">Perguntas</span> Frequentes
          </h2>
        </div>
        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {[
            { q: "O que é o Sérum Nova Beauty?", a: "É um tratamento facial desenvolvido com ácido hialurônico, vitamina E, aloe vera, óleo de semente de uva, D-pantenol e resveratrol. Ele hidrata, reduz rugas, linhas de expressão e devolve firmeza e viço à pele." },
            { q: "Para quem é indicado?", a: "Indicado para homens e mulheres que desejam reduzir rugas, linhas finas, manchas leves e sinais de envelhecimento, além de hidratar e devolver firmeza à pele." },
            { q: "Em quanto tempo verei resultados?", a: "Os primeiros sinais aparecem já na primeira semana de uso. Os resultados completos são percebidos entre a 3ª e 4ª semana." },
            { q: "Preciso usar protetor solar?", a: "Sim. O sérum potencializa os cuidados anti-idade, mas o uso de protetor solar diário é essencial para manter a pele protegida e prolongar os resultados." },
            { q: "Como faço o pagamento?", a: "Você pode pagar no cartão em até 12x ou simplesmente pagar na entrega — sem custo adicional." },
            { q: "Tem garantia?", a: "Sim. Garantia incondicional de satisfação. Se não gostar, devolvemos seu dinheiro." },
          ].map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
        </div>
        <div className="mt-12 flex justify-center"><CTAButton /></div>
      </Section>

      <footer className="border-t border-border bg-background px-4 py-10 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Nova Beauty Sérum. Todos os direitos reservados.</p>
        <p className="mt-2">Este produto não substitui atendimento médico. Resultados podem variar.</p>
      </footer>
    </main>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-border bg-background">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold"
      >
        <span>{q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-gold transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="px-5 pb-5 text-muted-foreground">{a}</p>}
    </div>
  );
}
