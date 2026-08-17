import discoverReferral from "@/assets/discover-referral.jpg";
import discoverSalary from "@/assets/discover-salary.jpg";

const cards = [
  {
    image: discoverReferral,
    title: "Indique o Nu para amigos",
    description: "Espalhe como é simples estar no controle.",
    cta: "Indicar amigos",
  },
  {
    image: discoverSalary,
    title: "Portabilidade de salário",
    description: "Liberdade é escolher onde receber seu dinheiro.",
    cta: "Conhecer",
  },
];

export function DiscoverSection() {
  return (
    <section className="pt-7 pb-8">
      <h2 className="px-6 text-xl font-bold tracking-tight">Descubra mais</h2>

      <div className="mt-6 flex gap-4 overflow-x-auto px-6 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {cards.map((card) => (
          <article
            key={card.title}
            className="w-[70%] shrink-0 overflow-hidden rounded-lg bg-surface"
          >
            <img
              src={card.image}
              alt={card.title}
              loading="lazy"
              width={900}
              height={620}
              className="aspect-[16/11] w-full object-cover"
            />
            <div className="px-5 pt-5 pb-6">
              <h3 className="text-[17px] leading-snug font-semibold">{card.title}</h3>
              <p className="mt-2 text-[15px] leading-snug text-subtle">{card.description}</p>
              <button
                type="button"
                className="mt-5 rounded-full bg-brand px-6 py-3.5 text-[15px] font-bold text-brand-foreground"
              >
                {card.cta}
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
