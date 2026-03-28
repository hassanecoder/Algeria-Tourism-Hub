import { SectionHeading } from "@/components/ui/section-heading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Info, Plane, Shield, Sun } from "lucide-react";

export default function PlanTrip() {
  return (
    <div className="pt-24 pb-20 bg-background min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Plan Your Trip" 
          subtitle="Essential Information"
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          <div className="bg-card p-6 rounded-2xl border border-border text-center shadow-sm">
            <Sun className="w-10 h-10 mx-auto text-secondary mb-4" />
            <h3 className="font-display text-xl mb-2">Best Time to Visit</h3>
            <p className="text-muted-foreground text-sm">Oct - April for Sahara. May - Sept for the coast.</p>
          </div>
          <div className="bg-card p-6 rounded-2xl border border-border text-center shadow-sm">
            <Plane className="w-10 h-10 mx-auto text-primary mb-4" />
            <h3 className="font-display text-xl mb-2">Visas</h3>
            <p className="text-muted-foreground text-sm">Most nationalities require a visa. E-visa launching soon.</p>
          </div>
        </div>

        <div className="bg-card rounded-3xl p-8 border border-border shadow-md">
          <h3 className="font-display text-2xl mb-6 flex items-center gap-3">
            <Info className="text-primary" /> Frequently Asked Questions
          </h3>
          
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-border">
              <AccordionTrigger className="text-lg hover:text-primary">Is Algeria safe for tourists?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                Yes, Algeria is generally safe for tourists. The northern coast and major cities are very secure. Travel to the deep south (Sahara) often requires a local guide or escort, which adds to both safety and the quality of the experience.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-border">
              <AccordionTrigger className="text-lg hover:text-primary">What is the currency?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                The currency is the Algerian Dinar (DZD). It is a cash-heavy economy. While luxury hotels accept credit cards, you will need cash for markets, smaller restaurants, and taxis. Exchange money at official banks or post offices.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-border">
              <AccordionTrigger className="text-lg hover:text-primary">What languages are spoken?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                Arabic and Tamazight are official languages. French is widely spoken and serves as the language of business and higher education. English is becoming more common among the youth, but knowing some basic French or Arabic is very helpful.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4" className="border-border">
              <AccordionTrigger className="text-lg hover:text-primary">What should I pack?</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                Modest, comfortable clothing is recommended. For the coast in summer, standard summer wear is fine. For the Sahara, bring layers (it gets cold at night), a good hat, sunglasses, and sturdy walking shoes.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
