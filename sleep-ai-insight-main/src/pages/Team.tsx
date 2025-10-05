import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin } from "lucide-react";

export default function Team() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-hero-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Team & Contact</h1>
          <p className="text-xl text-blue-100 font-body">Collaborate with us on sleep medicine AI research</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
          <Card className="p-8">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-bold mb-2">Name</label>
                  <Input placeholder="Your name" />
                </div>
                <div>
                  <label className="block font-bold mb-2">Email</label>
                  <Input type="email" placeholder="your.email@institution.edu" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-bold mb-2">Institution</label>
                  <Input placeholder="Your university or organization" />
                </div>
                <div>
                  <label className="block font-bold mb-2">Research Interest</label>
                  <Input placeholder="e.g., Sleep staging, Apnea detection" />
                </div>
              </div>
              <div>
                <label className="block font-bold mb-2">Message</label>
                <Textarea placeholder="Tell us about your research interest or collaboration idea..." rows={6} />
              </div>
              <Button type="submit" size="lg">Send Message</Button>
            </form>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Lab Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <Mail className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold text-lg mb-2">Email</h3>
              <p className="text-muted-foreground font-body">contact@sleepai-research.org</p>
            </Card>
            <Card className="p-6">
              <MapPin className="h-8 w-8 text-secondary mb-3" />
              <h3 className="font-bold text-lg mb-2">Location</h3>
              <p className="text-muted-foreground font-body">Sleep Medicine AI Research Lab</p>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
