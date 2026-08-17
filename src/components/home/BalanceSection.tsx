import { ChevronRight, CreditCard, Smartphone, QrCode, Barcode, Diamond } from "lucide-react";

const actions = [
  { icon: Diamond, label: "Área Pix e Transferir" },
  { icon: Barcode, label: "Pagar" },
  { icon: QrCode, label: "Pagar com Pix QR code" },
  { icon: Smartphone, label: "Recarga de celular" },
];

export function BalanceSection() {
  return (
    <section className="px-6 pt-7 pb-8">
      <button
        type="button"
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="text-xl font-bold tracking-tight">Saldo em conta</span>
        <ChevronRight className="size-6 shrink-0 text-subtle" strokeWidth={2} />
      </button>
      <p className="mt-1 text-xl">R$ 44,33</p>

      <div className="mt-8 grid grid-cols-4 gap-2">
        {actions.map(({ icon: Icon, label }) => (
          <button key={label} type="button" className="flex flex-col items-center gap-3">
            <span className="grid aspect-square w-full place-items-center rounded-full bg-surface">
              <Icon className="size-6" strokeWidth={1.8} />
            </span>
            <span className="text-center text-[13px] leading-tight font-semibold">
              {label}
            </span>
          </button>
        ))}
      </div>

      <button
        type="button"
        className="mt-7 flex w-full items-center gap-4 rounded-lg bg-surface px-5 py-5 text-left"
      >
        <CreditCard className="size-6 shrink-0" strokeWidth={1.8} />
        <span className="text-[15px] font-semibold">Meus cartões</span>
      </button>
    </section>
  );
}
