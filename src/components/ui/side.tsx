import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar"
import Link from "next/link"

// Menu items.
const items = [
  {
    title: "Home is great is good subjectibve question",
    url: "#",
  },
  {
    title: "Inbox",
    url: "#",
  },
  {
    title: "Calendar",
    url: "#",
  },
  {
    title: "Search",
    url: "#",
  },
  {
    title: "Settings",
    url: "#",
  },
  {
    title: "Settings",
    url: "#",
  },
  {
    title: "Settings",
    url: "#",
  },
  {
    title: "Settings",
    url: "#",
  },
  {
    title: "Settings",
    url: "#",
  },
  {
    title: "Settings",
    url: "#",
  },
  {
    title: "Settings",
    url: "#",
  },
  {
    title: "Settings",
    url: "#",
  },

  {
    title: "Settings",
    url: "#",
  },
  {
    title: "Settings",
    url: "#",
  },
  {
    title: "Settings",
    url: "#",
  },
  {
    title: "Settings",
    url: "#",
  },
  {
    title: "Settings",
    url: "#",
  },


  {
    title: "Settings",
    url: "#",
  },
  {
    title: "Settings",
    url: "#",
  },
  {
    title: "Settings",
    url: "#",
  },
  {
    title: "Settings",
    url: "#",
  },
  {
    title: "Settings",
    url: "#",
  },


  {
    title: "Settings",
    url: "#",
  },
  {
    title: "Settings",
    url: "#",
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className=" py-4 px-4">
        Glymp
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            Glymp
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className='w-full'>
              {items.map((item, key) => (
                <SidebarMenuItem key={key}>
                  <SidebarMenuSubButton asChild className=" bg-slate-50 py-[1.2rem] border-[0.4px] border-slate-200">
                    <Link href={item.url}>
                      <span className=" text-[12px]">{item.title}</span>
                    </Link>
                  </SidebarMenuSubButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar >
  )
}
