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

export const AboutPage = ({ data }: AboutPageProps) => {
  const { professionalSummary, skills, careerMilestones } = data;

  return (
    <div className="max-w-4xl mx-auto space-y-8 p-4">
      {/* Profile Section */}
      <Card className="bg-[#FF6E6C] w-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 dark:shadow-[8px_8px_0px_0px_rgba(244,114,182,1)] dark:hover:shadow-[1px_1px_0px_0px_rgba(244,114,182,1)]">
        <CardHeader>
          <CardTitle className="text-3xl font-black uppercase">{professionalSummary.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-lg font-body font-medium text-black">
            {professionalSummary.description}
          </CardDescription>
        </CardContent>
      </Card>

      {/* Skills Section */}
      <Card className="bg-[#4ECDC4] w-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 dark:shadow-[8px_8px_0px_0px_rgba(244,114,182,1)] dark:hover:shadow-[1px_1px_0px_0px_rgba(244,114,182,1)]">
        <CardHeader>
          <CardTitle className="text-3xl font-black uppercase">{skills.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-body">
            {skills.categories.map((category) => (
              <div key={category.title} className="space-y-2">
                <h3 className="text-xl font-bold uppercase">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="inline-block border-2 border-black px-3 py-1 bg-main font-bold"
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

      {/* Experience Section */}
      <Card className="bg-[#FF6E6C] w-full shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 dark:shadow-[8px_8px_0px_0px_rgba(244,114,182,1)] dark:hover:shadow-[1px_1px_0px_0px_rgba(244,114,182,1)]">
        <CardHeader>
          <CardTitle className="text-3xl font-black uppercase">{careerMilestones.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 font-body">
          {careerMilestones.experiences.map((experience) => (
            <Card key={experience.title} className="bg-white border-4 border-black font-sans">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{experience.title}</CardTitle>
                <CardDescription className="text-lg font-semibold">{experience.period}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg">{experience.description}</p>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}