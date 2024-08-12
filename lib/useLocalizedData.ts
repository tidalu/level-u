import { useLanguage } from '@/components/LanguageContext';
import { data as en } from '@/data/en';
import { data as uz } from '@/data/uz';
import { data as ru } from '@/data/ru';

const languages: { [key: string]: any } = {
  en,
  uz,
  ru,
};

export const useLocalizedData = () => {
  const { language } = useLanguage();
  return languages[language];
};
