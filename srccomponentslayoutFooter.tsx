import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link className="flex items-center gap-2 inline-flex" href="/">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center font-display font-bold text-background">N</div>
              <span className="font-display font-bold text-xl tracking-tight text-white">Nexa<span className="text-primary neon-text-cyan">Boost</span></span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">The high-end digital marketing command center for ambitious brands. We don't just run ads; we engineer explosive growth.</p>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link className="text-muted-foreground hover:text-primary transition-colors" href="/">Home</Link></li>
              <li><Link className="text-muted-foreground hover:text-primary transition-colors" href="/services">Services</Link></li>
              <li><Link className="text-muted-foreground hover:text-primary transition-colors" href="/about">About Us</Link></li>
              <li><Link className="text-muted-foreground hover:text-primary transition-colors" href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-6">Core Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link className="text-muted-foreground hover:text-secondary transition-colors" href="/services">TikTok Ads</Link></li>
              <li><Link className="text-muted-foreground hover:text-secondary transition-colors" href="/services">Meta Ads Management</Link></li>
              <li><Link className="text-muted-foreground hover:text-secondary transition-colors" href="/services">SEO Services</Link></li>
              <li><Link className="text-muted-foreground hover:text-secondary transition-colors" href="/services">Digital Marketing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-white mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>contact@nexaboost.com</li>
              <li>+92 331 458 9220</li>
              <li>Global Operations</li>
              <li>Available 24/7</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">© 2026 NexaBoost. All rights reserved.</p>
          <div className="flex gap-6">
            <Link className="text-muted-foreground hover:text-white text-xs transition-colors" href="/privacy">Privacy Policy</Link>
            <Link className="text-muted-foreground hover:text-white text-xs transition-colors" href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}