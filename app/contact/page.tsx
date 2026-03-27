"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      message: formData.get("message"),
      phone: formData.get("phone"),
      birthdayDay: formData.get("birthdayDay"),
      birthdayMonth: formData.get("birthdayMonth"),
      birthdayYear: formData.get("birthdayYear"),
      addressMulti: formData.get("addressMulti"),
      countryRegion: formData.get("countryRegion"),
      addressLine2: formData.get("addressLine2"),
      city: formData.get("city"),
      zip: formData.get("zip"),
      companyName: formData.get("companyName"),
      position: formData.get("position"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });
      
      if (!res.ok) {
        throw new Error("Failed to send message");
      }
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-[1fr_2fr] gap-16">
        
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col flex-start py-8"
        >
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">Let&apos;s <span className="text-accent">Connect</span></h1>
          <p className="text-xl text-muted-foreground mb-12">
            Join the MIRVac network. Please fill out the form entirely to apply for opportunities or partnership.
          </p>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg mb-1">Global Headquarters</h4>
                <p className="text-muted-foreground whitespace-pre-line">
                  Lvl 39, 108 St. Georges Terrace
                  Perth, WA, 6000 Aus
                </p>
                <p className="text-muted-foreground mt-2">
                  Palo Alto, 2443 Ash St., United States
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg mb-1">Phone</h4>
                <p className="text-muted-foreground">+1 205 533 9505</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg mb-1">Email</h4>
                <p className="text-muted-foreground">mirvaccompany@gmail.com</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Form Module */}
        <motion.div
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-card border border-border rounded-4xl p-8 md:p-10 shadow-2xl shadow-black/5">
            <h3 className="text-2xl font-heading font-bold mb-8">Submit Your Details</h3>
            
            {success ? (
              <div className="p-6 rounded-xl bg-green-500/10 border border-green-500/20 text-green-600 dark:text-green-400 font-medium">
                Thank you! Your information has been securely sent. We will be in touch shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name*</label>
                    <input type="text" name="firstName" required className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name*</label>
                    <input type="text" name="lastName" required className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email*</label>
                    <input type="email" name="email" required className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Phone</label>
                    <input type="tel" name="phone" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <textarea name="message" rows={4} className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none"></textarea>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium text-foreground">Birthday</label>
                  <div className="grid grid-cols-3 gap-4">
                    <input type="number" placeholder="Day" name="birthdayDay" min="1" max="31" className="bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all" />
                    <input type="number" placeholder="Month" name="birthdayMonth" min="1" max="12" className="bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all" />
                    <input type="number" placeholder="Year" name="birthdayYear" min="1900" max="2100" className="bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all" />
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-border">
                  <label className="text-sm font-medium text-foreground block">Address Information</label>
                  <div className="space-y-4">
                    <textarea name="addressMulti" placeholder="Multi-line address" rows={2} className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all resize-none"></textarea>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <input type="text" name="countryRegion" placeholder="Country/Region" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all" />
                      <input type="text" name="addressLine2" placeholder="Address (Line 2)" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <input type="text" name="city" placeholder="City" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all" />
                      <input type="text" name="zip" placeholder="Zip / Postal code" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all" />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5 pt-4 border-t border-border">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Company name</label>
                    <input type="text" name="companyName" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Position</label>
                    <input type="text" name="position" className="w-full bg-background border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all" />
                  </div>
                </div>

                {error && <div className="text-red-500 text-sm font-medium mt-2">{error}</div>}

                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-foreground text-background font-semibold flex items-center justify-center gap-2 hover:bg-foreground/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? "Submitting..." : (
                      <span className="flex items-center justify-center gap-2">Submit <Send size={18} /></span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
