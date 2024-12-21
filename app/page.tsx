import AboutSection from '@/components/about/AboutSection'
import ExperienceSection from '@/components/experience/ExperienceSection'
import ProjectSection from '@/components/projects/ProjectSection'
import SocialLinks from '@/components/social/SocialLinks'
import NavMenu from '@/components/nav/NavMenu'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-gray-300 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="md:col-span-1 space-y-6">
            <h1 className="text-4xl font-bold text-white">Charlie Ashton</h1>
            <p className="text-xl text-gray-400">Aspiring Software Developer</p>
            <p className="text-gray-500">
              With a deep passion for programming and a diverse portfolio of innovative and self driven projects
            </p>
            <NavMenu />
            <SocialLinks />
          </div>
          
          {/* Right Column */}
          <div className="md:col-span-2 space-y-12">
            <AboutSection />
            <ExperienceSection />
            <ProjectSection />
          </div>
        </div>
      </div>
    </main>
  )
}
