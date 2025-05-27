'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Mail, Linkedin, MapPin } from "lucide-react"

export default function Contact() {
  return (
    <div>
      <section
        id="contact"
        className="min-h-screen py-24 px-6 max-w-screen-xl mx-auto text-[#C0C0C0]"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#ecb80d] mb-4">
            Get In Touch
          </h2>
          {/* <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Let’s connect! Whether you’re looking for an AI engineer, want to discuss a project, or just want to chat about technology, I’d love to hear from you.
          </p> */}
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-16">
          <Card className="bg-white/5 border border-white/10 backdrop-blur-md text-center hover:border-[#FFD700] transition-transform hover:scale-[1.01] hover:shadow-lg">
            <CardContent className="p-6 space-y-2">
              <div className="flex justify-center text-white mb-2">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-white">Email</h3>
              <p className="text-white/70">osadebe.tito@gmail.com</p>
              <a
                href="mailto:osadebe.tito@gmail.com"
                className="text-sm text-white/70 hover:underline"
              >
                Click to send email
              </a>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border border-white/10 backdrop-blur-md text-center hover:border-[#FFD700] transition-transform hover:scale-[1.01] hover:shadow-lg">
            <CardContent className="p-6 space-y-2">
              <div className="flex justify-center text-white mb-2">
                <Linkedin className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-white">LinkedIn</h3>
              <p className="text-white/70">in/tito-osadebe</p>
              <a
                href="http://linkedin.com/in/tito-osadebe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/70 hover:underline"
              >
                Click to visit profile
              </a>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border border-white/10 backdrop-blur-md text-center hover:border-[#FFD700] transition-transform hover:scale-[1.01] hover:shadow-lg">
            <CardContent className="p-6 space-y-2">
              <div className="flex justify-center text-white mb-2">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-white">Location</h3>
              <p className="text-white/70">London, UK</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white/5 border border-white/10 backdrop-blur-md p-8 rounded-xl text-center space-y-4">
          <h3 className="text-xl font-bold text-white">
            Ready to Work Together?
          </h3>
          <p className="text-white/70 max-w-2xl mx-auto">
            I'm always open to exploring new opportunities, innovative projects, and collaborations in 
            the AI and Machine Learning space. 
            I’d love to connect and discuss how we can work together.
          </p>
          <div className="flex justify-center gap-4 flex-wrap pt-4">
            <a
              href="mailto:osadebe.tito@gmail.com"
              className="px-6 py-2 bg-gradient-to-r from-[#FFD700] to-[#f0cf10] text-white font-medium rounded-full hover:brightness-110 transition-transform hover:scale-[1.01] hover:shadow-lg"
            >
              Send Email
            </a>
            <a
              href="http://linkedin.com/in/tito-osadebe"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-transform hover:scale-[1.01] hover:shadow-lg"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <span className="flex items-center gap-2 px-4 py-2 bg-green-700/30 text-green-300 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Available for new opportunities
          </span>
        </div>
      </section>
    </div>
  )
}
