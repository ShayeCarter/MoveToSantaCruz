import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Calendar, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Santa Cruz Market Update: Q1 2026",
    excerpt: "Inventory is shifting and rates are stabilizing. Here's what buyers and sellers need to know about the current state of the market in Live Oak and beyond.",
    date: "Jan 15, 2026",
    author: "Shaye Carter",
    category: "Market Insights",
    image: "/images/hero-home.jpg"
  },
  {
    id: 2,
    title: "5 Hidden Gems in Live Oak You Need to Visit",
    excerpt: "From the best breakfast burrito to a secret beach access, discover the local favorites that make Live Oak the best neighborhood in Santa Cruz.",
    date: "Jan 02, 2026",
    author: "Shaye Carter",
    category: "Local Lifestyle",
    image: "/images/live-oak-neighborhood.jpg"
  },
  {
    id: 3,
    title: "Buying vs. Renting in Santa Cruz: The Math",
    excerpt: "With rents rising, does it make sense to buy now? We break down the numbers, tax benefits, and long-term equity potential.",
    date: "Dec 18, 2025",
    author: "Shaye Carter",
    category: "Education",
    image: "/images/shaye-meeting.jpg"
  },
  {
    id: 4,
    title: "How to Prep Your Home for a Spring Sale",
    excerpt: "First impressions matter. Learn the top 5 high-ROI improvements you can make this winter to get top dollar when you list in the spring.",
    date: "Dec 05, 2025",
    author: "Shaye Carter",
    category: "Seller Tips",
    image: "/images/kitchen-interior.jpg"
  }
];

export default function Blog() {
  return (
    <Layout>
      <section className="bg-accent/20 py-20">
        <div className="container text-center">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm">The Blog</span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary mt-4 mb-6">Market Insights & Local Life</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay up to date with the latest real estate trends, neighborhood news, and tips from your local expert.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {blogPosts.map((post) => (
              <div key={post.id} className="group cursor-pointer flex flex-col gap-4">
                <div className="overflow-hidden rounded-xl aspect-video relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {post.author}
                  </div>
                </div>
                <h2 className="font-serif text-2xl font-bold text-primary group-hover:text-secondary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="pt-2">
                  <Button variant="link" className="p-0 h-auto font-bold text-primary group-hover:text-secondary">
                    Read Article
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-white text-center">
        <div className="container max-w-xl">
          <h2 className="font-serif text-3xl font-bold mb-4">Never Miss an Update</h2>
          <p className="text-white/80 mb-8">
            Join my monthly newsletter for market stats, local events, and exclusive pocket listings. No spam, ever.
          </p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold px-8">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </Layout>
  );
}
