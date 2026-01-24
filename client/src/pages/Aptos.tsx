import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MapPin, Sun, Waves, Coffee, GraduationCap, ShoppingBag, TreePine, Utensils } from "lucide-react";

export default function Aptos() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/live-oak-neighborhood.jpg" 
            alt="Aptos Redwoods and Coast" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 text-center text-white">
          <span className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4 inline-block">
            Neighborhood Spotlight
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">Aptos</h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow-md">
            Where the redwoods meet the sea. A spacious, scenic retreat with a vibrant village heart.
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
              <span className="text-sm text-muted-foreground">Foggy Mornings, Sunny Days</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Waves className="h-8 w-8 text-secondary" />
              <span className="font-bold text-primary">Beaches</span>
              <span className="text-sm text-muted-foreground">Seacliff, Rio Del Mar</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="h-8 w-8 text-secondary" />
              <span className="font-bold text-primary">Location</span>
              <span className="text-sm text-muted-foreground">Mid-County</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <TreePine className="h-8 w-8 text-secondary" />
              <span className="font-bold text-primary">Vibe</span>
              <span className="text-sm text-muted-foreground">Forest & Beach</span>
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
              <h2 className="font-serif text-3xl font-bold text-primary mb-6">The Aptos Lifestyle</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Aptos offers a unique "best of both worlds" lifestyle. You can start your morning with a hike under towering redwoods in Nisene Marks State Park and end it with a bonfire at Rio Del Mar beach—all without leaving your zip code.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                It's slightly more spread out than Santa Cruz, giving you larger lots and a quieter, more residential feel. The new Aptos Village has transformed the area, bringing incredible dining and shopping to a walkable town center.
              </p>
            </div>

            {/* Local Gems */}
            <div>
              <h3 className="font-serif text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <ShoppingBag className="h-6 w-6 text-secondary" /> Local Favorites
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-accent/10 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Nisene Marks State Park</h4>
                  <p className="text-sm text-muted-foreground">
                    Over 10,000 acres of redwood forest with 30 miles of trails. It's a hiker's and mountain biker's paradise right in your backyard.
                  </p>
                </div>
                <div className="bg-accent/10 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Mentone</h4>
                  <p className="text-sm text-muted-foreground">
                    Located in the new Aptos Village, this spot by David Kinch serves up world-class pizza and cocktails in a vibrant, fun atmosphere.
                  </p>
                </div>
                <div className="bg-accent/10 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Seacliff State Beach</h4>
                  <p className="text-sm text-muted-foreground">
                    Famous for the concrete ship "SS Palo Alto," this is a favorite spot for fishing, walking the promenade, and family picnics.
                  </p>
                </div>
                <div className="bg-accent/10 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Cat & Cloud Coffee</h4>
                  <p className="text-sm text-muted-foreground">
                    The Aptos Village location is the perfect community hub. Great coffee, friendly vibes, and the perfect place to work or meet a friend.
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
                Aptos is part of the <strong>Pajaro Valley Unified School District</strong>, but operates with a strong local community feel.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-secondary/20 p-2 rounded-full mt-1">
                    <GraduationCap className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <strong className="block text-primary">Aptos High School</strong>
                    <span className="text-sm text-muted-foreground">Known for its strong academic programs and competitive athletics. Go Mariners!</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-secondary/20 p-2 rounded-full mt-1">
                    <GraduationCap className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <strong className="block text-primary">Aptos Junior High</strong>
                    <span className="text-sm text-muted-foreground">Located centrally, feeding directly into the high school with a focus on student development.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-secondary/20 p-2 rounded-full mt-1">
                    <GraduationCap className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <strong className="block text-primary">Elementary Options</strong>
                    <span className="text-sm text-muted-foreground">Includes Mar Vista, Rio Del Mar, and Valencia Elementary schools, all highly regarded by local parents.</span>
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
                Aptos real estate is diverse. You'll find <strong>Rio Del Mar</strong> offering beach cottages and luxury ocean-view estates. Head up into the <strong>Aptos Hills</strong> for acreage, privacy, and equestrian properties.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Seascape</strong> offers a resort-like feel with condos and golf course homes. Generally, you get a bit more land for your money in Aptos compared to the Westside of Santa Cruz.
              </p>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-accent/20 p-8 rounded-xl sticky top-24">
              <h3 className="font-serif text-xl font-bold text-primary mb-4">Aptos Market Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-primary/10 pb-2">
                  <span className="text-sm text-muted-foreground">Avg. Home Price</span>
                  <span className="font-bold text-primary">$1.4M</span>
                </div>
                <div className="flex justify-between items-center border-b border-primary/10 pb-2">
                  <span className="text-sm text-muted-foreground">Avg. Days on Market</span>
                  <span className="font-bold text-primary">22 Days</span>
                </div>
                <div className="flex justify-between items-center border-b border-primary/10 pb-2">
                  <span className="text-sm text-muted-foreground">Price per SqFt</span>
                  <span className="font-bold text-primary">$950</span>
                </div>
                <p className="text-xs text-muted-foreground mt-4 italic">
                  *Data updated monthly. Contact me for the most recent specific report.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-primary/10">
                <h4 className="font-bold text-lg mb-2">Explore Aptos Living</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Whether you want the beach life or the forest retreat, Aptos has it. Let's find your spot.
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
          <h2 className="font-serif text-3xl font-bold text-primary mb-8 text-center">Sights of Aptos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="group overflow-hidden rounded-lg shadow-md h-64">
              <img src="/images/live-oak-neighborhood.jpg" alt="Forest Trails" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="group overflow-hidden rounded-lg shadow-md h-64">
              <img src="/images/santa-cruz-lifestyle.jpg" alt="Rio Del Mar Beach" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="group overflow-hidden rounded-lg shadow-md h-64">
              <img src="/images/hero-home.jpg" alt="Aptos Village" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
