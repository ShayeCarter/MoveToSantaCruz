import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { CheckCircle2, Download, TrendingUp, DollarSign, Users } from "lucide-react";
import { Link } from "wouter";
import { useMetaTags } from "@/hooks/use-meta-tags";

export default function Sellers() {
  useMetaTags({
    title: "Selling Your Home in Santa Cruz | Expert Seller's Guide",
    description: "Maximize your home's value with Shaye Carter's proven selling framework. Learn how to avoid the 'Six-Figure Mistake' and sell with confidence in Live Oak and beyond.",
    image: "/images/kitchen-interior.jpg"
  });

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-primary py-20 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/images/kitchen-interior.jpg" 
            alt="Luxury Kitchen" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Maximize Your Home's Value & Sell with Confidence
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-blue-50">
            Avoid the "Six-Figure Mistake" with a strategic approach to pricing, preparation, and marketing.
          </p>
          <Button size="lg" className="bg-accent text-primary hover:bg-white font-bold text-lg px-8 py-6 h-auto shadow-lg" asChild>
            <a href="/sellers-guide.pdf" target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-6 w-6" /> Download the Complete Seller's Guide
            </a>
          </Button>
        </div>
      </div>

      {/* The Six-Figure Mistake Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6 text-center">The Six-Figure Mistake Most Sellers Make</h2>
            <p className="text-lg text-gray-600 mb-8 text-center">
              According to recent market analysis, the difference between strategic selling and hoping for the best can cost Santa Cruz sellers anywhere from $50,000 to $150,000 in lost equity.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                <h3 className="text-xl font-bold text-red-800 mb-3">Seller A (The "Hope" Strategy)</h3>
                <ul className="space-y-2 text-red-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1">❌</span> Lists "as-is" with basic photos
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">❌</span> Prices based on Zillow estimate
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">❌</span> Sits on market, reduces price
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1">❌</span> Settles for less than potential
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                <h3 className="text-xl font-bold text-green-800 mb-3">Seller B (The Strategic Approach)</h3>
                <ul className="space-y-2 text-green-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 mt-0.5" /> Invests in strategic improvements
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 mt-0.5" /> Prices based on deep market analysis
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 mt-0.5" /> Professional staging & marketing
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 mt-0.5" /> Generates multiple offers & premium price
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Oak Advantage Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-accent font-bold tracking-widest uppercase text-sm">Specialist Insight</span>
              <h2 className="text-3xl font-serif font-bold text-primary mt-2 mb-6">The Live Oak Advantage</h2>
              <p className="text-lg text-gray-600 mb-6">
                If you own property in Live Oak, you're sitting on one of Santa Cruz County's best-kept secrets. While other neighborhoods have seen dramatic price swings, Live Oak has quietly become the county's premier value proposition.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                As a Live Oak resident since 2018, I know exactly how to position these homes to appeal to young families and professionals seeking space, value, and community.
              </p>
              <Button variant="outline" className="border-primary text-primary" asChild>
                <Link href="/live-oak">Explore Live Oak Guide</Link>
              </Button>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-6">Why Live Oak Sells</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="bg-blue-50 p-2 rounded-full"><DollarSign className="h-5 w-5 text-primary" /></div>
                  <span>Superior value per square foot</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-blue-50 p-2 rounded-full"><TrendingUp className="h-5 w-5 text-primary" /></div>
                  <span>Larger lots averaging 7,200 sq ft</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="bg-blue-50 p-2 rounded-full"><Users className="h-5 w-5 text-primary" /></div>
                  <span>Authentic community feel buyers crave</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Process Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">My Proven 4-Step Selling Framework</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold mb-2">Prepare It</h3>
              <p className="text-gray-600 text-sm">Comprehensive assessment, strategic improvements, and professional staging to maximize ROI.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold mb-2">Advertise It</h3>
              <p className="text-gray-600 text-sm">Professional photography, 3D tours, and multi-channel marketing campaigns for maximum exposure.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold mb-2">Show It</h3>
              <p className="text-gray-600 text-sm">Strategic open houses and private showings designed to generate competitive interest.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold mb-2">Sell It</h3>
              <p className="text-gray-600 text-sm">Expert negotiation leveraging my dual license to vet buyer financing and secure the best terms.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white text-center">
        <div className="container">
          <h2 className="text-3xl font-serif font-bold mb-6">Ready to Maximize Your Sale?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Get the full details on pricing strategies, staging tips, and market analysis in my complete guide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-primary hover:bg-white font-bold" asChild>
              <a href="/sellers-guide.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" /> Download Seller's Guide
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="/contact">Get a Free Home Valuation</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
