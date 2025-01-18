import { Globe, Users, GitCompare, Lightbulb, Layout, Palette } from 'lucide-react'

interface Step {
  icon: React.ReactNode
  title: string
  description: string
  color: string
}

const steps: Step[] = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Market",
    description: "Understanding the broader market landscape and opportunities",
    color: "bg-blue-900",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Consumer Needs",
    description: "Identifying and analyzing specific customer requirements and pain points",
    color: "bg-blue-800",
  },
  {
    icon: <GitCompare className="w-6 h-6" />,
    title: "Product = Market Fit",
    description: "Achieving alignment between product offerings and market demands",
    color: "bg-blue-700",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Value Propositions",
    description: "Defining unique benefits and solutions that address customer needs",
    color: "bg-blue-600",
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: "Feature Set",
    description: "Developing specific functionalities and capabilities",
    color: "bg-blue-500",
  },
  {
    icon: <Palette className="w-6 h-6" />,
    title: "UX",
    description: "Creating intuitive and engaging user experiences",
    color: "bg-blue-400",
  },
]

export default function LadderSteps() {
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6">
      <div className="relative">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-start gap-2 md:gap-4 mb-6 md:mb-8 relative"
            style={{
              marginLeft: `${index * 1}rem`,

            }}
          >
            <div
              className={`${step.color} p-2 md:p-3 rounded-lg text-white shadow-lg shrink-0`}
            >
              {step.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <div
                  className={`h-0.5 w-8 md:w-12 ${step.color}`}
                  aria-hidden="true"
                />
                <h3 className="font-semibold text-gray-900 text-sm md:text-base truncate">{step.title}</h3>
              </div>
              <p className="mt-1 text-xs md:text-sm text-gray-600">{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <div
                className="absolute bottom-0 left-4 md:left-6 w-0.5 bg-gray-200"
                style={{ height: "1.5rem", transform: "translateY(100%)" }}
                aria-hidden="true"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

