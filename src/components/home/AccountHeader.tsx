import { CircleHelp, Eye, ShieldCheck, User } from "lucide-react";

export function AccountHeader() {
  return (
    <header className="bg-brand px-6 pt-6 pb-9 text-brand-foreground">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <div className="relative w-fit">
          <div className="grid size-13 shrink-0 place-items-center rounded-full bg-brand-strong">
            <User className="size-7" strokeWidth={2.2} />
          </div>
          <span className="absolute -top-0.5 right-0 size-3.5 rounded-full bg-brand-foreground" />
        </div>
        <div className="flex shrink-0 items-center gap-6">
          <button type="button" aria-label="Ocultar saldo">
            <Eye className="size-6" strokeWidth={1.8} />
          </button>
          <button type="button" aria-label="Ajuda">
            <CircleHelp className="size-6" strokeWidth={1.8} />
          </button>
          <button type="button" aria-label="Segurança">
            <ShieldCheck className="size-6" strokeWidth={1.8} />
          </button>
        </div>
      </div>
      <p className="mt-10 text-2xl font-bold tracking-tight">Olá, Lucas</p>
    </header>
  );
}
