import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="md:col-span-2 space-y-4">
          <div className="text-3xl font-heading font-bold flex items-center gap-2 mb-6 text-foreground">
            <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-white text-xl">M</div>
            MIRVac Investment
          </div>
          <p className="text-muted-foreground max-w-sm text-lg leading-relaxed">
            Redefining professional opportunities with a focus on remote, flexible, and full-time careers across the globe.
          </p>
        </div>
        
        <div className="space-y-4">
          <h4 className="font-heading text-lg font-semibold tracking-wide text-foreground mb-4">Navigation</h4>
          <ul className="space-y-3">
            <li><Link href="/" className="text-muted-foreground hover:text-accent transition-colors">Home</Link></li>
            <li><Link href="/about" className="text-muted-foreground hover:text-accent transition-colors">About Us</Link></li>
            <li><Link href="/opportunities" className="text-muted-foreground hover:text-accent transition-colors">Careers</Link></li>
            <li><Link href="/news" className="text-muted-foreground hover:text-accent transition-colors">News</Link></li>
            <li><Link href="/contact" className="text-muted-foreground hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-heading text-lg font-semibold tracking-wide text-foreground mb-4">Contact Info</h4>
          <ul className="space-y-3 text-muted-foreground">
            <li>Lvl 39, 108 St. Georges Terrace, Perth, WA, 6000 Aus</li>
            <li>Palo Alto, 2443 Ash St., United States</li>
            <li>+1 205 533 9505</li>
            <li>mirvaccompany@gmail.com</li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} MIRVac Investment Company. Sponsored by Google.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
          <Link href="#" className="hover:text-foreground">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
