import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/lib/constants"

export default function ProjectSection() {
    return (
        <section id="projects" className="space-y-1 sm:space-y-2 md:space-y-4">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white tracking-tight">
                Projects
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed">
                Below are some of the projects I have developed over my 6+ years of
                coding. This is just a small selection of the many projects I've worked
                on, with several others not making the list.
            </p>


            <Accordion
                type="single"
                collapsible
                className="w-full space-y-2 sm:space-y-3 md:space-y-4"
            >
                {projects.map((project, index) => (
                    <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        className="border-gray-700"
                    >
                        <AccordionTrigger className="text-left hover:bg-zinc-900  rounded-lg transition-colors">
                            <div className="flex justify-between w-full pr-4">
                                <span className="text-sm sm:text-base md:text-lg font-medium text-white">
                                    {project.title}
                                </span>
                                <span className="text-xs sm:text-sm text-gray-400">
                                    {project.year}
                                </span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className=" pt-2 sm:pt-3">
                                <p className="text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <Badge
                                            key={tag}
                                            variant="outline"
                                            className="text-xs sm:text-sm text-zinc-400 "
                                        >
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    )
}