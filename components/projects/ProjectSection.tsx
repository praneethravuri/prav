import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/lib/constants"

interface Project {
    title: string
    description: string
    tags: string[]
    year: string
}

export default function ProjectSection() {
    return (
        <section id="projects" className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Projects</h2>
            <p className="text-gray-400">
                Below are some of the projects I have developed over my 6+ years of
                coding. This is just a small selection of the many projects I've worked
                on, with several others not making the list.
            </p>
            <Accordion type="single" collapsible className="w-full">
                {projects.map((project, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">
                            <div className="flex justify-between w-full pr-4">
                                <span>{project.title}</span>
                                <span className="text-gray-500 text-sm">{project.year}</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className="space-y-4 pt-2">
                                <p>{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
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
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </section>
    )
}