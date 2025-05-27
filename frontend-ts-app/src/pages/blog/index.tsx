'use client'

import { Card, CardContent } from "@/components/ui/card"

const platformIcons: Record<string, string> = {
  "MLS Future Forum": "/src/assets/mls.png",
  "LinkedIn": "/src/assets/linkedin.svg",
  "Dev.to": "/src/assets/dev.png"
}

export default function Blog() {
  const blogPosts = [
    {
      platform: "LinkedIn",
      year: "May 26, 2025",
      readTime: "6 min read",
      title: "How I Went from Confused to Confident: My Simple System for Reading Research Papers",
      description: "A practical guide to help beginners build confidence and skill in reading academic AI/ML research papers.",
      tags: ["Learning", "Research", "Productivity"],
      link: "https://www.linkedin.com/pulse/how-i-went-from-confused-confident-my-simple-system-reading-osadebey-wnhjf"
    },
    {
      platform: "LinkedIn",
      year: "2025",
      readTime: "3 min listen",
      title: "BBC Radio Interview: Diversity in AI",
      description: "Tito Osadebey joins BBC Radio to discuss the need for inclusive data and diverse representation in AI development.",
      tags: ["AI", "Diversity", "Ethics", "Media"],
      link: "https://www.linkedin.com/posts/tito-osadebe_artificialintelligence-ai-diversity-activity-7299710914944000000-4Ukc"
    },
    {
      platform: "MLS Future Forum",
      year: "19 Feb, 2025",
      readTime: "5 min read",
      title: "AI Systems Coming Up With Biased Results Due to the Datasets They Are Trained On",
      description: "An article discussing the inherent bias in AI systems caused by non-inclusive datasets, highlighting the importance of ethical data practices.",
      tags: ["AI Ethics", "Bias", "Data", "Inclusion"],
      link: "https://mlsfutureforum.com/resource/ai-systems-coming-up-with-biased-results-due-to-the-datasets-they-are-trained-on.html?_gl=1*phw2vj*_up*MQ.._ga*NTU4MDQzMDUyLjE3Mzk5NjY1MDc._ga_YVRMR58JHV*MTczOTk2NjUwNy4xLjEuMTczOTk2OTExMi4wLjAuMA"
    },
    {
      platform: "LinkedIn",
      year: "November 10, 2023",
      readTime: "5 min read",
      title: "The Ideal Way to Setup Machine Learning Projects",
      description: "A structured approach to organizing and managing machine learning projects for clarity and reproducibility.",
      tags: ["ML Engineering", "Workflow", "Best Practices"],
      link: "https://www.linkedin.com/pulse/ideal-way-setup-machine-learning-projects-tito-osadebey-4i1zf"
    },
    {
      platform: "Dev.to",
      year: "April 12, 2023",
      readTime: "7 min read",
      title: "The Graph Analytics Revolution: Understanding the Dynamic Tool Driving Modern Technology",
      description: "An overview of graph analytics, how it works, and its impact across industries like finance, cybersecurity, and healthcare.",
      tags: ["Graph Analytics", "Data Science", "Tech Trends"],
      link: "https://dev.to/titoausten/the-graph-analytics-revolution-understanding-the-dynamic-tool-driving-modern-technology-5ff9"
    }
  ]

  return (
    <div className="bg-gradient-to-r from-black to-black/80">
      <section
        id="blogs"
        className="py-24 px-6 max-w-screen-xl mx-auto text-[#C0C0C0]"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#ecb80d] mb-6 leading-tight">
            Published Articles
          </h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {blogPosts.map((post, index) => (
            <a
              key={index}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="h-full"
            >
              <Card className="h-full flex flex-col justify-between bg-white/5 border border-white/10 backdrop-blur-md transition-transform hover:scale-[1.01] hover:shadow-lg hover:border-[#FFD700] cursor-pointer">
                <CardContent className="p-6 flex flex-col justify-between h-full space-y-4">
                  <div className="text-sm text-white/60 flex items-center gap-2">
                    <img src={platformIcons[post.platform]} alt={post.platform + " icon"} className="w-5 h-5" />
                    <span className="text-white font-medium">{post.platform}</span>
                    <span>•</span>
                    <span>{post.year}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-white/70">{post.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {post.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-sm px-3 py-1 bg-white/10 text-white/70 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
