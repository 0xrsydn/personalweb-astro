import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from 'lucide-react';
import type { Project } from '@/pages/projects/projects';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <Badge key={index} variant="neutral">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      {project.link && (
        <CardFooter className="flex justify-start">
          <Button variant="link" asChild className="px-2 py-1 text-sm text-black dark:text-black hover:underline">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project <ExternalLink className="ml-1 h-3 w-3" />
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}