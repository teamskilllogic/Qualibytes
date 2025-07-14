import React from "react";
import Navigation from "@/components/navigation";
import FormModal from "@/components/FormModal";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const AIML = () => {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Navigation onRequestCall={() => {}} />
      <div className="min-h-screen bg-qualibytes-background text-white">
        {/* Banner */}
        <div
          className="w-full h-[325px] bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://via.placeholder.com/1900x325")',
          }}
        >
          <div className="h-full w-full flex items-center justify-center bg-black/50">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              12-Week AI/ML Course
            </h1>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-6 py-16 space-y-14">
          {/* About the Course */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">About the Course</h2>
            <p className="text-gray-800 dark:text-gray-300">
              This course offers a structured 12-week path into Artificial
              Intelligence and Machine Learning. Covering core mathematical
              foundations, practical coding in Python, model training,
              deployment, and real-world AI/ML applications.
            </p>
          </section>

          {/* Weekly Modules */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Week 1: Python for AI",
                points: [
                  "Python basics & libraries",
                  "NumPy, Pandas introduction",
                ],
              },
              {
                title: "Week 2: Math for ML",
                points: ["Linear algebra, probability", "Basic statistics"],
              },
              {
                title: "Week 3: Data Preprocessing",
                points: [
                  "Cleaning, normalization",
                  "Exploratory data analysis",
                ],
              },
              {
                title: "Week 4: Supervised Learning",
                points: ["Regression & classification", "Model evaluation"],
              },
              {
                title: "Week 5: Unsupervised Learning",
                points: [
                  "Clustering & dimensionality reduction",
                  "K-Means, PCA",
                ],
              },
              {
                title: "Week 6: Model Validation",
                points: ["Cross-validation", "Hyperparameter tuning"],
              },
              {
                title: "Week 7: Deep Learning Basics",
                points: ["Neural networks intro", "Activation functions"],
              },
              {
                title: "Week 8: CNNs & Computer Vision",
                points: ["Convolutional layers", "Image classification"],
              },
              {
                title: "Week 9: NLP & Text Processing",
                points: ["Tokenization, TF-IDF", "Text classification"],
              },
              {
                title: "Week 10: Model Deployment",
                points: ["Flask API for ML models", "Using Docker for serving"],
              },
              {
                title: "Week 11: AI Ethics & Explainability",
                points: ["Bias & fairness in models", "Model interpretation"],
              },
              {
                title: "Week 12: Capstone & Interview Prep",
                points: ["Final project demo", "Mock interviews & resume"],
              },
            ].map((week, index) => (
              <div
                key={index}
                className="bg-card text-card-foreground transition-all duration-300 p-6 rounded-xl shadow-md"
              >
                <h3 className="text-xl font-bold mb-2">{week.title}</h3>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
                  {week.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* CTA Buttons */}
          <div className="flex justify-center gap-4 pt-10">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 hover:text-primary"
              onClick={() => setShowForm(true)}
            >
              Apply now
            </Button>
            <Button
              variant="default"
              className="bg-primary text-white hover:bg-primary/90"
              asChild
            >
              <a href="#">Broucher</a>
            </Button>
          </div>
          <FormModal open={showForm} onOpenChange={setShowForm} />
        </div>
      </div>
    </>
  );
};

export default AIML;
