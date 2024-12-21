import { Github, Mail, FileText } from 'lucide-react'

export default function SocialLinks() {
  return (
    <div className="flex gap-4">
      <a href="https://github.com/yourusername" className="text-gray-400 hover:text-white">
        <Github size={24} />
      </a>
      <a href="mailto:you@example.com" className="text-gray-400 hover:text-white">
        <Mail size={24} />
      </a>
      <a href="/resume.pdf" className="text-gray-400 hover:text-white">
        <FileText size={24} />
      </a>
    </div>
  )
}