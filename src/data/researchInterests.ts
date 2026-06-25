export type ResearchInterest = {
  title: string;
  description: string;
};

export const researchInterests: ResearchInterest[] = [
  {
    title: "Medical Image Analysis",
    description:
      "Deep learning methods for extracting reliable structure and signal from biomedical imaging data.",
  },
  {
    title: "Representation Learning",
    description:
      "Robust visual features that remain useful across anatomy, imaging protocols, and downstream tasks.",
  },
  {
    title: "Medical Image Segmentation",
    description:
      "Segmentation pipelines for anatomical structures, with emphasis on reliability and clinically meaningful boundaries.",
  },
  {
    title: "Reliable Computer Vision",
    description:
      "Model behavior under data shifts, limited labels, and domain variation in biomedical and visual recognition settings.",
  },
  {
    title: "Neural Network Architectures",
    description:
      "Architecture design for biomedical data, including residual, convolutional, and hybrid representation pipelines.",
  },
  {
    title: "Self-supervised / Contrastive Learning",
    description:
      "Pretraining and representation objectives for biomedical data where high-quality annotations are expensive.",
  },
];
