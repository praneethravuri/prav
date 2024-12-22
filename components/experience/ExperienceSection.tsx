import { Badge } from "@/components/ui/badge"
import { experiences } from "@/lib/constants"

export default function ExperienceSection() {
  return (
    <section id="experience" className="space-y-1 sm:space-y-2 md:space-y-4">
      <h2 className="text-md sm:text-lg md:text-xl  text-white tracking-tight">
        Experience
      </h2>
      <div className="space-y-8 sm:space-y-10 md:space-y-12">
        {experiences.map((experience, index) => (
          <div key={index} className="space-y-4 sm:space-y-5 md:space-y-6">
            <div className="space-y-2 sm:space-y-3">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                <div>
                  <h3 className="text-xs sm:text-sm md:text-base  text-white tracking-tight">
                    {experience.company}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-zinc-400">
                    {experience.position}
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-xs sm:text-sm md:text-base text-zinc-400">
                    {experience.location}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400">
                    {experience.duration}
                  </p>
                </div>
              </div>
            </div>

            <ul className=" space-y-2 sm:space-y-3 text-xs sm:text-sm md:text-base text-zinc-400">
              {experience.content.map((item, i) => (
                <li key={i} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 pt-2">
              {experience.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="text-xs sm:text-sm text-zinc-400 border-gray-700 hover:bg-gray-800/50 transition-colors"
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