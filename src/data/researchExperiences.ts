export type ResearchSubproject = {
  title: string;
  highlights: string[];
};

export type ResearchExperience = {
  role: string;
  period: string;
  title?: string;
  organization?: string;
  highlights?: string[];
  subprojects?: ResearchSubproject[];
  tags: string[];
};

export const researchExperiences: ResearchExperience[] = [
  {
    role: "Principal Investigator",
    period: "2020-2022",
    title:
      "Guangdong Provincial Science and Technology Innovation Strategic Special Fund, Hippocampus MRI Segmentation",
    highlights: [
      "Awarded RMB 15,000 in provincial research funding to lead a two-year project on deep-learning-based hippocampus MRI segmentation.",
      "Designed and implemented a medical image segmentation pipeline for hippocampal MRI volumes, including data preprocessing, model development, training, evaluation, and result analysis.",
      "Investigated 3D CNNs, U-Net-based architectures, and residual learning methods for anatomical structure segmentation in brain MRI.",
      "Evaluated segmentation performance using medical image analysis metrics and prepared research reports on model behaviour, experimental results, and limitations.",
    ],
    tags: ["Medical Image Segmentation", "Brain MRI", "Hippocampus", "3D CNN", "U-Net"],
  },
  {
    role: "Team Member",
    period: "2018-2019",
    title: "3D U-Net-Based Detection and Segmentation of Human Hippocampus MRI Volumes",
    highlights: [
      "Contributed to a medical image segmentation project focused on detecting and segmenting human hippocampus structures from volumetric MRI data.",
      "Implemented project modules for 3D MRI preprocessing, segmentation model testing, and experimental result analysis.",
      "Worked with 3D U-Net-based segmentation methods and evaluation procedures for anatomical structure segmentation.",
      "Extended this work into subsequent funded research on deep-learning-based hippocampus MRI segmentation.",
    ],
    tags: ["3D U-Net", "Volumetric MRI", "Hippocampus Segmentation", "Medical Image Analysis"],
  },
  {
    role: "Team Member",
    period: "2025",
    title: "Aerial Scene Classification Based on KANs Networks",
    highlights: [
      "Designed and implemented comparative experiments for aerial scene classification using KANs and more than ten hybrid deep learning models.",
      "Built the full experimental pipeline, including image preprocessing, feature modelling, model training, evaluation, and comparative analysis.",
      "Explored neural architecture design and model comparison for visual representation learning in remote sensing image classification.",
      "Developed a KAN-based hybrid model that achieved a peak classification F1 of 0.8880.",
    ],
    tags: ["KANs", "Aerial Scene Classification", "Representation Learning", "Neural Architecture Design"],
  },
  {
    role: "Research Assistant",
    period: "2019-2021",
    title: "Artificial Intelligence and Image Recognition Laboratory",
    organization: "Guangzhou College of Commerce",
    highlights: [
      "Worked part-time in a newly established university laboratory focused on artificial intelligence and image recognition.",
      "Supported computer vision and image processing research activities, including model implementation, experiment support, and result analysis.",
      "Assisted with research tasks related to AI-based visual recognition, including literature review, data processing, and experimental documentation.",
    ],
    tags: ["Computer Vision", "Image Processing", "AI Laboratory", "Research Support"],
  },
  {
    role: "Project Leader",
    period: "2019-2021",
    title: "Provincial Undergraduate Innovation and Entrepreneurship Project: AI-Based Gait Recognition",
    highlights: [
      "Led a computer vision project on AI-based gait recognition, covering data collection, annotation protocol design, model training, evaluation, and comparative experiments.",
      "Built an end-to-end deep learning pipeline for human gait recognition from raw data preparation to model validation.",
      "Coordinated project tasks and experimental planning for model training, evaluation, and comparative analysis.",
    ],
    tags: ["Gait Recognition", "Deep Learning", "Data Annotation", "Model Evaluation"],
  },
];
