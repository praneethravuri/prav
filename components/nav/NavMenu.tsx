export default function NavMenu() {
    return (
      <nav className="space-y-2">
        <a href="#about" className="block text-gray-400 hover:text-white">
          • About
        </a>
        <a href="#projects" className="block text-gray-500 hover:text-white">
          • Projects
        </a>
        <a href="#experience" className="block text-gray-500 hover:text-white">
          • Experience
        </a>
      </nav>
    )
  }