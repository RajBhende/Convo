import { useId } from "react"
import { SearchIcon } from "lucide-react"

import Logo from "@/components/logo"
import NotificationMenu from "@/components/notification-menu"
import UserMenu from "@/components/user-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Search from "@/home/Leftpart/Search"

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  { href: "#", label: "Home", active: true },
  { href: "#", label: "Features" },
  { href: "#", label: "Pricing" },
  { href: "#", label: "About" },
]

export default function Component() {
  const id = useId()

  return (
<header className="border-b px-4 md:px-6 shadow-md bg-white/95 backdrop-blur-sm">
  <div className="flex h-16 items-center justify-between gap-4">
    {/* Left side */}
    <div className="flex items-center gap-2">
      {/* Mobile menu trigger */}
      <Popover>
        <PopoverTrigger asChild>
          <Button className="group size-8 md:hidden" variant="ghost" size="icon">
            {/* burger icon */}
            <svg
              className="pointer-events-none"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 12L20 12" />
              <path d="M4 6H20" />
              <path d="M4 18H20" />
            </svg>
          </Button>
        </PopoverTrigger>
<PopoverContent align="start" className="w-36 p-1 md:hidden z-50">
          <NavigationMenu className="max-w-none *:w-full">
            <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
              {navigationLinks.map((link, index) => (
                <NavigationMenuItem key={index} className="w-full">
              <NavigationMenuLink
  href={link.href}
  className={`py-1.5 ${link.active ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"}`}
>
  {link.label}
</NavigationMenuLink>

                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </PopoverContent>
      </Popover>

      {/* Logo */}
      <a href="/" className="text-primary hover:text-primary/90 ml-10 ">
        <Logo />
      </a>
    </div>

    {/* Center - Search */}
    <div className="flex-1 flex justify-center">
      <div className="w-full max-w-md px-2">
        <Search />
      </div>
    </div>

    {/* Right side */}
    <div className="flex items-center gap-2 mr-10">
      <NotificationMenu />
      <UserMenu />
    </div>
  </div>
      {/* Bottom navigation */}
      {/* <div className="border-t py-2 max-md:hidden"> */}
        {/* Navigation menu */}
        {/* <NavigationMenu>
          <NavigationMenuList className="gap-2">
            {navigationLinks.map((link, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  active={link.active}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary py-1.5 font-medium">
                  {link.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div> */}
    </header>
  );
}
