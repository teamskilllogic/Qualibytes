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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Clock,
  Users,
  Send,
  Globe,
  MessageCircle,
  Building,
  Mail as MailIcon,
  Phone as PhoneIcon,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  Youtube,
} from "lucide-react";
import OldFooter from "@/components/oldFooter";

export default function Contact() {
  const [showAdvisorPopup, setShowAdvisorPopup] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    setShowAdvisorPopup(true);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const contactMethods = [
    {
      icon: Users,
      title: "Contact Details",
      description: "Reach out to us for any queries or support",
      email: "hi@qualibytes.com",
      phone: "+91 83770 32324",
      responseTime: "Within 24 hours",
    },
  ];

  const offices = [
    {
      name: "Head Office - India",
      address: "D‑9, Block‑D, Sector 3, Noida, Uttar Pradesh – 201301",
      phone: "+91 83770 32324",
      email: "hi@qualibytes.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM IST",
      website: "www.qualibytes.com",
    },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      url: "#",
      icon: Instagram,
      hover: "hover:text-[#E1306C]",
    },
    { name: "Twitter", url: "#", icon: Twitter, hover: "hover:text-[#1DA1F2]" },
    {
      name: "LinkedIn",
      url: "#",
      icon: Linkedin,
      hover: "hover:text-[#0077B5]",
    },
    {
      name: "Facebook",
      url: "#",
      icon: Facebook,
      hover: "hover:text-[#1877F3]",
    },
    { name: "YouTube", url: "#", icon: Youtube, hover: "hover:text-[#FF0000]" },
  ];

  const programLinks = [
    { name: "Software Development", href: "#" },
    { name: "Data Science", href: "#" },
    { name: "AI & Machine Learning", href: "#" },
    { name: "DevOps & Cloud", href: "#" },
  ];

  const companyLinks = [
    { name: "About Us", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Blog", href: "#" },
  ];

  const supportLinks = [
    { name: "Help Center", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Refund Policy", href: "#" },
  ];

  const programOptions = [
    "Software Development",
    "Data Science",
    "DevOps",
    "AI/ML",
    "Manual Testing",
    "Automation Testing",
    "Java Full Stack",
    "PHP Full Stack",
    "Frontend Development",
    "Backend Development",
    "MERN Stack",
    "Business Analyst",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation onRequestCall={() => setShowAdvisorPopup(true)} />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            A Step <span className="text-primary">Closer!</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Get in touch with our team. We're here to help you take your career
            to the next level.
          </p>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Have any queries?
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the right team to get the fastest response
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <method.icon className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{method.title}</CardTitle>
                  <CardDescription className="text-base">
                    {method.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a
                      href={`mailto:${method.email}`}
                      className="text-primary hover:underline"
                    >
                      {method.email}
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <a
                      href={`tel:${method.phone}`}
                      className="text-primary hover:underline"
                    >
                      {method.phone}
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Response: {method.responseTime}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Offices
            </h2>
            <p className="text-xl text-muted-foreground">
              Visit us or reach out to our local teams
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl mb-2">{office.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">{office.address}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <PhoneIcon className="h-5 w-5 text-muted-foreground" />
                    <a
                      href={`tel:${office.phone}`}
                      className="text-primary hover:underline"
                    >
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MailIcon className="h-5 w-5 text-muted-foreground" />
                    <a
                      href={`mailto:${office.email}`}
                      className="text-primary hover:underline"
                    >
                      {office.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      {office.hours}
                    </span>
                  </div>
                  {office.website && (
                    <div className="flex items-center gap-3">
                      <Globe className="h-5 w-5 text-muted-foreground" />
                      <a
                        href={office.website}
                        className="text-primary hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {office.website}
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Any other Queries?
            </h2>
            <p className="text-xl text-muted-foreground">
              Send us a message and we'll get back to you as soon as possible
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Get in Touch
              </CardTitle>
              <CardDescription className="text-center">
                Fill out the form below and we'll respond within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="topic">Topic of Interest</Label>
                  <select
                    id="topic"
                    name="topic"
                    className="w-full p-2 border rounded"
                    value={formData.topic}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="" disabled>
                      Select a program
                    </option>
                    {programOptions.map((option, idx) => (
                      <option key={idx} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your inquiry..."
                    rows={5}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-800 to-blue-500 hover:from-blue-900 hover:to-blue-600"
                  size="lg"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Social Links Section */}
      {/* <section className="py-16 px-4 sm:px-6 lg:px-8"> */}
        {/* <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Follow us on Social Media
          </h3>
          <div className="flex justify-center gap-6 mb-12">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  className={`flex items-center gap-2 text-gray-300 transition-colors font-medium px-4 py-2 ${social.hover}`}
                  aria-label={social.name}
                >
                  <IconComponent className={`h-6 w-6 ${social.hover}`} />
                  <span className={social.hover}>{social.name}</span>
                </a>
              );
            })}
          </div> */}
          {/* Navigation Links from Footer */}
          {/* <dive className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-center text-left">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Programs
              </h4>
              <ul className="space-y-2">
                {programLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2">
                {companyLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Support</h4>
              <ul className="space-y-2">
                {supportLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </dive> */}
        {/* </div> */}
      {/* // </section> */}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-800 to-blue-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Talk to our academic advisors and get personalized guidance for your
            career path.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => setShowAdvisorPopup(true)}
            >
              Talk to an Advisor
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-800"
            >
              Explore Programs
            </Button>
          </div>
        </div>
      </section>
      <OldFooter />
    </div>
  );
}
