"usereact";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-transparent py-5 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link className="flex items-center gap-2" href="/">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center font-display font-bold text-background">
            N
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white">
            Nexa<span className="text-primary neon-text-cyan">Boost</span>
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground" href="/">Home</Link>
          <Link className="text-sm font-medium transition-colors hover:text-primary text-primary" href="/services">Services</Link>
          <Link className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground" href="/about">About</Link>
          <Link className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground" href="/contact">Contact</Link>
          <Link href="/contact">
            <button className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors min-h-9 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 neon-box-cyan hover-elevate">
              Get Proposal
            </button>
          </Link>
        </nav>

        <button className="md:hidden text-white p-2">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}