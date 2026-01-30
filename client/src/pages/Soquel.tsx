import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useMetaTags } from "@/hooks/use-meta-tags";
import { MapPin, Sun, Waves, Coffee, GraduationCap, ShoppingBag, TreePine } from "lucide-react";

export default function Soquel() {
  useMetaTags({
    title: "Living in Soquel | Neighborhood Guide",
    description: "Discover the charm of Soquel Village and the hills. A perfect blend of small-town feel, antique shops, and easy access to everything.",
    image: "/images/hero-home.jpg"
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-home.jpg" 
            alt="Soquel Village" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container relative z-10 text-center text-white">
          <span className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4 inline-block">
            Village Life
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">Soquel</h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto drop-shadow-md">
            Small-town charm with a sunny disposition. Antique shops, wineries, and rolling hills.
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
              <span className="text-sm text-muted-foreground">Warm & Sunny</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <TreePine className="h-8 w-8 text-secondary" />
              <span className="font-bold text-primary">Landscape</span>
              <span className="text-sm text-muted-foreground">Village to Hills</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <MapPin className="h-8 w-8 text-secondary" />
              <span className="font-bold text-primary">Location</span>
              <span className="text-sm text-muted-foreground">Inland Central</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Coffee className="h-8 w-8 text-secondary" />
              <span className="font-bold text-primary">Vibe</span>
              <span className="text-sm text-muted-foreground">Quaint & Friendly</span>
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
              <h2 className="font-serif text-3xl font-bold text-primary mb-6">Village Charm, City Convenience</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Soquel is a hidden treasure just inland from Capitola. It's centered around Soquel Village, a charming downtown area filled with antique stores, restaurants, and tasting rooms.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The weather here is noticeably warmer than the coast, often escaping the summer fog. As you move away from the village, the landscape turns into rolling hills and vineyards, offering larger lots and a more rural feel while still being minutes from the highway.
              </p>
            </div>

            {/* Local Gems */}
            <div>
              <h3 className="font-serif text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                <ShoppingBag className="h-6 w-6 text-secondary" /> Local Favorites
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-accent/10 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Bargetto Winery</h4>
                  <p className="text-sm text-muted-foreground">
                    A historic local winery with a beautiful creekside tasting room. A perfect spot for a relaxing afternoon.
                  </p>
                </div>
                <div className="bg-accent/10 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Beer Thirty Bottle Shop</h4>
                  <p className="text-sm text-muted-foreground">
                    A massive outdoor beer garden that's incredibly family and dog-friendly. A true local gathering spot.
                  </p>
                </div>
                <div className="bg-accent/10 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Home / Discretion Brewing</h4>
                  <p className="text-sm text-muted-foreground">
                    "Home" restaurant offers incredible farm-to-table dining, often sourcing from their own garden. Discretion Brewing next door is a local staple.
                  </p>
                </div>
                <div className="bg-accent/10 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2">Anna Jean Cummings Park</h4>
                  <p className="text-sm text-muted-foreground">
                    Known locally as "Blue Ball Park" for its iconic sculptures. Great playgrounds and sports fields.
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
                Soquel is served by the <strong>Soquel Union Elementary School District</strong> and <strong>Santa Cruz City Schools</strong> for high school.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-secondary/20 p-2 rounded-full mt-1">
                    <GraduationCap className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <strong className="block text-primary">Main Street Elementary</strong>
                    <span className="text-sm text-muted-foreground">A highly-rated school located right in the heart of the community.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-secondary/20 p-2 rounded-full mt-1">
                    <GraduationCap className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <strong className="block text-primary">Soquel High School</strong>
                    <span className="text-sm text-muted-foreground">Known for its strong agricultural program (FFA) and arts.</span>
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
                Soquel offers a variety of property types, from historic village homes to sprawling estates in the hills. It's a popular choice for those who want more land and privacy without sacrificing convenience.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The market here is steady, with many buyers attracted to the warmer weather and larger lot sizes compared to the coast.
              </p>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-accent/20 p-8 rounded-xl sticky top-24">
              <h3 className="font-serif text-xl font-bold text-primary mb-4">Soquel Market Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-primary/10 pb-2">
                  <span className="text-sm text-muted-foreground">Avg. Home Price</span>
                  <span className="font-bold text-primary">$1.3M</span>
                </div>
                <div className="flex justify-between items-center border-b border-primary/10 pb-2">
                  <span className="text-sm text-muted-foreground">Avg. Days on Market</span>
                  <span className="font-bold text-primary">28 Days</span>
                </div>
                <div className="flex justify-between items-center border-b border-primary/10 pb-2">
                  <span className="text-sm text-muted-foreground">Price per SqFt</span>
                  <span className="font-bold text-primary">$850</span>
                </div>
                <p className="text-xs text-muted-foreground mt-4 italic">
                  *Data updated monthly. Contact me for the most recent specific report.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-primary/10">
                <h4 className="font-bold text-lg mb-2">Interested in Soquel?</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Let's explore the village and the hills together.
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
