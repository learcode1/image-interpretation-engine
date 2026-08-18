import { UserAvatarIcon, EyeIcon, HelpIcon, ShieldIcon } from "./iconsSvg";

export function AccountHeader() {
  return (
    <header className="px-6 pt-6 pb-9 text-brand-foreground" style={{ backgroundColor: '#591E8C' }}>
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <div className="relative w-fit">
          <div className="grid size-13 shrink-0 place-items-center rounded-full" style={{ backgroundColor: '#8032C3' }}>
            <UserAvatarIcon className="size-7" />
          </div>
          <span className="absolute -top-0.5 right-0 size-3.5 rounded-full bg-brand-foreground" />
        </div>
        <div className="flex shrink-0 items-center gap-6">
          <button type="button" aria-label="Ocultar saldo">
            <EyeIcon className="size-6" />
          </button>
          <button type="button" aria-label="Ajuda">
            <HelpIcon className="size-6" />
          </button>
          <button type="button" aria-label="Segurança">
            <ShieldIcon className="size-6" />
          </button>
        </div>
      </div>
      <p className="mt-10 text-2xl font-bold tracking-tight">Olá, Lucas</p>
    </header>
  );
}
