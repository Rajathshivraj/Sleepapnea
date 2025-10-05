import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Award, Calendar } from "lucide-react";

export default function Publications() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-hero-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Publications</h1>
          <p className="text-xl text-blue-100 font-body">Research outputs and contributions</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Card className="p-8 mb-8 border-l-4 border-primary">
          <div className="flex items-start gap-4">
            <Award className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-4">Featured Research</h2>
              <h3 className="text-xl font-bold mb-2">Severity-Aware Multimodal Fusion for Cross-Dataset Sleep Staging and OSA/CSA Detection</h3>
              <p className="text-muted-foreground font-body mb-4">
                We present a novel framework combining EEG, ECG, SpO₂, and respiratory signals for comprehensive sleep disorder analysis. 
                Our approach achieves 84.3% accuracy across five major datasets and introduces the first comprehensive OSA/CSA subtyping 
                capability using publicly available data.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div>
                  <div className="font-bold">Target Venues</div>
                  <ul className="text-sm text-muted-foreground font-body">
                    <li>• Nature Medicine</li>
                    <li>• IEEE TBME</li>
                    <li>• Sleep Medicine Reviews</li>
                  </ul>
                </div>
                <div>
                  <div className="font-bold">Key Contributions</div>
                  <ul className="text-sm text-muted-foreground font-body">
                    <li>• Cross-dataset generalization</li>
                    <li>• Missing modality robustness</li>
                    <li>• OSA/CSA subtyping</li>
                  </ul>
                </div>
                <div>
                  <div className="font-bold">Status</div>
                  <p className="text-sm text-muted-foreground font-body">In preparation • Expected submission Q2 2025</p>
                </div>
              </div>
              <div className="bg-muted/50 p-4 rounded-lg">
                <div className="text-sm font-bold mb-2">BibTeX Citation:</div>
                <pre className="text-xs font-mono overflow-x-auto">
{`@article{sleepai2025,
  title={Severity-Aware Multimodal Fusion for Cross-Dataset Sleep Staging and OSA/CSA Detection},
  author={[Authors]},
  journal={[Target Journal]},
  year={2025},
  note={In preparation}
}`}
                </pre>
              </div>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <Calendar className="h-8 w-8 text-primary mb-3" />
            <div className="text-3xl font-bold mb-2">2025</div>
            <div className="font-bold mb-1">Target Publication</div>
            <p className="text-sm text-muted-foreground font-body">Primary research manuscript submission planned for Q2 2025</p>
          </Card>
          <Card className="p-6">
            <FileText className="h-8 w-8 text-secondary mb-3" />
            <div className="text-3xl font-bold mb-2">5+</div>
            <div className="font-bold mb-1">Conference Presentations</div>
            <p className="text-sm text-muted-foreground font-body">Planned presentations at SLEEP, IEEE EMBC, and ML4H</p>
          </Card>
          <Card className="p-6">
            <Award className="h-8 w-8 text-accent mb-3" />
            <div className="text-3xl font-bold mb-2">Open</div>
            <div className="font-bold mb-1">Source Release</div>
            <p className="text-sm text-muted-foreground font-body">Code and models to be released upon publication</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
