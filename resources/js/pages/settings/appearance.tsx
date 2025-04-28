import { Head } from "@inertiajs/react";

import AppearanceTabs from "@/components/appearance-tabs";
import HeadingSmall from "@/components/heading-small";
import { type BreadcrumbItem } from "@/types";
import { useLanguage } from "@/components/providers/language-provider";

import AppLayout from "@/layouts/app-layout";
import SettingsLayout from "@/layouts/settings/layout";

export default function Appearance() {
  const languageProvider = useLanguage();

  const breadcrumbs: BreadcrumbItem[] = [
    {
      title: languageProvider.get("settings.appearance.title"),
      href: "/settings/appearance",
    },
  ];

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title={languageProvider.get("settings.appearance.title")} />

      <SettingsLayout>
        <div className="space-y-6">
          <HeadingSmall
            title={languageProvider.get("settings.appearance.title")}
            description={languageProvider.get("settings.appearance.desc")}
          />
          <AppearanceTabs />
        </div>
      </SettingsLayout>
    </AppLayout>
  );
}
