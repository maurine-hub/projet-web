"use client";

import { useState, useRef, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet";
import {
  ChevronDown,
  Menu,
  X,
  Leaf,
  Heart,
  Target,
  Lightbulb,
  Loader2,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { setUserLocale } from "@/i18n/locale";
import { Locale } from "@/i18n/config";
import { useTransition } from "react";
import { useLocale } from "next-intl";

interface DropdownItem {
  key: string;
  url: string;
}

interface NavItem {
  key: string;
  icon: React.ComponentType<{ className?: string }>;
  hasDropdown: boolean;
  dropdownItems?: DropdownItem[];
  urlKey: string;
}

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();

  const navItems: NavItem[] = [
    {
      key: "about",
      icon: Lightbulb,
      hasDropdown: true,
      dropdownItems: [
        { key: "careers", url: "/about/components/careers" },
        { key: "our Team", url: "/about/components/team" },
        { key: "our Values", url: "/about/components/values" },
      ],
      urlKey: "/about",
    },
    {
      key: "climate",
      icon: Leaf,
      hasDropdown: true,
      dropdownItems: [
        { key: "community Finance", url: "/climate/components/community" },
        { key: "green Banks", url: "/climate/green-banks" },
        { key: "natural Climate Solutions", url: "/climate/natural-solutions" },
        { key: "outdoor Recreation", url: "/climate/outdoor-recreation" },
      ],
      urlKey: "/climate",
    },
    {
      key: "health",
      icon: Heart,
      hasDropdown: true,
      dropdownItems: [
        { key: "cbo Sustainability", url: "/health/cbo-sustainability" },
        { key: "mco Market Growth", url: "/health/mco-market" },
        { key: "sdoh Strategy", url: "/health/sdoh-strategy" },
        { key: "state Medicaid", url: "/health/state-medicaid" },
      ],
      urlKey: "/health",
    },
    {
      key: "impact",
      icon: Target,
      hasDropdown: true,
      dropdownItems: [
        { key: "case Studies", url: "/impact/case-studies" },
        { key: "impact Reports", url: "/impact/reports" },
        { key: "in The News", url: "/impact/news" },
        { key: "projects Map", url: "/impact/projects-map" },
        { key: "testimonials", url: "/impact/testimonials" },
      ],
      urlKey: "/impact",
    },
    {
      key: "blog",
      icon: () => null,
      hasDropdown: false,
      urlKey: "/blog",
    },
  ];

  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const handleMouseEnter = (itemKey: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setOpenDropdown(itemKey);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const handleDropdownMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  const handleDropdownMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const handleLocaleChange = () => {
    const newLocale = locale === "fr" ? ("en" as Locale) : ("fr" as Locale);
    startTransition(() => {
      setUserLocale(newLocale);
    });
  };

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  const NavMenuItem = ({ item }: { item: NavItem }) => {
    const Icon = item.icon;

    if (item.hasDropdown && item.dropdownItems) {
      return (
        <div
          className="relative"
          onMouseEnter={() => handleMouseEnter(item.key)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex items-center space-x-1 font-bold uppercase text-white hover:text-white/60 transition-colors duration-200 group cursor-pointer">
            <Icon className="h-4 w-4" />
            <Link 
              href={item.urlKey} 
              className="font-medium hover:text-white/60 transition-colors duration-200"
              onClick={(e) => {
                // Permettre la navigation normale
                setOpenDropdown(null);
              }}
            >
              {item.key}
            </Link>
            <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180 ml-1" />
          </div>
          
          {/* Dropdown positionné absolument */}
          {openDropdown === item.key && (
            <div
              className="absolute top-full left-0 mt-2 bg-[#035987] shadow-lg border-0 rounded-tl-3xl rounded-br-3xl p-2 min-w-[200px] z-50"
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
            >
              {item.dropdownItems.map((dropdownItem) => (
                <Link href={dropdownItem.url} key={dropdownItem.key}>
                  <div className="text-white uppercase hover:text-white/70 hover:bg-white/10 transition-colors cursor-pointer rounded px-3 py-2 block">
                    {dropdownItem.key}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        href={item.urlKey}
        className="flex items-center space-x-1 font-bold uppercase text-white hover:text-teal-600 transition-colors duration-200"
      >
        <Icon className="h-4 w-4" />
        <span>{item.key}</span>
      </Link>
    );
  };

  const MobileNavMenuItem = ({ item }: { item: NavItem }) => {
    const Icon = item.icon;
    const [isExpanded, setIsExpanded] = useState(false);

    if (item.hasDropdown && item.dropdownItems) {
      return (
        <div className="space-y-1">
          <div className="flex items-center justify-between w-full">
            <Link
              href={item.urlKey}
              className="flex items-center space-x-2 flex-1 p-3 font-bold uppercase text-black hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Icon className="h-5 w-5" />
              <span className="font-medium">{item.key}</span>
            </Link>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-3 text-gray-500 hover:text-teal-600 transition-colors"
            >
              <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
            </button>
          </div>
          
          {isExpanded && (
            <div className="ml-7 space-y-1 animate-in slide-in-from-top-2 duration-200">
              {item.dropdownItems.map((dropdownItem) => (
                <Link
                  key={dropdownItem.key}
                  href={dropdownItem.url}
                  className="block w-full text-left p-2 text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-md transition-colors text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {dropdownItem.key}
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        href={item.urlKey}
        className="flex items-center space-x-2 w-full text-left p-3 text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors font-medium"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <Icon className="h-5 w-5" />
        <span>{item.key}</span>
      </Link>
    );
  };

  return (
    <header className="absolute top-0 left-0 w-full bg-transparent z-50 p-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center space-x-2">
            <Link href="/">
              <span className="text-2xl font-bold text-teal-600">LOGO</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavMenuItem key={item.key} item={item} />
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="cyan" asChild>
              <Link href="/contact">contact</Link>
            </Button>

            <Button
              variant="outline"
              className="text-teal-600 border-teal-200 hover:bg-teal-50 hover:border-teal-300 transition-colors min-w-[80px]"
              onClick={handleLocaleChange}
              disabled={isPending}
            >
              {isPending ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  <span className="font-medium">{locale.toUpperCase()}</span>
                  <span className="text-gray-400 mx-1">|</span>
                  <span className="text-gray-500">
                    {locale === "fr" ? "EN" : "FR"}
                  </span>
                </>
              )}
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-gray-600 hover:text-cyan-600 hover:bg-teal-50"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-0 flex flex-col max-h-screen overflow-hidden">
                <SheetHeader className="flex-shrink-0">
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                </SheetHeader>
                
                {/* Header fixe */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100 flex-shrink-0">
                  <div className="flex items-center space-x-2">
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                      <span className="text-xl font-bold text-teal-600">
                        LOGO
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Navigation scrollable */}
                <div className="flex-1 overflow-y-auto">
                  <nav className="p-6 space-y-2">
                    {navItems.map((item) => (
                      <MobileNavMenuItem key={item.key} item={item} />
                    ))}
                    <Link
                      href="/contact"
                      className="flex items-center space-x-2 w-full text-left p-3 text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-lg transition-colors font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span>contact</span>
                    </Link>
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