import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <section className="bg-primary text-white py-20">
        <div className="container text-center">
          <span className="text-secondary font-bold tracking-widest uppercase text-sm">Get in Touch</span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold mt-4 mb-6">Let's Start the Conversation</h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Whether you're ready to buy, sell, or just have a question about the market, I'm here to help.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-10">
            <div>
              <h2 className="font-serif text-3xl font-bold text-primary mb-6">Contact Shaye</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I pride myself on being responsive and accessible. Reach out via phone, email, or the form, and I'll get back to you as soon as possible—usually within a few hours.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-accent/50 p-3 rounded-full text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Phone</h3>
                  <p className="text-muted-foreground mb-1">Call or Text anytime</p>
                  <a href="tel:+18315550123" className="text-primary font-bold hover:underline text-lg">(831) 555-0123</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent/50 p-3 rounded-full text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Email</h3>
                  <p className="text-muted-foreground mb-1">For general inquiries</p>
                  <a href="mailto:shaye@movetosantacruz.com" className="text-primary font-bold hover:underline text-lg">shaye@movetosantacruz.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-accent/50 p-3 rounded-full text-primary">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Office</h3>
                  <p className="text-muted-foreground">
                    Santa Cruz, CA<br/>
                    Specializing in Live Oak & Coastal Neighborhoods
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Follow Along</h3>
              <div className="flex gap-4">
                <a href="#" className="bg-primary text-white p-3 rounded-full hover:bg-primary/90 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="bg-primary text-white p-3 rounded-full hover:bg-primary/90 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-primary text-white p-3 rounded-full hover:bg-primary/90 transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-border/50">
            <h3 className="font-serif text-2xl font-bold text-primary mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                  <input type="text" id="firstName" className="w-full p-3 border rounded-md bg-background" placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                  <input type="text" id="lastName" className="w-full p-3 border rounded-md bg-background" placeholder="Doe" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input type="email" id="email" className="w-full p-3 border rounded-md bg-background" placeholder="jane@example.com" />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">Phone (Optional)</label>
                <input type="tel" id="phone" className="w-full p-3 border rounded-md bg-background" placeholder="(831) 555-0123" />
              </div>

              <div className="space-y-2">
                <label htmlFor="interest" className="text-sm font-medium">I'm interested in...</label>
                <select id="interest" className="w-full p-3 border rounded-md bg-background">
                  <option>Buying a Home</option>
                  <option>Selling a Home</option>
                  <option>Mortgage / Financing</option>
                  <option>Just saying hello</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea id="message" rows={4} className="w-full p-3 border rounded-md bg-background" placeholder="Tell me a bit about your goals..."></textarea>
              </div>

              <Button size="lg" className="w-full bg-primary text-white hover:bg-primary/90 font-bold">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
