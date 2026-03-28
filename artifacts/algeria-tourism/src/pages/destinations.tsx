import { useState } from "react";
import { Link } from "wouter";
import { MapPin, Search, Filter, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useGetDestinations } from "@workspace/api-client-react";

export default function Destinations() {
  const [regionFilter, setRegionFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch from API
  const { data: destinations = [], isLoading } = useGetDestinations();

  // Fallback data if API is empty
  const allDestinations = destinations.length > 0 ? destinations : [
    { id: 1, name: "Algiers", region: "Coast", category: "City", imageUrl: "https://images.unsplash.com/photo-1589983944686-2212f719460b?w=800", shortDescription: "The white city on the bay." },
    { id: 2, name: "Oran", region: "Coast", category: "City", imageUrl: "https://images.unsplash.com/photo-1601614066060-64ebbf7eb3b7?w=800", shortDescription: "Vibrant Mediterranean metropolis." },
    { id: 3, name: "Constantine", region: "Highlands", category: "History", imageUrl: "https://images.unsplash.com/photo-1638612711652-32aeb41d33bb?w=800", shortDescription: "City of suspended bridges." },
    { id: 4, name: "Tassili n'Ajjer", region: "Sahara", category: "Nature", imageUrl: "https://images.unsplash.com/photo-1542401886-65d6c61dece1?w=800", shortDescription: "Lunar landscapes and rock art." },
    { id: 5, name: "Timimoun", region: "Sahara", category: "Oasis", imageUrl: "https://images.unsplash.com/photo-1682687982501-1e5898cb8f4b?w=800", shortDescription: "The red oasis town." },
    { id: 6, name: "Ghardaïa", region: "Sahara", category: "Culture", imageUrl: "https://images.unsplash.com/photo-1590487508075-81d3945bd30d?w=800", shortDescription: "Unique M'zab valley architecture." },
  ];

  const filteredDestinations = allDestinations.filter((d: any) => {
    const matchesRegion = regionFilter === "all" || d.region.toLowerCase() === regionFilter.toLowerCase();
    const matchesSearch = d.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  return (
    <div className="pt-20 min-h-screen bg-background pb-20">
      {/* Header Banner */}
      <div className="bg-accent text-white py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/pattern-zellige.png)` }}></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="font-display text-5xl md:text-6xl mb-6">Explore Destinations</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">
            From the deep blue of the Mediterranean to the endless golden sands of the Sahara.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Filters */}
        <div className="bg-card p-4 md:p-6 rounded-2xl shadow-sm border border-border mb-12 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input 
              placeholder="Search destinations..." 
              className="pl-10 h-12 bg-muted/50 border-transparent rounded-xl"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="w-full md:w-64">
            <Select value={regionFilter} onValueChange={setRegionFilter}>
              <SelectTrigger className="h-12 bg-muted/50 border-transparent rounded-xl">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-muted-foreground" />
                  <SelectValue placeholder="All Regions" />
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Regions</SelectItem>
                <SelectItem value="coast">Mediterranean Coast</SelectItem>
                <SelectItem value="highlands">Highlands & Atlas</SelectItem>
                <SelectItem value="sahara">The Sahara</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="h-96 bg-muted rounded-3xl animate-pulse"></div>
            ))}
          </div>
        ) : filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((dest: any) => (
              <Link key={dest.id} href={`/destinations/${dest.id}`}>
                <div className="group rounded-3xl overflow-hidden bg-card shadow-md hover:shadow-xl transition-all h-full flex flex-col cursor-pointer border border-border/50 hover:border-primary/30">
                  <div className="relative h-64 overflow-hidden shrink-0">
                    <img 
                      src={dest.imageUrl} 
                      alt={dest.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-background/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase text-primary">
                      {dest.region}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>Algeria</span>
                    </div>
                    <h3 className="font-display text-2xl mb-3 group-hover:text-primary transition-colors">{dest.name}</h3>
                    <p className="text-muted-foreground mb-6 line-clamp-2 flex-1">{dest.shortDescription}</p>
                    <div className="text-primary font-medium flex items-center gap-2 mt-auto">
                      Explore Details <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-2xl font-display text-foreground mb-2">No destinations found</h3>
            <p className="text-muted-foreground">Try adjusting your filters or search query.</p>
            <Button variant="outline" className="mt-6" onClick={() => {setRegionFilter("all"); setSearchQuery("");}}>
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
