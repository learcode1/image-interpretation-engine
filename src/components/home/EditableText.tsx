import { useEffect, useRef } from "react";

type EditableTextProps = {
  value: string;
  label: string;
  className?: string;
  onValueChange: (value: string) => void;
};

/** Texto editável inline (nomes de Caixinhas). */
export function EditableText({ value, label, className = "", onValueChange }: EditableTextProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (ref.current && ref.current.textContent !== value) {
      ref.current.textContent = value;
    }
  }, [value]);

  return (
    <span
      ref={ref}
      role="textbox"
      aria-label={label}
      tabIndex={0}
      contentEditable
      suppressContentEditableWarning
      spellCheck={false}
      onBlur={(event) => onValueChange(event.currentTarget.textContent?.trim() || "Caixinha")}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          event.currentTarget.blur();
        }
      }}
      className={`min-w-[2ch] rounded-sm outline-none focus:bg-surface focus:px-1 focus:ring-2 focus:ring-brand-soft ${className}`}
    >
      {value}
    </span>
  );
}
