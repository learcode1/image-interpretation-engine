type IconProps = { className?: string };

/** Símbolo do Pix: quatro losangos arredondados em contorno. */
export function PixIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true" focusable="false" className={className}>
      <g
        stroke="currentColor"
        strokeWidth={2.6}
        strokeLinejoin="round"
        strokeLinecap="round"
      >
        <path d="M24 4.6l6.2 6.2a4 4 0 0 1 0 5.6L24 22.6l-6.2-6.2a4 4 0 0 1 0-5.6L24 4.6Z" />
        <path d="M24 25.4l6.2 6.2a4 4 0 0 1 0 5.6L24 43.4l-6.2-6.2a4 4 0 0 1 0-5.6L24 25.4Z" />
        <path d="M4.6 24l6.2-6.2a4 4 0 0 1 5.6 0L22.6 24l-6.2 6.2a4 4 0 0 1-5.6 0L4.6 24Z" />
        <path d="M43.4 24l-6.2 6.2a4 4 0 0 1-5.6 0L25.4 24l6.2-6.2a4 4 0 0 1 5.6 0L43.4 24Z" />
      </g>
    </svg>
  );
}

/** Código de barras: quatro barras verticais. */
export function BarcodeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" className={className}>
      <rect x="3" y="5" width="2.4" height="14" rx="0.6" />
      <rect x="8.2" y="5" width="1.4" height="14" rx="0.5" />
      <rect x="11.8" y="5" width="2.4" height="14" rx="0.6" />
      <rect x="17" y="5" width="2.4" height="14" rx="0.6" />
    </svg>
  );
}

/** QR code estilizado: dois quadrados vazados em cima, blocos embaixo. */
export function QrIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" className={className}>
      <rect x="3" y="3" width="7" height="7" rx="1.4" stroke="currentColor" strokeWidth={2.2} />
      <rect x="14" y="3" width="7" height="7" rx="1.4" stroke="currentColor" strokeWidth={2.2} />
      <rect x="3" y="14" width="7" height="7" rx="1.4" stroke="currentColor" strokeWidth={2.2} />
      <rect x="14.5" y="14.5" width="6" height="6" rx="1.2" fill="currentColor" />
    </svg>
  );
}

/** Celular com traço da câmera/alto-falante. */
export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" className={className}>
      <rect x="6" y="2.5" width="12" height="19" rx="3" stroke="currentColor" strokeWidth={2.1} />
      <rect x="11.1" y="6" width="1.8" height="6.6" rx="0.9" fill="currentColor" />
    </svg>
  );
}

/** Cartão vertical arredondado com marca pequena. */
export function CardIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false" className={className}>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.6" stroke="currentColor" strokeWidth={2.1} />
      <rect x="11.2" y="6" width="1.6" height="3.4" rx="0.8" fill="currentColor" />
    </svg>
  );
}
