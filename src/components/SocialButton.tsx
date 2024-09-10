import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Component() {
  return (
    <div className="flex space-x-4">
      <Button
        variant="default"
        size="icon"
        className="w-12 h-12 bg-yellow-400 hover:bg-yellow-500 dark:bg-black dark:hover:bg-gray-900 border-4 text-black dark:text-yellow-400 dark:shadow-yellow-400"
      >
        <Github className="h-8 w-8" />
        <span className="sr-only">GitHub</span>
      </Button>
      <Button
        variant="default"
        size="icon"
        className="w-12 h-12 bg-blue-400 hover:bg-blue-500 dark:bg-black dark:hover:bg-gray-900 border-4 text-black dark:text-yellow-400 dark:shadow-yellow-400"
      >
        <Linkedin className="h-8 w-8" />
        <span className="sr-only">LinkedIn</span>
      </Button>
      <Button
        variant="default"
        size="icon"
        className="w-12 h-12 bg-red-400 hover:bg-red-500 dark:bg-black dark:hover:bg-gray-900 border-4 text-black dark:text-yellow-400 dark:shadow-yellow-400"
      >
        <Mail className="h-8 w-8" />
        <span className="sr-only">Email</span>
      </Button>
    </div>
  )
}