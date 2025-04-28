import { NavFooter } from "@/components/nav-footer";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { type NavItem } from "@/types";
import { Link } from "@inertiajs/react";
import { Home, LayoutGrid } from "lucide-react";
import AppLogo from "./app-logo";
import { useLanguage } from "./providers/language-provider";

export function AppSidebar() {
  const languageProvider = useLanguage();
  const mainNavItems: NavItem[] = [
    {
      title: languageProvider.get("nav.home"),
      href: "/",
      icon: Home,
    },
    {
      title: languageProvider.get("nav.blog"),
      href: "/blog",
      icon: LayoutGrid,
    },
  ];

  const footerNavItems: NavItem[] = [];

  return (
    <Sidebar collapsible="icon" variant="inset">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/settings/profile" prefetch>
                <AppLogo />
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={mainNavItems} />
      </SidebarContent>

      <SidebarFooter>
        <NavFooter items={footerNavItems} className="mt-auto" />
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
