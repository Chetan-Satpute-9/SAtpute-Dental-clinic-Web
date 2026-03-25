/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Star, 
  ChevronRight, 
  ShieldCheck, 
  HeartPulse,
  Smile,
  Info,
  ArrowRight
} from 'lucide-react';
import { motion } from 'motion/react';

// --- Types ---
interface Service {
  id: string;
  name: string;
  description: string;
  painLevel: 'Low' | 'Medium' | 'None';
  price: string;
  icon: React.ReactNode;
}

// --- Data ---
const SERVICES: Service[] = [
  {
    id: 'rct',
    name: 'Root Canal Treatment (RCT)',
    description: 'Save your natural tooth with our advanced, pain-free single-sitting RCT.',
    painLevel: 'Low',
    price: '₹2,500',
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    id: 'braces',
    name: 'Braces / Orthodontics',
    description: 'Get that perfect straight smile. Options for kids and adults available.',
    painLevel: 'Medium',
    price: '₹20,000',
    icon: <Smile className="w-6 h-6" />
  },
  {
    id: 'cleaning',
    name: 'Teeth Cleaning & Polishing',
    description: 'Remove stains and plaque for a fresh, healthy breath and sparkling teeth.',
    painLevel: 'None',
    price: '₹1000',
    icon: <HeartPulse className="w-6 h-6" />
  },
  {
    id: 'extraction',
    name: 'Painless Tooth Extraction',
    description: 'Quick and gentle removal of damaged or wisdom teeth.',
    painLevel: 'Low',
    price: '₹500',
    icon: <Info className="w-6 h-6" />
  },
  {
    id: 'cosmetic',
    name: 'Smile Design / Cosmetic',
    description: 'Transform your look with veneers, whitening, and aesthetic bonding.',
    painLevel: 'None',
    price: '₹2,000',
    icon: <Star className="w-6 h-6" />
  }
];

const TESTIMONIALS = [
  {
    name: "Rahul Deshmukh",
    text: "RCT was completely painless! Dr. Satpute explained everything so simply. Best dentist in Katol.",
    rating: 5
  },
  {
    name: "Priya Sharma",
    text: "Got my braces here. The staff is very friendly and the clinic is super clean. Highly recommended!",
    rating: 5
  },
  {
    name: "Sanjay Patil",
    text: "Very affordable pricing and genuine advice. No unnecessary treatments suggested.",
    rating: 5
  }
];

const FAQS = [
  {
    q: "Will it hurt?",
    a: "We use advanced anesthesia and modern techniques to ensure your treatment is as pain-free as possible. Most patients feel nothing!"
  },
  {
    q: "How much will it cost?",
    a: "We believe in transparency. Our basic treatments start from ₹500. We also offer easy EMI options for bigger treatments like Braces."
  },
  {
    q: "How long will it take?",
    a: "Simple procedures take 30-45 mins. Single-sitting RCTs are done in about an hour. We respect your time!"
  }
];

// --- Components ---

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 px-4 md:px-8 flex justify-between items-center">
    <div className="flex items-center gap-2">
      <div className="bg-primary p-2 rounded-lg">
        <HeartPulse className="text-white w-6 h-6" />
      </div>
      <div>
        <h1 className="font-bold text-lg leading-tight text-primary">Satpute Dental</h1>
        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">Clinic & Implant Center</p>
      </div>
    </div>
    <div className="hidden md:flex gap-6 items-center font-medium text-slate-600">
      <a href="#services" className="hover:text-primary transition-colors">Services</a>
      <a href="#about" className="hover:text-primary transition-colors">About</a>
      <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
      <a href="tel:8605976108" className="bg-primary text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
        <Phone size={18} /> 8605976108
      </a>
    </div>
    <a href="tel:8605976108" className="md:hidden bg-primary text-white p-2.5 rounded-full shadow-lg">
      <Phone size={20} />
    </a>
  </nav>
);

const Hero = () => (
  <section className="relative overflow-hidden pt-12 pb-20 px-4 md:px-8 bg-gradient-to-b from-blue-50 to-white">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-bold mb-6">
          <CheckCircle2 size={16} /> Pain-Free Treatment in Katol
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-[1.1] mb-6">
          Ab Daant Ke Dard Se <span className="text-primary">Darna Chhodo!</span>
        </h2>
        <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
          Get world-class dental care by <strong>Dr. Chetan Satpute</strong>. Painless treatments, affordable rates, and a smile you'll love.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-primary text-white text-lg font-bold px-8 py-4 rounded-2xl flex items-center justify-center gap-2 hover:scale-105 transition-transform shadow-xl shadow-blue-200">
            <Calendar size={22} /> Book Appointment
          </button>
          <a href="tel:8605976108" className="bg-white text-slate-800 border-2 border-slate-200 text-lg font-bold px-8 py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
            <Phone size={22} /> Call Now
          </a>
        </div>
        <div className="mt-10 flex items-center gap-6">
          <div className="flex -space-x-3">
            {[1,2,3,4].map(i => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
          <div className="text-sm font-medium text-slate-600">
            <span className="text-slate-900 font-bold">1000+</span> Happy Patients in Katol
          </div>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
      >
        <div className="aspect-square rounded-[40px] bg-primary/5 border border-primary/10 overflow-hidden relative z-10">
          <img 
            src="https://picsum.photos/seed/dentist/800/800" 
            alt="Dr. Chetan Satpute" 
            className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all"
            referrerPolicy="no-referrer"
          />
        </div>
        {/* Trust Badges */}
        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-2xl z-20 flex items-center gap-3 border border-slate-100">
          <div className="bg-amber-100 p-2 rounded-lg text-amber-600">
            <Star fill="currentColor" size={24} />
          </div>
          <div>
            <p className="font-bold text-slate-900 leading-none">5+ Years</p>
            <p className="text-xs text-slate-500">Experience</p>
          </div>
        </div>
        <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-2xl z-20 flex items-center gap-3 border border-slate-100">
          <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
            <ShieldCheck size={24} />
          </div>
          <div>
            <p className="font-bold text-slate-900 leading-none">Fellowship</p>
            <p className="text-xs text-slate-500">Endodontics (HYD)</p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

const TrustSection = () => (
  <section id="about" className="py-20 px-4 md:px-8 bg-white">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Meet Your Doctor</h3>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Dr. Chetan V. Satpute, BDS</h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            A specialist in Clinical Endodontics from Hyderabad, Dr. Satpute brings modern, pain-free dental techniques to Katol. He believes that a visit to the dentist should be as comfortable as sitting at home.
          </p>
          <ul className="space-y-4 mb-10">
            {[
              "Fellow in Clinical Endodontics (Hyderabad)",
              "Expert in Single-Sitting Root Canal",
              "Specialized in Kids Dental Care",
              "Advanced Sterilization Protocols"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                <CheckCircle2 className="text-secondary" size={20} /> {item}
              </li>
            ))}
          </ul>
          <div className="grid grid-cols-3 gap-4">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                <div className="flex text-amber-400 mb-2">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} size={12} fill="currentColor" />)}
                </div>
                <p className="text-[10px] text-slate-600 italic mb-2 line-clamp-3">"{t.text}"</p>
                <p className="text-[10px] font-bold text-slate-900">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <img src="https://picsum.photos/seed/clinic1/400/500" alt="Clinic" className="rounded-3xl w-full h-64 object-cover shadow-lg" referrerPolicy="no-referrer" />
            <img src="https://picsum.photos/seed/clinic2/400/300" alt="Clinic" className="rounded-3xl w-full h-40 object-cover shadow-lg" referrerPolicy="no-referrer" />
          </div>
          <div className="space-y-4 pt-8">
            <img src="https://picsum.photos/seed/clinic3/400/300" alt="Clinic" className="rounded-3xl w-full h-40 object-cover shadow-lg" referrerPolicy="no-referrer" />
            <img src="https://picsum.photos/seed/clinic4/400/500" alt="Clinic" className="rounded-3xl w-full h-64 object-cover shadow-lg" referrerPolicy="no-referrer" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ServicesSection = () => (
  <section id="services" className="py-20 px-4 md:px-8 bg-slate-50">
    <div className="max-w-7xl mx-auto text-center mb-16">
      <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Our Services</h3>
      <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">World-Class Care for Your Family</h2>
      <p className="text-slate-600 max-w-2xl mx-auto">We use the latest technology to ensure your treatment is fast, effective, and completely comfortable.</p>
    </div>
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
      {SERVICES.map((s) => (
        <motion.div 
          key={s.id}
          whileHover={{ y: -5 }}
          className="bg-white p-8 rounded-[32px] border border-slate-200 shadow-sm hover:shadow-xl transition-all group"
        >
          <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
            {s.icon}
          </div>
          <h4 className="text-xl font-bold text-slate-900 mb-3">{s.name}</h4>
          <p className="text-slate-600 mb-6 text-sm leading-relaxed">{s.description}</p>
          <div className="flex items-center justify-between pt-6 border-t border-slate-100">
            <div>
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Pain Level</p>
              <p className={`text-xs font-bold ${s.painLevel === 'None' ? 'text-secondary' : 'text-amber-500'}`}>{s.painLevel}</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Starting From</p>
              <p className="text-lg font-extrabold text-primary">{s.price}</p>
            </div>
          </div>
          <button className="w-full mt-8 bg-slate-900 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-primary transition-colors">
            Book Now <ArrowRight size={16} />
          </button>
        </motion.div>
      ))}
    </div>
  </section>
);

const FearReduction = () => (
  <section className="py-20 px-4 md:px-8 bg-primary text-white overflow-hidden relative">
    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
    
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
      <div>
        <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight">
          Daant Ke Ilaaj Se <br /> <span className="text-secondary">Darr Lagta Hai?</span>
        </h2>
        <p className="text-lg text-blue-100 mb-10 leading-relaxed">
          We understand dental anxiety. That's why we've designed our clinic to be a "Fear-Free Zone". No scary sounds, no pain, just gentle care.
        </p>
        <div className="space-y-6">
          {FAQS.map((faq, i) => (
            <div key={i} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              <h4 className="font-bold text-xl mb-2 flex items-center gap-3">
                <Info className="text-secondary" size={20} /> {faq.q}
              </h4>
              <p className="text-blue-100 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white rounded-[40px] p-8 text-slate-900 shadow-2xl">
        <h3 className="text-2xl font-bold mb-6 text-center">Why Patients Trust Us?</h3>
        <div className="space-y-8">
          {[
            { title: "Pain-Free Technology", desc: "Advanced anesthesia & gentle tools.", icon: <ShieldCheck className="text-primary" /> },
            { title: "Transparent Pricing", desc: "No hidden costs. EMI available.", icon: <Star className="text-primary" /> },
            { title: "Quick Recovery", desc: "Minimal downtime after procedures.", icon: <Clock className="text-primary" /> }
          ].map((item, i) => (
            <div key={i} className="flex gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div>
                <h5 className="font-bold text-lg">{item.title}</h5>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="w-full mt-10 bg-primary text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-200 hover:scale-[1.02] transition-transform">
          Consult Dr. Satpute Today
        </button>
      </div>
    </div>
  </section>
);

const PricingSection = () => (
  <section id="pricing" className="py-20 px-4 md:px-8 bg-white">
    <div className="max-w-7xl mx-auto text-center mb-16">
      <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Pricing Transparency</h3>
      <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Affordable Care for Everyone</h2>
      <p className="text-slate-600">We offer flexible plans and EMI options for your convenience.</p>
    </div>
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
      {[
        { 
          tier: "Basic Care", 
          price: "₹500", 
          features: ["Consultation", "X-Ray", "Cleaning", "Simple Filling"],
          recommended: false
        },
        { 
          tier: "Ideal Smile", 
          price: "₹2,500", 
          features: ["Advanced RCT", "Ceramic Crowns", "Deep Cleaning", "Teeth Whitening"],
          recommended: true
        },
        { 
          tier: "Premium / Braces", 
          price: "₹15,000", 
          features: ["Metal/Ceramic Braces", "Invisible Aligners", "Full Mouth Rehab", "EMI Options"],
          recommended: false
        }
      ].map((plan, i) => (
        <div key={i} className={`p-8 rounded-[32px] border-2 transition-all ${plan.recommended ? 'border-primary bg-blue-50/50 shadow-xl scale-105' : 'border-slate-100 bg-white'}`}>
          {plan.recommended && <span className="bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">Most Popular</span>}
          <h4 className="text-xl font-bold text-slate-900 mb-2">{plan.tier}</h4>
          <p className="text-slate-400 text-sm mb-6">Starting from</p>
          <div className="text-4xl font-extrabold text-slate-900 mb-8">{plan.price}</div>
          <ul className="space-y-4 mb-10">
            {plan.features.map((f, j) => (
              <li key={j} className="flex items-center gap-3 text-sm text-slate-600 font-medium">
                <CheckCircle2 size={16} className="text-secondary" /> {f}
              </li>
            ))}
          </ul>
          <button className={`w-full py-4 rounded-2xl font-bold transition-all ${plan.recommended ? 'bg-primary text-white shadow-lg shadow-blue-200' : 'bg-slate-100 text-slate-800 hover:bg-slate-200'}`}>
            Get Started
          </button>
        </div>
      ))}
    </div>
    <div className="mt-12 text-center">
      <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full text-sm font-bold text-slate-600">
        <ShieldCheck size={16} className="text-primary" /> 0% EMI Options Available for Braces & Implants
      </div>
    </div>
  </section>
);

const LocationSection = () => (
  <section className="py-20 px-4 md:px-8 bg-slate-50">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Visit Us</h3>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">Easy to Find, Hard to Forget</h2>
        <div className="space-y-6 mb-10">
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
              <MapPin className="text-primary" />
            </div>
            <div>
              <h5 className="font-bold text-lg">Address</h5>
              <p className="text-slate-500">Satpute Dental Clinic, Katol, Maharashtra, India</p>
              <p className="text-sm text-primary font-bold mt-1">Landmark: Near Main Market</p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
              <Clock className="text-primary" />
            </div>
            <div>
              <h5 className="font-bold text-lg">Timings</h5>
              <p className="text-slate-500">Morning: 10:00 AM – 2:00 PM</p>
              <p className="text-slate-500">Evening: 4:00 PM – 8:00 PM</p>
              <p className="text-sm text-secondary font-bold mt-1">Open Monday to Saturday</p>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <button className="bg-slate-900 text-white font-bold px-6 py-3 rounded-xl flex items-center gap-2">
            Get Directions <ChevronRight size={18} />
          </button>
          <a href="tel:8605976108" className="bg-white border border-slate-200 text-slate-800 font-bold px-6 py-3 rounded-xl flex items-center gap-2">
            Call Clinic
          </a>
        </div>
      </div>
      <div className="aspect-video bg-slate-200 rounded-[40px] overflow-hidden shadow-2xl border-8 border-white relative group">
        <img 
          src="https://picsum.photos/seed/map/800/600" 
          alt="Map Location" 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
          <div className="bg-white p-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce">
            <MapPin className="text-primary" size={32} />
            <span className="font-bold">We are here!</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-900 text-white pt-20 pb-10 px-4 md:px-8">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
      <div className="col-span-2">
        <div className="flex items-center gap-2 mb-6">
          <div className="bg-primary p-2 rounded-lg">
            <HeartPulse className="text-white w-6 h-6" />
          </div>
          <h1 className="font-bold text-2xl">Satpute Dental</h1>
        </div>
        <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
          Providing high-quality, pain-free dental care to the community of Katol. Your smile is our priority.
        </p>
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
            <MessageCircle size={20} />
          </a>
          <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
            <Phone size={20} />
          </a>
        </div>
      </div>
      <div>
        <h5 className="font-bold text-lg mb-6">Quick Links</h5>
        <ul className="space-y-4 text-slate-400 font-medium">
          <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
          <li><a href="#about" className="hover:text-white transition-colors">About Doctor</a></li>
          <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Book Appointment</a></li>
        </ul>
      </div>
      <div>
        <h5 className="font-bold text-lg mb-6">Contact</h5>
        <ul className="space-y-4 text-slate-400 font-medium">
          <li className="flex items-center gap-3"><Phone size={16} className="text-primary" /> 8605976108</li>
          <li className="flex items-center gap-3"><MapPin size={16} className="text-primary" /> Katol, Maharashtra</li>
          <li className="flex items-center gap-3"><Clock size={16} className="text-primary" /> 10 AM - 8 PM</li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:row justify-between items-center gap-4 text-slate-500 text-sm">
      <p>© 2026 Satpute Dental Clinic. All rights reserved.</p>
      <div className="flex gap-6">
        <a href="#" className="hover:text-white">Privacy Policy</a>
        <a href="#" className="hover:text-white">Terms of Service</a>
      </div>
    </div>
  </footer>
);

const StickyMobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      className="md:hidden fixed bottom-6 left-4 right-4 z-[100] flex gap-3"
    >
      <a 
        href="https://wa.me/918605976108" 
        className="flex-1 bg-secondary text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-2xl shadow-green-200"
      >
        <MessageCircle size={22} /> WhatsApp
      </a>
      <a 
        href="tel:8605976108" 
        className="flex-1 bg-primary text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-2xl shadow-blue-200"
      >
        <Phone size={22} /> Call Now
      </a>
    </motion.div>
  );
};

const OfferBanner = () => (
  <div className="bg-amber-400 text-amber-950 py-2 px-4 text-center text-xs font-bold uppercase tracking-widest">
    ✨ Special Offer: Free Dental Checkup for First-Time Patients! ✨
  </div>
);

const BeforeAfterSection = () => (
  <section className="py-20 px-4 md:px-8 bg-white">
    <div className="max-w-7xl mx-auto text-center mb-16">
      <h3 className="text-sm font-bold text-primary uppercase tracking-widest mb-4">Real Transformations</h3>
      <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">See the Difference We Make</h2>
      <p className="text-slate-600 max-w-2xl mx-auto">Actual results from our patients in Katol. We don't just treat teeth, we transform lives.</p>
    </div>
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
      {[
        { title: "Smile Correction (Braces)", desc: "From crooked teeth to a perfect alignment in 12 months." },
        { title: "Teeth Whitening", desc: "Removed years of stains in just one 45-minute session." }
      ].map((item, i) => (
        <div key={i} className="bg-slate-50 rounded-[40px] p-6 border border-slate-100">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="relative">
              <img src={`https://picsum.photos/seed/before${i}/400/400`} alt="Before" className="rounded-3xl w-full aspect-square object-cover" referrerPolicy="no-referrer" />
              <span className="absolute top-4 left-4 bg-black/50 text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase">Before</span>
            </div>
            <div className="relative">
              <img src={`https://picsum.photos/seed/after${i}/400/400`} alt="After" className="rounded-3xl w-full aspect-square object-cover" referrerPolicy="no-referrer" />
              <span className="absolute top-4 left-4 bg-secondary text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase">After</span>
            </div>
          </div>
          <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
          <p className="text-sm text-slate-500">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary selection:text-white">
      <OfferBanner />
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <ServicesSection />
        <FearReduction />
        <BeforeAfterSection />
        <PricingSection />
        <LocationSection />
        
        {/* Final Strong CTA */}
        <section className="py-20 px-4 md:px-8 bg-white">
          <div className="max-w-4xl mx-auto bg-slate-900 rounded-[40px] p-8 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary"></div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Ready for a Pain-Free Smile?</h2>
            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
              Don't wait for the pain to get worse. Book your consultation today and experience the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white text-lg font-bold px-10 py-5 rounded-2xl hover:scale-105 transition-transform shadow-xl shadow-blue-900/20">
                Book Appointment Now
              </button>
              <a href="https://wa.me/918605976108" className="bg-secondary text-white text-lg font-bold px-10 py-5 rounded-2xl flex items-center justify-center gap-2 hover:scale-105 transition-transform">
                <MessageCircle size={22} /> Chat on WhatsApp
              </a>
            </div>
            <p className="mt-8 text-slate-500 text-sm font-medium">
              Join 1000+ happy patients in Katol.
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
}
