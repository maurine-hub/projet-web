'use client';

import { useState } from 'react';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { 
  ChevronDown, 
  Menu, 
  X,
  Leaf,
  Heart,
  Target,
  Lightbulb
} from 'lucide-react';
import Link from 'next/link';

interface NavItem {
  key: string;
  icon: React.ComponentType<{ className?: string }>;
  hasDropdown: boolean;
  dropdownItems?: string[];
  url: string;
}

const navItems: NavItem[] = [
    {
    key: 'about',
    icon: Lightbulb,
    hasDropdown: true,
    dropdownItems: ['careers ', 'our team', 'our values'],
    url: '/about'
  },
  {
    key: 'climate',
    icon: Leaf,
    hasDropdown: true,
    dropdownItems: ['community finance', 'green banks andclimate resilience', 'natural climate solutions', 'outdoor recreation'],
    url: '/climate'
  },
  {
    key: 'health',
    icon: Heart,
    hasDropdown: true,
    dropdownItems: ['cbo subtainability solutions', 'mco market growth', 'sdoh strategy and financing', 'state medicaid innovation'],
    url: '/health'
  },
  {
    key: 'impact',
    icon: Target,
    hasDropdown: true,
    dropdownItems: ['case studies', 'impact reports', 'in the news', 'projects map', 'testimonials'],
    url: '/impact'
  },
  {
    key: 'blog',
    icon: () => null,
    hasDropdown: false,
    url: '/blog'
  }
];

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('FR');


  const NavMenuItem = ({ item }: { item: NavItem }) => {
    const Icon = item.icon;
    
    if (item.hasDropdown && item.dropdownItems) {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center space-x-1 font-bold uppercase text-white hover:text-teal-600 transition-colors duration-200 focus:outline-none group">
            <Icon className="h-4 w-4" />
            <Link href={item.url}>
            <span className="font-medium">{item.key}</span>
            </Link>
            <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-[#035987] shadow-lg border-0 rounded-b-lg p-2 min-w-[150px] mt-6">
            {item.dropdownItems.map((dropdownItem) => (
              <DropdownMenuItem 
                key={dropdownItem}
                className="text-white uppercase hover:text-white/50 transition-colors cursor-pointer "
              >
                {dropdownItem}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }

    return (
      <a 
        href={item.url}
        className="flex items-center space-x-1 font-bold uppercase text-white hover:text-teal-600 transition-colors duration-200 "
      >
        <Icon className="h-4 w-4" />
        <span>{item.key}</span>
      </a>
    );
  };

  const MobileNavMenuItem = ({ item }: { item: NavItem }) => {
    const Icon = item.icon;
    
    if (item.hasDropdown && item.dropdownItems) {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center justify-between w-full text-left p-3 font-bold uppercase text-black hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors">
            <div className="flex items-center space-x-2">
              <Icon className="h-5 w-5" />
              <span className="font-medium">{item.key}</span>
            </div>
            <ChevronDown className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white shadow-lg border-0 rounded-lg p-2 w-56">
            {item.dropdownItems.map((dropdownItem) => (
              <DropdownMenuItem 
                key={dropdownItem}
                className="rounded-md text-white uppercase hover:text-white/50 transition-colors cursor-pointer p-3"
              >
                {dropdownItem}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }

    return (
      <a 
        href="#" 
        className="flex items-center space-x-2 w-full text-left p-3 text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors font-medium"
      >
        <Icon className="h-5 w-5" />
        <span>{item.key}</span>
      </a>
    );
  };

  return (
    <header className="absolute top-0 left-0 w-full bg-transparent z-50 p-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center space-x-2">
            
            <span className="text-2xl font-bold text-teal-600">LOGO</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavMenuItem key={item.key} item={item} />
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="cyan">
              Contact
            </Button>

            <Button
              variant="secondary"
              className="text-teal-600 border-teal-200 hover:bg-teal-50 hover:border-teal-300 transition-colors"
              onClick={() => setLanguage(language === 'FR' ? 'EN' : 'FR')}  
            >
              <span className="font-medium">{language}</span>
              <span className="text-gray-400 mx-1">|</span>
              <span className="text-gray-500">{language === 'FR' ? 'EN' : 'FR'}</span>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-600 hover:text-teal-600 hover:bg-teal-50"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-0">
                <div className="flex flex-col h-full">

                  <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-teal-600">LOGO</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-600 hover:text-teal-600 hover:bg-teal-50"
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>

                  <nav className="flex-1 p-6 space-y-2">
                    {navItems.map((item) => (
                      <MobileNavMenuItem key={item.key} item={item} />
                    ))}
                    <a 
                      href="#" 
                      className="flex items-center space-x-2 w-full text-left p-3 text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors font-medium"
                    >
                      <span>contact</span>
                    </a>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}