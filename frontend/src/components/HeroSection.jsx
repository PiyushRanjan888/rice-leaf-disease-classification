import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Detect Rice Diseases <span className="text-leaf">Instantly</span>
          </h1>
          <p className="text-xl text-gray-600 md:pr-12">
            Upload a photo of your plant's leaves and get accurate disease
            diagnosis powered by AI. Save your plants before it's too late.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-leaf hover:bg-leaf-dark">
              <a href="#try-now" className="flex items-center">
                Try Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-leaf to-leaf-light rounded-2xl blur opacity-30"></div>
          <div className="relative overflow-hidden rounded-2xl shadow-xl animate-float">
            <img
              src="https://images.unsplash.com/photo-1728895604559-a4e16081504e?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Healthy and unhealthy plant leaves"
              className="w-full h-auto object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
