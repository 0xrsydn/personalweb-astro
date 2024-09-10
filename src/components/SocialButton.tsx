import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Component() {
  return (
    <div className="flex space-x-4">
      <Button
        variant="default"
        size="icon"
        className="w-12 h-12 bg-yellow-400 hover:bg-yellow-500 dark:bg-black dark:hover:bg-gray-900 border-4 text-black dark:text-yellow-400 dark:shadow-yellow-400"
        asChild
      >
        <a href="https://github.com/0xrsydn" target="_blank" rel="noopener noreferrer">
          <Github className="h-6 w-6" />
          <span className="sr-only">GitHub</span>
        </a>
      </Button>
      <Button
        variant="default"
        size="icon"
        className="w-12 h-12 bg-blue-400 hover:bg-blue-500 dark:bg-black dark:hover:bg-gray-900 border-4 text-black dark:text-yellow-400 dark:shadow-yellow-400"
        asChild
      >
        <a href="https://linkedin.com/in/rsydn" target="_blank" rel="noopener noreferrer">
          <Linkedin className="h-6 w-6" />
          <span className="sr-only">LinkedIn</span>
        </a>
      </Button>
      <Button
        variant="default"
        size="icon"
        className="w-12 h-12 bg-red-400 hover:bg-red-500 dark:bg-black dark:hover:bg-gray-900 border-4 text-black dark:text-yellow-400 dark:shadow-yellow-400"
        asChild
      >
        <a href="mailto:rasyidanakbar@mail.ugm.ac.id">
          <Mail className="h-6 w-6" />
          <span className="sr-only">Email</span>
        </a>
      </Button>
      <Button
        variant="default"
        size="icon"
        className="w-12 h-12 bg-sky-400 hover:bg-sky-500 dark:bg-black dark:hover:bg-gray-900 border-4 text-black dark:text-yellow-400 dark:shadow-yellow-400"
        asChild
      >
        <a href="https://twitter.com/0xrsydn" target="_blank" rel="noopener noreferrer">
          <Twitter className="h-6 w-6" />
          <span className="sr-only">X (Twitter)</span>
        </a>
      </Button>
    </div>
  )
}