import { Badge } from "@/components/ui/badge"
import { experiences } from "@/lib/constants"

export default function ExperienceSection() {
  return (
    <section id="experience" className="space-y-6">
      <h2 className="text-2xl font-semibold text-white">Experience</h2>
      <div className="space-y-12">
        {experiences.map((experience, index) => (
          <div key={index} className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-medium text-white">
                    {experience.company}
                  </h3>
                  <p className="text-gray-400">{experience.position}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400">{experience.location}</p>
                  <p className="text-gray-500">{experience.duration}</p>
                </div>
              </div>
            </div>
            
            <ul className="list-disc pl-4 space-y-2 text-gray-300">
              {experience.content.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-2">
              {experience.tags.map((tag) => (
                <Badge 
                  key={tag} 
                  variant="outline"
                  className="text-gray-400 border-gray-700"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}