export default function AboutSection() {
  return (
    <section id="about" className="space-y-1 sm:space-y-2 md:space-y-4">
      <h2 className="text-md sm:text-lg md:text-xl  text-white tracking-tight">
        About
      </h2>
      <div className="space-y-3 sm:space-y-4 md:space-y-6">
        <p className="text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed">
          I'm an aspiring software developer with a passion for exploring the vast
          possibilities of programming. I've been coding since I was 12, starting
          with small games in Python and evolving into a diverse range of projects.
        </p>
        <p className="text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed">
          My experience spans from creating virtual assistants and VR applications
          to developing shaders and procedurally generated visuals. I'm driven by
          a love for technology and a desire to learn, create, and solve complex
          problems.
        </p>
        <p className="text-xs sm:text-sm md:text-base text-zinc-400 leading-relaxed">
          I'm proficient in Python, C++, JavaScript, and C#, with Python being my
          strongest language.
        </p>
      </div>
    </section>
  )
}