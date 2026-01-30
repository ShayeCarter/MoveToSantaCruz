import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useMetaTags } from "@/hooks/use-meta-tags";
import { MapPin, Sun, Waves, Coffee, GraduationCap, ShoppingBag, TreePine } from "lucide-react";

export default function ScottsValley() {
  useMetaTags({
    title: "Living in Scotts Valley | Neighborhood Guide",
    description: "The gateway to the Santa Cruz Mountains. Top-rated schools, modern amenities, and an easy commute to Silicon Valley.",
    image: "/images/hero-home.jpg"
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-home.jpg" 
            alt="Scotts Valley" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 text-center text-white">
          <span className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4 inline-block">
            Mountain Living
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">Scotts Valley</h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow-md">
            The perfect balance of nature and convenience. Top schools, great weather, and an easy commute.
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
              <span className="text-sm text-muted-foreground">Sunny & Warm</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <TreePine className="h-8 w-8 text-secondary" />
              <span className="font-bold text-primary">Setting</span>
              <span className="text-sm text-muted-foreground">Redwoods & Hills</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="h-8 w-8 text-secondary" />
              <span className="font-bold text-primary">Commute</span>
              <span className="text-sm text-muted-foreground">Close to Hwy 17</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <GraduationCap className="h-8 w-8 text-secondary" />
              <span className="font-bold text-primary">Schools</span>
              <span className="text-sm text-muted-foreground">Top Rated</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            
            {/* Overview */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-primary mb-6">Family-Friendly & Commuter Ready</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Scotts Valley is a favorite for families and Silicon Valley commuters. Located just 6 miles inland from Santa Cruz, it offers a distinct microclimate that is significantly warmer and sunnier than the coast.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The town is known for its safety, cleanliness, and incredible schools. It has a more suburban feel than Santa Cruz, with modern shopping centers, parks, and wide streets, all nestled among the redwoods.
              </p>
            </div>

            {/* Local Gems */}
            <div>
              <h3 className="font-serif text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <ShoppingBag className="h-6 w-6 text-secondary" /> Local Favorites
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-accent/10 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Skypark</h4>
                  <p className="text-sm text-muted-foreground">
                    The heart of the community. A massive park with soccer fields, a dog park, skate park, and regular events like the 4th of July fireworks.
                  </p>
                </div>
                <div className="bg-accent/10 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Humble Sea Brewing (SV)</h4>
                  <p className="text-sm text-muted-foreground">
                    The popular brewery's mountain outpost. Great beer and food in a relaxed, family-friendly setting.
                  </p>
                </div>
                <div className="bg-accent/10 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Glenwood Open Space Preserve</h4>
                  <p className="text-sm text-muted-foreground">
                    Miles of hiking, biking, and equestrian trails through rolling grasslands and oak woodlands.
                  </p>
                </div>
                <div className="bg-accent/10 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">1440 Multiversity</h4>
                  <p className="text-sm text-muted-foreground">
                    A stunning campus for learning and wellness, offering community classes and events in the redwoods.
                  </p>
                </div>
              </div>
            </div>

            {/* Schools */}
            <div>
              <h3 className="font-serif text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-secondary" /> Education
              </h3>
              <p className="text-muted-foreground mb-6">
                The <strong>Scotts Valley Unified School District</strong> is a major draw for residents. It is consistently ranked as one of the top districts in the county and state.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-secondary/20 p-2 rounded-full mt-1">
                    <GraduationCap className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <strong className="block text-primary">Vine Hill Elementary</strong>
                    <span className="text-sm text-muted-foreground">A California Distinguished School known for its strong academic foundation.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-secondary/20 p-2 rounded-full mt-1">
                    <GraduationCap className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <strong className="block text-primary">Scotts Valley High School</strong>
                    <span className="text-sm text-muted-foreground">An International Baccalaureate (IB) World School with impressive college acceptance rates.</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Real Estate */}
            <div>
              <h3 className="font-serif text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <TreePine className="h-6 w-6 text-secondary" /> Real Estate Market
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Scotts Valley offers a mix of single-family homes, townhomes, and luxury estates. The market is competitive due to the school district and commute convenience.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You'll find more modern construction here compared to Santa Cruz, along with larger lots and planned communities.
              </p>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-accent/20 p-8 rounded-xl sticky top-24">
              <h3 className="font-serif text-xl font-bold text-primary mb-4">Scotts Valley Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-primary/10 pb-2">
                  <span className="text-sm text-muted-foreground">Avg. Home Price</span>
                  <span className="font-bold text-primary">$1.5M</span>
                </div>
                <div className="flex justify-between items-center border-b border-primary/10 pb-2">
                  <span className="text-sm text-muted-foreground">Avg. Days on Market</span>
                  <span className="font-bold text-primary">21 Days</span>
                </div>
                <div className="flex justify-between items-center border-b border-primary/10 pb-2">
                  <span className="text-sm text-muted-foreground">Price per SqFt</span>
                  <span className="font-bold text-primary">$900</span>
                </div>
                <p className="text-xs text-muted-foreground mt-4 italic">
                  *Data updated monthly. Contact me for the most recent specific report.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-primary/10">
                <h4 className="font-bold text-lg mb-2">Moving to Scotts Valley?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Get the inside scoop on schools and neighborhoods.
                </p>
                <Link href="/contact">
                  <Button className="w-full font-bold bg-primary text-white hover:bg-primary/90">
                    Contact Shaye
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
