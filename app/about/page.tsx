"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-4xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">About <span className="text-accent">MIRVac Investment</span></h1>
          <p className="text-xl text-muted-foreground">
            We are bridging the gap between top-tier talent and innovative organizations looking for flexible, remote expertise.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground"
        >
          <div className="bg-muted/50 p-8 rounded-3xl border border-border mb-12">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Our Mission</h2>
            <p className="leading-relaxed">
              At MIRVac Investment Company, we believe that the traditional 9-to-5 office model is evolving. 
              Our mission is to empower professionals by providing access to high-quality part-time, full-time, remote, 
              and freelance opportunities. We partner with forward-thinking enterprises to deliver the modern workforce they need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">What We Do</h3>
              <ul className="space-y-4">
                {[
                  "Connect talent with global remote roles",
                  "Facilitate business partnerships & consulting",
                  "Manage freelance project lifecycles",
                  "Provide flexible work solutions for enterprises"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-linear-to-br from-accent/20 to-transparent p-1 rounded-3xl hidden md:block">
               <div className="w-full h-full bg-card rounded-[22px] border border-border p-8 flex flex-col justify-center">
                  <div className="text-4xl font-heading font-black text-accent mb-4">&quot;Sponsored by Google.&quot;</div>
                  <p className="text-sm font-medium">As a trusted partner, we maintain the highest standards of excellence in professional consulting and employment.</p>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
