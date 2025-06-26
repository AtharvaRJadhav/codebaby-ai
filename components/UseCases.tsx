import { Book, Users, Briefcase, GraduationCap, Code, Lightbulb } from "lucide-react";

const useCases = [
  {
    icon: GraduationCap,
    title: "Students Learning to Code",
    description: "Break down complex assignments and understand programming concepts with fun, easy explanations.",
    emoji: "🎓"
  },
  {
    icon: Users,
    title: "Teaching & Code Reviews",
    description: "Explain code to teammates, students, or during code reviews using simple, engaging language.",
    emoji: "👥"
  },
  {
    icon: Book,
    title: "Documentation & Tutorials",
    description: "Create beginner-friendly documentation and tutorials that anyone can understand.",
    emoji: "📚"
  },
  {
    icon: Lightbulb,
    title: "Understanding Legacy Code",
    description: "Decode mysterious old code and understand what previous developers were thinking.",
    emoji: "💡"
  },
  {
    icon: Briefcase,
    title: "Interview Preparation",
    description: "Practice explaining code clearly for technical interviews and coding assessments.",
    emoji: "💼"
  },
  {
    icon: Code,
    title: "Learning New Languages",
    description: "Understand syntax and patterns when exploring new programming languages.",
    emoji: "🚀"
  }
];

export default function UseCases() {
  return (
    <div id="use-cases" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Perfect for every coding journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you're learning, teaching, or working with code, CodeBaby makes complex concepts simple and fun.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <IconComponent className="h-6 w-6 text-purple-600" />
                  </div>
                  <span className="text-2xl">{useCase.emoji}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}