import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { CheckCircle2, Download, Sun, Wifi, Map, Calendar } from "lucide-react";
import { Link } from "wouter";
import { useMetaTags } from "@/hooks/use-meta-tags";

export default function Relocation() {
  useMetaTags({
    title: "Relocating to Santa Cruz? Your Complete Guide",
    description: "Planning a move to Santa Cruz? Get expert advice on neighborhoods, cost of living, and the microclimate advantage from a local relocation specialist.",
    image: "/images/santa-cruz-beach.jpg"
  });

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-primary py-20 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/images/santa-cruz-beach.jpg" 
            alt="Santa Cruz Beach" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Moving to Santa Cruz?
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-blue-50">
            The ultimate guide for tech workers, families, and anyone trading the Silicon Valley grind for coastal calm.
          </p>
          <Button size="lg" className="bg-accent text-primary hover:bg-white font-bold text-lg px-8 py-6 h-auto shadow-lg" asChild>
            <a href="/relocation-guide.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-6 w-6" /> Download the 2025 Relocation Guide
            </a>
          </Button>
        </div>
      </div>

      {/* Why Move Here Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-6">Why Smart People Are Moving Here</h2>
              <p className="text-lg text-gray-600 mb-6">
                It's not just about the beach (though that helps). It's about a fundamental shift in lifestyle quality.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-blue-50 p-3 rounded-full h-fit">
                    <Sun className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">The "Microclimate" Advantage</h3>
                    <p className="text-gray-600">While San Francisco is foggy and San Jose is baking, we're enjoying the "Goldilocks" zone. 262 days of sunshine a year.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-blue-50 p-3 rounded-full h-fit">
                    <Wifi className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Remote Work Paradise</h3>
                    <p className="text-gray-600">Fiber internet is standard in most neighborhoods, and your "commute" is a walk to the cliffs, not a crawl on 101.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="bg-blue-50 p-3 rounded-full h-fit">
                    <Map className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Real Community</h3>
                    <p className="text-gray-600">People actually know their neighbors here. It's a small town with big city amenities, not a sprawling suburb.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
              <h3 className="text-2xl font-serif font-bold mb-6">Cost of Living Reality Check</h3>
              <div className="space-y-6">
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-end mb-2">
                    <span className="font-bold text-gray-600">Median Home Price</span>
                    <span className="text-2xl font-bold text-primary">$1.3M</span>
                  </div>
                  <p className="text-sm text-gray-500">Comparable to San Jose, but you get ocean views instead of office parks.</p>
                </div>
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex justify-between items-end mb-2">
                    <span className="font-bold text-gray-600">Property Tax Rate</span>
                    <span className="text-2xl font-bold text-primary">~1.1%</span>
                  </div>
                  <p className="text-sm text-gray-500">Standard California rate, no special Mello-Roos in most established neighborhoods.</p>
                </div>
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="font-bold text-gray-600">Quality of Life ROI</span>
                    <span className="text-2xl font-bold text-primary">Priceless</span>
                  </div>
                  <p className="text-sm text-gray-500">Lower stress, cleaner air, and active outdoor living year-round.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 90-Day Move Plan Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Your 90-Day Relocation Plan</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">1</div>
              <h3 className="text-xl font-bold mb-3">Month 1: The "Vibe Check"</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-1 text-green-600" /> Visit different neighborhoods at different times</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-1 text-green-600" /> Test the commute (if you have one)</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-1 text-green-600" /> Meet with me for a coffee consultation</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">2</div>
              <h3 className="text-xl font-bold mb-3">Month 2: Logistics & Lending</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-1 text-green-600" /> Get pre-approved with a local lender</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-1 text-green-600" /> Narrow down to top 2 neighborhoods</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-1 text-green-600" /> Start touring homes virtually or in-person</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">3</div>
              <h3 className="text-xl font-bold mb-3">Month 3: Make It Happen</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-1 text-green-600" /> Write a competitive offer</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-1 text-green-600" /> Manage inspections and repairs</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 mt-1 text-green-600" /> Get the keys and hit the beach!</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent/20 text-center">
        <div className="container">
          <h2 className="text-3xl font-serif font-bold mb-6">Don't Move Blindly</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            My relocation guide covers everything from school districts to the best surf spots. It's the local friend you wish you had.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90" asChild>
              <a href="/relocation-guide.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" /> Download Relocation Guide
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10" asChild>
              <Link href="/contact">Book a Relocation Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
