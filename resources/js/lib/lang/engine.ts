import fr from "@/lang/fr.json";
import en from "@/lang/en.json";
import type { LanguageKey } from "./keys";

type LangData = Record<string, string>;

export class Language {
  lang = "";
  private loadLang(): LangData {
    switch (this.lang) {
      case "fr":
        return fr;
      case "en":
        return en;
      default:
        return en;
    }
  }
  public setLang(lang: string): void {
    this.lang = lang;
  }
  public get(key: LanguageKey, fallback?: string): string {
    const lang = this.loadLang();
    return lang[key] || fallback || key;
  }
}
