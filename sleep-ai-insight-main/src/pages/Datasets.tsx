import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Download, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const datasets = [
  {
    name: "SHHS (Sleep Heart Health Study)",
    subjects: "6,441 + 3,295",
    modalities: "EEG (C4-A1, C3-A2), ECG, SpO₂, respiratory signals",
    samplingRate: "125-250 Hz (EEG), 1 Hz (SpO₂)",
    csaAvailable: "Yes",
    access: "Open access via sleepdata.org",
    description: "Large multi-center cohort study focused on cardiovascular consequences of sleep disorders. Includes comprehensive CSA annotations making it ideal for OSA/CSA subtyping research.",
    url: "https://sleepdata.org/datasets/shhs",
    size: "~2 TB"
  },
  {
    name: "MESA (Multi-Ethnic Study of Atherosclerosis)",
    subjects: "2,237 studies",
    modalities: "Full PSG montage (15+ channels)",
    samplingRate: "256 Hz (EEG), 512 Hz (ECG)",
    csaAvailable: "Limited (~5%)",
    access: "Data use agreement required",
    description: "Multi-ethnic cohort with diverse population demographics. Excellent for studying population-level sleep patterns and cardiovascular relationships.",
    url: "https://sleepdata.org/datasets/mesa",
    size: "~1.5 TB"
  },
  {
    name: "ISRUC-Sleep",
    subjects: "118 subjects (100 patients, 18 healthy)",
    modalities: "EEG (6 channels @ 200 Hz), EOG, EMG, ECG",
    samplingRate: "200 Hz",
    csaAvailable: "No (sleep stages only)",
    access: "Direct download",
    description: "Well-curated dataset with expert annotations following AASM guidelines. Includes both healthy subjects and sleep disorder patients.",
    url: "http://sleeptight.isr.uc.pt/",
    size: "~50 GB"
  },
  {
    name: "Sleep-EDF",
    subjects: "197 recordings (2 cohorts)",
    modalities: "EEG @ 100 Hz, EOG, EMG",
    samplingRate: "100 Hz",
    csaAvailable: "No (R&K staging only)",
    access: "Open access PhysioNet",
    description: "Classic benchmark dataset widely used for sleep staging algorithm development. Follows Rechtschaffen & Kales (R&K) scoring rules.",
    url: "https://physionet.org/content/sleep-edfx/",
    size: "~8 GB"
  },
  {
    name: "Apnea-ECG",
    subjects: "70 recordings",
    modalities: "ECG @ 100 Hz, SpO₂",
    samplingRate: "100 Hz",
    csaAvailable: "No (OSA only)",
    access: "Open access PhysioNet",
    description: "Focused on ECG-based apnea detection. Includes minute-by-minute apnea annotations but lacks sleep staging information.",
    url: "https://physionet.org/content/apnea-ecg/",
    size: "~2 GB"
  },
  {
    name: "MIT-BIH Polysomnographic",
    subjects: "18 recordings",
    modalities: "ECG, EEG, EOG, EMG, respiratory",
    samplingRate: "250 Hz",
    csaAvailable: "Partial",
    access: "Open access PhysioNet",
    description: "Small but high-quality dataset with detailed annotations. Includes both OSA and CSA events with respiratory effort measurements.",
    url: "https://physionet.org/content/slpdb/",
    size: "~5 GB"
  },
  {
    name: "CAP Sleep Database",
    subjects: "108 subjects",
    modalities: "Full PSG with cyclic alternating pattern (CAP) annotations",
    samplingRate: "Variable (512-2048 Hz)",
    csaAvailable: "No",
    access: "Open access PhysioNet",
    description: "Specialized dataset for studying sleep microstructure and arousal patterns. Useful for advanced sleep stage transition analysis.",
    url: "https://physionet.org/content/capslpdb/",
    size: "~120 GB"
  },
  {
    name: "CHAT (Childhood Adenotonsillectomy Trial)",
    subjects: "1,638 children",
    modalities: "Full PSG montage",
    samplingRate: "Variable",
    csaAvailable: "Limited",
    access: "Data use agreement required",
    description: "Pediatric sleep study focused on adenotonsillectomy effects. Unique resource for developing age-specific sleep models.",
    url: "https://sleepdata.org/datasets/chat",
    size: "~800 GB"
  },
  {
    name: "CCSHS (Cleveland Children's Sleep and Health Study)",
    subjects: "509 children",
    modalities: "Full PSG with anthropometric data",
    samplingRate: "Variable",
    csaAvailable: "Partial",
    access: "Data use agreement required",
    description: "Pediatric cohort with extensive demographic and health measurements. Valuable for studying sleep-obesity relationships.",
    url: "https://sleepdata.org/datasets/ccshs",
    size: "~400 GB"
  },
  {
    name: "STAGES (Stance on Science and Engineering of Sleep Staging)",
    subjects: "5,000+ nights from multiple datasets",
    modalities: "Variable (unified preprocessing)",
    samplingRate: "Harmonized to common rates",
    csaAvailable: "Variable",
    access: "Data use agreement required",
    description: "Meta-dataset combining multiple sources with standardized preprocessing. Excellent for large-scale cross-dataset studies.",
    url: "https://www.stages.net/",
    size: "~3 TB"
  }
];

export default function Datasets() {
  const [expandedDataset, setExpandedDataset] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-hero-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Sleep Datasets</h1>
          <p className="text-xl text-blue-100 font-body">
            Comprehensive overview of publicly available sleep disorder datasets
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* CSA Scarcity Warning */}
        <Card className="p-6 mb-8 border-l-4 border-destructive bg-destructive/5">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-6 w-6 text-destructive mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg mb-2">CSA Data Scarcity Challenge</h3>
              <p className="text-muted-foreground font-body mb-3">
                Central sleep apnea (CSA) annotations are available in only 3-5% of public sleep datasets, compared to 
                70-80% availability for OSA. This creates significant challenges for developing robust CSA detection algorithms.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="font-bold text-destructive">OSA-Rich Datasets</div>
                  <div className="text-muted-foreground font-body">SHHS, Apnea-ECG, MESA</div>
                </div>
                <div>
                  <div className="font-bold text-destructive">CSA-Annotated</div>
                  <div className="text-muted-foreground font-body">SHHS (primary), MIT-BIH (limited)</div>
                </div>
                <div>
                  <div className="font-bold text-destructive">Our Approach</div>
                  <div className="text-muted-foreground font-body">Transfer learning from OSA to CSA</div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Dataset Cards */}
        <div className="space-y-4">
          {datasets.map((dataset) => (
            <Card key={dataset.name} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{dataset.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">{dataset.subjects} subjects</Badge>
                      <Badge variant={dataset.csaAvailable === "Yes" ? "default" : dataset.csaAvailable === "No" ? "secondary" : "outline"}>
                        CSA: {dataset.csaAvailable}
                      </Badge>
                      <Badge variant="outline">{dataset.size}</Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <a href={dataset.url} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Access
                      </Button>
                    </a>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setExpandedDataset(expandedDataset === dataset.name ? null : dataset.name)}
                    >
                      {expandedDataset === dataset.name ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </Button>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="font-bold text-muted-foreground mb-1">Modalities</div>
                    <div className="font-body">{dataset.modalities}</div>
                  </div>
                  <div>
                    <div className="font-bold text-muted-foreground mb-1">Sampling Rate</div>
                    <div className="font-body">{dataset.samplingRate}</div>
                  </div>
                  <div>
                    <div className="font-bold text-muted-foreground mb-1">Access</div>
                    <div className="font-body">{dataset.access}</div>
                  </div>
                </div>

                {expandedDataset === dataset.name && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-muted-foreground font-body">{dataset.description}</p>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Download Instructions */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Download & Usage Instructions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center">
                <Download className="mr-2 h-5 w-5 text-primary" />
                Quick Start - SHHS Dataset
              </h3>
              <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm mb-4">
                <div className="text-muted-foreground"># Install dependencies</div>
                <div>pip install wfdb mne numpy</div>
                <div className="mt-2 text-muted-foreground"># Download sample data</div>
                <div>wget https://sleepdata.org/datasets/shhs/files/...</div>
              </div>
              <p className="text-sm text-muted-foreground font-body">
                SHHS provides comprehensive polysomnography data with CSA annotations. Ideal starting point for multimodal research.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="font-bold text-lg mb-4 flex items-center">
                <Download className="mr-2 h-5 w-5 text-secondary" />
                Preprocessing Pipeline
              </h3>
              <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm mb-4">
                <div className="text-muted-foreground"># Load and preprocess</div>
                <div>from yasa import load_profusion</div>
                <div>data = load_profusion('recording.edf')</div>
                <div className="mt-2 text-muted-foreground"># Extract features</div>
                <div>features = extract_sleep_features(data)</div>
              </div>
              <p className="text-sm text-muted-foreground font-body">
                Use YASA or MNE-Python for signal preprocessing and feature extraction across different datasets.
              </p>
            </Card>
          </div>
        </section>

        {/* Dataset Comparison */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Dataset Comparison Matrix</h2>
          <Card className="p-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 font-bold">Dataset</th>
                  <th className="text-left py-3 font-bold">Subjects</th>
                  <th className="text-left py-3 font-bold">CSA</th>
                  <th className="text-left py-3 font-bold">Modalities</th>
                  <th className="text-left py-3 font-bold">Best For</th>
                </tr>
              </thead>
              <tbody className="font-body">
                <tr className="border-b border-border">
                  <td className="py-3 font-bold">SHHS</td>
                  <td className="py-3">9,700+</td>
                  <td className="py-3"><Badge variant="default">Yes</Badge></td>
                  <td className="py-3">4+</td>
                  <td className="py-3">OSA/CSA subtyping, large-scale training</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 font-bold">MESA</td>
                  <td className="py-3">2,237</td>
                  <td className="py-3"><Badge variant="outline">Limited</Badge></td>
                  <td className="py-3">15+</td>
                  <td className="py-3">Multi-ethnic studies, full PSG</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 font-bold">ISRUC-Sleep</td>
                  <td className="py-3">118</td>
                  <td className="py-3"><Badge variant="secondary">No</Badge></td>
                  <td className="py-3">4</td>
                  <td className="py-3">Sleep staging benchmarks</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 font-bold">Sleep-EDF</td>
                  <td className="py-3">197</td>
                  <td className="py-3"><Badge variant="secondary">No</Badge></td>
                  <td className="py-3">3</td>
                  <td className="py-3">Quick prototyping, R&K staging</td>
                </tr>
                <tr>
                  <td className="py-3 font-bold">Apnea-ECG</td>
                  <td className="py-3">70</td>
                  <td className="py-3"><Badge variant="secondary">No</Badge></td>
                  <td className="py-3">2</td>
                  <td className="py-3">ECG-only apnea detection</td>
                </tr>
              </tbody>
            </table>
          </Card>
        </section>
      </div>
    </div>
  );
}
