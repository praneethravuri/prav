import AboutSection from '@/components/about/AboutSection'
import ExperienceSection from '@/components/experience/ExperienceSection'
import ProjectSection from '@/components/projects/ProjectSection'
import SocialLinks from '@/components/social/SocialLinks'
import NavMenu from '@/components/nav/NavMenu'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-gray-300 p-4 sm:p-6 md:p-8 ">
      <div className="max-w-6xl mx-auto md:mt-10 sm:mt-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 lg:gap-24">
          {/* Left Column */}
          <div className="md:col-span-1 space-y-4 md:space-y-8 sticky top-8 h-fit">
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              <p className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-neonOrange tracking-tight">
                Praneeth Ravuri
              </p>
              <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-gray-400 font-light">
                Data Analyst
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed">
                With a deep passion for programming and a diverse portfolio of innovative and self driven projects
              </p>
            </div>
            
            <div className="space-y-4 md:space-y-6 pt-4">
              <NavMenu />
              <div className="border-t border-gray-800 pt-4 md:pt-6">
                <SocialLinks />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-2 space-y-8 md:space-y-24 pb-8 md:pb-12">
            <AboutSection />
            <ExperienceSection />
            <ProjectSection />
          </div>
        </div>
      </div>
    </main>
  )
}