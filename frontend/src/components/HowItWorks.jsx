import React from "react";
import { Camera, Search, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: <Camera className="w-12 h-12 text-leaf" />,
    title: "Take a Photo",
    description:
      "Snap a clear picture of the affected leaf or Rice part showing visible symptoms.",
  },
  {
    icon: <Search className="w-12 h-12 text-leaf" />,
    title: "AI Analysis",
    description:
      "Our powerful AI analyzes the image, comparing it against thousands of known Rice diseases.",
  },
  {
    icon: <CheckCircle className="w-12 h-12 text-leaf" />,
    title: "Get Results",
    description:
      "Receive a detailed diagnosis with suggested treatments and prevention tips.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 bg-gray-50 leaf-pattern-bg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Identifying Rice diseases has never been easier. Three simple steps
            to diagnose and save your rice plants.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="leaf-card p-8 flex flex-col items-center text-center"
            >
              <div className="mb-6 p-4 rounded-full bg-leaf/10">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              <div className="mt-6 text-leaf font-bold">Step {index + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
