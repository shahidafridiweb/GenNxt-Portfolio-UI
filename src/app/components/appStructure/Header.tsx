'use client';

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  PopoverGroup,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  // DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  // DropdownMenuSub,
  // DropdownMenuSubContent,
  // DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  CreditCard,
  Keyboard,
  Settings,
  User,
} from "lucide-react"
import { prefix } from '@/app/utils/Prefix';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import '../../../app/globals.css'


const products = [
  { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
]
const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = `${prefix}/Resume/Shahid_Afridi_Resume.pdf`;
    link.download = 'Shahid_Afridi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className='fixed top-0 w-full z-10'>
      <header className="fixed top-0 left-0 lg:w-full md:w-screen px-4 bg-opacity-50 backdrop-blur-sm z-10 h-24">
        <nav className="container flex justify-between items-center h-24">
          <a href="#" >
            <div className="flex-1 flex justify-start self-center flex-row">
              <img src={`${prefix}/images/app_logo.png`} className='h-20'></img>
              <span style={{
                color: "#fff",
                alignContent: "center",
                paddingLeft: "10px",
                fontSize: "1.3em"
              }}>
                {"GenNxt by Shahid Afridi"}</span>
            </div>
          </a>
          <div className='xs:d'></div>
          <ul className="flex space-x-8 text-white self-center">
            <li className='self-center'><a href="#about">About</a></li>
            <li className='self-center'><a href="#projects">Career</a></li>
            <li className='self-center'><a href="#contact">Contact</a></li>
            <div className="flex-1 flex justify-end self-center p-10 text-black">
              <Button onClick={handleResumeDownload} variant="outline">Download Resume</Button>
            </div>
          </ul>
        </nav>
      </header>
    </div >
  )
}
