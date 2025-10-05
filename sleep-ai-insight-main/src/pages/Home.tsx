import { Link } from "react-router-dom";
import { ArrowRight, Database, BarChart, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const stats = [
  { label: "People Affected Globally", value: "936M+", icon: Users },
  { label: "Cross-Dataset Accuracy", value: "84.3%", icon: BarChart },
  { label: "Major Datasets", value: "5", icon: Database },
  { label: "Research Papers", value: "20+", icon: FileText },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-hero-gradient text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Severity-Aware Multimodal Fusion for Sleep Staging & OSA/CSA Detection
            </h1>
            <p className="text-xl sm:text-2xl mb-4 text-blue-100 font-body">
              Advancing automated sleep disorder diagnosis through cross-dataset AI generalization
            </p>
            <p className="text-lg sm:text-xl mb-8 text-blue-200 max-w-4xl mx-auto font-body">
              Revolutionary AI system combining EEG, ECG, SpO₂, and respiratory signals for comprehensive sleep analysis
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link to="/research">
                <Button size="lg" className="bg-white text-primary hover:bg-blue-50 text-lg px-8">
                  View Research
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/datasets">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 text-lg px-8">
                  Access Datasets
                </Button>
              </Link>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 p-6 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <stat.icon className="h-8 w-8 mb-3 text-accent" />
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-blue-100 font-body">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">The Sleep Disorder Crisis</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
              Sleep-related breathing disorders affect nearly 1 billion people worldwide, yet diagnosis remains slow, expensive, and inaccessible
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 border-2 hover:border-primary transition-colors">
              <h3 className="text-xl font-bold mb-3">Current Limitations</h3>
              <ul className="space-y-2 text-muted-foreground font-body">
                <li>• Manual scoring is time-consuming and subjective</li>
                <li>• Limited access to sleep centers</li>
                <li>• High costs prevent early detection</li>
                <li>• Lack of severity-aware analysis</li>
              </ul>
            </Card>

            <Card className="p-6 border-2 hover:border-secondary transition-colors">
              <h3 className="text-xl font-bold mb-3">Our Innovation</h3>
              <ul className="space-y-2 text-muted-foreground font-body">
                <li>• Multimodal signal fusion (EEG, ECG, SpO₂)</li>
                <li>• Cross-dataset generalization</li>
                <li>• Missing modality robustness</li>
                <li>• OSA/CSA subtype classification</li>
              </ul>
            </Card>

            <Card className="p-6 border-2 hover:border-accent transition-colors">
              <h3 className="text-xl font-bold mb-3">Impact</h3>
              <ul className="space-y-2 text-muted-foreground font-body">
                <li>• Faster, more accurate diagnosis</li>
                <li>• Accessible home monitoring</li>
                <li>• Reduced healthcare costs</li>
                <li>• Improved patient outcomes</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Approach</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-body">
              Four key innovations driving the next generation of sleep medicine AI
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔗</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Multimodal Fusion</h3>
              <p className="text-sm text-muted-foreground font-body">
                Intelligent combination of EEG, ECG, SpO₂, and respiratory signals for comprehensive analysis
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Cross-Dataset Generalization</h3>
              <p className="text-sm text-muted-foreground font-body">
                Trained on 5 major datasets to ensure robustness across diverse populations and recording setups
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Missing Modality Robustness</h3>
              <p className="text-sm text-muted-foreground font-body">
                Maintains high accuracy even when certain signals are unavailable or corrupted
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔬</span>
              </div>
              <h3 className="text-lg font-bold mb-2">OSA/CSA Subtyping</h3>
              <p className="text-sm text-muted-foreground font-body">
                Distinguishes between obstructive and central sleep apnea for targeted treatment
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Explore?</h2>
          <p className="text-xl mb-8 opacity-90 font-body">
            Dive into our research, datasets, and code to advance sleep medicine AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/literature">
              <Button size="lg" className="bg-white text-primary hover:bg-blue-50">
                Browse Literature
              </Button>
            </Link>
            <Link to="/code">
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Access Code
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
