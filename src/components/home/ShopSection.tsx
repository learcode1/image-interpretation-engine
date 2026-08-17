import { Gift, Ticket, Tag, Receipt } from "lucide-react";

export function ShopSection() {
  return (
    <section className="px-6 pt-7 pb-9">
      <h2 className="text-xl font-bold tracking-tight">Compre sem sair do app</h2>

      <div className="relative mt-6 overflow-hidden rounded-xl bg-brand">
        <div
          className="absolute inset-y-0 right-0 w-[62%] bg-surface"
          style={{ clipPath: "polygon(38% 0, 100% 0, 100% 100%, 0 100%)" }}
        />
        <div
          className="absolute inset-y-0 right-[26%] w-[36%] bg-brand-strong"
          style={{ clipPath: "polygon(52% 0, 100% 0, 48% 100%, 0 100%)" }}
        />

        <div className="absolute top-2 right-[30%] grid size-12 place-items-center rounded-full bg-surface-2">
          <Ticket className="size-5 text-brand-soft" strokeWidth={1.8} />
        </div>
        <div className="absolute top-8 right-[10%] grid size-13 place-items-center rounded-full bg-surface-2">
          <Receipt className="size-5 text-brand-soft" strokeWidth={1.8} />
        </div>
        <div className="absolute top-1/2 right-[4%] grid size-12 place-items-center rounded-full bg-surface-2">
          <Tag className="size-5 text-brand-soft" strokeWidth={1.8} />
        </div>
        <div className="absolute -bottom-4 right-[12%] grid size-12 place-items-center rounded-full bg-surface-2">
          <Gift className="size-5 text-brand-soft" strokeWidth={1.8} />
        </div>

        <div className="relative max-w-[62%] px-5 py-6">
          <p className="text-[17px] leading-snug font-medium text-brand-foreground">
            Gift cards para você comprar as marcas que mais curte
          </p>
          <button
            type="button"
            className="mt-5 rounded-full bg-surface px-6 py-3.5 text-[15px] font-bold text-foreground"
          >
            Conhecer
          </button>
        </div>
      </div>
    </section>
  );
}
