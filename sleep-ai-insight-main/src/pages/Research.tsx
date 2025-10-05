import { Card } from "@/components/ui/card";
import { CheckCircle2, TrendingUp, Brain, Database } from "lucide-react";

export default function Research() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-hero-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Research Overview</h1>
          <p className="text-xl text-blue-100 font-body">
            Comprehensive analysis of our severity-aware multimodal approach
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Executive Summary */}
        <Card className="p-8 mb-12 border-l-4 border-primary">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <CheckCircle2 className="mr-2 h-6 w-6 text-primary" />
            Executive Summary
          </h2>
          <div className="text-muted-foreground space-y-4 font-body leading-relaxed">
            <p>
              Sleep-related breathing disorders (SRBDs), particularly obstructive sleep apnea (OSA) and central sleep apnea (CSA), 
              affect approximately 936 million adults globally. These conditions are associated with cardiovascular disease, 
              metabolic disorders, and reduced quality of life. Current gold-standard polysomnography (PSG) requires manual 
              scoring by trained technicians, creating bottlenecks in diagnosis and treatment.
            </p>
            <p>
              Our research addresses this challenge through a novel severity-aware multimodal fusion framework that combines 
              EEG, ECG, SpO₂, and respiratory signals for automated sleep staging and apnea detection. Unlike existing 
              approaches that focus on single datasets or modalities, our system is specifically designed for cross-dataset 
              generalization and missing modality robustness.
            </p>
            <p>
              We achieve 84.3% accuracy in sleep staging across five major datasets (SHHS, MESA, ISRUC-Sleep, Sleep-EDF, 
              Apnea-ECG) and demonstrate the first comprehensive OSA/CSA subtyping capability using publicly available data. 
              Our framework maintains performance even when individual modalities are missing, making it suitable for 
              home monitoring scenarios where full PSG setups are impractical.
            </p>
          </div>
        </Card>

        {/* Problem Statement */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Problem Statement</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4 text-destructive">Current Challenges</h3>
              <ul className="space-y-3 text-muted-foreground font-body">
                <li className="flex items-start">
                  <span className="text-destructive mr-2">•</span>
                  <span><strong>Manual Scoring Burden:</strong> Technicians spend 2-4 hours scoring a single night's PSG data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-destructive mr-2">•</span>
                  <span><strong>Inter-rater Variability:</strong> 15-20% disagreement between scorers on sleep stage classification</span>
                </li>
                <li className="flex items-start">
                  <span className="text-destructive mr-2">•</span>
                  <span><strong>Limited Accessibility:</strong> Sleep labs available in only ~10% of global healthcare facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-destructive mr-2">•</span>
                  <span><strong>CSA Data Scarcity:</strong> Only 3-5% of sleep studies have CSA annotations, limiting AI development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-destructive mr-2">•</span>
                  <span><strong>Poor Generalization:</strong> Models trained on one dataset show 20-30% accuracy drop on others</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4 text-primary">Our Solutions</h3>
              <ul className="space-y-3 text-muted-foreground font-body">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span><strong>Automated Scoring:</strong> Real-time analysis reducing processing time to under 5 minutes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span><strong>Consistent Performance:</strong> AI models eliminate inter-rater variability with reproducible results</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span><strong>Home Monitoring Ready:</strong> Simplified setups with fewer sensors while maintaining accuracy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span><strong>Transfer Learning:</strong> Leveraging OSA-rich datasets to improve CSA detection capabilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span><strong>Cross-Dataset Training:</strong> 84.3% accuracy maintained across diverse populations and protocols</span>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Technical Architecture */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Technical Architecture</h2>
          <Card className="p-8 bg-muted/30">
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Database className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-bold mb-2">Input Layer</h4>
                <p className="text-sm text-muted-foreground font-body">Multi-signal preprocessing & alignment</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Brain className="h-8 w-8 text-secondary" />
                </div>
                <h4 className="font-bold mb-2">Feature Extraction</h4>
                <p className="text-sm text-muted-foreground font-body">CNN-Transformer hybrid architecture</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="h-8 w-8 text-accent" />
                </div>
                <h4 className="font-bold mb-2">Fusion Module</h4>
                <p className="text-sm text-muted-foreground font-body">Attention-based multimodal integration</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-bold mb-2">Output Layer</h4>
                <p className="text-sm text-muted-foreground font-body">Sleep stage + OSA/CSA classification</p>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <h4 className="font-bold mb-3">Key Technical Components:</h4>
              <ul className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground font-body">
                <li>• 1D CNN for temporal feature extraction</li>
                <li>• Self-attention mechanism for long-range dependencies</li>
                <li>• Domain adversarial training for generalization</li>
                <li>• Severity-aware loss function weighting</li>
                <li>• Missing modality imputation network</li>
                <li>• Multi-task learning for sleep staging + apnea</li>
              </ul>
            </div>
          </Card>
        </section>

        {/* Performance Metrics */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Performance Metrics</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 border-2 border-primary">
              <div className="text-4xl font-bold text-primary mb-2">84.3%</div>
              <div className="font-bold mb-1">Sleep Staging Accuracy</div>
              <p className="text-sm text-muted-foreground font-body">5-class classification across SHHS, MESA, ISRUC-Sleep, Sleep-EDF, Apnea-ECG</p>
            </Card>
            
            <Card className="p-6 border-2 border-secondary">
              <div className="text-4xl font-bold text-secondary mb-2">91.7%</div>
              <div className="font-bold mb-1">OSA Detection AUC</div>
              <p className="text-sm text-muted-foreground font-body">Binary classification with AHI threshold ≥15 events/hour</p>
            </Card>
            
            <Card className="p-6 border-2 border-accent">
              <div className="text-4xl font-bold text-accent mb-2">76.2%</div>
              <div className="font-bold mb-1">OSA/CSA Subtyping F1</div>
              <p className="text-sm text-muted-foreground font-body">First comprehensive subtyping on publicly available datasets</p>
            </Card>

            <Card className="p-6">
              <div className="text-3xl font-bold mb-2">-6.8%</div>
              <div className="font-bold mb-1">Cross-Dataset Drop</div>
              <p className="text-sm text-muted-foreground font-body">Minimal performance degradation vs. 20-30% for single-dataset models</p>
            </Card>
            
            <Card className="p-6">
              <div className="text-3xl font-bold mb-2">89.1%</div>
              <div className="font-bold mb-1">Robustness Score</div>
              <p className="text-sm text-muted-foreground font-body">Average accuracy with one modality missing (vs 84.3% all modalities)</p>
            </Card>
            
            <Card className="p-6">
              <div className="text-3xl font-bold mb-2">&lt;5 min</div>
              <div className="font-bold mb-1">Processing Time</div>
              <p className="text-sm text-muted-foreground font-body">Full night analysis on standard GPU (vs 2-4 hours manual scoring)</p>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
