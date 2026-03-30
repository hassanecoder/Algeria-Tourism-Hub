import { useParams } from "wouter";
import { ArrowLeft, MapPin, Calendar, Clock, Star, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useGetDestination } from "@workspace/api-client-react";

export default function DestinationDetail() {
  const params = useParams();
  const id = parseInt(params.id || "1");

  // Fetch specific destination
  const { data: dest, isLoading, isError } = useGetDestination(id);

  // Fallback data
  const destination = dest || {
    id: id,
    name: "Tassili n'Ajjer",
    region: "Sahara",
    category: "Nature & History",
    imageUrl: "https://images.unsplash.com/photo-1549918864-48ac978761a4?w=1600",
    description: "Tassili n'Ajjer is a vast plateau in south-east Algeria at the borders of Libya, Niger and Mali. It is known for its prehistoric rock art and dramatic sandstone formations. A UNESCO World Heritage site, it feels like stepping onto another planet. The area is exceptionally rich in ancient art, with over 15,000 drawings and engravings recording climatic changes, animal migrations, and the evolution of human life on the edge of the Sahara from 6000 BC to the first centuries of the present era.",
    bestTimeToVisit: "October to April",
    duration: "3-5 Days",
    rating: 4.9,
    highlights: [
      "Discover thousands of prehistoric rock paintings",
      "Hike through alien-like sandstone 'forests'",
      "Camp under the clearest starry skies in the world",
      "Experience traditional Tuareg culture"
    ]
  };

  if (isLoading) {
    return <div className="min-h-screen pt-20 flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div></div>;
  }

  return (
    <div className="bg-background pb-20">
      {/* Hero Banner */}
      <div className="relative h-[60vh] min-h-[500px] w-full">
        <img 
          src={destination.imageUrl} 
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-transparent"></div>
        
        <div className="absolute top-24 left-4 sm:left-8 z-20">
          <Link href="/destinations">
            <Button variant="ghost" className="text-white hover:bg-white/20 rounded-full backdrop-blur-sm">
              <ArrowLeft className="w-5 h-5 mr-2" /> Back to Destinations
            </Button>
          </Link>
        </div>

        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-10">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 text-secondary font-bold tracking-widest uppercase text-sm mb-4">
              <MapPin className="w-5 h-5" />
              <span>{destination.region}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              <span>{destination.category}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display text-white mb-4">{destination.name}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-3xl font-display mb-6 text-foreground">Overview</h2>
              <div className="prose prose-lg text-muted-foreground max-w-none leading-relaxed">
                <p>{destination.description}</p>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-display mb-6 text-foreground">Key Highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {destination.highlights.map((highlight: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-3 bg-card p-4 rounded-2xl border border-border">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <span className="text-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-3xl p-8 border border-border shadow-lg sticky top-28">
              <h3 className="text-2xl font-display mb-6 border-b border-border pb-4">Practical Info</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Best Time</p>
                    <p className="text-foreground font-medium">{destination.bestTimeToVisit}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Suggested Duration</p>
                    <p className="text-foreground font-medium">{destination.duration}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <Star className="w-6 h-6 fill-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Rating</p>
                    <p className="text-foreground font-medium">{destination.rating} / 5</p>
                  </div>
                </div>
              </div>

              <Link href="/contact">
                <Button className="w-full h-14 text-lg bg-primary hover:bg-primary/90 text-white rounded-xl shadow-md">
                  Inquire About This Trip
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
