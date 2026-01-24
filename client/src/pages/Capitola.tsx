import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MapPin, Sun, Waves, Coffee, GraduationCap, ShoppingBag, TreePine, Utensils } from "lucide-react";

export default function Capitola() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/santa-cruz-lifestyle.jpg" 
            alt="Capitola Village" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 text-center text-white">
          <span className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4 inline-block">
            Neighborhood Spotlight
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">Capitola</h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow-md">
            California's oldest seaside resort town. Colorful, charming, and endlessly walkable.
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
              <span className="text-sm text-muted-foreground">Warm & Sheltered</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Waves className="h-8 w-8 text-secondary" />
              <span className="font-bold text-primary">Beaches</span>
              <span className="text-sm text-muted-foreground">Capitola Beach, Hooper</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="h-8 w-8 text-secondary" />
              <span className="font-bold text-primary">Location</span>
              <span className="text-sm text-muted-foreground">South of Live Oak</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Coffee className="h-8 w-8 text-secondary" />
              <span className="font-bold text-primary">Vibe</span>
              <span className="text-sm text-muted-foreground">Village Charm</span>
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
              <h2 className="font-serif text-3xl font-bold text-primary mb-6">The Capitola Charm</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Capitola is postcard-perfect. Known for its iconic colorful Venetian cottages and the historic wharf, it feels like a permanent vacation. But beyond the village, it's a thriving community with diverse neighborhoods like the Jewel Box and Depot Hill.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                It's incredibly walkable, with a slower pace than downtown Santa Cruz. Whether you're grabbing a slice at Pizza My Heart, listening to live music at the Esplanade Park, or watching the sunset from the Shadowbrook cable car, Capitola oozes small-town character.
              </p>
            </div>

            {/* Local Gems */}
            <div>
              <h3 className="font-serif text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <ShoppingBag className="h-6 w-6 text-secondary" /> Local Favorites
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-accent/10 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Shadowbrook Restaurant</h4>
                  <p className="text-sm text-muted-foreground">
                    An absolute institution. Ride the vintage cable car down the hillside to this romantic riverside spot. It's not just dinner; it's an experience.
                  </p>
                </div>
                <div className="bg-accent/10 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Gayle's Bakery</h4>
                  <p className="text-sm text-muted-foreground">
                    If you live here, you know Gayle's. From the Blue Plate Specials to the endless pastry case, it's the town's communal kitchen.
                  </p>
                </div>
                <div className="bg-accent/10 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Capitola Village</h4>
                  <p className="text-sm text-muted-foreground">
                    The heart of the town. Boutique shopping, wine tasting, and dining right on the sand. In the summer, the free twilight concerts are a must.
                  </p>
                </div>
                <div className="bg-accent/10 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">New Brighton State Beach</h4>
                  <p className="text-sm text-muted-foreground">
                    Just up the hill, this expansive beach and campground offers stunning views of the bay and is often less crowded than the main village beach.
                  </p>
                </div>
              </div>
            </div>

            {/* Schools */}
            <div>
              <h3 className="font-serif text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-secondary" /> Schools & Education
              </h3>
              <p className="text-muted-foreground mb-6">
                Capitola is primarily served by the <strong>Soquel Union Elementary School District</strong> (K-8) and the <strong>Santa Cruz City High School District</strong> (9-12).
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-secondary/20 p-2 rounded-full mt-1">
                    <GraduationCap className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <strong className="block text-primary">New Brighton Middle School</strong>
                    <span className="text-sm text-muted-foreground">Located right in Capitola, known for its performing arts programs and proximity to the beach.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-secondary/20 p-2 rounded-full mt-1">
                    <GraduationCap className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <strong className="block text-primary">Soquel High School</strong>
                    <span className="text-sm text-muted-foreground">The designated high school for most Capitola residents, offering strong athletics and AP courses.</span>
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
                Capitola real estate is highly desirable and varied. You have the <strong>Jewel Box</strong> neighborhood, known for its flower-named streets and walkable flat lots. Then there's <strong>Depot Hill</strong>, offering luxury homes on the bluff with sweeping ocean views.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Inventory here is tight because people tend to stay. It's a premium market, but the lifestyle—walking to dinner, the beach, and the grocery store—is unmatched.
              </p>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-accent/20 p-8 rounded-xl sticky top-24">
              <h3 className="font-serif text-xl font-bold text-primary mb-4">Capitola Market Stats</h3>
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
                <h4 className="font-bold text-lg mb-2">Dreaming of Capitola?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Homes in the Jewel Box and Depot Hill go fast. Let's get you prepared.
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

      {/* Gallery / Visuals */}
      <section className="py-20 bg-secondary/10">
        <div className="container">
          <h2 className="font-serif text-3xl font-bold text-primary mb-8 text-center">Sights of Capitola</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="group overflow-hidden rounded-lg shadow-md h-64">
              <img src="/images/santa-cruz-lifestyle.jpg" alt="Capitola Village" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="group overflow-hidden rounded-lg shadow-md h-64">
              <img src="/images/hero-home.jpg" alt="Wharf View" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="group overflow-hidden rounded-lg shadow-md h-64">
              <img src="/images/live-oak-neighborhood.jpg" alt="Neighborhood Streets" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
