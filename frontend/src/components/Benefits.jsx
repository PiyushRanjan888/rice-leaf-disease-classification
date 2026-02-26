import React from "react";
import { Clock, Sparkles, TrendingUp, ShieldCheck } from "lucide-react";

const benefits = [
  {
    icon: <Clock className="w-8 h-8 text-leaf" />,
    title: "Save Time",
    description:
      "Get instant results without waiting for lab tests or expert consultations.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-leaf" />,
    title: "High Accuracy",
    description:
      "Our AI is trained on millions of images for precise diagnosis of 50+ plant diseases.",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-leaf" />,
    title: "Improve Yield",
    description:
      "Early detection helps prevent crop loss and increases your harvest yield.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-leaf" />,
    title: "Reduce Pesticide Use",
    description:
      "Targeted treatment recommendations help minimize unnecessary chemical use.",
  },
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose PaddyGuard
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our advanced Rice disease detection offers numerous advantages for
            gardeners, farmers and rice enthusiasts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-8 border rounded-lg hover:border-leaf transition-colors flex items-start space-x-5"
            >
              <div className="p-3 rounded-full bg-leaf/10 flex-shrink-0">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
