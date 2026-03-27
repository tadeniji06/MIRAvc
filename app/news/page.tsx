"use client";

import React from "react";
import { motion } from "framer-motion";
import { DUMMY_NEWS } from "@/components/NewsSection";
import Link from "next/link";
import { MoveRight } from "lucide-react";

export default function NewsPage() {
  // Multiply dummy news to make it look full
  const articles = [...DUMMY_NEWS, ...DUMMY_NEWS.map(n => ({...n, id: n.id + 3}))];

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 w-full">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">News & <span className="text-accent">Insights</span></h1>
          <p className="text-xl text-muted-foreground">
            Explore our curated research, company announcements, and reports on the future of work and talent advisory.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((article, i) => (
             <motion.div 
               key={article.id}
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: i * 0.05, duration: 0.4 }}
               className="group flex flex-col bg-card border border-border rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-black/5 transition-all"
             >
               <div className="h-48 overflow-hidden relative bg-muted">
                 <img src={article.image} alt={article.title} className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105" />
               </div>
               <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-3 text-xs text-accent font-bold uppercase tracking-wider mb-4">
                    <span>{article.category}</span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span className="text-muted-foreground">{article.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-foreground mb-4 leading-tight group-hover:text-accent transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed flex-1 mb-8">
                    {article.excerpt}
                  </p>
                  
                  <Link href="#" className="inline-flex items-center gap-2 font-semibold text-foreground hover:text-accent transition-colors mt-auto">
                    Read article <MoveRight size={18} />
                  </Link>
               </div>
             </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
