import React, { useState, useRef } from "react";
import { Upload, Image as ImageIcon, Check, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const ImageUploadSection = () => {
  const [image, setImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const { toast } = useToast();

  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e) => {
    if (e.target.files && e.target.files[0]) {
      handleImageFile(e.target.files[0]);
    }
  };

  const handleImageFile = (file) => {
    if (!file.type.match("image.*")) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file (JPEG, PNG, etc.)",
        variant: "destructive",
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setImage(e.target.result);
        setResult(null);
      }
    };
    reader.readAsDataURL(file);
  };

  const analyzeImage = async () => {
    if (!image) return;

    setIsAnalyzing(true);
    setResult(null);

    try {
      const formData = new FormData();

      // Convert base64 image (from FileReader) back to Blob
      const res = await fetch(image);
      const blob = await res.blob();
      formData.append("image", blob, "leaf-image.jpg");

      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.prediction) {
        setResult(data.prediction);

        toast({
          title: "Analysis Complete",
          description: `Prediction: ${data.prediction}`,
        });
      } else {
        throw new Error("No prediction received");
      }
    } catch (error) {
      console.error("Error analyzing image:", error);

      toast({
        title: "Error",
        description: "Something went wrong during image analysis.",
        variant: "destructive",
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <section
      id="try-now"
      className="py-16 bg-gradient-to-b from-white to-gray-50 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Try PaddyGuard Now
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Upload a photo of your plant's leaves to get an instant diagnosis.
            It's free and no registration required.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          {!image ? (
            <div
              className={`leaf-image-upload border-2 border-dashed rounded-lg p-6 text-center transition-all ${
                isDragging ? "border-leaf bg-leaf/5" : "border-gray-300"
              }`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
            >
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                accept="image/*"
                onChange={handleFileInput}
              />

              <Upload className="w-16 h-16 text-leaf mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">
                Upload Your Leaf Image
              </h3>
              <p className="text-gray-500 mb-4">
                Drag and drop an image here, or click the button below
              </p>

              <Button
                type="button"
                className="bg-leaf hover:bg-leaf-dark"
                onClick={() => fileInputRef.current?.click()}
              >
                <ImageIcon className="mr-2 h-4 w-4" /> Select Image
              </Button>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src={image}
                  alt="Uploaded leaf"
                  className="w-full h-auto"
                />
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute top-4 right-4"
                  onClick={() => setImage(null)}
                >
                  Change Image
                </Button>
              </div>

              {!result ? (
                <div className="flex justify-center">
                  <Button
                    size="lg"
                    className="bg-leaf hover:bg-leaf-dark"
                    onClick={analyzeImage}
                    disabled={isAnalyzing}
                  >
                    {isAnalyzing ? (
                      <>
                        Analyzing...
                        <div className="ml-2 animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                      </>
                    ) : (
                      <>Analyze Image</>
                    )}
                  </Button>
                </div>
              ) : (
                <div className="bg-leaf/10 border border-leaf p-6 rounded-lg">
                  <div className="flex items-start space-x-4">
                    <Check className="w-6 h-6 text-leaf mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        Diagnosis Result
                      </h3>
                      <p className="text-gray-700">{result}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mt-10 flex justify-center">
          <div className="flex items-center text-sm text-gray-500">
            <AlertCircle className="w-4 h-4 mr-2" />
            <p>
              For demonstration purposes only. In a real app, analysis would be
              performed by our AI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageUploadSection;
