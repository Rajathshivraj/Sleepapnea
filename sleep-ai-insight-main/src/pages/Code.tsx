import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Star, GitFork, Download, ExternalLink } from "lucide-react";

const repositories = [
  {
    name: "YASA",
    description: "Yet Another Spindle Algorithm - Comprehensive sleep analysis toolkit",
    language: "Python",
    license: "BSD-3-Clause",
    stars: "450+",
    forks: "80+",
    features: ["Sleep staging", "Spindle detection", "Spectral analysis", "Event detection"],
    install: "pip install yasa",
    url: "https://github.com/raphaelvallat/yasa",
    docs: "https://raphaelvallat.com/yasa/"
  },
  {
    name: "U-Sleep",
    description: "Resilient high-frequency sleep staging with U-Net architecture",
    language: "Python",
    license: "MIT",
    stars: "200+",
    forks: "45+",
    features: ["Cross-dataset staging", "U-Net architecture", "High-frequency analysis", "Transfer learning"],
    install: "pip install utime",
    url: "https://github.com/perslev/U-Time",
    docs: "https://github.com/perslev/U-Time/wiki"
  },
  {
    name: "SleepECG",
    description: "ECG-based sleep staging and analysis package",
    language: "Python",
    license: "BSD-3-Clause",
    stars: "120+",
    forks: "25+",
    features: ["ECG-based staging", "Heart rate variability", "Respiratory analysis", "Feature extraction"],
    install: "pip install sleepecg",
    url: "https://github.com/cbrnr/sleepecg",
    docs: "https://sleepecg.readthedocs.io/"
  },
  {
    name: "wav2sleep",
    description: "Unified multi-modal approach using transformer architecture",
    language: "Python",
    license: "MIT",
    stars: "85+",
    forks: "15+",
    features: ["Multi-modal fusion", "Transformer architecture", "Missing modality handling", "AASM guidelines"],
    install: "conda env create -f environment.yml",
    url: "https://github.com/wadx/wav2sleep",
    docs: "https://github.com/wadx/wav2sleep#readme"
  },
  {
    name: "MNE-Python",
    description: "General neurophysiological signal processing toolkit",
    language: "Python",
    license: "BSD-3-Clause",
    stars: "2,500+",
    forks: "1,200+",
    features: ["Signal preprocessing", "Time-frequency analysis", "Visualization", "Format conversion"],
    install: "pip install mne",
    url: "https://github.com/mne-tools/mne-python",
    docs: "https://mne.tools/"
  },
  {
    name: "DeepSleepNet",
    description: "CNN-LSTM hybrid for automatic sleep staging",
    language: "Python/TensorFlow",
    license: "MIT",
    stars: "300+",
    forks: "120+",
    features: ["Single-channel EEG", "CNN-LSTM architecture", "Raw signal processing", "End-to-end training"],
    install: "git clone && pip install -r requirements.txt",
    url: "https://github.com/akaraspt/deepsleepnet",
    docs: "https://github.com/akaraspt/deepsleepnet#readme"
  },
  {
    name: "AttnSleep",
    description: "Attention-based deep learning for sleep stage classification",
    language: "Python/PyTorch",
    license: "MIT",
    stars: "180+",
    forks: "55+",
    features: ["Multi-resolution CNN", "Multi-head attention", "Interpretability", "Transfer learning"],
    install: "git clone && pip install -r requirements.txt",
    url: "https://github.com/emadeldeen24/AttnSleep",
    docs: "https://github.com/emadeldeen24/AttnSleep#readme"
  },
  {
    name: "SleepTransformer",
    description: "Pure transformer architecture with uncertainty quantification",
    language: "Python/PyTorch",
    license: "Apache 2.0",
    stars: "150+",
    forks: "40+",
    features: ["Transformer architecture", "Uncertainty estimation", "Interpretable attention", "Robust performance"],
    install: "git clone && pip install -r requirements.txt",
    url: "https://github.com/IoBT-VISTEC/SleepTransformer",
    docs: "https://github.com/IoBT-VISTEC/SleepTransformer#readme"
  }
];

export default function Code() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-hero-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Code Repository</h1>
          <p className="text-xl text-blue-100 font-body">
            Open-source tools and implementations for sleep medicine AI
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Repository Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {repositories.map((repo) => (
            <Card key={repo.name} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Github className="h-6 w-6" />
                  <h3 className="text-xl font-bold">{repo.name}</h3>
                </div>
                <Badge variant="outline">{repo.language}</Badge>
              </div>

              <p className="text-muted-foreground font-body mb-4">{repo.description}</p>

              <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4" />
                  {repo.stars}
                </div>
                <div className="flex items-center gap-1">
                  <GitFork className="h-4 w-4" />
                  {repo.forks}
                </div>
                <Badge variant="secondary" className="text-xs">{repo.license}</Badge>
              </div>

              <div className="mb-4">
                <h4 className="font-bold text-sm mb-2">Key Features:</h4>
                <div className="flex flex-wrap gap-2">
                  {repo.features.map((feature) => (
                    <Badge key={feature} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="bg-muted/50 p-3 rounded-lg font-mono text-sm mb-4">
                {repo.install}
              </div>

              <div className="flex gap-2">
                <a href={repo.url} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button variant="default" className="w-full" size="sm">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </a>
                <a href={repo.docs} target="_blank" rel="noopener noreferrer" className="flex-1">
                  <Button variant="outline" className="w-full" size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Docs
                  </Button>
                </a>
              </div>
            </Card>
          ))}
        </div>

        {/* Integration Guide */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Integration Workflow</h2>
          <Card className="p-8 bg-muted/30">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h4 className="font-bold mb-2">Data Loading</h4>
                <p className="text-sm text-muted-foreground font-body">Use MNE-Python or YASA to load PSG data from various formats</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-secondary">2</span>
                </div>
                <h4 className="font-bold mb-2">Preprocessing</h4>
                <p className="text-sm text-muted-foreground font-body">Apply filtering, artifact removal, and normalization pipelines</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-accent">3</span>
                </div>
                <h4 className="font-bold mb-2">Model Training</h4>
                <p className="text-sm text-muted-foreground font-body">Use U-Sleep, AttnSleep, or custom architectures for staging</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h4 className="font-bold mb-2">Evaluation</h4>
                <p className="text-sm text-muted-foreground font-body">Validate on held-out datasets and cross-dataset scenarios</p>
              </div>
            </div>
          </Card>
        </section>

        {/* Quick Start Guide */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Quick Start Guide</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center">
                <Download className="mr-2 h-5 w-5 text-primary" />
                Basic Sleep Staging Pipeline
              </h3>
              <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm space-y-2">
                <div className="text-muted-foreground"># Install dependencies</div>
                <div>pip install yasa mne numpy pandas</div>
                <div className="mt-2 text-muted-foreground"># Load and stage sleep data</div>
                <div>import yasa</div>
                <div>import mne</div>
                <div className="mt-2">raw = mne.io.read_raw_edf('sleep.edf')</div>
                <div>sls = yasa.SleepStaging(raw, eeg_name='EEG')</div>
                <div>hypno = sls.predict()</div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center">
                <Download className="mr-2 h-5 w-5 text-secondary" />
                Multimodal Feature Extraction
              </h3>
              <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm space-y-2">
                <div className="text-muted-foreground"># Extract features from multiple signals</div>
                <div>from yasa import sleep_statistics</div>
                <div>from sleepecg import extract_features</div>
                <div className="mt-2">eeg_features = extract_eeg_features(raw)</div>
                <div>ecg_features = extract_features(ecg_data)</div>
                <div>combined = concat([eeg_features, ecg_features])</div>
              </div>
            </Card>
          </div>
        </section>

        {/* Development Roadmap */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Development Roadmap</h2>
          <Card className="p-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">Q1</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Foundation Development</h4>
                  <p className="text-muted-foreground font-body">Core multimodal fusion architecture, baseline models on SHHS and MESA</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 bg-secondary/10 rounded-full flex items-center justify-center">
                    <span className="text-secondary font-bold">Q2</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Cross-Dataset Generalization</h4>
                  <p className="text-muted-foreground font-body">Domain adaptation modules, testing on ISRUC-Sleep and Sleep-EDF</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 bg-accent/10 rounded-full flex items-center justify-center">
                    <span className="text-accent font-bold">Q3</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-1">Missing Modality Robustness</h4>
                  <p className="text-muted-foreground font-body">Imputation networks, ablation studies, home monitoring validation</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">Q4</span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-1">OSA/CSA Subtyping & Deployment</h4>
                  <p className="text-muted-foreground font-body">CSA detection module, clinical validation, open-source release</p>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
