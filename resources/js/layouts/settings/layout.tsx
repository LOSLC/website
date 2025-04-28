import Heading from "@/components/heading";
import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { type NavItem } from "@/types";
import { Link } from "@inertiajs/react";
import { type PropsWithChildren } from "react";

export default function SettingsLayout({ children }: PropsWithChildren) {
  const languageProvider = useLanguage();
  if (typeof window === "undefined") {
    return null;
  }

  const sidebarNavItems: NavItem[] = [
    {
      title: languageProvider.get("settings.profile.title"),
      href: "/settings/profile",
      icon: null,
    },
    {
      title: languageProvider.get("settings.password.title"),
      href: "/settings/password",
      icon: null,
    },
    {
      title: languageProvider.get("settings.appearance.title"),
      href: "/settings/appearance",
      icon: null,
    },
  ];
  const currentPath = window.location.pathname;

  return (
    <div className="px-4 py-6">
      <Heading
        title={languageProvider.get("settings.title")}
        description={languageProvider.get("settings.profile.desc")}
      />

      <div className="flex flex-col space-y-8 lg:flex-row lg:space-y-0 lg:space-x-12">
        <aside className="w-full max-w-xl lg:w-48">
          <nav className="flex flex-col space-y-1 space-x-0">
            {sidebarNavItems.map((item, index) => (
              <Button
                key={`${item.href}-${index}`}
                size="sm"
                variant="ghost"
                asChild
                className={cn("w-full justify-start", {
                  "bg-muted": currentPath === item.href,
                })}
              >
                <Link href={item.href} prefetch>
                  {item.title}
                </Link>
              </Button>
            ))}
          </nav>
        </aside>

        <Separator className="my-6 md:hidden" />

        <div className="flex-1 md:max-w-2xl">
          <section className="max-w-xl space-y-12">{children}</section>
        </div>
      </div>
    </div>
  );
}
