import { useEffect, useRef, useState } from "react";

import { formatAmount } from "@/lib/currency";

type EditableAmountProps = {
  value: string;
  prefix?: string;
  className?: string;
  label?: string;
  readOnly?: boolean;
  onValueChange?: (value: string) => void;
};

/**
 * Valor monetário editável direto na tela, com formatação automática
 * (milhar com "." e decimais com ",").
 */
export function EditableAmount({
  value,
  prefix = "R$",
  className = "",
  label = "Editar valor",
  readOnly = false,
  onValueChange,
}: EditableAmountProps) {
  const [internal, setInternal] = useState(() => formatAmount(value));
  const ref = useRef<HTMLSpanElement>(null);
  const controlled = typeof onValueChange === "function";
  const amount = controlled ? formatAmount(value) : internal;

  useEffect(() => {
    if (ref.current && ref.current.textContent !== amount) {
      ref.current.textContent = amount;
    }
  }, [amount]);

  const commit = (raw: string) => {
    const next = formatAmount(raw);
    if (controlled) onValueChange?.(next);
    else setInternal(next);
    if (ref.current) ref.current.textContent = next;
  };

  return (
    <span className={`inline-flex items-baseline gap-1 ${className}`}>
      {prefix ? <span>{prefix}</span> : null}
      {readOnly ? (
        <span>{amount}</span>
      ) : (
        <span
          ref={ref}
          role="textbox"
          aria-label={label}
          tabIndex={0}
          contentEditable
          suppressContentEditableWarning
          spellCheck={false}
          inputMode="decimal"
          onBlur={(event) => commit(event.currentTarget.textContent ?? "")}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              event.currentTarget.blur();
            }
          }}
          className="min-w-[1ch] rounded-sm outline-none focus:bg-surface focus:px-1 focus:ring-2 focus:ring-brand-soft"
        >
          {amount}
        </span>
      )}
    </span>
  );
}
