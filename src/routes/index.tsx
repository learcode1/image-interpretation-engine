import { createFileRoute } from "@tanstack/react-router";
import { Heart } from "lucide-react";

import { AccountHeader } from "@/components/home/AccountHeader";
import { BalanceSection } from "@/components/home/BalanceSection";
import { BoxesSection } from "@/components/home/BoxesSection";
import { DiscoverSection } from "@/components/home/DiscoverSection";
import { ShopSection } from "@/components/home/ShopSection";

const title = "Minha conta — banco digital no seu bolso";
const description =
  "Veja saldo, Caixinhas, cartões, Pix e ofertas em uma única tela escura feita para o celular.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="mx-auto min-h-screen max-w-md bg-background font-sans text-foreground">
      <AccountHeader />
      <BalanceSection />
      <div className="h-px bg-hairline" />
      <BoxesSection />
      <div className="h-px bg-hairline" />
      <ShopSection />
      <div className="h-px bg-hairline" />
      <DiscoverSection />
      <div className="flex justify-center pt-4 pb-12">
        <button
          type="button"
          className="flex items-center gap-3 text-[17px] font-semibold text-brand-soft"
        >
          <Heart className="size-6" strokeWidth={2} />
          Avalie esta tela
        </button>
      </div>
    </main>
  );
}
