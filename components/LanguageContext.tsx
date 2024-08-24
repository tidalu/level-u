import { createContext, useContext, useState, ReactNode } from 'react';

type LanguageContextType = {
  language: string;
  switchLanguage: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  let storedLanguage = 'uz';
  if (typeof window !== 'undefined') {
    storedLanguage = localStorage.getItem('selectedLanguage') || 'uz';
  }
  const [language, setLanguage] = useState(storedLanguage || 'uz');

  const switchLanguage = (lang: string) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
