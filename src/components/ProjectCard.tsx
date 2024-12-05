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
    <Card className="w-full dark:border-white dark:bg-black dark:text-white dark:font-white shadow-brutal hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-brutal-sm transition-all duration-200 dark:shadow-brutal-orange dark:hover:shadow-brutal-sm-orange">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription className="font-body dark:text-white">{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <Badge key={index} variant="neutral" className="dark:bg-main dark:text-black">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      {project.link && (
        <CardFooter className="flex justify-start">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <Button variant="neo" className="group">
              View Project
              <ExternalLink className="ml-2 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          </a>
        </CardFooter>
      )}
    </Card>
  );
}