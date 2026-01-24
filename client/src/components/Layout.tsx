import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Instagram, Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  // Always solid header now
  const isScrolled = true;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/search", label: "Search" },
    { href: "/neighborhoods", label: "Neighborhoods" },
    { href: "/live-oak", label: "Live Oak" },
    { href: "/capitola", label: "Capitola" },
    { href: "/buyers", label: "Buyers" },
    { href: "/sellers", label: "Sellers" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Header */}
      <header 
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm py-3"
      >
        <div className="container flex items-center justify-between">
          <Link href="/">
            <div className="flex flex-col cursor-pointer">
              <img 
                src="/images/logo-dark.png" 
                alt="Shaye Carter Logo" 
                className="h-12 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span 
                  className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                    location === link.href 
                      ? "text-primary font-bold" 
                      : "text-foreground/80"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
            <Link href="/contact">
              <Button variant="default" size="sm" className="bg-primary text-white hover:bg-primary/90">
                Book a Call
              </Button>
            </Link>
          </nav>

          {/* Mobile Nav */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-8 mt-10">
                  <div className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <Link key={link.href} href={link.href}>
                        <span 
                          className={`text-lg font-medium transition-colors hover:text-primary cursor-pointer ${
                            location === link.href ? "text-primary font-bold" : "text-foreground/80"
                          }`}
                        >
                          {link.label}
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="flex flex-col gap-4 mt-4">
                    <Link href="/contact">
                      <Button className="w-full">Book a Call</Button>
                    </Link>
                    <div className="flex gap-4 justify-center mt-4">
                      <a href="#" className="text-muted-foreground hover:text-primary"><Instagram className="h-5 w-5" /></a>
                      <a href="#" className="text-muted-foreground hover:text-primary"><Facebook className="h-5 w-5" /></a>
                      <a href="#" className="text-muted-foreground hover:text-primary"><Youtube className="h-5 w-5" /></a>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="flex flex-col gap-4">
            <div>
              <img src="/images/logo-light.png" alt="Shaye Carter Logo" className="h-16 w-auto mb-4 object-contain" />
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Helping you navigate the Santa Cruz market with confidence. 
              "Know Before You Owe."
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="text-primary-foreground/70 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-primary-foreground/70 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-primary-foreground/70 hover:text-white transition-colors"><Youtube className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Explore</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><Link href="/search"><span className="hover:text-white cursor-pointer">Search Properties</span></Link></li>
              <li><Link href="/live-oak"><span className="hover:text-white cursor-pointer">Live Oak Living</span></Link></li>
              <li><Link href="/capitola"><span className="hover:text-white cursor-pointer">Capitola Guide</span></Link></li>
              <li><Link href="/neighborhoods"><span className="hover:text-white cursor-pointer">Neighborhood Guides</span></Link></li>
              <li><Link href="/buyers"><span className="hover:text-white cursor-pointer">Buyer Resources</span></Link></li>
              <li><Link href="/sellers"><span className="hover:text-white cursor-pointer">Seller Resources</span></Link></li>
              <li><Link href="/blog"><span className="hover:text-white cursor-pointer">Market Insights</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:shaye@movetosantacruz.com" className="hover:text-white">shaye@movetosantacruz.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+18315550123" className="hover:text-white">(831) 555-0123</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1" />
                <span>Santa Cruz, CA<br/>Specializing in Live Oak</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">Legal</h4>
            <div className="text-xs text-primary-foreground/60 space-y-2">
              <p>DRE #02105568</p>
              <p>NMLS #123456</p>
              <p>© {new Date().getFullYear()} Shaye Carter. All rights reserved.</p>
              <div className="flex gap-2 mt-2">
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <span>|</span>
                <a href="#" className="hover:text-white">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
