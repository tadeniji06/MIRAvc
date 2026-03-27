"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Briefcase, Globe, Users } from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";
import NewsSection from "@/components/NewsSection";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-background overflow-hidden relative">
      
      {/* Abstract Background pattern */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-linear-to-b from-accent/10 to-transparent -z-10 blur-3xl" />
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl -z-10" />

      {/* Hero Section */}
      <HeroCarousel>
        <section className="w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-medium text-sm mb-8 border border-white/20 backdrop-blur-md shadow-2xl"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            Next-Gen Professional Opportunities
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white tracking-tight leading-[1.1] mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Empowering The Future <br /> 
            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-300 to-white">Of Flexible Work</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover remote, part-time, and full-time opportunities with MIRVac Investment Company. Join a global network of professionals redefining how work is done.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link href="/opportunities" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-foreground font-bold hover:bg-white/90 transition-all text-lg shadow-xl hover:scale-105 group">
              Explore Careers
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-transparent text-white border border-white/30 font-semibold hover:bg-white/10 backdrop-blur-sm transition-all text-lg hover:scale-105">
              Partner With Us
            </Link>
          </motion.div>
        </section>
      </HeroCarousel>

      {/* Stats / Proof Section */}
      <section className="w-full border-y border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Global Reach", value: "35+ Countries" },
            { label: "Professionals", value: "10k+" },
            { label: "Remote Roles", value: "85%" },
            { label: "Client Partners", value: "500+" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-heading font-bold text-foreground mb-6">Why Choose MIRVac?</h2>
          <p className="text-lg text-muted-foreground">We provide unparalleled access to roles that fit your lifestyle, backed by top-tier enterprise partnerships.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Globe className="w-8 h-8 text-accent" />,
              title: "Remote First",
              desc: "Work from anywhere in the world. We believe talent is distributed globally, and opportunity should be too."
            },
            {
              icon: <Briefcase className="w-8 h-8 text-accent" />,
              title: "Flexible Hours",
              desc: "Part-time, freelance, or full-time. Choose the commitment level that matches your current life stage."
            },
            {
              icon: <Users className="w-8 h-8 text-accent" />,
              title: "Community Backed",
              desc: "Join a thriving group of industry experts, consultants, and leaders driving innovation forward."
            }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold font-heading mb-4 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* News Section */}
      <NewsSection />

      {/* CTA Section */}
      <section className="w-full max-w-7xl mx-auto px-6 py-24 mb-24">
        <div className="relative rounded-[3rem] bg-foreground text-background overflow-hidden p-12 md:p-20 text-center flex flex-col items-center">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/30 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/30 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/3" />
          
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 relative z-10">Ready to Transform Your Career?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl relative z-10">
            Submit your profile and let our team match you with the best available remote and flexible opportunities.
          </p>
          <Link href="/contact" className="relative z-10 inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full bg-background text-foreground font-semibold hover:scale-105 transition-all text-lg shadow-2xl">
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
      
    </div>
  );
}
