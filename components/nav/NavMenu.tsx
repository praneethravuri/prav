import Link from "next/link"

export default function NavMenu() {
  return (
    <nav className="space-y-2">
      <Link href="#about" className="block text-gray-400 hover:text-white">About</Link>
      <Link href="#experience" className="block text-gray-400 hover:text-white">Experience</Link>
      <Link href="#projects" className="block text-gray-400 hover:text-white">Projects</Link>
      <Link href="#education" className="block text-gray-400 hover:text-white">Education</Link>
    </nav>
  )
}