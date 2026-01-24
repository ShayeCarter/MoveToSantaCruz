import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { BarChart3, Camera, PenTool, Megaphone } from "lucide-react";

export default function Sellers() {
  return (
    <Layout>
      <section className="bg-primary text-white py-20">
        <div className="container text-center">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm">Seller Resources</span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mt-4 mb-6">Sell Smart, Sell for More</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Strategic marketing and expert negotiation to maximize your return in the Santa Cruz market.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="font-serif text-3xl font-bold text-primary mb-6">More Than Just a "For Sale" Sign</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Selling a home in Santa Cruz requires more than just listing it on the MLS. It requires a comprehensive strategy that highlights the unique lifestyle your home offers.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I use professional storytelling, high-end visuals, and targeted digital marketing to put your home in front of the right buyers—whether they are locals looking to upgrade or tech workers moving from Silicon Valley.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/kitchen-interior.jpg" 
                alt="Staged Home Interior" 
                className="rounded-xl shadow-xl w-full object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg max-w-xs hidden md:block">
                <p className="font-serif text-xl font-bold text-primary">"Shaye got us $50k over asking in one weekend!"</p>
                <p className="text-sm text-muted-foreground mt-2">— Recent Seller Review</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-accent/20 p-6 rounded-xl text-center hover:bg-accent/30 transition-colors">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-primary shadow-sm">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Data-Driven Pricing</h3>
              <p className="text-sm text-muted-foreground">Accurate valuation based on real-time market trends, not just algorithms.</p>
            </div>
            
            <div className="bg-accent/20 p-6 rounded-xl text-center hover:bg-accent/30 transition-colors">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-primary shadow-sm">
                <Camera className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Pro Photography</h3>
              <p className="text-sm text-muted-foreground">Stunning high-res photos, drone shots, and video tours to make your home shine.</p>
            </div>
            
            <div className="bg-accent/20 p-6 rounded-xl text-center hover:bg-accent/30 transition-colors">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-primary shadow-sm">
                <PenTool className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Staging Advice</h3>
              <p className="text-sm text-muted-foreground">Expert consultation on how to prep your home to appeal to today's buyers.</p>
            </div>
            
            <div className="bg-accent/20 p-6 rounded-xl text-center hover:bg-accent/30 transition-colors">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-primary shadow-sm">
                <Megaphone className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">Digital Marketing</h3>
              <p className="text-sm text-muted-foreground">Targeted social media campaigns and email marketing to my extensive network.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/10">
        <div className="container max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-bold text-primary mb-6">What's Your Home Worth?</h2>
          <p className="text-muted-foreground mb-8">
            Automated estimates are a starting point, but they don't see your upgrades or know your neighborhood like I do. Get a custom, professional valuation.
          </p>
          <div className="bg-white p-8 rounded-xl shadow-lg text-left">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="address" className="text-sm font-medium">Property Address</label>
                  <input type="text" id="address" className="w-full p-2 border rounded-md" placeholder="123 Ocean Ave" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                  <input type="email" id="email" className="w-full p-2 border rounded-md" placeholder="you@example.com" />
                </div>
              </div>
              <Button className="w-full bg-primary text-white hover:bg-primary/90">
                Get My Free Valuation
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
