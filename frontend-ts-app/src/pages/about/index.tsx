'use client'

import { Card, CardContent } from "@/components/ui/card"
import aboutImage from '@/assets/about.jpg';
import keeleLogo from '@/assets/keele.jpg';
import alxLogo from '@/assets/alx.jpg';
import igbLogo from '@/assets/igbinedion.png';


export default function AboutSection() {
  const skills = [
    "Linux", "Windows", "C",
    "Python", "HTML", "CSS", "MySQL", "PostgreSQL", "MongoDB", "Terraform", "Ansible", "Docker", "Git",
    "DVC", "MLflow", "Databricks", "Scikit - Learn", "PyTorch", "Tensorflow", "OpenCV", "Apache Spark", "Hadoop", "Databricks",
    "Flask", "FastAPI", "AWS"
  ]

  return (
    <div className="bg-gradient-to-r from-black to-black/80">
      <section id="about" className="py-24 px-6 max-w-screen-xl mx-auto text-[#C0C0C0]">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={aboutImage}
              alt="Presenting"
              width={500}
              height={800}
              className="rounded-xl shadow-lg object-cover max-h-[800px] w-auto"
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#ecb80d] mb-6">
              About Me
            </h2>

            <p className="mb-4 md:text-lg">
              Passionate AI Engineer with 3+ years of experience in AI Engineering and Software Developemnt, specializing in Machine Learning, Computer Vision, NLP and working with AWS.
              I specialize in building scalable AI solutions for global institutions, open-source initiatives, and industrial applications.
            </p>
            {/* <p className="mb-4">
              After finishing my bachelor’s degree, I chose to pursue a career in artificial intelligence, so I enrolled in an MSc program at City University of London...
            </p>
            <p className="mb-6">
              What makes me unique as an AI engineer is my love to explore new stuff, in other words, my curiosity to learn how things work under the hood...
            </p> */}

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
