import React, { ForwardRefExoticComponent, RefAttributes } from 'react'
import { SidebarMenu, SidebarMenuItem, SidebarMenuSubButton } from './sidebar'
import { Link, LucideProps } from 'lucide-react'

const Title = ({ items }: { items: { title: string; url: string; icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>; }[] }) => {
  return (
    <SidebarMenu className='w-full'>
      {items.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuSubButton asChild>
            <Link href={item.url}>
              <item.icon />
              <span>{item.title}</span>
            </Link>
          </SidebarMenuSubButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  )
}

export default Title
