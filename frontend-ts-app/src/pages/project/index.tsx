'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Folder } from "lucide-react"

export default function Project() {
  const projects = [
    {
      title: "Event Registration Forecasting System",
      description:
        "Led the development of a Python-based forecasting app using SARIMAX and Tkinter to improve event registration predictions, reducing overbooking by 45% and improving accuracy by 30%."
    },
    {
      title: "Medical Insurance Prediction System",
      link: "https://github.com/titoausten/medical-insurance-charges-prediction/",
      description:
        "Built and deployed a web-based machine learning model to predict medical insurance costs with visual insights, improving risk assessment and pricing strategies for insurers."
    }
  ]

  return (
    <div className="bg-gradient-to-r from-black to-black/80">
      <section
        id="projects"
        className="py-24 px-6 max-w-screen-xl mx-auto text-[#C0C0C0]"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#ecb80d] mb-6 leading-tight">
            Recent Projects
          </h2>
        </div>

        <div className="space-y-5">
          {projects.map((project, index) => (
            <div key={index}>
              <a
                href={project.link}
                target={project.link ? "_blank" : "_self"}
                rel="noopener noreferrer"
              >
                <Card className="bg-white/5 border border-white/10 backdrop-blur-md relative overflow-hidden transition-transform hover:scale-[1.01] hover:shadow-lg hover:border-[#FFD700] cursor-pointer">
                  <CardContent className="p-6 space-y-2">
                    <div className="flex items-center gap-2 text-lg text-white font-medium">
                      <Folder className="text-[#FFD700] w-5 h-5" />
                      <h3 className="text-lg font-medium">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-white/70 text-base">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
