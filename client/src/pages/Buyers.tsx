import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2, Search, FileText, Key } from "lucide-react";

export default function Buyers() {
  return (
    <Layout>
      <section className="bg-primary text-white py-20">
        <div className="container text-center">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm">Buyer Resources</span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mt-4 mb-6">Find Your Place in the Sun</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Buying a home in Santa Cruz is competitive, but with the right strategy and guidance, it's absolutely achievable.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="font-serif text-3xl font-bold text-primary">The "Know Before You Owe" Approach</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Most buyers start by looking at houses. I start by looking at your goals. My dual license allows me to help you understand your full buying power before we ever step foot in an open house.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              This means no surprises, no heartbreak over homes you can't finance, and offers that are written to win because they are backed by solid lending confidence.
            </p>
            
            <div className="bg-accent/20 p-6 rounded-xl">
              <h3 className="font-bold text-xl mb-4">Why Work With Me?</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                  <span><strong>Local Knowledge:</strong> I know which streets have the best sun, the least traffic, and the best community vibes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                  <span><strong>Off-Market Access:</strong> I network extensively to find opportunities before they hit Zillow.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-1" />
                  <span><strong>Strategic Negotiation:</strong> I fight for your price and your terms, backed by data.</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-secondary/10 p-8 rounded-xl border border-secondary/20">
            <h3 className="font-serif text-2xl font-bold text-primary mb-6 text-center">The Buying Process</h3>
            <div className="space-y-6 relative">
              {/* Vertical Line */}
              <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-primary/20" />
              
              <div className="relative pl-12">
                <div className="absolute left-0 top-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <h4 className="font-bold text-lg">Consultation & Strategy</h4>
                <p className="text-sm text-muted-foreground">We meet to discuss your needs, budget, and timeline. We'll also get your pre-approval sorted.</p>
              </div>
              
              <div className="relative pl-12">
                <div className="absolute left-0 top-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <h4 className="font-bold text-lg">The Search</h4>
                <p className="text-sm text-muted-foreground">I set you up with a custom search portal and we start touring homes that match your criteria.</p>
              </div>
              
              <div className="relative pl-12">
                <div className="absolute left-0 top-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <h4 className="font-bold text-lg">Making an Offer</h4>
                <p className="text-sm text-muted-foreground">We analyze the comps and write a competitive offer. I negotiate on your behalf to get it accepted.</p>
              </div>
              
              <div className="relative pl-12">
                <div className="absolute left-0 top-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                <h4 className="font-bold text-lg">Escrow & Closing</h4>
                <p className="text-sm text-muted-foreground">I guide you through inspections, disclosures, and final loan approval until you get the keys.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-accent/30 text-center">
        <div className="container max-w-3xl">
          <h2 className="font-serif text-3xl font-bold text-primary mb-6">Start Your Search</h2>
          <p className="text-muted-foreground mb-8">
            Ready to see what's out there? Browse active listings in Santa Cruz County right now.
          </p>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <p className="text-sm text-muted-foreground mb-4">
              [Lofty CRM Search Integration Placeholder]
              <br/>
              This area will be replaced with your Lofty embed code to show live property listings.
            </p>
            <Button size="lg" className="w-full md:w-auto">
              Search Homes
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
