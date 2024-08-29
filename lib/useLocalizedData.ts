import { useEffect, useState } from 'react';
import { useLanguage } from '@/components/LanguageContext';

// Dynamic import for language data
const loadLanguageData = (language: string) => {
  switch (language) {
    case 'en':
      return import('@/data/en');
    case 'uz':
      return import('@/data/uz');
    case 'ru':
      return import('@/data/ru');
    default:
      return Promise.reject(new Error(`Language ${language} not supported`));
  }
};

export const useLocalizedData = () => {
  const { language } = useLanguage();
  const [data, setData] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const moduleLan:any = await loadLanguageData(language);
        setData(moduleLan.data || moduleLan);
      } catch (err: any ) {
        setData(null);
      }
    };

    fetchData();
  }, [language]);

  return data;
};
