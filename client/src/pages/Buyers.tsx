import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { CheckCircle2, Download, MapPin, TrendingUp, ShieldCheck, Clock } from "lucide-react";
import { Link } from "wouter";
import { useMetaTags } from "@/hooks/use-meta-tags";

export default function Buyers() {
  useMetaTags({
    title: "Buying a Home in Santa Cruz | 2025 Buyer's Guide",
    description: "Navigate the Santa Cruz real estate market with confidence. Get the latest insights on pricing, neighborhoods, and the new 2025 buyer rules.",
    image: "/images/santa-cruz-lifestyle.jpg"
  });

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-primary py-20 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/images/santa-cruz-lifestyle.jpg" 
            alt="Santa Cruz Lifestyle" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Your Santa Cruz Home Buying Adventure Starts Here
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-blue-50">
            Expert guidance, honest advice, and a stress-free path to your coastal dream home.
          </p>
          <Button size="lg" className="bg-accent text-primary hover:bg-white font-bold text-lg px-8 py-6 h-auto shadow-lg" asChild>
            <a href="/buyers-guide.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-6 w-6" /> Download the Full 40-Page Guide
            </a>
          </Button>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Why This Guide is Different</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-blue-50 p-3 rounded-full h-fit">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Actually About Santa Cruz</h3>
                    <p className="text-gray-600">Not generic advice, but real, practical guidance for our unique coastal community market.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-blue-50 p-3 rounded-full h-fit">
                    <ShieldCheck className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Current & Honest</h3>
                    <p className="text-gray-600">Updated with 2025 industry changes and honest insights about challenges and opportunities.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-blue-50 p-3 rounded-full h-fit">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Plain English</h3>
                    <p className="text-gray-600">No confusing jargon - just straightforward explanations you can actually understand and use.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-2xl font-serif font-bold mb-4">Meet Your Dream Team</h3>
              <p className="mb-6 text-gray-600">
                I'm Shaye Carter, and I'm not just finding you a house—I'm helping you build a life here.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>I actually live here (Live Oak local!)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>I speak human, not "Realtor"</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span>Long-term relationship focus</span>
                </li>
              </ul>
              <Button className="w-full" asChild>
                <Link href="/contact">Let's Grab Coffee</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Market Reality Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">The Santa Cruz Market Reality</h2>
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-4xl font-bold text-primary mb-2">$1.32M</div>
              <div className="text-gray-600">Average Sale Price</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-4xl font-bold text-primary mb-2">98.1%</div>
              <div className="text-gray-600">Sale-to-List Ratio</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-4xl font-bold text-primary mb-2">29</div>
              <div className="text-gray-600">Days on Market</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="text-4xl font-bold text-primary mb-2">Buyer</div>
              <div className="text-gray-600">Friendly Market</div>
            </div>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">What This Means For You</h3>
            <p className="text-lg text-gray-600 mb-6">
              With 29 days median market time, the crazy 24-hour bidding wars are behind us. 
              You have time to breathe, think, inspect, and negotiate properly. 
              For the first time in years, buyers have genuine leverage.
            </p>
          </div>
        </div>
      </section>

      {/* The New Rules Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold mb-8 text-center">The New Real Estate Rules (2025 Update)</h2>
            <p className="text-xl text-blue-100 text-center mb-12">
              As of August 2024, new industry guidelines give buyers more control, transparency, and negotiating power.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-accent" /> Better Service
                </h3>
                <p className="text-blue-50">
                  When you're directly involved in agent compensation, you get even more incentive for exceptional service.
                </p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <ShieldCheck className="h-6 w-6 text-accent" /> Legal Protection
                </h3>
                <p className="text-blue-50">
                  Buyer representation agreements ensure I'm working solely in your best interests with complete transparency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Your 90-Day Timeline</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Days 1-30: Research & Planning</h3>
                <p className="text-gray-600">Download the guide, schedule your "Scout Visit" with me, and get pre-approved with a local lender who understands our market.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">2</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Days 31-60: Active House Hunting</h3>
                <p className="text-gray-600">Weekly new listing alerts, virtual tours, and neighborhood deep-dives. We'll tour campuses and check commute times.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Days 61-90: Offer, Close, Move</h3>
                <p className="text-gray-600">Competitive offer strategy (no bidding wars needed!), thorough inspections, and a smooth closing process managed by my team.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent/20">
        <div className="container text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Download the full 40-page guide for detailed neighborhood breakdowns, financing tips, and checklists.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90" asChild>
              <a href="/buyers-guide.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" /> Download Buyer's Guide
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
              <Link href="/contact">Schedule a Strategy Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
