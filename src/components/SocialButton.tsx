import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export default function Component() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <Button
        variant="default"
        className="w-full sm:w-auto bg-main dark:bg-black dark:hover:bg-gray-900 border-2 text-black dark:text-white dark:shadow-pink-400 dark:border-main"
        asChild
      >
        <a href="https://github.com/0xrsydn" target="_blank" rel="noopener noreferrer" className="gap-2">
          <Github className="h-5 w-5" />
          GitHub
        </a>
      </Button>
      <Button
        variant="default"
        className="w-full sm:w-auto bg-main dark:bg-black dark:hover:bg-gray-900 border-2 text-black dark:text-white dark:shadow-pink-400 dark:border-main"
        asChild
      >
        <a href="https://linkedin.com/in/rsydn" target="_blank" rel="noopener noreferrer" className="gap-2">
          <Linkedin className="h-5 w-5" />
          LinkedIn
        </a>
      </Button>
      <Button
        variant="default"
        className="w-full sm:w-auto bg-main dark:bg-black dark:hover:bg-gray-900 border-2 text-black dark:text-white dark:shadow-pink-400 dark:border-main"
        asChild
      >
        <a href="mailto:rasyidanakbar@mail.ugm.ac.id" className="gap-2">
          <Mail className="h-5 w-5" />
          Email
        </a>
      </Button>
      <Button
        variant="default"
        className="w-full sm:w-auto bg-main dark:bg-black dark:hover:bg-gray-900 border-2 text-black dark:text-white dark:shadow-pink-400 dark:border-main"
        asChild
      >
        <a href="https://twitter.com/0xrsydn" target="_blank" rel="noopener noreferrer" className="gap-2">
          <Twitter className="h-5 w-5" />
          Twitter
        </a>
      </Button>
    </div>
  )
}