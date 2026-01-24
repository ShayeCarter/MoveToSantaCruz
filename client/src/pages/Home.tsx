import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Home as HomeIcon, TrendingUp, Users, MapPin, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-home.jpg" 
            alt="Santa Cruz Coastline" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="container relative z-10 text-center text-white max-w-4xl px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Live the Santa Cruz Life
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light drop-shadow-md max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Your local guide to real estate and mortgage in Live Oak and beyond. Smart advice, coastal vibes, and zero stress.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <Link href="/neighborhoods">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto font-serif">
                Explore Neighborhoods
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/20 text-lg px-8 py-6 h-auto font-serif">
                Let's Chat
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction / Personal Brand */}
      <section className="py-20 bg-background">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary/30 rounded-full -z-10" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/50 rounded-full -z-10" />
            <img 
              src="/images/shaye-meeting.jpg" 
              alt="Shaye Carter meeting with clients" 
              className="rounded-lg shadow-xl w-full object-cover aspect-[4/3]"
            />
          </div>
          <div className="space-y-6">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm">Meet Shaye</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary">
              Real Estate + Mortgage.<br/>Simplified.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Hi, I'm Shaye. I'm not just your agent; I'm your neighbor in Live Oak. 
              I believe buying or selling a home shouldn't feel like a transaction—it should feel like a fresh start.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With my dual license in real estate and mortgage, I help you see the full picture before you sign a single paper. 
              My philosophy is simple: <strong>"Know Before You Owe."</strong>
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-secondary mt-1" />
                <div>
                  <h4 className="font-bold">Dual License Advantage</h4>
                  <p className="text-sm text-muted-foreground">Seamless coordination between finding a home and funding it.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-6 w-6 text-secondary mt-1" />
                <div>
                  <h4 className="font-bold">$2,000 Closing Savings</h4>
                  <p className="text-sm text-muted-foreground">Exclusive savings through my Revest partnership.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link href="/about">
                <Button variant="link" className="text-primary p-0 h-auto font-bold text-lg group">
                  Read my full story <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhood Spotlight */}
      <section className="py-20 bg-secondary/10">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm">Local Expertise</span>
            <h2 className="font-serif text-4xl font-bold text-primary mt-2 mb-4">Live Like a Local</h2>
            <p className="text-muted-foreground text-lg">
              Santa Cruz is more than just the Boardwalk. Discover the hidden gems, quiet streets, and vibrant communities that make this place home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Live Oak Card */}
            <Link href="/live-oak">
              <div className="group cursor-pointer relative overflow-hidden rounded-xl shadow-lg aspect-[3/4]">
                <img 
                  src="/images/live-oak-neighborhood.jpg" 
                  alt="Live Oak" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="font-serif text-2xl font-bold mb-2">Live Oak</h3>
                  <p className="text-sm text-white/90 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    The heart of Santa Cruz. Beaches, community, and the best weather in town.
                  </p>
                  <span className="inline-flex items-center text-sm font-bold border-b border-white pb-1">
                    Explore Guide <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Pleasure Point Card */}
            <Link href="/neighborhoods">
              <div className="group cursor-pointer relative overflow-hidden rounded-xl shadow-lg aspect-[3/4]">
                <img 
                  src="/images/santa-cruz-lifestyle.jpg" 
                  alt="Pleasure Point" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="font-serif text-2xl font-bold mb-2">Pleasure Point</h3>
                  <p className="text-sm text-white/90 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    Surf culture meets luxury living. Walkable, vibrant, and iconic.
                  </p>
                  <span className="inline-flex items-center text-sm font-bold border-b border-white pb-1">
                    Explore Guide <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>

            {/* Westside Card */}
            <Link href="/neighborhoods">
              <div className="group cursor-pointer relative overflow-hidden rounded-xl shadow-lg aspect-[3/4]">
                <img 
                  src="/images/hero-home.jpg" 
                  alt="Westside" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="font-serif text-2xl font-bold mb-2">Westside</h3>
                  <p className="text-sm text-white/90 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                    Dramatic cliffs, UCSC vibes, and incredible ocean views.
                  </p>
                  <span className="inline-flex items-center text-sm font-bold border-b border-white pb-1">
                    Explore Guide <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Services / Value Prop */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-none shadow-none bg-accent/20 hover:bg-accent/30 transition-colors">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-primary">
                  <HomeIcon className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">Buying a Home</h3>
                <p className="text-muted-foreground mb-6">
                  From first-time buyers to seasoned investors, I'll help you find the perfect spot in Santa Cruz without the stress.
                </p>
                <Link href="/buyers">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    Buyer's Guide
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-none shadow-none bg-accent/20 hover:bg-accent/30 transition-colors">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-primary">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">Selling Your Home</h3>
                <p className="text-muted-foreground mb-6">
                  Strategic marketing, accurate valuation, and staging advice to get you top dollar in today's market.
                </p>
                <Link href="/sellers">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    Seller's Guide
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-none shadow-none bg-accent/20 hover:bg-accent/30 transition-colors">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm text-primary">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3">Mortgage & Financing</h3>
                <p className="text-muted-foreground mb-6">
                  Understand your options before you shop. I'll walk you through rates, loans, and monthly payments clearly.
                </p>
                <Link href="/contact">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                    Get Pre-Approved
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary text-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Kind Words from Neighbors</h2>
            <div className="w-24 h-1 bg-secondary mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <div className="flex gap-1 text-secondary mb-4">
                {"★★★★★"}
              </div>
              <p className="text-lg italic mb-6 font-light">
                "Shaye made the impossible happen. We were first-time buyers in a crazy market, and she guided us with patience and incredible strategy. We love our Live Oak home!"
              </p>
              <div className="font-bold font-serif">— Sarah & Mike T.</div>
            </div>

            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <div className="flex gap-1 text-secondary mb-4">
                {"★★★★★"}
              </div>
              <p className="text-lg italic mb-6 font-light">
                "Having a dual agent for real estate and mortgage was a game changer. The process was seamless, and we saved money at closing. Highly recommend Shaye!"
              </p>
              <div className="font-bold font-serif">— David L.</div>
            </div>

            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm">
              <div className="flex gap-1 text-secondary mb-4">
                {"★★★★★"}
              </div>
              <p className="text-lg italic mb-6 font-light">
                "Shaye knows Santa Cruz inside and out. She steered us away from a money pit and found us a gem in a neighborhood we hadn't even considered."
              </p>
              <div className="font-bold font-serif">— The Garcia Family</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-accent/30 relative overflow-hidden">
        <div className="container relative z-10 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Ready to Make Your Move?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Whether you're buying, selling, or just curious about the market, let's grab a coffee and chat about your goals.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90 text-lg px-10 py-6 h-auto shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
