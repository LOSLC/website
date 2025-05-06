import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { languages, useLanguage } from "../providers/language-provider";

export default function LangSelect() {
  const lang = localStorage.getItem("lang");
  const languageProvider = useLanguage();
  const [selectedLanguage, setSelectedLanguage] = useState(lang || "en");
  const select = (value: string) => {
    localStorage.setItem("lang", value);
    setSelectedLanguage(value);
    window.location.reload();
  };
  return (
    <>
      <Select onValueChange={(v) => select(v)}>
        <SelectTrigger className="w-full">
          <SelectValue
            placeholder={`${languageProvider.get("system.language.selected")}: ${languages.get(selectedLanguage)}`}
          />
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
    </>
  );
}
