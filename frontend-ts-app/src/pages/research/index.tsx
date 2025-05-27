'use client'

import { Card, CardContent } from "@/components/ui/card"
import { BookOpen } from "lucide-react"

export default function Research() {
  const research = [
    {
      title:
        "Addressing AI Bias Through Inclusivity: A Case Study on Nigerian Food Images",
      description:
        "This research explores how diverse, culturally representative datasets can reduce AI bias in image recognition tasks, improving model fairness and inclusivity.",
      ongoing: false,
    },
    {
      title: "Forensic Handwritten Document Analysis",
      description:
        "Ongoing study using computer vision and machine learning to analyze handwriting, detect forgeries, and support legal/forensic investigations in Nigeria.",
      ongoing: true,
    },
    // {
    //   organization: "Firemind",
    //   title:
    //     "Calm leverages generative AI to enhance personalised recommendations",
    //   description:
    //     "Technical case study on implementing GenAI for recommendation systems.",
    //   link: "https://firemind.ai/calm-genai-case-study",
    // },
  ]

  const handleCardClick = (isOngoing?: boolean) => {
    // if (link) {
    //   window.open(link, "_blank")
    // } else 
    if (isOngoing || !isOngoing) {
      alert("Coming soon...")
    }
  }

  return (
    <div>
      <section
        id="research"
        className="min-h-screen py-24 px-6 max-w-screen-xl mx-auto text-[#C0C0C0]"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#ecb80d] mb-6 leading-tight">
            Research Work
          </h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {research.map((pub, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(pub.ongoing)}
              className="h-full"
            >
              <Card className="h-full flex flex-col justify-between bg-white/5 border border-white/10 backdrop-blur-md transition-transform hover:scale-[1.01] hover:shadow-lg hover:border-[#FFD700] cursor-pointer">
                <CardContent className="p-6 flex flex-col justify-between h-full space-y-4">
                  <div className="flex justify-between items-center">
                    {/* <div className="text-lg text-[#FFD700] font-medium">
                      {pub.organization}
                    </div> */}
                    {pub.ongoing && (
                      <span className="flex items-center gap-2 px-4 py-2 bg-green-700/30 text-green-300 rounded-full text-sm font-medium">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                        Ongoing
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-lg text-white font-medium">
                    <BookOpen className="text-[#FFD700] w-5 h-5" />
                    <h3 className="text-lg font-medium">{pub.title}</h3>
                  </div>
                  <p className="text-lg text-white/70">{pub.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
