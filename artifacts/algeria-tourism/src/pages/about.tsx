import { SectionHeading } from "@/components/ui/section-heading";

export default function About() {
  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <SectionHeading 
              title="A Land of Contrasts" 
              subtitle="About Algeria"
            />
            <div className="prose prose-lg text-muted-foreground">
              <p className="text-xl font-medium text-foreground mb-6">
                Algeria is the largest country in Africa, offering an unparalleled diversity of landscapes, history, and culture.
              </p>
              <p>
                From the bustling, white-washed streets of Algiers overlooking the blue Mediterranean, to the snow-capped peaks of the Atlas Mountains, down to the seemingly infinite golden dunes of the grand Sahara, Algeria is a continent within a country.
              </p>
              <p>
                Its history is written in its ruins and architecture: ancient Numidian kingdoms, well-preserved Roman cities like Djemila and Timgad, the labyrinthine Ottoman-era Casbah, and French colonial boulevards.
              </p>
              <p>
                But the true warmth of Algeria lies in its people. Known for their legendary hospitality, Algerians welcome visitors with open arms, sweet mint tea, and a rich culinary tradition that blends Berber, Arab, Mediterranean, and African influences.
              </p>
            </div>
          </div>

          <div className="relative">
            {/* Using the AI generated image for culture */}
            <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src={`${import.meta.env.BASE_URL}images/about-culture.png`} 
                alt="Algerian Culture and Tea" 
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative background element */}
            <div className="absolute -top-10 -right-10 w-full h-full border-2 border-secondary rounded-3xl z-0 hidden lg:block"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl z-0"></div>
          </div>

        </div>
      </div>
    </div>
  );
}
