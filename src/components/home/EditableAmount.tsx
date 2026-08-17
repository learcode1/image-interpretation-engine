import { useState } from "react";

type EditableAmountProps = {
  value: string;
  prefix?: string;
  className?: string;
  label?: string;
};

/**
 * Valor numérico editável direto na tela (apenas visual, sem persistência).
 */
export function EditableAmount({
  value,
  prefix = "R$",
  className = "",
  label = "Editar valor",
}: EditableAmountProps) {
  const [amount, setAmount] = useState(value);

  return (
    <span className={`inline-flex items-baseline gap-1 ${className}`}>
      {prefix ? <span>{prefix}</span> : null}
      <span
        role="textbox"
        aria-label={label}
        tabIndex={0}
        contentEditable
        suppressContentEditableWarning
        spellCheck={false}
        inputMode="decimal"
        onBlur={(event) => setAmount(event.currentTarget.textContent?.trim() || "0,00")}
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
    </span>
  );
}
