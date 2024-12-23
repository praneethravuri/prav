import { Github, Mail, FileText, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function SocialLinks() {
  return (
    <div className="flex gap-4">
      <Link href="https://github.com/yourusername" className="text-gray-400 hover:text-white"><Linkedin size={24} /></Link>
      <Link href="https://github.com/yourusername" className="text-gray-400 hover:text-white"><Github size={24} /></Link>
      <Link href="mailto:pravdevrav@gmail.com" className="text-gray-400 hover:text-white"><Mail size={24} /></Link>
      <Link href="/resume.pdf" className="text-gray-400 hover:text-white"><FileText size={24} /></Link>
    </div>
  )
}