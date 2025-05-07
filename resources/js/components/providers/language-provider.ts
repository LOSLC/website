import { Language } from "@/lib/lang/engine";

export const languages = new Map<string, string>([
  ["fr", "Français"],
  ["en", "English"],
]);
const language = new Language();
const lang = localStorage.getItem("lang");
if (lang) {
  language.setLang(lang);
}
export const useLanguage = () => language;
