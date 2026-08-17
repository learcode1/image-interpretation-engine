import { ChevronRight, TriangleIcon } from "lucide-react";

import { EditableAmount } from "./EditableAmount";


import boxFuturo from "@/assets/box-futuro.jpg";
import boxKeys from "@/assets/box-keys.jpg";
import boxMoto from "@/assets/box-moto.jpg";
import boxSummer from "@/assets/box-summer.jpg";

export function BoxesSection() {
  return (
    <section className="pt-7 pb-8">
      <div className="px-6">
        <button type="button" className="flex w-full items-center justify-between gap-4 text-left">
          <span className="text-xl font-bold tracking-tight">Total em Caixinhas</span>
          <ChevronRight className="size-6 shrink-0 text-subtle" strokeWidth={2} />
        </button>
        <p className="mt-1 text-xl">
          <EditableAmount value="0,09" label="Editar total em Caixinhas" />
        </p>
      </div>

      <div className="mt-7 flex gap-4 overflow-x-auto pb-1 [&>*:first-child]:ml-6 [&>*:last-child]:mr-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <article className="w-[38%] shrink-0">
          <img
            src={boxMoto}
            alt="Caixinha MOTO"
            loading="lazy"
            width={640}
            height={640}
            className="aspect-square w-full rounded-md object-cover ring-2 ring-brand"
          />
          <p className="mt-3 text-[15px] font-semibold">MOTO</p>
          <p className="mt-0.5 flex items-center gap-1.5 text-[15px]">
            R$ 0,09
            <TriangleIcon className="size-2.5 fill-up text-up" />
          </p>
        </article>

        <article className="w-[38%] shrink-0">
          <img
            src={boxFuturo}
            alt="Caixinha Futuro"
            loading="lazy"
            width={640}
            height={640}
            className="aspect-square w-full rounded-md object-cover ring-2 ring-brand"
          />
          <p className="mt-3 text-[15px] font-semibold">Futuro</p>
          <p className="mt-0.5 text-[15px] text-subtle">R$ 0,00</p>
        </article>

        <article className="w-[38%] shrink-0">
          <div className="grid aspect-square w-full grid-rows-2 gap-1.5 overflow-hidden rounded-md ring-2 ring-brand">
            <img
              src={boxKeys}
              alt=""
              loading="lazy"
              width={860}
              height={512}
              className="size-full object-cover"
            />
            <img
              src={boxSummer}
              alt=""
              loading="lazy"
              width={860}
              height={512}
              className="size-full object-cover"
            />
          </div>
          <p className="mt-3 text-[15px] font-semibold">Acessar todas</p>
        </article>
      </div>
    </section>
  );
}
