import { Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogOverlay,
} from '@/components/ui/dialog';
import { useState, useEffect, createContext } from 'react';
import { useTheme } from 'next-themes';
import { useLanguage } from './LanguageContext';
import { useLocalizedData } from '@/lib/useLocalizedData';
import Cookies from 'js-cookie';

export const PreferenceDialogContext = createContext({
  themeMode: '',
  language: '',
});

export function PreferenceDialog() {
  let storedLanguage: undefined | string = String(
    Cookies.get('selectedLanguage')
  );
  let storedTheme: undefined | string = String(Cookies.get('themeUsed'));

  const [themeMode, setThemeMode] = useState(storedTheme || 'light');
  const [language, setLanguage] = useState(storedLanguage || 'en');

  const [open, setOpen] = useState(false);

  const data = useLocalizedData();

  useEffect(() => {
    if (!storedLanguage || !storedTheme) {
      setOpen(true);
    }
  }, []);

  const { setTheme } = useTheme();
  const { switchLanguage } = useLanguage();

  const handleThemeModeChange = (mode: string) => {
    setThemeMode(mode);
    setTheme(mode);

    Cookies.set('themeUsed', mode, { expires: 365 });
  };

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    switchLanguage(lang);
    Cookies.set('selectedLanguage', lang, { expires: 365 });
  };

  return (
    <PreferenceDialogContext.Provider value={{ themeMode, language }}>
      <Dialog open={open}>
        <DialogOverlay className="backdrop-blur-sm" />

        <DialogContent className=" rounded-2xl">
          <DialogHeader>
            <DialogTitle>{data.userPreferencesModule.title}</DialogTitle>
            <DialogDescription>
              {data.userPreferencesModule.description}
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-start  flex-col">
            {/* Theme Mode */}
            <div className="flex items-center flex-wrap  w-full justify-evenly">
              <p className="text-left mr-2 basis-[100%] mb-2">
                {data.userPreferencesModule.theme.title}:
              </p>
              <Button
                variant={themeMode === 'light' ? 'primaryGreen' : 'secondary'}
                onClick={() => handleThemeModeChange('light')}
                className={`${
                  themeMode === 'light' && 'dark:text-slate-700'
                } basis-[40%] `}
              >
                {data.userPreferencesModule.theme.light}
              </Button>
              <Button
                variant={themeMode === 'dark' ? 'primaryGreen' : 'secondary'}
                onClick={() => handleThemeModeChange('dark')}
                className={`${
                  themeMode === 'dark' && 'dark:text-slate-700'
                } basis-[40%]`}
              >
                {data.userPreferencesModule.theme.dark}
              </Button>
            </div>
            {/* Language */}
            <div className="flex items-center flex-wrap  w-full justify-evenly mt-4">
              <p className="text-left mr-2 basis-[100%] mb-2">
                {data.userPreferencesModule.language.title}:
              </p>
              <Button
                variant={language === 'uz' ? 'primaryGreen' : 'secondary'}
                onClick={() => handleLanguageChange('uz')}
                className={`${language === 'uz' && 'dark:text-slate-700'} ${
                  language === 'ru' && 'basis-[45%] sm:basis-[28%]'
                } basis-[28%] `}
              >
                {data.userPreferencesModule.language.uzb}
              </Button>
              <Button
                variant={language === 'ru' ? 'primaryGreen' : 'secondary'}
                onClick={() => handleLanguageChange('ru')}
                className={`${language === 'ru' && 'dark:text-slate-700 '} ${
                  language === 'ru' && 'basis-[45% sm:basis-[28%]]'
                } basis-[28%]`}
              >
                {data.userPreferencesModule.language.rus}
              </Button>
              <Button
                variant={language === 'en' ? 'primaryGreen' : 'secondary'}
                onClick={() => handleLanguageChange('en')}
                className={`${language === 'en' && 'dark:text-slate-700'} ${
                  language === 'ru' && 'basis-[45%] sm:basis-[28%] mt-2'
                } basis-[28%]`}
              >
                {data.userPreferencesModule.language.eng}
              </Button>
            </div>
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button
                type="button"
                variant="secondary"
                className="radial_bg_red text-white"
                onClick={() => {
                  setOpen(false);
                  Cookies.set('showPreference', 'true', { expires: 365 });
                }}
              >
                {data.userPreferencesModule.button}
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </PreferenceDialogContext.Provider>
  );
}
