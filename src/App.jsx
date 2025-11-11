import React from 'react'
import Spline from '@splinetool/react-spline'
import { Phone, Mail, MapPin, Star, CheckCircle2, Instagram, Facebook, Linkedin } from 'lucide-react'

function Navbar() {
  const links = [
    { href: '#portfolio', label: 'Designs' },
    { href: '#owners', label: 'Our Team' },
    { href: '#reviews', label: 'Reviews' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#location', label: 'Location' },
    { href: '#contact', label: 'Contact' },
  ]
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="text-xl font-semibold tracking-tight">
          Sarathi designers
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:text-gray-900 transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="ml-4 inline-flex items-center rounded-full bg-gray-900 text-white text-sm font-medium px-4 py-2 hover:bg-black">
          Get a quote
        </a>
      </div>
    </header>
  )}

function Hero() {
  return (
    <section id="hero" className="relative h-[90vh] min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* Soft gradient overlays to improve text contrast – pointer-events disabled so the 3D scene remains interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/10 to-white/0" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full">
        <div className="h-full flex flex-col justify-end sm:justify-center pt-24 pb-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-gray-900">
              Luxury interiors crafted for modern living
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Sarathi designers transforms homes and commercial spaces with timeless, functional, and elegant design.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#portfolio" className="inline-flex items-center rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-black">
                View our work
              </a>
              <a href="#contact" className="inline-flex items-center rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-900 hover:bg-gray-50">
                Book a consultation
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-gray-700">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>4.9/5 from 120+ clients</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                <span>End-to-end design & execution</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Portfolio() {
  const projects = [
    {
      title: 'Contemporary Living Room',
      img: 'https://images.unsplash.com/photo-1505692794403-34d4982f88aa?q=80&w=1974&auto=format&fit=crop',
    },
    {
      title: 'Minimal Kitchen',
      img: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?q=80&w=1974&auto=format&fit=crop',
    },
    {
      title: 'Luxury Bedroom',
      img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1974&auto=format&fit=crop',
    },
    {
      title: 'Modern Workspace',
      img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1974&auto=format&fit=crop',
    },
    {
      title: 'Elegant Dining',
      img: 'https://images.unsplash.com/photo-1520881363902-a0ff4e722963?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'Boutique Retail',
      img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1974&auto=format&fit=crop',
    },
  ]
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Selected designs</h2>
          <p className="mt-3 text-gray-700">A glimpse into the spaces we have crafted for our clients.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <figure key={idx} className="group overflow-hidden rounded-2xl border bg-white">
              <img src={p.img} alt={p.title} className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <figcaption className="p-4 text-sm text-gray-800">{p.title}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

function Owners() {
  const owners = [
    { name: 'Arjun Sarathi', role: 'Principal Designer', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1740&auto=format&fit=crop' },
    { name: 'Mira Sarathi', role: 'Creative Director', img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1631&auto=format&fit=crop' },
  ]
  return (
    <section id="owners" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Meet the owners</h2>
          <p className="mt-3 text-gray-700">A duo blending architectural precision with artistic storytelling.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {owners.map((o, i) => (
            <div key={i} className="overflow-hidden rounded-2xl bg-white border">
              <img src={o.img} alt={o.name} className="h-80 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{o.name}</h3>
                <p className="text-gray-600">{o.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Reviews() {
  const reviews = [
    {
      name: 'Rahul Verma',
      text: 'They transformed our apartment into a calm, luxurious retreat. The process was seamless and on schedule.',
      rating: 5,
    },
    {
      name: 'Ananya Sharma',
      text: 'Attention to detail is unmatched. The team curated every piece to reflect our personality.',
      rating: 5,
    },
    {
      name: 'Ishaan Patel',
      text: 'From concept to execution, everything felt professional and effortless. Highly recommended.',
      rating: 5,
    },
  ]
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Client reviews</h2>
          <p className="mt-3 text-gray-700">Stories from the homes and spaces we shaped.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="rounded-2xl border bg-white p-6">
              <div className="flex items-center gap-1 text-yellow-500">
                {Array.from({ length: r.rating }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mt-4 text-gray-800">“{r.text}”</p>
              <p className="mt-4 text-sm text-gray-600">— {r.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  const tiers = [
    {
      name: 'Essentials',
      price: '₹799/sqft',
      desc: 'Smart, budget-friendly makeovers',
      features: ['Concept & moodboards', 'Space planning', 'Furniture selection', '2 design revisions'],
    },
    {
      name: 'Premium',
      price: '₹1299/sqft',
      desc: 'Signature look with custom elements',
      features: ['Everything in Essentials', 'Custom carpentry & finishes', 'Lighting & decor curation', 'On-site supervision'],
      highlight: true,
    },
    {
      name: 'Luxury',
      price: '₹1999/sqft',
      desc: 'Turnkey, luxury-grade execution',
      features: ['Bespoke materials', 'Styling & art consulting', 'Project management', 'Priority timelines'],
    },
  ]
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Transparent pricing</h2>
          <p className="mt-3 text-gray-700">Flexible packages tailored to your space and aspirations.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((t, i) => (
            <div key={i} className={`rounded-2xl border p-6 bg-white ${t.highlight ? 'ring-2 ring-gray-900' : ''}`}>
              <h3 className="text-xl font-semibold text-gray-900">{t.name}</h3>
              <p className="mt-1 text-gray-600">{t.desc}</p>
              <p className="mt-4 text-3xl font-semibold text-gray-900">{t.price}</p>
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                {t.features.map((f, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-flex items-center justify-center w-full rounded-full bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:bg-black">Request quote</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Location() {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Visit our studio</h2>
          <p className="mt-3 text-gray-700">Find us in the heart of the city. We welcome walk-ins by appointment.</p>
        </div>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl border bg-white p-6 space-y-4">
            <div className="flex items-start gap-3 text-gray-800">
              <MapPin className="h-5 w-5 text-gray-900 mt-0.5" />
              <div>
                <p className="font-medium">Sarathi designers</p>
                <p>4th Floor, Skyline Plaza, MG Road</p>
                <p>Bengaluru, KA 560001</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-gray-800">
              <Phone className="h-5 w-5 text-gray-900" />
              <a href="tel:+919999999999" className="hover:underline">+91 99999 99999</a>
            </div>
            <div className="flex items-center gap-3 text-gray-800">
              <Mail className="h-5 w-5 text-gray-900" />
              <a href="mailto:studio@sarathidesigners.com" className="hover:underline">studio@sarathidesigners.com</a>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" aria-label="Instagram" className="rounded-full border p-2 hover:bg-gray-50"><Instagram className="h-4 w-4"/></a>
              <a href="#" aria-label="Facebook" className="rounded-full border p-2 hover:bg-gray-50"><Facebook className="h-4 w-4"/></a>
              <a href="#" aria-label="LinkedIn" className="rounded-full border p-2 hover:bg-gray-50"><Linkedin className="h-4 w-4"/></a>
            </div>
          </div>
          <div className="lg:col-span-2 overflow-hidden rounded-2xl border">
            <iframe
              title="Sarathi designers location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.110640540511!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjciTiA3N8KwMzUnNDAuNiJF!5e0!3m2!1sen!2sin!4v1610000000000!5m2!1sen!2sin"
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Start your project</h2>
          <p className="mt-3 text-gray-700">Tell us about your space. We will get back within 24 hours.</p>
        </div>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <form className="lg:col-span-2 rounded-2xl border bg-white p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full name</label>
                <input type="text" className="mt-1 w-full rounded-lg border-gray-300 focus:border-gray-900 focus:ring-gray-900" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="mt-1 w-full rounded-lg border-gray-300 focus:border-gray-900 focus:ring-gray-900" placeholder="you@example.com" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input type="tel" className="mt-1 w-full rounded-lg border-gray-300 focus:border-gray-900 focus:ring-gray-900" placeholder="+91" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Project type</label>
                <select className="mt-1 w-full rounded-lg border-gray-300 focus:border-gray-900 focus:ring-gray-900">
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Retail</option>
                  <option>Hospitality</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Tell us about your space</label>
              <textarea rows={5} className="mt-1 w-full rounded-lg border-gray-300 focus:border-gray-900 focus:ring-gray-900" placeholder="Sqft, location, style, timeline..."></textarea>
            </div>
            <button type="button" onClick={() => alert('Thanks! We will contact you shortly.')} className="inline-flex items-center rounded-full bg-gray-900 text-white px-6 py-3 text-sm font-medium hover:bg-black">
              Send enquiry
            </button>
          </form>
          <div className="rounded-2xl border bg-white p-6 space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">Contact details</h3>
            <div className="flex items-center gap-3 text-gray-800">
              <Phone className="h-5 w-5 text-gray-900" />
              <a href="tel:+919999999999" className="hover:underline">+91 99999 99999</a>
            </div>
            <div className="flex items-center gap-3 text-gray-800">
              <Mail className="h-5 w-5 text-gray-900" />
              <a href="mailto:studio@sarathidesigners.com" className="hover:underline">studio@sarathidesigners.com</a>
            </div>
            <div className="flex items-start gap-3 text-gray-800">
              <MapPin className="h-5 w-5 text-gray-900 mt-0.5" />
              <div>
                <p>4th Floor, Skyline Plaza, MG Road</p>
                <p>Bengaluru, KA 560001</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Sarathi designers. All rights reserved.</p>
        <nav className="flex items-center gap-6 text-sm text-gray-700">
          <a href="#portfolio" className="hover:text-gray-900">Designs</a>
          <a href="#pricing" className="hover:text-gray-900">Pricing</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </nav>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen text-gray-900 scroll-smooth">
      <Navbar />
      <Hero />
      <Portfolio />
      <Owners />
      <Reviews />
      <Pricing />
      <Location />
      <Contact />
      <Footer />
    </div>
  )
}
