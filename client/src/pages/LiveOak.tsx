import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MapPin, Sun, Waves, Coffee } from "lucide-react";

export default function LiveOak() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/live-oak-neighborhood.jpg" 
            alt="Live Oak Neighborhood" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="container relative z-10 text-center text-white">
          <span className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4 inline-block">
            Neighborhood Spotlight
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">Live Oak</h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow-md">
            The hidden gem of Santa Cruz. Beaches, community, and the perfect central location.
          </p>
        </div>
      </section>

      {/* Intro Stats */}
      <section className="py-12 bg-white border-b border-border/50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center gap-2">
              <Sun className="h-8 w-8 text-secondary" />
              <span className="font-bold text-primary">Weather</span>
              <span className="text-sm text-muted-foreground">Sunny & Mild</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Waves className="h-8 w-8 text-secondary" />
              <span className="font-bold text-primary">Beaches</span>
              <span className="text-sm text-muted-foreground">Twin Lakes, Blacks</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="h-8 w-8 text-secondary" />
              <span className="font-bold text-primary">Location</span>
              <span className="text-sm text-muted-foreground">Central Santa Cruz</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Coffee className="h-8 w-8 text-secondary" />
              <span className="font-bold text-primary">Vibe</span>
              <span className="text-sm text-muted-foreground">Relaxed & Local</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="font-serif text-3xl font-bold text-primary mb-4">Why I Love Live Oak</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Live Oak is often overlooked by visitors who flock to the Westside or Downtown, but for locals, it's the sweet spot. It sits perfectly between Santa Cruz and Capitola, giving you easy access to everything while maintaining a distinct, quieter community feel.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This is where I chose to live with my family because it offers the best of both worlds: walkable neighborhoods, incredible beaches like Twin Lakes and Sunny Cove, and a growing scene of local coffee shops, breweries, and markets.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-primary mb-4">The Lifestyle</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Life here revolves around the outdoors. You'll see neighbors walking their dogs to the beach in the morning, families biking to the Sunday Farmers Market, and surfers catching waves at the Hook or Pleasure Point (which borders Live Oak).
              </p>
              <ul className="space-y-3 mt-4">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <strong>Simpkins Family Swim Center:</strong> A community hub for fitness and fun.
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <strong>Sunday Farmers Market:</strong> One of the best in the county for local produce.
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <strong>Schwan Lake Park:</strong> Beautiful trails for walking and bird watching.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-primary mb-4">Real Estate Market</h3>
              <p className="text-muted-foreground leading-relaxed">
                Live Oak offers a diverse mix of housing. You'll find everything from charming 1940s beach cottages and mid-century ranch homes to stunning modern new construction. Prices can be more accessible here compared to the Westside or Pleasure Point, offering great value for the location.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-accent/20 p-8 rounded-xl">
              <h3 className="font-serif text-xl font-bold text-primary mb-4">Live Oak Market Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-primary/10 pb-2">
                  <span className="text-sm text-muted-foreground">Avg. Home Price</span>
                  <span className="font-bold text-primary">$1.4M</span>
                </div>
                <div className="flex justify-between items-center border-b border-primary/10 pb-2">
                  <span className="text-sm text-muted-foreground">Avg. Days on Market</span>
                  <span className="font-bold text-primary">24 Days</span>
                </div>
                <div className="flex justify-between items-center border-b border-primary/10 pb-2">
                  <span className="text-sm text-muted-foreground">Price per SqFt</span>
                  <span className="font-bold text-primary">$950</span>
                </div>
                <p className="text-xs text-muted-foreground mt-4 italic">
                  *Data updated monthly. Contact me for the most recent specific report.
                </p>
              </div>
            </div>

            <div className="bg-primary text-white p-8 rounded-xl text-center">
              <h3 className="font-serif text-xl font-bold mb-4">Interested in Live Oak?</h3>
              <p className="text-white/80 mb-6 text-sm">
                I often know about upcoming listings before they hit the market. Let's get you on my list.
              </p>
              <Link href="/contact">
                <Button variant="secondary" className="w-full font-bold">
                  Contact Shaye
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery / Visuals */}
      <section className="py-20 bg-secondary/10">
        <div className="container">
          <h2 className="font-serif text-3xl font-bold text-primary mb-8 text-center">Sights of Live Oak</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img src="/images/live-oak-neighborhood.jpg" alt="Live Oak Street" className="rounded-lg shadow-md h-64 w-full object-cover" />
            <img src="/images/santa-cruz-lifestyle.jpg" alt="Beach Life" className="rounded-lg shadow-md h-64 w-full object-cover" />
            <img src="/images/hero-home.jpg" alt="Coastline" className="rounded-lg shadow-md h-64 w-full object-cover" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
