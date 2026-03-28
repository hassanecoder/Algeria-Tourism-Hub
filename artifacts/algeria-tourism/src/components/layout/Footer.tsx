import { Link } from "wouter";
import { MapPin, Mail, Phone, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white pt-16 pb-8 border-t-4 border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <MapPin className="w-8 h-8 text-primary" />
              <span className="font-display text-3xl font-bold tracking-wider">
                DZ<span className="text-primary font-normal">Voyage</span>
              </span>
            </Link>
            <p className="text-white/70 max-w-xs leading-relaxed">
              Discover the magic of Algeria, from the golden dunes of the Sahara to the azure coast of the Mediterranean. 
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xl mb-6 text-white">Explore</h4>
            <ul className="space-y-3">
              <li><Link href="/destinations" className="text-white/70 hover:text-primary transition-colors">Destinations</Link></li>
              <li><Link href="/experiences" className="text-white/70 hover:text-primary transition-colors">Experiences</Link></li>
              <li><Link href="/plan-trip" className="text-white/70 hover:text-primary transition-colors">Plan Your Trip</Link></li>
              <li><Link href="/about" className="text-white/70 hover:text-primary transition-colors">About Algeria</Link></li>
            </ul>
          </div>

          {/* Regions */}
          <div>
            <h4 className="font-display text-xl mb-6 text-white">Regions</h4>
            <ul className="space-y-3">
              <li><Link href="/destinations?region=sahara" className="text-white/70 hover:text-primary transition-colors">The Grand Sahara</Link></li>
              <li><Link href="/destinations?region=coast" className="text-white/70 hover:text-primary transition-colors">Mediterranean Coast</Link></li>
              <li><Link href="/destinations?region=atlas" className="text-white/70 hover:text-primary transition-colors">Atlas Mountains</Link></li>
              <li><Link href="/destinations?region=highlands" className="text-white/70 hover:text-primary transition-colors">High Plateaus</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-white/70">12 Rue Didouche Mourad,<br/>Algiers 16000, Algeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-white/70">+213 21 00 00 00</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-white/70">hello@dzvoyage.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
          <p>© {new Date().getFullYear()} DZVoyage. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
