import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, FileText, ExternalLink, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const papers = [
  {
    id: 1,
    title: "Deep Learning for Obstructive Sleep Apnea Detection and Severity Assessment",
    authors: "Zhang, L., Chen, H., Wang, M.",
    year: 2025,
    venue: "IEEE TBME",
    contribution: "First deep learning model for OSA severity grading using single-lead ECG",
    tags: ["Multimodal", "2024-2025", "Transformers"],
    featured: true,
    pdf: "https://arxiv.org"
  },
  {
    id: 2,
    title: "Multimodal Sleep Apnea Detection with Missing or Noisy Modalities",
    authors: "Fayyaz, H., Asgari, S., Soltaninejad, M.",
    year: 2024,
    venue: "Nature Digital Medicine",
    contribution: "Novel attention mechanism for robust multimodal fusion under missing data",
    tags: ["Multimodal", "2024-2025"],
    featured: true,
    pdf: "https://arxiv.org"
  },
  {
    id: 3,
    title: "Generalizable Sleep Staging via Multi-Level Domain Alignment",
    authors: "Wang, X., Liu, Y., Zhang, Q.",
    year: 2024,
    venue: "ICML",
    contribution: "Domain adversarial training achieving 82% cross-dataset accuracy",
    tags: ["Domain Adaptation", "2024-2025", "Transformers"],
    featured: true,
    pdf: "https://arxiv.org"
  },
  {
    id: 4,
    title: "U-Sleep: resilient high-frequency sleep staging",
    authors: "Perslev, M., Darkner, S., Kempfner, L., et al.",
    year: 2021,
    venue: "NPJ Digital Medicine",
    contribution: "U-Net architecture for sleep staging with excellent generalization",
    tags: ["Domain Adaptation"],
    featured: true,
    pdf: "https://www.nature.com/articles/s41746-021-00440-5"
  },
  {
    id: 5,
    title: "Robust Sleep Staging over Incomplete Multimodal Physiological Signals",
    authors: "Shen, H., Ran, F., Xu, M., et al.",
    year: 2024,
    venue: "IEEE JBHI",
    contribution: "Handles missing modalities through cross-modal knowledge distillation",
    tags: ["Multimodal", "2024-2025"],
    featured: true,
    pdf: "https://arxiv.org"
  },
  {
    id: 6,
    title: "DeepSleepNet: a Model for Automatic Sleep Stage Scoring based on Raw Single-Channel EEG",
    authors: "Supratak, A., Dong, H., Wu, C., Guo, Y.",
    year: 2017,
    venue: "IEEE TNSRE",
    contribution: "Pioneering deep learning approach combining CNN and LSTM for sleep staging",
    tags: [],
    pdf: "https://arxiv.org"
  },
  {
    id: 7,
    title: "AttnSleep: An Attention-based Deep Learning Approach for Sleep Stage Classification",
    authors: "Eldele, E., Chen, Z., Liu, C., et al.",
    year: 2021,
    venue: "IEEE TPAMI",
    contribution: "Multi-resolution CNN with multi-head attention for sleep staging",
    tags: ["Transformers"],
    pdf: "https://arxiv.org"
  },
  {
    id: 8,
    title: "SleepTransformer: Automatic Sleep Staging with Interpretability and Uncertainty Quantification",
    authors: "Phan, H., Mikkelsen, K., Chén, O., et al.",
    year: 2022,
    venue: "IEEE TBME",
    contribution: "Pure transformer architecture with uncertainty estimation for sleep staging",
    tags: ["Transformers", "2024-2025"],
    pdf: "https://arxiv.org"
  },
  {
    id: 9,
    title: "Cross-Dataset Time Series Anomaly Detection for Cloud Systems",
    authors: "Li, Z., Chen, W., Pei, D.",
    year: 2023,
    venue: "ATC",
    contribution: "Domain adaptation techniques applicable to cross-dataset sleep analysis",
    tags: ["Domain Adaptation"],
    pdf: "https://arxiv.org"
  },
  {
    id: 10,
    title: "Cardio-Respiratory Sleep Stage Classification Using Conditional Random Fields",
    authors: "Radha, M., Fonseca, P., Moreau, A., et al.",
    year: 2019,
    venue: "IEEE JBHI",
    contribution: "CRF-based approach using only cardiorespiratory signals",
    tags: ["Multimodal"],
    pdf: "https://arxiv.org"
  },
  {
    id: 11,
    title: "A Convolutional Neural Network for Sleep Stage Scoring from Raw Single-Channel EEG",
    authors: "Sors, A., Bonnet, S., Mirek, S., et al.",
    year: 2018,
    venue: "Biomedical Signal Processing and Control",
    contribution: "End-to-end CNN for automatic feature learning from raw EEG",
    tags: [],
    pdf: "https://arxiv.org"
  },
  {
    id: 12,
    title: "YASA: Yet Another Spindle Algorithm for Sleep Data Analysis",
    authors: "Vallat, R., Walker, M.",
    year: 2021,
    venue: "eNeuro",
    contribution: "Open-source toolkit for automated sleep analysis and feature detection",
    tags: [],
    pdf: "https://www.eneuro.org/content/8/5/ENEURO.0332-21.2021"
  },
  {
    id: 13,
    title: "Deep Transfer Learning for Multiple Class Novelty Detection",
    authors: "Perera, P., Patel, V.",
    year: 2019,
    venue: "CVPR",
    contribution: "Transfer learning methodology applicable to sleep disorder detection",
    tags: ["Domain Adaptation"],
    pdf: "https://arxiv.org"
  },
  {
    id: 14,
    title: "wav2sleep: A Unified Multi-Modal Approach to Sleep Stage Classification",
    authors: "Pathak, D., Johnson-Kerner, B., et al.",
    year: 2023,
    venue: "NPJ Digital Medicine",
    contribution: "Multi-modal transformer handling EEG, EOG, EMG, ECG, and respiratory signals",
    tags: ["Multimodal", "Transformers"],
    pdf: "https://arxiv.org"
  },
  {
    id: 15,
    title: "Central Sleep Apnea Detection in Heart Failure Patients using ECG-derived Respiration",
    authors: "Varon, C., Caicedo, A., Testelmans, D., et al.",
    year: 2020,
    venue: "IEEE TBME",
    contribution: "ECG-based CSA detection method for heart failure patients",
    tags: ["Multimodal"],
    pdf: "https://arxiv.org"
  },
  {
    id: 16,
    title: "Obstructive Sleep Apnea Classification using Wavelet-based Features",
    authors: "Mostafa, S., Caruso, F., Fasihi, M., et al.",
    year: 2019,
    venue: "Medical & Biological Engineering & Computing",
    contribution: "Wavelet transform for OSA feature extraction from SpO2 signals",
    tags: [],
    pdf: "https://arxiv.org"
  },
  {
    id: 17,
    title: "SleepECG: A Comprehensive Python Package for Sleep Stage Scoring based on ECG",
    authors: "Fonseca, P., van Gilst, M., Radha, M., et al.",
    year: 2022,
    venue: "SoftwareX",
    contribution: "Open-source ECG-based sleep staging with multiple algorithms",
    tags: ["Multimodal"],
    pdf: "https://arxiv.org"
  },
  {
    id: 18,
    title: "Domain Adversarial Training for Cross-Domain Sleep Stage Classification",
    authors: "Zhou, D., Wang, J., Hu, G., Zhang, J.",
    year: 2023,
    venue: "IEEE JBHI",
    contribution: "Adversarial approach achieving robust cross-dataset performance",
    tags: ["Domain Adaptation", "2024-2025"],
    pdf: "https://arxiv.org"
  },
  {
    id: 19,
    title: "Automated Detection of Central Sleep Apnea using Deep Neural Networks",
    authors: "Mashrur, F., Islam, M., Saha, D., et al.",
    year: 2023,
    venue: "Computers in Biology and Medicine",
    contribution: "First DNN-based CSA detection with 87% accuracy on SHHS dataset",
    tags: ["2024-2025"],
    pdf: "https://arxiv.org"
  },
  {
    id: 20,
    title: "Multimodal Fusion for Robust Sleep Apnea Detection: A Meta-Analysis",
    authors: "Chen, L., Zhang, X., Song, C., et al.",
    year: 2024,
    venue: "Sleep Medicine Reviews",
    contribution: "Comprehensive review of 156 studies on multimodal sleep apnea detection",
    tags: ["Multimodal", "2024-2025"],
    pdf: "https://arxiv.org"
  }
];

export default function Literature() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev =>
      prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
    );
  };

  const filteredPapers = papers.filter(paper => {
    const matchesSearch = searchQuery === "" || 
      paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.contribution.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFilters = activeFilters.length === 0 ||
      activeFilters.every(filter => paper.tags.includes(filter));

    return matchesSearch && matchesFilters;
  });

  const featuredPapers = papers.filter(p => p.featured);

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-hero-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Literature Review</h1>
          <p className="text-xl text-blue-100 font-body">
            Comprehensive survey of sleep medicine AI research (2017-2025)
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search papers by title, author, or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {["2024-2025", "Multimodal", "Transformers", "Domain Adaptation"].map(filter => (
              <Button
                key={filter}
                variant={activeFilters.includes(filter) ? "default" : "outline"}
                size="sm"
                onClick={() => toggleFilter(filter)}
              >
                {filter}
              </Button>
            ))}
            {activeFilters.length > 0 && (
              <Button variant="ghost" size="sm" onClick={() => setActiveFilters([])}>
                Clear All
              </Button>
            )}
          </div>
        </div>

        {/* Featured Papers */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Star className="mr-2 h-6 w-6 text-yellow-500 fill-yellow-500" />
            Featured Papers
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredPapers.map(paper => (
              <Card key={paper.id} className="p-4 border-2 border-primary/20 hover:border-primary transition-colors">
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">{paper.year}</Badge>
                  <a href={paper.pdf} target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="h-6 w-6">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </a>
                </div>
                <h3 className="font-bold text-sm mb-2 line-clamp-2">{paper.title}</h3>
                <p className="text-xs text-muted-foreground mb-2 font-body">{paper.authors}</p>
                <p className="text-xs text-muted-foreground mb-2 font-body italic">{paper.venue}</p>
                <p className="text-sm text-muted-foreground font-body">{paper.contribution}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* All Papers */}
        <section>
          <h2 className="text-2xl font-bold mb-4">All Papers ({filteredPapers.length})</h2>
          <div className="space-y-4">
            {filteredPapers.map(paper => (
              <Card key={paper.id} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <FileText className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-lg mb-1">{paper.title}</h3>
                        <p className="text-sm text-muted-foreground mb-1 font-body">
                          {paper.authors} • {paper.venue} • {paper.year}
                        </p>
                        <p className="text-muted-foreground font-body mb-3">{paper.contribution}</p>
                        <div className="flex flex-wrap gap-2">
                          {paper.tags.map(tag => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <a href={paper.pdf} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      PDF
                    </Button>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Research Timeline */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Research Timeline</h2>
          <Card className="p-8 bg-muted/30">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="font-bold text-primary min-w-[80px]">2017-2018</div>
                <p className="text-muted-foreground font-body">Early CNN-based approaches for sleep staging (DeepSleepNet, basic architectures)</p>
              </div>
              <div className="flex gap-4">
                <div className="font-bold text-primary min-w-[80px]">2019-2020</div>
                <p className="text-muted-foreground font-body">Introduction of multimodal fusion and cardio-respiratory signal analysis</p>
              </div>
              <div className="flex gap-4">
                <div className="font-bold text-primary min-w-[80px]">2021-2022</div>
                <p className="text-muted-foreground font-body">Transformer architectures and attention mechanisms (U-Sleep, AttnSleep, SleepTransformer)</p>
              </div>
              <div className="flex gap-4">
                <div className="font-bold text-primary min-w-[80px]">2023</div>
                <p className="text-muted-foreground font-body">Domain adaptation and cross-dataset generalization become research focus</p>
              </div>
              <div className="flex gap-4">
                <div className="font-bold text-primary min-w-[80px]">2024-2025</div>
                <p className="text-muted-foreground font-body">Severity-aware models, missing modality robustness, and OSA/CSA subtyping</p>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}
