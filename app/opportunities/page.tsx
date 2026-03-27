"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function OpportunitiesPage() {
  const roles = [
    { title: "Senior AI Engineer", type: "Full-Time", remote: "100% Remote", dept: "Engineering" },
    { title: "Digital Marketing Consultant", type: "Freelance", remote: "Remote", dept: "Marketing" },
    { title: "Product Designer (UI/UX)", type: "Part-Time", remote: "Flexible", dept: "Design" },
    { title: "Strategy Partner", type: "Partnership", remote: "Hybrid (US/Aus)", dept: "Consulting" },
    { title: "Frontend Developer", type: "Full-Time", remote: "100% Remote", dept: "Engineering" },
  ];

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-heading font-bold mb-6"
          >
            Open <span className="text-accent">Opportunities</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Discover your next career move. We are constantly updating our roster with premium remote, part-time, and full-time roles.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col gap-4"
        >
          {roles.map((role, idx) => (
            <Link 
              href="/contact" 
              key={idx}
              className="group flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-8 rounded-2xl border border-border bg-card hover:bg-muted/50 transition-all hover:border-accent/40"
            >
              <div className="mb-4 md:mb-0">
                <div className="text-sm font-medium text-accent mb-2">{role.dept}</div>
                <h3 className="text-2xl font-bold font-heading text-foreground group-hover:text-accent transition-colors">{role.title}</h3>
              </div>
              <div className="flex items-center gap-4">
                <span className="px-4 py-2 rounded-full bg-muted text-foreground text-sm font-medium">{role.type}</span>
                <span className="px-4 py-2 rounded-full bg-muted text-foreground text-sm font-medium">{role.remote}</span>
                <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all ml-2">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </Link>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">Don&apos;t see a perfect fit? We are always looking for exceptional talent.</p>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-foreground text-background font-semibold hover:bg-foreground/90 transition-all">
            Submit General Application
          </Link>
        </div>
      </div>
    </div>
  );
}
