import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarHeader,
    SidebarGroupLabel,
    SidebarMenuItem,
    SidebarMenuBadge,
    SidebarSeparator,
    SidebarTrigger,
  } from "@/components/ui/sidebar";

  import {
    Home,
    Bell,
    ChartColumn,
    Trophy,
    User,
    Settings,
    LogOut,
    HelpCircle,
    MessageCircle,
    HeartPlus,
    BookOpenCheck,
    Scale,
  } from "lucide-react";

  const sidebarApplicationGroupItems = [
    {
      title: "Home",
      url: "#",
      icon: Home,
      badge: "New",
    },
    {
      title: "Notifications",
      url: "#",
      icon: Bell,
      badge: "33",
    },
    {
      title: "Leaderboard",
      url: "#",
      icon: ChartColumn,
      badge: "",
    },
    {
      title: "Competitions",
      url: "#",
      icon: Trophy,
      badge: "3",
    },
    {
      title: "Profile",
      url: "#",
      icon: User,
      badge: "",
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
      badge: "",
    },
    {
      title: "Logout",
      url: "#",
      icon: LogOut,
      badge: "",
    },
  ]

  const sidebarHelpGroupItems = [
    {
      title: "About",
      url: "#",
      icon: HelpCircle,
      badge: "",
    },
    {
      title: "Wiki",
      url: "#",
      icon: BookOpenCheck,
      badge: "",
    },
    {
      title: "Community Guidelines",
      url: "#",
      icon: Scale,
      badge: "",
    },
    {
      title: "Support",
      url: "#",
      icon: MessageCircle,
      badge: "",
    },
    {
      title: "Donate",
      url: "#",
      icon: HeartPlus,
      badge: "",
    },
  ]

  export function AppSidebar() {
    return (
      <Sidebar collapsible="icon" className="mt-14 pb-10">
        <SidebarHeader className="flex items-center justify-between px-2 mt-2">
          <SidebarTrigger/>
          <SidebarSeparator />
        </SidebarHeader>
        <SidebarContent className="px-2">
          <SidebarGroup />
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {sidebarApplicationGroupItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                    <SidebarMenuBadge>
                      <span>{item.badge}</span>
                    </SidebarMenuBadge>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          <SidebarGroup />
          <SidebarSeparator />
          <SidebarGroup />
            <SidebarGroupLabel>Help</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {sidebarHelpGroupItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                    <SidebarMenuBadge>
                      <span>{item.badge}</span>
                    </SidebarMenuBadge>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          <SidebarGroup />
          <SidebarSeparator />
        </SidebarContent>
        <SidebarFooter className="">
        </SidebarFooter>
      </Sidebar>
    )
  }