type PixIconProps = {
  className?: string;
  strokeWidth?: number;
};

export function PixIcon({ className }: PixIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {/* Quatro pontas do símbolo Pix */}
      <g>
        <path d="M12 1.9c.3 0 .6.1.8.3l3.2 3.2c-.6.1-1.1.4-1.5.8L12 8.7 9.5 6.2c-.4-.4-.9-.7-1.5-.8l3.2-3.2c.2-.2.5-.3.8-.3Z" />
        <path d="M12 22.1c-.3 0-.6-.1-.8-.3l-3.2-3.2c.6-.1 1.1-.4 1.5-.8l2.5-2.5 2.5 2.5c.4.4.9.7 1.5.8l-3.2 3.2c-.2.2-.5.3-.8.3Z" />
        <path d="M1.9 12c0-.3.1-.6.3-.8l3.2-3.2c.1.6.4 1.1.8 1.5L8.7 12l-2.5 2.5c-.4.4-.7.9-.8 1.5l-3.2-3.2a1.1 1.1 0 0 1-.3-.8Z" />
        <path d="M22.1 12c0 .3-.1.6-.3.8l-3.2 3.2c-.1-.6-.4-1.1-.8-1.5L15.3 12l2.5-2.5c.4-.4.7-.9.8-1.5l3.2 3.2c.2.2.3.5.3.8Z" />
      </g>
      {/* Losango central */}
      <path d="M12 9.2 14.8 12 12 14.8 9.2 12 12 9.2Z" />
    </svg>
  );
}
