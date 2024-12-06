import type { FunctionComponent } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface AboutPageProps {
  data: {
    professionalSummary: {
      title: string;
      description: string;
    };
    skills: {
      title: string;
      categories: {
        title: string;
        items: string[];
      }[];
    };
    careerMilestones: {
      title: string;
      experiences: {
        title: string;
        period: string;
        description: string;
      }[];
    };
  };
}

export const AboutPage: FunctionComponent<AboutPageProps> = ({ data }) => {
  const { professionalSummary, skills, careerMilestones } = data;

  return (
    <div className="max-w-4xl mx-auto space-y-8 p-4">
      {/* Professional Summary Card */}
      <Card className="w-full bg-white dark:bg-darkBg border-2 dark:border-white
        shadow-brutal hover:shadow-brutal-sm 
        hover:translate-x-1 hover:translate-y-1 
        transition-all duration-200
        dark:shadow-brutal-orange dark:hover:shadow-brutal-sm-orange">
        <CardHeader>
          <CardTitle className="text-3xl font-black uppercase dark:text-white">{professionalSummary.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-lg font-body font-medium text-gray-800 dark:text-gray-200">
            {professionalSummary.description}
          </CardDescription>
        </CardContent>
      </Card>

      {/* Skills Card */}
      <Card className="w-full bg-white dark:bg-darkBg border-2 dark:border-white
        shadow-brutal hover:shadow-brutal-sm 
        hover:translate-x-1 hover:translate-y-1 
        transition-all duration-200
        dark:shadow-brutal-orange dark:hover:shadow-brutal-sm-orange">
        <CardHeader>
          <CardTitle className="text-3xl font-black uppercase dark:text-white">{skills.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-body">
            {skills.categories.map((category) => (
              <div key={category.title} className="space-y-2">
                <h3 className="text-xl font-bold uppercase dark:text-white">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="inline-block border-2 border-border dark:border-white 
                        px-3 py-1 bg-[#F4F6F8] dark:bg-darkBg font-bold dark:text-white
                        hover:bg-main dark:hover:bg-main dark:hover:text-black transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Experience Card */}
      <Card className="w-full bg-white dark:bg-darkBg border-2 dark:border-white
        shadow-brutal hover:shadow-brutal-sm 
        hover:translate-x-1 hover:translate-y-1 
        transition-all duration-200
        dark:shadow-brutal-orange dark:hover:shadow-brutal-sm-orange">
        <CardHeader>
          <CardTitle className="text-3xl font-black uppercase dark:text-white">{careerMilestones.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 font-body">
          {careerMilestones.experiences.map((experience) => (
            <Card key={experience.title} 
              className="border-2 border-border dark:border-white 
                bg-[#F4F6F8] dark:bg-darkBg
                shadow-brutal-sm dark:shadow-brutal-sm-orange">
              <CardHeader>
                <CardTitle className="text-2xl font-bold dark:text-white">{experience.title}</CardTitle>
                <CardDescription className="text-lg font-semibold dark:text-gray-300">{experience.period}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg dark:text-gray-200">{experience.description}</p>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

// Add this type declaration for Astro
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'about-page': AboutPageProps;
    }
  }
}