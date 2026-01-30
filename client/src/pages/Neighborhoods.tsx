import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import { ArrowRight } from "lucide-react";
import { MapView } from "@/components/Map";
import { useRef } from "react";
import { useMetaTags } from "@/hooks/use-meta-tags";

const neighborhoods = [
  {
    id: "live-oak",
    name: "Live Oak",
    description: "The heart of Santa Cruz. A perfect blend of beach life and community vibes, featuring some of the best weather in the county.",
    image: "/images/live-oak-neighborhood.jpg",
    link: "/live-oak",
    highlight: true,
    lat: 36.9741,
    lng: -121.9850
  },
  {
    id: "pleasure-point",
    name: "Pleasure Point",
    description: "Iconic surf culture meets luxury coastal living. Walkable streets, world-class waves, and a vibrant local scene.",
    image: "/images/santa-cruz-lifestyle.jpg",
    link: "/neighborhoods", // Placeholder for now
    highlight: false,
    lat: 36.9638,
    lng: -121.9644
  },
  {
    id: "westside",
    name: "Westside",
    description: "Dramatic ocean views, proximity to UCSC, and a laid-back, intellectual atmosphere with great breweries and cafes.",
    image: "/images/hero-home.jpg",
    link: "/neighborhoods",
    highlight: false,
    lat: 36.9632,
    lng: -122.0439
  },
  {
    id: "aptos",
    name: "Aptos",
    description: "Spacious lots, redwood forests meeting the sea, and a slightly slower pace of life perfect for families and retirees.",
    image: "/images/kitchen-interior.jpg", // Placeholder image
    link: "/aptos",
    highlight: false,
    lat: 36.9772,
    lng: -121.9033
  },
  {
    id: "capitola",
    name: "Capitola",
    description: "A colorful, historic seaside village with charm to spare. Great dining, shopping, and a tight-knit community feel.",
    image: "/images/santa-cruz-lifestyle.jpg", // Placeholder image
    link: "/capitola",
    highlight: false,
    lat: 36.9752,
    lng: -121.9533
  },
  {
    id: "scotts-valley",
    name: "Scotts Valley",
    description: "Just inland from the coast, offering warmer weather, top-rated schools, and easy commuting access to Silicon Valley.",
    image: "/images/live-oak-neighborhood.jpg", // Placeholder image
    link: "/scotts-valley",
    highlight: false,
    lat: 37.0511,
    lng: -122.0147
  },
  {
    id: "soquel",
    name: "Soquel",
    description: "Small-town charm with a sunny disposition. Antique shops, wineries, and rolling hills.",
    image: "/images/hero-home.jpg", // Placeholder image
    link: "/soquel",
    highlight: false,
    lat: 36.9880,
    lng: -121.9566
  },
  {
    id: "santa-cruz",
    name: "Santa Cruz",
    description: "Where the redwoods meet the sea. A vibrant mix of surf culture, university life, and historic charm.",
    image: "/images/hero-home.jpg", // Placeholder image
    link: "/santa-cruz",
    highlight: false,
    lat: 36.9741,
    lng: -122.0308
  }
];

export default function Neighborhoods() {
  useMetaTags({
    title: "Santa Cruz Neighborhoods | Find Your Perfect Spot",
    description: "Explore the diverse communities of Santa Cruz County. From the surf breaks of Pleasure Point to the redwoods of Scotts Valley, find the neighborhood that fits your lifestyle.",
    image: "/images/live-oak-neighborhood.jpg"
  });

  const mapRef = useRef<google.maps.Map | null>(null);
  const [, setLocation] = useLocation();

  const handleMapReady = (map: google.maps.Map) => {
    mapRef.current = map;

    // Add markers for each neighborhood
    neighborhoods.forEach((hood) => {
      const marker = new google.maps.marker.AdvancedMarkerElement({
        map,
        position: { lat: hood.lat, lng: hood.lng },
        title: hood.name,
      });

      // Add click listener to navigate to neighborhood page
      marker.addListener("click", () => {
        setLocation(hood.link);
      });
    });
  };

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

      {/* Interactive Map Section */}
      <section className="py-12 bg-accent/10">
        <div className="container">
          <div className="bg-white p-4 rounded-xl shadow-lg">
            <h2 className="font-serif text-2xl font-bold text-primary mb-4 text-center">Explore by Map</h2>
            <p className="text-center text-muted-foreground mb-6">Click on a marker to visit the neighborhood guide.</p>
            <MapView 
              className="h-[500px] rounded-lg"
              initialCenter={{ lat: 36.9741, lng: -122.0308 }}
              initialZoom={11}
              onMapReady={handleMapReady}
            />
          </div>
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
