import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: '💻',
      skills: ['Python', 'C++', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
    },
    {
      title: 'Frameworks & Libraries',
      icon: '⚛️',
      skills: [
        'React.js',
        'Vite',
        'Tailwind CSS',
        'Node.js',
        'Express.js',
        'Scikit-learn',
        'TensorFlow',
      ],
    },
    {
      title: 'Tools & Platforms',
      icon: '🛠️',
      skills: [
        'Git',
        'GitHub',
        'VS Code',
        'Windsurf',
        'Firebase',
        'Render',
        'Netlify',
        'Figma',
        'Canva',
        'n8n',
        'Zapier',
      ],
    },
    {
      title: 'Databases',
      icon: '🗄️',
      skills: ['MySQL'],
    },
    {
      title: 'Specialized Skills',
      icon: '🚀',
      skills: [
        'Machine Learning',
        'Data Analysis',
        'REST API Development',
        'Automation Workflows',
        'UI/UX Design',
      ],
    },
    {
      title: 'Soft Skills',
      icon: '🤝',
      skills: [
        'Leadership & Team Collaboration',
        'Problem-Solving',
        'Analytical Thinking',
        'Patience & Adaptability',
        'Creative Communication',
      ],
    },
  ];

  return (
    <div className="mx-auto w-full max-w-4xl space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold">My Tech Arsenal 🎯</h2>
        <p className="mt-2 text-muted-foreground">
          Tools I use to turn ideas into reality
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <span>{category.icon}</span>
                {category.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-accent/50">
        <CardContent className="pt-6 text-center">
          <p className="text-sm">
            💡 <strong>Fun Fact:</strong> I actually enjoy debugging. Yes, I know - questionable life choices! 😅
          </p>
        </CardContent>
      </Card>
    </div>
  );
}