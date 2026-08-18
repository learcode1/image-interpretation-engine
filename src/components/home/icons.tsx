import pixSvg from '/icons/pix.svg';
import escudoPng from '/icons/escudo.png';

type IconProps = { className?: string };

/** Símbolo do Pix: importado de pix.svg */
export function PixIcon({ className }: IconProps) {
  return (
    <img 
      src={pixSvg} 
      alt="Pix" 
      aria-hidden="true"
      className={className}
      style={{ 
        width: 'currentColor', 
        height: 'auto',
        objectFit: 'contain',
        objectPosition: 'center',
        display: 'block'
      }}
    />
  );
}

/** Código de barras: ícone SVG externo. */
export function BarcodeIcon({ className }: IconProps) {
  return (
    <svg width="51" height="29" viewBox="0 0 51 29" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className={className}>
      <rect width="6" height="29" fill="currentColor"/>
      <rect x="28" width="6" height="29" fill="currentColor"/>
      <rect x="12" width="11" height="29" fill="currentColor"/>
      <rect x="40" width="11" height="29" fill="currentColor"/>
    </svg>
  );
}

/** QR code: ícone SVG externo. */
export function QrIcon({ className }: IconProps) {
  return (
    <svg width="51" height="51" viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className={className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M0 0H23V23H0V0ZM18 5H5V18H18V5Z" fill="currentColor"/>
      <path d="M28 0H51V23H28V0ZM46 5H33V18H46V5Z" fill="currentColor"/>
      <path d="M0 28H23V51H0V28ZM18 33H5V46H18V33Z" fill="currentColor"/>
      <path d="M33 33H46V46H33V33Z" fill="currentColor"/>
    </svg>
  );
}

/** Celular: ícone SVG externo. */
export function PhoneIcon({ className }: IconProps) {
  return (
    <svg width="39" height="63" viewBox="0 0 39 63" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className={className}>
      <path d="M33 8.00011C35.1479 8.00011 36.3521 8.00011 38.5 8.00011C38.5 25.5737 38.5 54.5003 38.5 54.5003H33C33 54.5003 33 25.5737 33 8.00011Z" fill="currentColor"/>
      <path d="M7 56.5002L31.5 56.5003V62.5003L7 62.5001V56.5002Z" fill="currentColor"/>
      <path d="M7 0C7 0 21.5416 0.000112058 31.5 0.000112058C31.5 2.34326 31.5 3.65697 31.5 6.00011C21.5416 6.00011 7 6 7 6V0Z" fill="currentColor"/>
      <path d="M33 8.00011H38.5C38.5 0.0018487 32.5 -0.00262775 31.5 0.000112058V6.00011C33 6.00011 33 8.00011 33 8.00011Z" fill="currentColor"/>
      <path d="M5.5 7.99989C3.35212 7.99989 2.14788 7.99989 6.15273e-10 7.99989C6.15273e-10 25.5735 0 54.5 0 54.5H5.5C5.5 54.5 5.5 25.5735 5.5 7.99989Z" fill="currentColor"/>
      <path d="M5.5 7.99989H6.15273e-10C-4.05026e-05 2.99478 2 0 7 0V6C5.5 6 5.5 7.99989 5.5 7.99989Z" fill="currentColor"/>
      <path d="M33 54.5003H38.5C38.5 62.4985 32.5 62.503 31.5 62.5003V56.5003C33 56.5003 33 54.5003 33 54.5003Z" fill="currentColor"/>
      <path d="M5.5 54.5H0C0 62.4983 6 62.5029 7 62.5001V56.5002C5.5 56.5002 5.5 54.5 5.5 54.5Z" fill="currentColor"/>
      <rect x="12.75" y="45" width="13" height="6" fill="currentColor"/>
    </svg>
  );
}

/** Cartão: ícone SVG externo. */
export function CardIcon({ className }: IconProps) {
  return (
    <svg width="46" height="58" viewBox="0 0 46 58" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className={className}>
      <rect x="23" y="14" width="6" height="10" fill="currentColor"/>
      <path d="M40.5 8.00009C42.6479 8.00009 43.8521 8.00009 46 8.00009C46 25.5737 46 49.5001 46 49.5001H40.5C40.5 49.5001 40.5 25.5737 40.5 8.00009Z" fill="currentColor"/>
      <path d="M7 51.5002H39V57.5001H7V51.5002Z" fill="currentColor"/>
      <path d="M7 9.44155e-05C7 9.44155e-05 29.0416 9.44155e-05 39 9.44155e-05C39 2.34324 39 3.65695 39 6.00009C29.0416 6.00009 7 6.00009 7 6.00009V9.44155e-05Z" fill="currentColor"/>
      <path d="M40.5 8.00009H46C46 0.00183153 40 -0.0026454 39 9.44155e-05V6.00009C40.5 6.00009 40.5 8.00009 40.5 8.00009Z" fill="currentColor"/>
      <path d="M5.5 7.99998C3.35212 7.99998 2.14788 7.99998 6.15166e-10 7.99998C6.15166e-10 25.5736 6.15273e-10 49.5 6.15273e-10 49.5H5.5C5.5 49.5 5.5 25.5736 5.5 7.99998Z" fill="currentColor"/>
      <path d="M5.5 7.99998H6.15166e-10C-4.05026e-05 2.99487 2 9.44155e-05 7 9.44155e-05V6.00009C5.5 6.00009 5.5 7.99998 5.5 7.99998Z" fill="currentColor"/>
      <path d="M40.5 49.5001H46C46 57.4984 40 57.5029 39 57.5001V51.5002C40.5 51.5002 40.5 49.5001 40.5 49.5001Z" fill="currentColor"/>
      <path d="M5.5 49.5H6.15273e-10C6.15273e-10 57.4983 6 57.5029 7 57.5001V51.5002C5.5 51.5002 5.5 49.5 5.5 49.5Z" fill="currentColor"/>
    </svg>
  );
}
