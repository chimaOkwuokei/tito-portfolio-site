'use client'

import { Card, CardContent } from "@/components/ui/card"
import aboutImage from '@/assets/about.jpg';
import keeleLogo from '@/assets/keele.jpg';
import alxLogo from '@/assets/alx.jpg';
import igbLogo from '@/assets/igbinedion.png';


export default function AboutSection() {
  const skills = [
    "Python", "LnagChain", "LangGraph", "HuggingFace", "MySQL", "PostgreSQL", "MongoDB", "Terraform", "Ansible", "Docker", "Git",
    "DVC", "MLflow", "Databricks", "Scikit - Learn", "PyTorch", "Tensorflow", "OpenCV", "Apache Spark", "Hadoop", "Databricks",
    "Flask", "FastAPI", "AWS"
  ]

  return (
    <div>
      <section id="about" className="min-h-screen py-24 px-6 max-w-screen-xl mx-auto text-[#C0C0C0]">
        <div className="flex flex-col lg:flex-row items-stretch gap-12">
          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center items-stretch">
            <img
              src={aboutImage}
              alt="Presenting"
              className="rounded-xl shadow-lg object-cover h-full w-full"
            />
          </div>


          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#ecb80d] mb-6">
              About Me
            </h2>

            <p className="mb-4 md:text-lg">
              Tito Osadebey is an AI Engineer specialising in inclusive machine learning, GenAI applications, and ethical AI system design. His work focuses on building intelligent solutions that are not only accurate, but culturally aware and globally relevant.
              open-source initiatives, and industrial applications.
            </p>
            <p className="mb-4 md:text-lg">
              Currently based in the UK, Tito has led and contributed to projects ranging from developing bias-aware image recognition models,
              to designing LLM-powered forecasting tools and deploying computer vision workflows on HPC systems for healthcare research. He combines technical expertise with human-centred design to ensure the AI systems
              he builds reflect the diversity of the real world.
            </p>
            <p className="mb-6 md:text-lg">
              His work has been featured on BBC Radio and in The Voice Newspaper UK, where he shared insights on AI inclusivity and the need for representative data in model training. He has also been invited to speak at conferences, universities and industry events.
            </p>

            {/* Skills */}
            <h3 className="text-xl font-semibold mb-4 text-white">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-3 mb-8">
              {skills.map((skill, i) => (
                <span key={i} className="bg-white/10 border border-white/20 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>

            {/* Education */}
            <h3 className="text-xl font-semibold mb-4 text-white">Education</h3>
            <div className="space-y-4">
              <Card className="bg-white/5 border border-white/10 text-[#C0C0C0]">
                <CardContent className="p-4">
                  <h4 className="text-lg font-semibold text-white">
                    MSc in Artificial Intelligence and Data Science - Distinction
                  </h4>
                  <div className="flex items-center gap-3 mt-1">
                    <img src={keeleLogo} alt="Keele University" className="rounded-full w-12 h-12 object-contain" />
                    <h3 className="text-lg">Keele University</h3>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border border-white/10 text-[#C0C0C0]">
                <CardContent className="p-4">
                  <h4 className="text-lg font-semibold text-white">AS Software Engineering</h4>
                  <div className="flex items-center gap-3 mt-1">
                    <img src={alxLogo} alt="ALX Africa" className="rounded-full w-12 h-12 object-contain" />
                    <h3 className="text-lg">Holberton School</h3>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border border-white/10 text-[#C0C0C0]">
                <CardContent className="p-4">
                  <h4 className="text-lg font-semibold text-white">BEng (Hons) in Mechanical Engineering - 2:1</h4>
                  <div className="flex items-center gap-3 mt-1">
                    <img src={igbLogo} alt="Igbinedion University" className="w-12 h-12 object-contain" />
                    <h3 className="text-lg">Igbinedion University</h3>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
