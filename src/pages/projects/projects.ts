export interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Data Pipeline Optimization",
    description: "Developed a scalable ETL pipeline using Apache Airflow and AWS services, improving data processing efficiency by 40%.",
    technologies: ["Python", "Apache Airflow", "AWS", "SQL"],
    link: "https://github.com/yourusername/data-pipeline-project"
  },
  {
    title: "AI-Powered Medical Image Analysis",
    description: "Created a deep learning model for automated diagnosis of lung diseases from X-ray images, achieving 95% accuracy.",
    technologies: ["Python", "TensorFlow", "OpenCV", "Docker"],
    link: "https://github.com/yourusername/medical-image-ai"
  },
  {
    title: "Real-time Analytics Dashboard",
    description: "Built a responsive web dashboard for real-time data visualization using React and D3.js, integrated with a backend API.",
    technologies: ["React", "D3.js", "Node.js", "Express", "MongoDB"],
    link: "https://github.com/yourusername/analytics-dashboard"
  }
];
