import { languages, useLanguage } from '@/components/providers/language-provider';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';

export default function LangDialog() {
  const lang = localStorage.getItem('lang');
  const languageProvider = useLanguage();
  const showSetLanguage = lang === null;
  const [selectedLanguage, setSelectedLanguage] = useState(lang || 'en');
  const select = (value: string) => {
    localStorage.setItem('lang', value);
    window.location.reload();
  };

  return (
    <Dialog
      open={showSetLanguage}
      onOpenChange={(o) => {
        if (!o) {
          select(selectedLanguage);
        }
      }}
    >
      <DialogContent>
        <DialogHeader className="flex items-center justify-center">
          {languageProvider.get('system.language.choose.title', 'Choose Language')}
        </DialogHeader>
        <div className="flex h-full w-full flex-col">
          <Select onValueChange={(v) => setSelectedLanguage(v)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Language" />
            </SelectTrigger>
            <SelectContent>
              {Array.from(languages.entries()).map(([key, lang]) => {
                return (
                  <SelectItem key={key} value={key}>
                    {lang}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
        <DialogFooter className="flex w-full items-center justify-center">
          <Button onClick={() => select(selectedLanguage)}>{languageProvider.get('system.language.choose.btn', 'Choose')}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
