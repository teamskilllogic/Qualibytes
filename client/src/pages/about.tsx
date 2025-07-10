import Navigation from "@/components/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Users,
  Target,
  Award,
  Globe,
  TrendingUp,
  BookOpen,
  Code,
  GraduationCap,
  CheckCircle,
  Star,
  ArrowRight,
} from "lucide-react";

interface AboutProps {
  onRequestCall?: () => void;
}

export default function About() {
  const [showAdvisorPopup, setShowAdvisorPopup] = useState(false);

  const stats = [
    { label: "Students Enrolled", value: "10,000+", icon: Users },
    { label: "Success Rate", value: "95%", icon: Target },
    { label: "Industry Partners", value: "500+", icon: Award },
    { label: "Countries Reached", value: "25+", icon: Globe },
  ];

  const values = [
    {
      icon: BookOpen,
      title: "Industry-Relevant Curriculum",
      description:
        "Our courses are designed in collaboration with industry experts to ensure you learn the most in-demand skills.",
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description:
        "Learn from industry veterans and professionals from top tech companies like Google, Amazon, and Microsoft.",
    },
    {
      icon: Code,
      title: "Hands-on Projects",
      description:
        "Build real-world projects that showcase your skills and help you build a strong portfolio.",
    },
    {
      icon: GraduationCap,
      title: "Career Support",
      description:
        "Get placement assistance, interview preparation, and career guidance to land your dream job.",
    },
  ];

  const mediaFeatures = [
    {
      source: "TechCrunch",
      title: "Qualibytes Learning Revolutionizes Tech Education",
      date: "2024",
    },
    {
      source: "Forbes",
      title: "The Future of Online Learning: A Success Story",
      date: "2024",
    },
    {
      source: "Business Insider",
      title: "How Qualibytes is Bridging the Tech Skills Gap",
      date: "2024",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation onRequestCall={() => setShowAdvisorPopup(true)} />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            We're <span className="text-primary">Qualibytes Learning</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            An online transformative upskilling platform for working tech
            professionals. Our industry-vetted approach helps you unlock your
            potential and create real impact in the tech world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-800 to-blue-500 hover:from-blue-900 hover:to-blue-600"
              onClick={() => setShowAdvisorPopup(true)}
            >
              Talk to Our Experts
            </Button>
            <Button variant="outline" size="lg">
              Explore Programs
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What is Qualibytes Learning?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Qualibytes Learning is an online transformative upskilling
              platform for working tech professionals. Our industry-vetted
              approach towards teaching & training young professionals not only
              helps them upskill but also creates real impact in the tech world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center hover:scale-105 transition-all duration-200"
              >
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <value.icon className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We are devoted to creating an ecosystem that nurtures our
                learners and assists them in unlocking talent, skills &
                opportunities at every stage of their careers. Our mission is to
                create 1M+ world-class tech professionals by providing them with
                exceptional mentorship and relevant course material.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Industry-vetted curriculum</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>1:1 mentorship from experts</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Real-world project experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Career placement support</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-800 to-blue-500 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5" />
                    <span>Learn from industry veterans</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5" />
                    <span>Comprehensive curriculum</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5" />
                    <span>Live classes & mock interviews</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5" />
                    <span>Strong alumni network</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Founder & CEO
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the visionary behind Qualibytes Learning.
            </p>
          </div>

          <div className="flex justify-center">
            <Card className="text-center hover:scale-105 transition-all duration-200 max-w-md w-full">
              <CardHeader>
                <div className="flex justify-center mb-6">
                  <img
                    src="/attached_assets/image_1750912212645.png"
                    alt="Mr. Akshit Giri"
                    className="w-32 h-32 rounded-full object-cover border-4 border-primary mx-auto"
                  />
                </div>
                <CardTitle className="text-2xl">Mr. Akshit Giri</CardTitle>
                <CardDescription className="text-lg font-medium text-primary">
                  Founder & CEO
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Join our{" "}
                  <span className="font-semibold text-foreground">
                    Free Live Webinar Tonight
                  </span>{" "}
                  with our Founder & CEO,{" "}
                  <span className="font-bold text-primary">
                    Mr. Akshit Giri
                  </span>
                  .<br />
                  <span className="block mt-2">
                    Exclusive Invite for all learners!
                  </span>
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge variant="secondary">Visionary Leader</Badge>
                  <Badge variant="secondary">Webinar Host</Badge>
                  <Badge variant="secondary">Founder & CEO</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Qualibytes in Media
            </h2>
            <p className="text-xl text-muted-foreground">
              Our success stories have been featured in leading publications
              worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mediaFeatures.map((feature, index) => (
              <Card
                key={index}
                className="hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                <CardHeader>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                  <CardDescription className="flex items-center justify-between">
                    <span className="font-medium">{feature.source}</span>
                    <span className="text-sm">{feature.date}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="w-full">
                    Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of professionals who have already taken their careers
            to the next level with Qualibytes Learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-800 to-blue-500 hover:from-blue-900 hover:to-blue-600"
              onClick={() => setShowAdvisorPopup(true)}
            >
              Start Your Journey
            </Button>
            <Button variant="outline" size="lg">
              View All Programs
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
