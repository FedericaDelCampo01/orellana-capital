'use client'

import { useId } from 'react';
import { useLanguage } from './LanguageContext';
import { Language } from './translations';
import { trackEvent } from '../Utility/AnalyticsHelpers';

// Flags are inline SVG because emoji flags don't render on Windows
const SpainFlag = ({ clipId }: { clipId: string }) => (
  <svg viewBox="0 0 18 18" className="h-full w-full" aria-hidden="true">
    <clipPath id={clipId}><circle cx="9" cy="9" r="9" /></clipPath>
    <g clipPath={`url(#${clipId})`}>
      <rect width="18" height="18" fill="#AA151B" />
      <rect y="4.5" width="18" height="9" fill="#F1BF00" />
    </g>
  </svg>
);

const UKFlag = ({ clipId }: { clipId: string }) => (
  <svg viewBox="0 0 18 18" className="h-full w-full" aria-hidden="true">
    <clipPath id={clipId}><circle cx="9" cy="9" r="9" /></clipPath>
    <g clipPath={`url(#${clipId})`}>
      <rect width="18" height="18" fill="#012169" />
      <path d="M0 0L18 18M18 0L0 18" stroke="#fff" strokeWidth="3.6" />
      <path d="M0 0L18 18M18 0L0 18" stroke="#C8102E" strokeWidth="1.2" />
      <path d="M9 0V18M0 9H18" stroke="#fff" strokeWidth="5" />
      <path d="M9 0V18M0 9H18" stroke="#C8102E" strokeWidth="3" />
    </g>
  </svg>
);

const options: { code: Language; label: string; Flag: typeof UKFlag }[] = [
  { code: 'es', label: 'Español', Flag: SpainFlag },
  { code: 'en', label: 'English', Flag: UKFlag },
];

const LanguageSwitcher = ({ className = '' }: { className?: string }) => {
  const { language, setLanguage, t } = useLanguage();
  const id = useId().replace(/:/g, '');

  const handleClick = (code: Language) => {
    if (code === language) return;
    trackEvent('language_change', { language: code });
    setLanguage(code);
  };

  return (
    <div role="group" aria-label={t.nav.language} className={`flex items-center gap-1.5 ${className}`}>
      {options.map(({ code, label, Flag }) => {
        const isActive = language === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => handleClick(code)}
            aria-pressed={isActive}
            aria-label={label}
            title={label}
            className={`h-5 w-5 rounded-full overflow-hidden ring-1 duration-300 ${
              isActive
                ? 'ring-white/80 opacity-100'
                : 'ring-white/20 opacity-40 grayscale hover:opacity-80 hover:grayscale-0'
            }`}
          >
            <Flag clipId={`${id}-${code}`} />
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
