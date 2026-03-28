import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Map, Sun, Compass, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { useGetDestinations, useGetExperiences } from "@workspace/api-client-react";

export default function Home() {
  const { data: featuredDestinations = [], isLoading: destLoading } = useGetDestinations({ featured: true });
  const { data: experiences = [], isLoading: expLoading } = useGetExperiences();

  // Fallback data if API is empty/unseeded
  const displayDestinations = featuredDestinations.length > 0 ? featuredDestinations : [
    { id: 1, name: "Tassili n'Ajjer", region: "Sahara", imageUrl: "https://images.unsplash.com/photo-1542401886-65d6c61dece1?q=80&w=800&auto=format&fit=crop", shortDescription: "Vast plateau in south-east Algeria, known for prehistoric rock art." },
    { id: 2, name: "Casbah of Algiers", region: "Coast", imageUrl: "https://images.unsplash.com/photo-1589983944686-2212f719460b?q=80&w=800&auto=format&fit=crop", shortDescription: "Historic citadel holding centuries of Mediterranean history." },
    { id: 3, name: "Djemila", region: "Highlands", imageUrl: "https://images.unsplash.com/photo-1638612711652-32aeb41d33bb?q=80&w=800&auto=format&fit=crop", shortDescription: "Incredibly well-preserved Roman ruins in a beautiful mountain setting." },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-sahara.png`} 
            alt="Sahara Desert Dunes" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="uppercase tracking-[0.3em] font-medium text-secondary mb-4 block">
              Welcome to the Magic
            </span>
            <h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-medium mb-6 drop-shadow-lg">
              Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Algeria</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Journey through endless dunes, ancient Roman cities, and vibrant Mediterranean coastlines.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/destinations">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg h-auto">
                  Explore Destinations
                </Button>
              </Link>
              <Link href="/plan-trip">
                <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-md text-white border-white/30 hover:bg-white/20 rounded-full px-8 py-6 text-lg h-auto">
                  Plan Your Trip
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <span className="text-sm tracking-widest uppercase">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/70 to-transparent" />
        </motion.div>
      </section>

      {/* Features / Stats */}
      <section className="py-20 bg-background relative">
        <div className="absolute inset-0 opacity-[0.03] z-0 pointer-events-none" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/pattern-zellige.png)` }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Map, title: "7 UNESCO Sites", desc: "Uncover centuries of history perfectly preserved." },
              { icon: Sun, title: "Endless Sahara", desc: "Experience the world's most magnificent desert landscapes." },
              { icon: Compass, title: "1200km Coastline", desc: "Pristine beaches along the azure Mediterranean sea." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="text-center p-8 rounded-3xl bg-card border border-card-border shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <SectionHeading 
              title="Must-Visit Places" 
              subtitle="Featured Destinations" 
              className="mb-0"
            />
            <Link href="/destinations" className="hidden sm:flex items-center text-primary font-medium hover:underline gap-2">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayDestinations.map((dest: any, i) => (
              <motion.div 
                key={dest.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-3xl overflow-hidden bg-card shadow-lg hover:shadow-xl transition-all"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={dest.imageUrl} 
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-background/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-primary">
                    {dest.region}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-display text-2xl mb-2 group-hover:text-primary transition-colors">{dest.name}</h3>
                  <p className="text-muted-foreground mb-6 line-clamp-2">{dest.shortDescription}</p>
                  <Link href={`/destinations/${dest.id}`}>
                    <Button variant="ghost" className="w-full rounded-xl border-primary/20 hover:bg-primary hover:text-white">
                      Discover
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-10 text-center sm:hidden">
            <Link href="/destinations">
              <Button variant="outline" className="rounded-full">View All Destinations</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={`${import.meta.env.BASE_URL}images/hero-algiers.png`} 
            alt="Algiers City" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-accent/80 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="font-display text-5xl mb-6">Ready for an Adventure?</h2>
          <p className="text-xl text-white/80 mb-10 font-light">
            Let our local experts design your perfect Algerian itinerary, tailored exactly to your dreams.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white rounded-full px-10 py-6 text-lg h-auto shadow-lg shadow-secondary/30">
              Start Planning Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
