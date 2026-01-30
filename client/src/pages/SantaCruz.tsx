import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useMetaTags } from "@/hooks/use-meta-tags";
import { MapPin, Sun, Waves, Coffee, GraduationCap, ShoppingBag, TreePine } from "lucide-react";

export default function SantaCruz() {
  useMetaTags({
    title: "Living in Santa Cruz | Neighborhood Guide",
    description: "Explore the vibrant lifestyle of Santa Cruz proper. From the Westside to Downtown, discover the best neighborhoods, schools, and local hotspots.",
    image: "/images/hero-home.jpg"
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-home.jpg" 
            alt="Santa Cruz Coastline" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 text-center text-white">
          <span className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4 inline-block">
            City Spotlight
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">Santa Cruz</h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow-md">
            Where the redwoods meet the sea. A vibrant mix of surf culture, university life, and historic charm.
          </p>
        </div>
      </section>

      {/* Intro Stats */}
      <section className="py-12 bg-white border-b border-border/50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center gap-2">
              <Sun className="h-8 w-8 text-secondary" />
              <span className="font-bold text-primary">Vibe</span>
              <span className="text-sm text-muted-foreground">Eclectic & Active</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Waves className="h-8 w-8 text-secondary" />
              <span className="font-bold text-primary">Surfing</span>
              <span className="text-sm text-muted-foreground">World-Class Breaks</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="h-8 w-8 text-secondary" />
              <span className="font-bold text-primary">Downtown</span>
              <span className="text-sm text-muted-foreground">Walkable & Lively</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Coffee className="h-8 w-8 text-secondary" />
              <span className="font-bold text-primary">Culture</span>
              <span className="text-sm text-muted-foreground">Arts & Music</span>
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
              <h2 className="font-serif text-3xl font-bold text-primary mb-6">The Heart of the Coast</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Santa Cruz proper is the cultural and economic hub of the county. It's divided into distinct areas: the Westside with its dramatic cliffs and university influence, the Eastside with its sunny avenues, and the vibrant Downtown corridor.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Living here means you're never far from the action. Whether it's catching a show at the Catalyst, grabbing coffee on Pacific Avenue, or surfing at Steamer Lane, the lifestyle is active, outdoor-focused, and undeniably cool.
              </p>
            </div>

            {/* Local Gems */}
            <div>
              <h3 className="font-serif text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <ShoppingBag className="h-6 w-6 text-secondary" /> Local Favorites
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-accent/10 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">West Cliff Drive</h4>
                  <p className="text-sm text-muted-foreground">
                    The iconic 3-mile walking path along the ocean. Perfect for sunset walks, watching surfers, and spotting whales.
                  </p>
                </div>
                <div className="bg-accent/10 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Abbott Square Market</h4>
                  <p className="text-sm text-muted-foreground">
                    A vibrant community plaza downtown with food vendors, bars, and live music. The perfect spot for Friday night dinner.
                  </p>
                </div>
                <div className="bg-accent/10 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Verve Coffee Roasters</h4>
                  <p className="text-sm text-muted-foreground">
                    Born in Santa Cruz, Verve is a local institution. Their Pacific Ave or 41st Ave locations are daily rituals for many locals.
                  </p>
                </div>
                <div className="bg-accent/10 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Natural Bridges State Beach</h4>
                  <p className="text-sm text-muted-foreground">
                    Famous for its natural rock arch and monarch butterfly migration. A stunning spot for tide pooling and picnics.
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
                Santa Cruz is home to the prestigious <strong>University of California, Santa Cruz (UCSC)</strong>, which brings a vibrant academic energy to the town. The local public schools are highly rated and offer diverse programs.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-secondary/20 p-2 rounded-full mt-1">
                    <GraduationCap className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <strong className="block text-primary">Westlake Elementary</strong>
                    <span className="text-sm text-muted-foreground">A highly sought-after historic school on the Westside.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-secondary/20 p-2 rounded-full mt-1">
                    <GraduationCap className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <strong className="block text-primary">Santa Cruz High School</strong>
                    <span className="text-sm text-muted-foreground">Known for its strong academics, arts programs, and central location.</span>
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
                Santa Cruz real estate is diverse and competitive. The Westside commands premium prices for ocean views and proximity to UCSC. The Eastside offers a sunnier climate and a more relaxed, neighborhood feel.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Inventory can be tight, especially for historic homes and properties with ocean views. Working with a local expert is crucial to navigating this fast-moving market.
              </p>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-accent/20 p-8 rounded-xl sticky top-24">
              <h3 className="font-serif text-xl font-bold text-primary mb-4">Santa Cruz Market Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-primary/10 pb-2">
                  <span className="text-sm text-muted-foreground">Avg. Home Price</span>
                  <span className="font-bold text-primary">$1.6M</span>
                </div>
                <div className="flex justify-between items-center border-b border-primary/10 pb-2">
                  <span className="text-sm text-muted-foreground">Avg. Days on Market</span>
                  <span className="font-bold text-primary">18 Days</span>
                </div>
                <div className="flex justify-between items-center border-b border-primary/10 pb-2">
                  <span className="text-sm text-muted-foreground">Price per SqFt</span>
                  <span className="font-bold text-primary">$1,100</span>
                </div>
                <p className="text-xs text-muted-foreground mt-4 italic">
                  *Data updated monthly. Contact me for the most recent specific report.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-primary/10">
                <h4 className="font-bold text-lg mb-2">Looking in Santa Cruz?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Let's find your perfect spot, from the Westside to the Yacht Harbor.
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
