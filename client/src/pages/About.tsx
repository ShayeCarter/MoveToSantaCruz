import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2, Home, BadgeDollarSign, Coffee } from "lucide-react";

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary/10">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Meet Shaye Carter</span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary mb-6">
              Your Local Guide to Santa Cruz Living
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Realtor® + Mortgage Loan Officer. I live in Live Oak, I work in Santa Cruz, and I absolutely love what I do.
            </p>
            <div className="flex gap-4">
              <Link href="/contact">
                <Button size="lg" className="font-bold bg-primary text-white hover:bg-primary/90">
                  Let's Grab Coffee
                </Button>
              </Link>
              <Link href="/search">
                <Button variant="outline" size="lg" className="font-bold border-primary text-primary hover:bg-primary/10">
                  Search Homes
                </Button>
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src="/images/shaye-meeting.jpg" 
                alt="Shaye Carter" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary rounded-full z-0 opacity-50" />
            <div className="absolute -top-6 -right-6 w-48 h-48 border-4 border-primary/10 rounded-full z-0" />
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20">
        <div className="container max-w-4xl mx-auto">
          <div className="prose prose-lg prose-headings:font-serif prose-headings:text-primary text-muted-foreground mx-auto">
            <h2 className="text-center text-3xl font-bold mb-12">Hey, I'm Shaye Carter!</h2>
            
            <p className="lead text-xl text-center mb-12">
              I live in Live Oak, I work in Santa Cruz, and I absolutely love what I do.
            </p>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-border/50 mb-12">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Coffee className="h-6 w-6 text-secondary" />
                Here's my story
              </h3>
              <p>
                I'm not just a Realtor. I'm also a Mortgage Loan Officer. That means when we work together, you get someone who understands both sides of your transaction. No back-and-forth between different people. No confusion. Just clear guidance from start to finish.
              </p>
            </div>

            <h3 className="text-2xl font-bold mb-6 text-center">What this means for you:</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
              <div className="flex gap-4 items-start">
                <div className="bg-secondary/20 p-2 rounded-full mt-1 shrink-0">
                  <Home className="h-5 w-5 text-primary" />
                </div>
                <p className="text-muted-foreground">I know this market inside and out (because I literally live here)</p>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-secondary/20 p-2 rounded-full mt-1 shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <p className="text-muted-foreground">I spot opportunities others miss in today's changing market</p>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-secondary/20 p-2 rounded-full mt-1 shrink-0">
                  <BadgeDollarSign className="h-5 w-5 text-primary" />
                </div>
                <p className="text-muted-foreground">I can help you understand financing options that actually make sense</p>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-secondary/20 p-2 rounded-full mt-1 shrink-0">
                  <BadgeDollarSign className="h-5 w-5 text-primary" />
                </div>
                <p className="text-muted-foreground">You'll save $2,000 at closing through our Revest partnership</p>
              </div>

              <div className="flex gap-4 items-start md:col-span-2">
                <div className="bg-secondary/20 p-2 rounded-full mt-1 shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <p className="text-muted-foreground">You get a trusted advisor, not just an agent chasing a commission</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg mb-8">
                Whether you're buying your first home, selling to upsize, or just exploring your options, I'm here to make the process clear, simple, and successful. Let's grab coffee and talk about your goals.
              </p>
              <Link href="/contact">
                <Button size="lg" className="font-bold bg-primary text-white hover:bg-primary/90">
                  Contact Shaye
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Trust Builders */}
      <section className="py-20 bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-5xl font-serif font-bold mb-2 text-secondary">Dual</div>
              <div className="text-xl font-light opacity-90">License Advantage</div>
              <p className="mt-4 text-sm opacity-75 max-w-xs mx-auto">Real Estate + Mortgage expertise in one person.</p>
            </div>
            <div className="p-6 border-t md:border-t-0 md:border-l border-white/20">
              <div className="text-5xl font-serif font-bold mb-2 text-secondary">$2k</div>
              <div className="text-xl font-light opacity-90">Closing Savings</div>
              <p className="mt-4 text-sm opacity-75 max-w-xs mx-auto">Exclusive benefit for my clients through Revest.</p>
            </div>
            <div className="p-6 border-t md:border-t-0 md:border-l border-white/20">
              <div className="text-5xl font-serif font-bold mb-2 text-secondary">100%</div>
              <div className="text-xl font-light opacity-90">Local Expert</div>
              <p className="mt-4 text-sm opacity-75 max-w-xs mx-auto">Live Oak resident focused on your success.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
