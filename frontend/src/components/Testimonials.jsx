import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "PaddyGuard saved my rice crop! The app identified early blight before it spread to my entire garden.",
    name: "Sarah Johnson",
    role: "Home Gardener",
    avatar: "SJ",
  },
  {
    quote:
      "As a commercial farmer, time is money. This tool helps me spot issues early and take targeted action.",
    name: "Michael Rodriguez",
    role: "Organic Farmer",
    avatar: "MR",
  },
  {
    quote:
      "I've tried several plant apps, but PaddyGuard is the most accurate. It correctly identified a rare fungus.",
    name: "Emma Chen",
    role: "Plant Enthusiast",
    avatar: "EC",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Users Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied gardeners and farmers who trust
            PaddyGuard for their plant care.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="leaf-card">
              <CardContent className="pt-6">
                <div className="flex flex-col h-full">
                  <blockquote className="text-gray-700 mb-6 flex-grow">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-4 border-2 border-leaf/20">
                      <AvatarImage src="" alt={testimonial.name} />
                      <AvatarFallback className="bg-leaf/10 text-leaf">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
