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

export const PreferenceDialogContext = createContext({
  themeMode: '',
  language: '',
});

export function PreferenceDialog() {
  let storedLanguage: null | string = null;
  let storedTheme: null | string = null;

  if (typeof window !== 'undefined') {
    storedLanguage = localStorage.getItem('selectedlanguage');
    storedTheme = localStorage.getItem('themeUsed');
  }

  const [themeMode, setThemeMode] = useState(storedTheme || 'light');
  const [language, setLanguage] = useState(storedLanguage || 'uz');

  const [open, setOpen] = useState(false);

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
    if (typeof window !== 'undefined') {
      localStorage.setItem('themeUsed', mode);
    }
  };

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    switchLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('selectedLanguage', lang);
    }
  };

  return (
    <PreferenceDialogContext.Provider value={{ themeMode, language }}>
      <Dialog open={open}>
        <DialogOverlay className="backdrop-blur-sm" />

        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Choose your preferences</DialogTitle>
            <DialogDescription>
              Please choose given options to see the page as you like.
            </DialogDescription>
          </DialogHeader>
          <div className="flex items-center space-x-2 flex-col">
            {/* Theme Mode */}
            <div className="flex items-center space-x-2">
              <p className="text-right mr-2">Choose theme mode:</p>
              <Button
                variant={themeMode === 'light' ? 'primaryGreen' : 'secondary'}
                onClick={() => handleThemeModeChange('light')}
                className={`${themeMode === 'light' && 'dark:text-slate-700'} `}
              >
                Light
              </Button>
              <Button
                variant={themeMode === 'dark' ? 'primaryGreen' : 'secondary'}
                onClick={() => handleThemeModeChange('dark')}
                className={`${themeMode === 'dark' && 'dark:text-slate-700'} `}
              >
                Dark
              </Button>
            </div>
            {/* Language */}
            <div className="flex items-center space-x-2 mt-4">
              <p className="text-right mr-2">Choose your language:</p>
              <Button
                variant={language === 'uz' ? 'primaryGreen' : 'secondary'}
                onClick={() => handleLanguageChange('uz')}
                className={`${language === 'uz' && 'dark:text-slate-700'} `}
              >
                Uzbek
              </Button>
              <Button
                variant={language === 'ru' ? 'primaryGreen' : 'secondary'}
                onClick={() => handleLanguageChange('ru')}
                className={`${language === 'ru' && 'dark:text-slate-700'} `}
              >
                Russian
              </Button>
              <Button
                variant={language === 'en' ? 'primaryGreen' : 'secondary'}
                onClick={() => handleLanguageChange('en')}
                className={`${language === 'en' && 'dark:text-slate-700'} `}
              >
                English
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
                  if (typeof window !== 'undefined') {
                    localStorage.setItem('showPreference', 'true');
                  }
                }}
              >
                Submit
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </PreferenceDialogContext.Provider>
  );
}
