export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Cover Letter Generator",
    description: "Make cover letters utilizing LLM for job applications based on your ATS resume and job description. Deployed on Hugging Face Space.",
    tech: ["Python", "LangChain", "Gradio"],
    link: "https://huggingface.co/spaces/0xrsydn/cover-letter-gen-v2"
  },
  {
    title: "CV Roast",
    description: "CV roasting app to make fun of your CV or your friends' CV by LLM. Developed with my friend as fun project. I was responsible for backend development. I wrap LLM in FastAPI as roast output.",
    tech: ["Python", "FastAPI", "NextJS", "Tailwind CSS", "React"],
    link: "https://cv-roast.my.id/"
  },
  {
    title: "Llava-1.5-Liveness-7b : A Vision Language Model for Liveness Detection",
    description: "Fine-tuned Llava-1.5-7b base model for liveness detection, utilizing GPT-4 for dataset augmentation. Developed as team project for the Bank Indonesia Hackathon.",
    tech: ["Python", "Transformers", "Gradio"],
    link: "https://github.com/MuhFaridanSutariya/llava-1.5-liveness-7b"
  },
  {
    title: "Magic Resume: Job Matching Platform Powered by LLM",
    description: "Developed a job matching app as hackathon team project (my part was frontend) leveraging Llama3 for resume parsing and job description understanding. This platform aims to streamline the job application process by matching candidates with suitable job opportunities.",
    tech: ["NextJS", "Tailwind CSS", "React"],
    link: "https://github.com/0xrsydn/magicresume-ui"
  },
  {
    title: "Smart Parking System based on IoT for Parking Slot Availability Detection",
    description: "Led IoT smart parking system using ESP32 and Ultrasonic Sensor for detecting parking slot occupancy and displaying the availability on Web Dashboard. This project was part of a team project for DTETI Capstone Design Expo.",
    tech: ["ESP32", "Raspberry Pi", "MQTT", "HTML", "CSS", "JavaScript"],
    link: "https://youtu.be/4_dHtjhiKQ4?si=1NlEfvyCM84TnA5H"
  },
  {
    title: "Solana Ore Miner",
    description: "Shell script of $ORE mining, PoW coin similar to Bitcoin on Solana blockchain.",
    tech: ["Shell"],
    link: "https://github.com/0xrsydn/ore-miner"
  }
];
