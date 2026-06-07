'use client';

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
} from '@headlessui/react'
 import Image from 'next/image'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { Button } from "@/components/ui/button"
import { prefix } from '@/lib/prefix';
import portfolioData from '@/data/portfolio.json';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { navigation, personal, branding } = portfolioData;

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = `${prefix}${personal.resume.path}`;
    link.download = personal.resume.fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className='fixed top-0 w-full z-50'>
      <header className="glass absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 flex items-center gap-3">
              <Image
                className="h-12 w-auto"
                src={`${prefix}${branding.logos.main}`}
                alt={`${branding.appName} Logo`}
                width={48}
                height={48}
                priority
              />
              <span className="text-xl font-bold text-foreground tracking-wide font-cinzel">
                {branding.appName}
              </span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400 hover:text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button 
                onClick={handleResumeDownload} 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
            >
                Download Resume
            </Button>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10 glass">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">{branding.appName}</span>
                <Image
                  className="h-10 w-auto"
                  src={`${prefix}${branding.logos.mobile}`}
                  alt={`${branding.appName} Logo`}
                  width={40}
                  height={40}
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-400 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-white/5 hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                    <Button 
                        onClick={handleResumeDownload} 
                        variant="outline"
                        className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                        Download Resume
                    </Button>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  )
}
