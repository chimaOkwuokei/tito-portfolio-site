'use client'

import { Card, CardContent } from "@/components/ui/card"

export default function Experience() {
  const experience = [
    {
      title: "Research Assistant",
      company: "Keele University",
      location: "UK",
      date: "Oct 2024 – Present",
      bullets: [
        "Utilizing computer vision for animal health monitoring in collaboration with healthcare researchers.",
        "Collected and preprocessed video data, extracting and labeling frames for training a robust dataset.",
        "Designed and trained a computer vision model to detect and analyze animal movements.",
        "Evaluated model performance using advanced metrics and video-based assessments of muscle-wasting conditions."
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Bitnine Global Inc.",
      location: "Remote",
      date: "Mar 2023 – Aug 2023",
      bullets: [
        "Contributed to open-source development for Apache AGE and AGE Viewer, resolving 15+ technical issues.",
        "Co-authored core algorithms integrating Apache AGE with NetworkX for advanced graph data analysis.",
        "Wrote comprehensive technical documentation and improved developer onboarding.",
        "Optimized Docker Compose setup, reducing environment setup time and increasing team productivity."
      ]
    },
    {
      title: "Machine Learning Contributor",
      company: "Unify",
      location: "Remote",
      date: "Nov 2022 – Mar 2023",
      bullets: [
        "Developed and integrated new functions into Ivy’s math module to improve algorithm efficiency.",
        "Collaborated with core team to refactor computational backend, improving model interpretability and performance.",
        "Helped design cross-framework compatibility features for TensorFlow, PyTorch, and JAX.",
        "Created reproducible code examples and documentation for new contributors."
      ]
    },
    {
      title: "Computer Vision Engineer",
      company: "ProxMaq Foundation",
      location: "Remote",
      date: "Nov 2022 – Jan 2023",
      bullets: [
        "Built deep learning-based object recognition, currency detection, and image segmentation features for ProxVision smart glasses.",
        "Optimized models for real-time inference on edge devices to assist visually impaired users.",
        "Worked with cross-functional teams to align technology with accessibility goals."
      ]
    },
    {
      title: "Mechanical Engineer",
      company: "Coop Property Development Company Ltd.",
      location: "Lagos, Nigeria",
      date: "Jun 2021 – Nov 2022",
      bullets: [
        "Led a team of 10+ to deliver residential construction projects on time and within budget.",
        "Oversaw design and implementation of MEP systems for multimillion-naira building projects.",
        "Managed project timelines, procurement, and cross-team coordination."
      ]
    }
  ];


  return (
    <div className="bg-gradient-to-r from-black to-black/80">
      <section id="experience" className="py-24 px-6 max-w-screen-xl mx-auto text-[#C0C0C0]">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#ecb80d]">
            Experiences
          </h2>
          {/* <p className="mt-2 text-white/70 max-w-2xl mx-auto">
            My journey in AI and software development, from internships to senior engineering roles
          </p> */}
        </div>

        <div className="relative flex flex-col lg:grid lg:grid-cols-2 gap-12">
          {experience.map((role, index) => (
            <Card
              key={index}
              className="bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{role.title}</h3>
                    <p className="text-md text-[#FFD700] font-medium">{role.company}</p>
                  </div>
                  <span className="text-md text-white">{role.location}</span>
                </div>
                <p className="text-md text-white">{role.date}</p>
                <ul className="text-white list-disc list-inside space-y-2 text-md">
                  {role.bullets.map((point, i) => (
                    <li key={i} className="leading-relaxed">{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
