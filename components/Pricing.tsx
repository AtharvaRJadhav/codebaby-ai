import { Check, Zap, Crown, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    badge: "Starter",
    badgeColor: "bg-gray-500",
    price: "Free",
    description: "Perfect for students and beginners",
    tagline: "🎓 Great for learning basics",
    features: [
      "5 code explanations per day",
      "Support for popular languages (JS, Python, Java)",
      "Basic explanations with emojis",
      "Community support via Discord"
    ],
    buttonText: "Start Free",
    buttonStyle: "bg-gray-600 hover:bg-gray-700 text-white",
    popular: false
  },
  {
    name: "Student",
    badge: "Most Popular",
    badgeColor: "bg-red-500",
    price: "$9.99",
    priceNote: "/month",
    description: "Best for students & coding bootcamps",
    tagline: "⭐ Best value for learners",
    features: [
      "Unlimited code explanations",
      "Support for 15+ programming languages",
      "Advanced explanations with analogies",
      "Code complexity analysis",
      "Export explanations to PDF/markdown",
      "Priority support via email"
    ],
    buttonText: "Start Learning",
    buttonStyle: "bg-red-500 hover:bg-red-600 text-white",
    popular: true
  },
  {
    name: "Pro",
    badge: "For Teams",
    badgeColor: "bg-purple-600",
    price: "$29.99",
    priceNote: "/month",
    description: "Perfect for educators & teams",
    tagline: "🚀 For power users & teachers",
    features: [
      "Everything in Student plan",
      "Batch code explanation (upload multiple files)",
      "Custom explanation styles & templates",
      "Team collaboration features",
      "API access for integrations",
      "White-label explanations",
      "Priority support & dedicated account manager"
    ],
    buttonText: "Go Pro",
    buttonStyle: "bg-purple-600 hover:bg-purple-700 text-white",
    popular: false
  }
];

export default function Pricing() {
  return (
    <div id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-gray-600">
            Choose the plan that fits your coding journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                plan.popular 
                  ? 'border-red-200 shadow-red-100' 
                  : 'border-gray-200'
              }`}
            >
              {/* Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className={`${plan.badgeColor} text-white px-4 py-2 rounded-full text-sm font-medium`}>
                  {plan.badge}
                </span>
              </div>

              <div className="p-8 pt-12">
                {/* Plan name and price */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    {plan.priceNote && (
                      <span className="text-gray-500 ml-1">{plan.priceNote}</span>
                    )}
                  </div>
                  <p className="text-gray-600 mb-2">{plan.description}</p>
                  <p className="text-sm font-medium text-purple-600">
                    {plan.tagline}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  className={`w-full py-3 text-lg font-semibold rounded-xl transition-all duration-200 ${plan.buttonStyle}`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Need a custom plan for your organization?
          </p>
          <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
            Contact Sales
          </Button>
        </div>
      </div>
    </div>
  );
}