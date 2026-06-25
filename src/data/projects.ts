export type Project = {
  title: string;
  description: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Deployable Safeguard Multi-Asset AI Financial Research Assistant",
    description:
      "Served as a team member on a modular AI research assistant system using Docker Compose, React, FastAPI, and TimescaleDB. The system used APScheduler for market, news, and social media ETL, integrated FinBERT / Twitter-RoBERTa sentiment analysis, Prophet + XGBoost forecasting services, configurable LSTM / GRU / Transformer support, and 30-day rolling Pearson correlation analysis.",
    tags: [
      "Team Member",
      "2025.9-2026.1",
      "React",
      "FastAPI",
      "TimescaleDB",
      "FinBERT",
      "XGBoost",
      "Time-series",
    ],
  },
  {
    title: "Emotion Recognition and Fine-Grained Classification from Tweets",
    description:
      "Designed and implemented a Transformer + BiLSTM hybrid model for emotion recognition and fine-grained classification from short, noisy, and informal tweet text. The model integrated embedding layers, sinusoidal positional encoding, Transformer blocks, BiLSTM layers, residual connections, LayerNorm, and multi-scale pooling strategies, achieving balanced accuracy of 94.95%.",
    tags: [
      "Team Member",
      "2025",
      "Transformer",
      "BiLSTM",
      "Attention Pooling",
      "NLP",
      "Emotion Recognition",
    ],
  },
  {
    title:
      "National Undergraduate Innovation and Entrepreneurship Training Program: Web Based Face Recognition Attendance System",
    description:
      "Led a web-based face recognition attendance system for university library scenarios, covering requirement analysis, algorithm selection and integration, system deployment, debugging, and final project completion. The project integrated computer vision models into a usable web application with attention to system reliability, testing, and real-world deployment constraints.",
    tags: ["Project Leader", "2019-2021", "Face Recognition", "Computer Vision", "Web Application"],
  },
];
