"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-heading font-bold tracking-tight text-foreground flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white text-lg">M</div>
          MIRVac
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</Link>
          <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
          <Link href="/opportunities" className="text-muted-foreground hover:text-foreground transition-colors">Opportunities</Link>
          <Link href="/news" className="text-muted-foreground hover:text-foreground transition-colors">News</Link>
          <Link href="/contact" className="px-5 py-2.5 bg-foreground text-background rounded-full hover:bg-foreground/90 transition-all font-semibold">Get in Touch</Link>
        </div>
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border px-6 py-6 flex flex-col gap-4 shadow-xl">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-medium text-muted-foreground hover:text-foreground">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium text-muted-foreground hover:text-foreground">About</Link>
          <Link href="/opportunities" onClick={() => setIsOpen(false)} className="text-lg font-medium text-muted-foreground hover:text-foreground">Opportunities</Link>
          <Link href="/news" onClick={() => setIsOpen(false)} className="text-lg font-medium text-muted-foreground hover:text-foreground">News</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="text-lg font-medium bg-foreground text-background text-center py-3 rounded-xl mt-2">Get in Touch</Link>
        </div>
      )}
    </nav>
  );
}
