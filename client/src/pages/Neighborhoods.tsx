import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const neighborhoods = [
  {
    id: "live-oak",
    name: "Live Oak",
    description: "The heart of Santa Cruz. A perfect blend of beach life and community vibes, featuring some of the best weather in the county.",
    image: "/images/live-oak-neighborhood.jpg",
    link: "/live-oak",
    highlight: true
  },
  {
    id: "pleasure-point",
    name: "Pleasure Point",
    description: "Iconic surf culture meets luxury coastal living. Walkable streets, world-class waves, and a vibrant local scene.",
    image: "/images/santa-cruz-lifestyle.jpg",
    link: "/neighborhoods", // Placeholder for now
    highlight: false
  },
  {
    id: "westside",
    name: "Westside",
    description: "Dramatic ocean views, proximity to UCSC, and a laid-back, intellectual atmosphere with great breweries and cafes.",
    image: "/images/hero-home.jpg",
    link: "/neighborhoods",
    highlight: false
  },
  {
    id: "aptos",
    name: "Aptos",
    description: "Spacious lots, redwood forests meeting the sea, and a slightly slower pace of life perfect for families and retirees.",
    image: "/images/kitchen-interior.jpg", // Placeholder image
    link: "/neighborhoods",
    highlight: false
  },
  {
    id: "capitola",
    name: "Capitola",
    description: "A colorful, historic seaside village with charm to spare. Great dining, shopping, and a tight-knit community feel.",
    image: "/images/santa-cruz-lifestyle.jpg", // Placeholder image
    link: "/neighborhoods",
    highlight: false
  },
  {
    id: "scotts-valley",
    name: "Scotts Valley",
    description: "Just inland from the coast, offering warmer weather, top-rated schools, and easy commuting access to Silicon Valley.",
    image: "/images/live-oak-neighborhood.jpg", // Placeholder image
    link: "/neighborhoods",
    highlight: false
  }
];

export default function Neighborhoods() {
  return (
    <Layout>
      <section className="bg-primary text-white py-20">
        <div className="container text-center">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm">Explore Santa Cruz</span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mt-4 mb-6">Find Your Perfect Spot</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            From the surf breaks of Pleasure Point to the redwoods of Aptos, every Santa Cruz neighborhood has its own unique personality.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {neighborhoods.map((hood) => (
              <Link key={hood.id} href={hood.link}>
                <div className="group cursor-pointer flex flex-col h-full bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={hood.image} 
                      alt={hood.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {hood.highlight && (
                      <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                        Top Pick
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-serif text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                      {hood.name}
                    </h3>
                    <p className="text-muted-foreground mb-6 flex-grow">
                      {hood.description}
                    </p>
                    <div className="flex items-center text-primary font-bold text-sm group-hover:translate-x-2 transition-transform">
                      Read Guide <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-accent/30">
        <div className="container text-center">
          <h2 className="font-serif text-3xl font-bold text-primary mb-6">Not Sure Where to Start?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            I know these streets like the back of my hand. Let's chat about your lifestyle, commute, and budget to find the neighborhood that feels like home.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
              Get a Personal Recommendation
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
