"use client";

import React from "react";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { motion } from "framer-motion";

export const DUMMY_NEWS = [
  {
    id: 1,
    title: "The Future of Remote Work in Enterprise Settings",
    category: "Insights",
    date: "March 2026",
    excerpt: "As organizations adopt flexible models, we analyze how leading companies manage remote transitions and digital collaboration.",
    image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "MIRVac Appoints New AI Strategy Directory",
    category: "Company News",
    date: "February 2026",
    excerpt: "Expanding our executive search footprint into GenAI leadership as the market demands technical directors.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Global Hiring Trends for Freelance Tech Professionals",
    category: "Industry Report",
    date: "January 2026",
    excerpt: "We surveyed 5,000 top-tier freelancers and organizations. The results show a dramatic shift in compensation structures.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop",
  }
];

export default function NewsSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-24 border-t border-border mt-16">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">Latest Insights</h2>
          <p className="text-xl text-muted-foreground">Stay updated on the ever-changing landscape of modern professional work.</p>
        </div>
        <Link href="/news" className="inline-flex items-center gap-2 font-semibold text-accent hover:text-accent/80 transition-colors">
          View all articles <MoveRight size={20} />
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {DUMMY_NEWS.map((news, i) => (
          <motion.div 
            key={news.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group flex flex-col"
          >
            <Link href="/news" className="block overflow-hidden rounded-2xl mb-6 aspect-video bg-muted relative">
              <img src={news.image} alt={news.title} className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105" />
            </Link>
            <div className="flex items-center gap-3 text-sm text-accent font-medium mb-3">
              <span>{news.category}</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span className="text-muted-foreground">{news.date}</span>
            </div>
            <Link href="/news" className="block">
              <h3 className="text-2xl font-bold font-heading text-foreground mb-3 leading-snug group-hover:text-accent transition-colors">
                {news.title}
              </h3>
            </Link>
            <p className="text-muted-foreground leading-relaxed flex-1">
              {news.excerpt}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
