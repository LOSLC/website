import { Breadcrumbs } from "@/components/breadcrumbs";
import { type BreadcrumbItem as BreadcrumbItemType } from "@/types";
import React, { useState } from "react";
import Navbar from "./navigation/nav";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from "../ui/dialog";
import { languages, useLanguage } from "../providers/language-provider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import Footer from "@/pages/footer";

type Props = { children: React.ReactNode; breadcrumbs?: BreadcrumbItemType[] };

export default function Layout({ children, breadcrumbs = [] }: Props) {
  const lang = localStorage.getItem("lang");
  const languageProvider = useLanguage();
  const [showSetLanguage, setShowSetLanguage] = useState(lang === null);
  const [selectedLanguage, setSelectedLanguage] = useState(lang || "en");
  const select = (value: string) => {
    localStorage.setItem("lang", value);
    window.location.reload();
  };
  return (
    <>
      <Dialog
        open={showSetLanguage}
        onOpenChange={(o) => {
          if (!o) {
            select(selectedLanguage);
          }
        }}
      >
        <DialogContent>
          <DialogHeader className="flex justify-center items-center">
            {languageProvider.get(
              "system.language.choose.title",
              "Choose Language",
            )}
          </DialogHeader>
          <div className="w-full h-full flex flex-col">
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
          <DialogFooter className="flex justify-center items-center w-full">
            <Button onClick={() => select(selectedLanguage)}>
              {languageProvider.get("system.language.choose.btn", "Choose")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Navbar />
      <main className="flex min-h-screen w-full justify-center pb-6">
        <div className="container">
          <Breadcrumbs breadcrumbs={breadcrumbs} />
          <div className="mt-4 p-4 relative">
            {children}
          </div>
        </div>
      </main>
    </>
  );
}
