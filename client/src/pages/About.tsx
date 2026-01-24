import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 bg-accent/20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-secondary font-bold tracking-widest uppercase text-sm">About Shaye</span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary mt-4 mb-6">
              More Than Just An Agent
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              I'm a neighbor, a mom, and a dual-licensed real estate & mortgage professional dedicated to helping you build your life in Santa Cruz.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-20">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <h2 className="font-serif text-3xl font-bold text-primary mb-4">My Story</h2>
            <p>
              I live right here in Live Oak with my family, and I absolutely love this community. From the morning fog rolling over the cliffs to the vibrant local business scene, there's nowhere else I'd rather be.
            </p>
            <p>
              My journey into real estate wasn't traditional. I realized early on that the industry was often transactional and cold. I wanted to change that. I wanted to bring a "coffee with a friend" approach to one of the biggest financial decisions of your life.
            </p>
            <p>
              That's why I got dual-licensed. I didn't just want to open doors; I wanted to open possibilities. By understanding both the property side and the financing side, I can guide you through the entire process seamlessly, avoiding the pitfalls that often catch buyers and sellers off guard.
            </p>
            
            <div className="bg-secondary/10 p-6 rounded-lg border-l-4 border-secondary mt-8">
              <h3 className="font-serif text-xl font-bold text-primary mb-2">My Philosophy</h3>
              <p className="italic text-primary/80">
                "Know Before You Owe." I believe in radical transparency and education. You should never feel pressured or confused. My job is to empower you with information so you can make the best decision for your future.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/images/shaye-meeting.jpg" 
                alt="Shaye working" 
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
              <img 
                src="/images/kitchen-interior.jpg" 
                alt="Interior design" 
                className="rounded-lg shadow-lg w-full h-64 object-cover mt-12"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Dual License Advantage */}
      <section className="py-20 bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">The Dual License Advantage</h2>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Most people hire a real estate agent and a loan officer separately. This often leads to miscommunication, delays, and stress. When you work with me, you get a unified team of one.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/20 p-2 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">Seamless Communication</h4>
                    <p className="text-white/70">No playing telephone between your agent and lender. I handle it all.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/20 p-2 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">Strategic Offers</h4>
                    <p className="text-white/70">I can write offers that are perfectly tailored to your financing, making them stronger to sellers.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/20 p-2 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl">$2,000 Closing Savings</h4>
                    <p className="text-white/70">Through my partnership with Revest, my clients save big at the closing table.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 p-8 rounded-xl border border-white/10">
              <h3 className="font-serif text-2xl font-bold mb-6 text-center">Credentials</h3>
              <ul className="space-y-4 text-sm md:text-base">
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Real Estate License</span>
                  <span className="font-mono text-secondary">CA DRE #02105568</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Mortgage Licensing</span>
                  <span className="font-mono text-secondary">CA, TX, NV, OR</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Specialty</span>
                  <span className="text-right">Live Oak & Santa Cruz Coastal</span>
                </li>
                <li className="flex justify-between pt-2">
                  <span>Experience</span>
                  <span className="text-right">Residential Sales & Financing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background text-center">
        <div className="container max-w-2xl">
          <h2 className="font-serif text-3xl font-bold text-primary mb-6">Let's Grab Coffee</h2>
          <p className="text-muted-foreground mb-8">
            I'd love to hear your story and help you achieve your real estate goals in Santa Cruz. No pressure, just good conversation.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
              Contact Shaye
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
