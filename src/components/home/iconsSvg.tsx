import escudoPng from '/icons/escudo.png';

type IconProps = { className?: string };

/** Olho: ícone para mostrar/ocultar. */
export function EyeIcon({ className }: IconProps) {
  return (
    <svg width="59" height="34" viewBox="0 0 59 34" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className={className}>
      <path d="M2.40796 20.5C2.40796 20.5 7.40796 2.502 28.908 2.5C52.408 2.49782 56.408 20.5 56.408 20.5M28.908 14C33.6005 14.1341 37.408 17.8056 37.408 22.5C37.408 27.1944 33.6005 30.8659 28.908 31C24.0755 31.1381 19.908 27.3344 19.908 22.5C19.908 17.6655 24.0755 13.8619 28.908 14Z" stroke="currentColor" strokeWidth="5" strokeLinejoin="round"/>
    </svg>
  );
}

/** Escudo: ícone para segurança usando imagem PNG. */
export function ShieldIcon({ className }: IconProps) {
  return (
    <img 
      src={escudoPng} 
      alt="Escudo de Segurança" 
      aria-hidden="true" 
      focusable="false" 
      className={className}
      style={{ width: '100%', height: '100%' }}
    />
  );
}

/** FAQ: ícone de ajuda. */
export function HelpIcon({ className }: IconProps) {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className={className}>
      <path d="M50.5 28.0014C50.4999 15.2762 40.1843 4.87603 27.5244 5.00137C14.9825 5.12573 5.00014 15.3945 5 28.0014C5 40.6083 14.9824 50.877 27.5244 51.0014C40.1844 51.1267 50.5 40.7267 50.5 28.0014ZM34.5 22.5014C34.5 19.7084 33.7299 18.3883 32.9316 17.7006C32.0603 16.9499 30.6403 16.5014 28.5 16.5014C26.5424 16.5014 25.283 16.8553 24.4688 17.2875C23.683 17.7046 23.1834 18.2614 22.834 18.9213C22.049 20.4042 22 22.3782 22 24.5014H17C17 22.6247 16.9512 19.3483 18.416 16.5815C19.1916 15.1166 20.3798 13.798 22.125 12.8715C23.842 11.9601 25.9578 11.5014 28.5 11.5014C31.194 11.5014 34.0243 12.0432 36.1943 13.9125C38.4374 15.8449 39.5 18.7756 39.5 22.5014C39.5 24.957 38.7363 26.8143 37.5518 28.3061C36.4738 29.6635 35.0388 30.6944 34.0352 31.475C32.9316 32.3333 32.105 33.0515 31.5088 33.9789C30.9498 34.8487 30.5 36.0571 30.5 38.0014H25.5C25.5 35.1962 26.1754 33.0299 27.3037 31.2748C28.3949 29.5775 29.8185 28.4203 30.9648 27.5287C32.2112 26.5594 33.0263 25.9641 33.6357 25.1967C34.1385 24.5635 34.5 23.7956 34.5 22.5014ZM55.5 28.0014C55.5 43.4425 42.9805 56.1547 27.4756 56.0014C12.1274 55.8494 7.15256e-07 43.2861 0 28.0014C0.000143562 12.7168 12.1275 0.153334 27.4756 0.00137258C42.9805 -0.151953 55.4999 12.5604 55.5 28.0014Z" fill="currentColor"/>
      <path d="M25.4989 39.5005H30.4989V44.5005H25.4989V39.5005Z" fill="currentColor"/>
    </svg>
  );
}

/** Usuário: ícone de perfil. */
export function UserAvatarIcon({ className }: IconProps) {
  return (
    <svg width="45" height="56" viewBox="0 0 45 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" className={className}>
      <path d="M33.5011 13.5C33.3662 7.42637 28.5763 2.5 22.5011 2.5C16.426 2.5 11.6361 7.42637 11.5011 13.5C11.3631 19.7132 16.2864 25 22.5011 25C28.7159 25 33.6392 19.7132 33.5011 13.5Z" stroke="currentColor" strokeWidth="5" strokeLinejoin="round"/>
      <path d="M2.50113 55.001C2.50113 55.001 2.0011 37.001 22.0011 37.001C42.0011 37.001 42.0011 55.001 42.0011 55.001" stroke="currentColor" strokeWidth="5" strokeLinejoin="round"/>
    </svg>
  );
}
