export type PublicationLink = {
  label: "DOI" | "PDF" | "Code" | "Project";
  href: string;
};

export type Publication = {
  title: string;
  authors: string[];
  venue: string;
  year: string;
  status: string;
  keywords: string[];
  links: PublicationLink[];
};

export const publications: Publication[] = [
  {
    title:
      "A Non-Invasive EEG-EMG-Vision Shared-Control Framework for Reducing Everyday Burden in Upper-Limb Prosthesis Use",
    authors: ["Changrun Jia"],
    venue:
      "2026 IEEE 5th International Conference on Information Technology, Big Data and Artificial Intelligence (ICIBA 2026)",
    year: "2026.5",
    status: "Accepted; conference proceedings pending publication",
    keywords: ["EEG", "EMG", "Vision-guided Shared Control", "Upper-limb Prosthesis", "Multimodal AI"],
    links: [],
  },
  {
    title:
      "Behaviour-Conditioned Energy-Based Reconstruction of Natural Movies from V1 Population Activity: A Unified DNEM-EBT Framework",
    authors: ["Changrun Jia"],
    venue: "Manuscript in progress",
    year: "2026",
    status: "In progress",
    keywords: ["Natural Movie Reconstruction", "V1 Population Activity", "DNEM", "Energy-Based Transformer", "Neural Decoding"],
    links: [],
  },
  {
    title: "Combining Residual Learning and U-Net for Hippocampus Segmentation of Brain MRI Volume Image",
    authors: ["C. Jia", "Changrun Jia", "H. Yu"],
    venue: "The 2020 4th International Conference on Deep Learning Technologies, 2020, p.94-98; New York, NY, USA: ACM",
    year: "2020",
    status: "Published",
    keywords: ["Medical Image Analysis", "3D CNN", "U-Net", "Dice Similarity Coefficient", "Hippocampus"],
    links: [{ label: "DOI", href: "https://doi.org/10.1145/3417188.3417191" }],
  },
  {
    title: "Combining Sequence Learning and Dilated Convolution Network for Hippocampus Segmentation",
    authors: ["C. Jia", "Changrun Jia", "J. Wei"],
    venue: "IEEE Advanced Information Technology, Electronic and Automation Control Conference (IAEAC), 2021, Vol.5, p.844-849.",
    year: "2021",
    status: "Published",
    keywords: ["Medical Image Analysis", "Sequence Modelling", "Dilated Convolution", "Hippocampus MRI Segmentation"],
    links: [{ label: "DOI", href: "https://doi.org/10.1109/IAEAC50856.2021.9390902" }],
  },
  {
    title: "Image Saliency Detection Based on Background Prior and Multi-feature Fusion",
    authors: ["C. Jia", "Changrun Jia", "F. Kong"],
    venue: "2020 5th IEEE International Conference on Big Data Analytics (ICBDA), 2020, p.276-281; Xiamen, FJ, CN.",
    year: "2020",
    status: "Published",
    keywords: ["Saliency Detection", "Background Prior", "Multi-feature Fusion", "Computer Vision"],
    links: [{ label: "DOI", href: "https://doi.org/10.1109/ICBDA49040.2020.9101263" }],
  },
  {
    title: "Three-dimensional Segmentation of Hippocampus in Brain MRI Images Based on 3CN-Net",
    authors: ["C. Jia", "D. Liu", "F. Kong", "Changrun Jia"],
    venue: "The 2019 3rd International Conference on Innovation in Artificial Intelligence, 2019, p.17-20; New York, NY, USA: ACM.",
    year: "2019",
    status: "Published",
    keywords: ["Brain MRI", "3D Convolutional Network", "3CN-Net", "Volumetric Segmentation"],
    links: [{ label: "DOI", href: "https://doi.org/10.1145/3319921.3319941" }],
  },
];
