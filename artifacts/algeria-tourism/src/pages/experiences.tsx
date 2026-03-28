import { Link } from "wouter";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Map, Tag } from "lucide-react";

export default function Experiences() {
  const experiences = [
    { id: 1, title: "Sahara Camel Trek", category: "Adventure", duration: "3 Days", price: "From $300", imageUrl: "https://images.unsplash.com/photo-1550505187-8df7d9b93189?w=800" },
    { id: 2, title: "Roman Ruins Tour", category: "History", duration: "Full Day", price: "From $120", imageUrl: "https://images.unsplash.com/photo-1638612711652-32aeb41d33bb?w=800" },
    { id: 3, title: "Casbah Food Walk", category: "Culinary", duration: "4 Hours", price: "From $60", imageUrl: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?w=800" },
    { id: 4, title: "Oran Coastal Drive", category: "Leisure", duration: "Full Day", price: "From $150", imageUrl: "https://images.unsplash.com/photo-1601614066060-64ebbf7eb3b7?w=800" },
  ];

  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Curated Experiences" 
          subtitle="Do Something Unforgettable"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {experiences.map(exp => (
            <Card key={exp.id} className="overflow-hidden border-border/50 shadow-md hover:shadow-xl transition-all duration-300 group">
              <div className="flex flex-col sm:flex-row h-full">
                <div className="sm:w-2/5 relative overflow-hidden h-64 sm:h-auto">
                  <img 
                    src={exp.imageUrl} 
                    alt={exp.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-primary">
                    {exp.category}
                  </div>
                </div>
                <CardContent className="sm:w-3/5 p-6 sm:p-8 flex flex-col">
                  <h3 className="text-2xl font-display text-foreground mb-4">{exp.title}</h3>
                  <div className="space-y-3 mb-6 flex-1">
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Clock className="w-4 h-4 mr-3 text-secondary" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center text-muted-foreground text-sm">
                      <Tag className="w-4 h-4 mr-3 text-secondary" />
                      {exp.price}
                    </div>
                  </div>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white rounded-xl">
                      Book Experience
                    </Button>
                  </Link>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
