import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { MapPin, Sun, Waves, Coffee, GraduationCap, ShoppingBag, TreePine } from "lucide-react";

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
          <div className="absolute inset-0 bg-black/40" />
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
              <span className="text-sm text-muted-foreground">Twin Lakes, Sunny Cove</span>
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
          <div className="lg:col-span-2 space-y-12">
            
            {/* Overview */}
            <div>
              <h2 className="font-serif text-3xl font-bold text-primary mb-6">Why I Love Live Oak</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Live Oak is often overlooked by visitors who flock to the Westside or Downtown, but for locals, it's the sweet spot. It sits perfectly between Santa Cruz and Capitola, giving you easy access to everything while maintaining a distinct, quieter community feel.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This is where I chose to live with my family because it offers the best of both worlds: walkable neighborhoods, incredible beaches like Twin Lakes and Sunny Cove, and a growing scene of local coffee shops, breweries, and markets. It feels less like a tourist destination and more like a real neighborhood.
              </p>
            </div>

            {/* Local Gems */}
            <div>
              <h3 className="font-serif text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <ShoppingBag className="h-6 w-6 text-secondary" /> Local Hotspots
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-accent/10 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Sunday Farmers Market</h4>
                  <p className="text-sm text-muted-foreground">
                    Held at the East Cliff Village Shopping Center, this is one of the best markets in the county. Grab fresh organic produce, local honey, and incredible hot food every Sunday morning.
                  </p>
                </div>
                <div className="bg-accent/10 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Simpkins Family Swim Center</h4>
                  <p className="text-sm text-muted-foreground">
                    A true community hub with lap pools, a warm water therapy pool, and a splash zone for kids. It's adjacent to Schwan Lake Park for a perfect active day out.
                  </p>
                </div>
                <div className="bg-accent/10 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Sunny Cove Beach</h4>
                  <p className="text-sm text-muted-foreground">
                    A local favorite that lives up to its name. It's tucked away and feels private, perfect for boogie boarding or just soaking up the sun away from the Boardwalk crowds.
                  </p>
                </div>
                <div className="bg-accent/10 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">El Rosal Bakery</h4>
                  <p className="text-sm text-muted-foreground">
                    A hidden gem for authentic Mexican pastries. Their conchas are legendary, and it's the perfect spot to grab a morning treat before heading to the beach.
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
                Live Oak is served by the <strong>Live Oak School District</strong> (K-8) and the <strong>Santa Cruz City High School District</strong> (9-12). The district is known for its strong community involvement and diverse programs.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-secondary/20 p-2 rounded-full mt-1">
                    <GraduationCap className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <strong className="block text-primary">Live Oak Elementary</strong>
                    <span className="text-sm text-muted-foreground">A central hub for younger students with a focus on academic and social growth.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-secondary/20 p-2 rounded-full mt-1">
                    <GraduationCap className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <strong className="block text-primary">Del Mar Elementary</strong>
                    <span className="text-sm text-muted-foreground">Known for its dedicated staff and active parent community.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-secondary/20 p-2 rounded-full mt-1">
                    <GraduationCap className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <strong className="block text-primary">Shoreline Middle School</strong>
                    <span className="text-sm text-muted-foreground">Offers robust electives and prepares students for the transition to high school.</span>
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
                Live Oak offers a diverse mix of housing. You'll find everything from charming 1940s beach cottages and mid-century ranch homes to stunning modern new construction. 
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Prices can be more accessible here compared to the Westside or Pleasure Point, offering great value for the location. It's a high-demand area for families and professionals who want to be close to the water without the "tourist tax" of other neighborhoods.
              </p>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-accent/20 p-8 rounded-xl sticky top-24">
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

              <div className="mt-8 pt-8 border-t border-primary/10">
                <h4 className="font-bold text-lg mb-2">Interested in Live Oak?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  I often know about upcoming listings before they hit the market.
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
          <h2 className="font-serif text-3xl font-bold text-primary mb-8 text-center">Sights of Live Oak</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="group overflow-hidden rounded-lg shadow-md h-64">
              <img src="/images/live-oak-neighborhood.jpg" alt="Live Oak Street" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="group overflow-hidden rounded-lg shadow-md h-64">
              <img src="/images/santa-cruz-lifestyle.jpg" alt="Beach Life" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
            <div className="group overflow-hidden rounded-lg shadow-md h-64">
              <img src="/images/hero-home.jpg" alt="Coastline" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
