// import React from 'react';
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
    <Card className="w-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 dark:shadow-[8px_8px_0px_0px_rgba(244,114,182,1)] dark:hover:shadow-[1px_1px_0px_0px_rgba(244,114,182,1)]">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription className="font-body">{project.description}</CardDescription>
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
          <Button variant="neo" className="group">
            View Project
            <ExternalLink className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}