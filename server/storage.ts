import { 
  users, programs, testimonials, successStories, teamMembers, leads,
  type User, type InsertUser, type Program, type InsertProgram, 
  type Testimonial, type InsertTestimonial, type SuccessStory, type InsertSuccessStory,
  type TeamMember, type InsertTeamMember, type Lead, type InsertLead
} from "@shared/schema";

export interface IStorage {
  // Users
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Programs
  getAllPrograms(): Promise<Program[]>;
  getProgramsByType(type: string): Promise<Program[]>;
  getProgram(id: number): Promise<Program | undefined>;
  createProgram(program: InsertProgram): Promise<Program>;
  
  // Testimonials
  getAllTestimonials(): Promise<Testimonial[]>;
  getTestimonialsByType(type: string): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  
  // Success Stories
  getAllSuccessStories(): Promise<SuccessStory[]>;
  createSuccessStory(story: InsertSuccessStory): Promise<SuccessStory>;
  
  // Team Members
  getAllTeamMembers(): Promise<TeamMember[]>;
  getTeamMembersByType(type: string): Promise<TeamMember[]>;
  createTeamMember(member: InsertTeamMember): Promise<TeamMember>;
  
  // Leads
  createLead(lead: InsertLead): Promise<Lead>;
  getAllLeads(): Promise<Lead[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private programs: Map<number, Program>;
  private testimonials: Map<number, Testimonial>;
  private successStories: Map<number, SuccessStory>;
  private teamMembers: Map<number, TeamMember>;
  private leads: Map<number, Lead>;
  private currentId: number;

  constructor() {
    this.users = new Map();
    this.programs = new Map();
    this.testimonials = new Map();
    this.successStories = new Map();
    this.teamMembers = new Map();
    this.leads = new Map();
    this.currentId = 1;
    this.seedData();
  }

  private seedData() {
    // Seed Programs
    const samplePrograms: InsertProgram[] = [
      {
        title: "Software Development Course with AI Specialisation",
        description: "Comprehensive software development program with AI specialization",
        duration: "9-12 months",
        minExperience: "1 year",
        type: "online",
        certification: "NSDC CERTIFIED",
        features: ["1 Capstone project", "Live projects", "Industry mentorship"],
        imageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
        isNew: false,
        programUrl: "/programs/software-development"
      },
      {
        title: "Data Science Course with AI Specialisation",
        description: "Advanced data science program with AI and ML focus",
        duration: "7-18 months",
        minExperience: "1 year",
        type: "online",
        certification: "NSDC CERTIFIED",
        features: ["50+ real-world case studies", "Industry projects", "Expert mentorship"],
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
        isNew: false,
        programUrl: "/programs/data-science"
      },
      {
        title: "Advanced AI and Machine Learning Course",
        description: "Cutting-edge AI and ML program for experienced professionals",
        duration: "12 months",
        minExperience: "2 years",
        type: "online",
        certification: "NSDC CERTIFIED",
        features: ["50+ real-world projects", "Research opportunities", "Industry partnerships"],
        imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
        isNew: true,
        programUrl: "/programs/ai-ml"
      },
      {
        title: "DevOps and Cloud Computing",
        description: "Modern DevOps and cloud infrastructure management",
        duration: "12-16 months",
        minExperience: "1 year",
        type: "online",
        certification: "NSDC CERTIFIED",
        features: ["Real-world assignments", "Cloud certifications", "Hands-on labs"],
        imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
        isNew: true,
        programUrl: "/programs/devops"
      },
      {
        title: "Bachelor's + Master's Program",
        description: "Comprehensive undergraduate and graduate technology education",
        duration: "3 years + 1-year internship",
        minExperience: "12th grade",
        type: "on-campus",
        certification: "RECOMMENDED DEGREE FROM BITS",
        features: ["Fully residential in Bangalore", "Industry internship", "Research projects"],
        imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
        isNew: false,
        programUrl: "/programs/bachelors-masters"
      },
      {
        title: "Business Program",
        description: "Technology business and entrepreneurship program",
        duration: "15 months + 3-month internship",
        minExperience: "1 year",
        type: "on-campus",
        certification: "DESIGNED BY BUSINESS LEADERS",
        features: ["Build your MVP", "Startup incubation", "Business mentorship"],
        imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
        isNew: true,
        programUrl: "/programs/business"
      }
    ];

    samplePrograms.forEach(program => this.createProgram(program));

    // Seed Testimonials
    const sampleTestimonials: InsertTestimonial[] = [
      {
        name: "Rajasekhar Khandrika",
        position: "VP of Engineering",
        company: "Xpressbees",
        content: "My team and I enjoy interviewing candidates from Qualibytes because of the skills they possess and also the approach taken by Qualibytes towards the training process itself.",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
        type: "industry"
      },
      {
        name: "Himanshu Kochar",
        position: "Talent Acquisition Manager",
        company: "ZEE",
        content: "Qualibytes Academy's training program has been instrumental in bridging our technical skills gap. We highly recommend Qualibytes Academy for their top-notch training and quality talent pool.",
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
        type: "industry"
      },
      {
        name: "Imran Khan",
        position: "Recruitment Manager",
        company: "TechMojo",
        content: "It was incredible working with Qualibytes. The applicants are great at critical thinking and ideating. We have made quite a number of offers and most of them have joined us.",
        imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
        type: "industry"
      }
    ];

    sampleTestimonials.forEach(testimonial => this.createTestimonial(testimonial));

    // Seed Success Stories
    const sampleSuccessStories: InsertSuccessStory[] = [
      {
        name: "Mohini Bansal",
        currentPosition: "Software Engineer 3",
        currentCompany: "Walmart Labs",
        previousCompany: "Khoros",
        salaryHike: 171,
        imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b776?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
        profileUrl: "https://www.linkedin.com/in/mohbansa/"
      },
      {
        name: "Ayush Mishra",
        currentPosition: "SDE 2",
        currentCompany: "Microsoft",
        previousCompany: "Samsung",
        salaryHike: 424,
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
        profileUrl: "https://www.linkedin.com/in/ayush-mishra5"
      },
      {
        name: "Shriram Bhat",
        currentPosition: "Software Engineer 3",
        currentCompany: "Paypal",
        previousCompany: "HCL",
        salaryHike: 171,
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
        profileUrl: "https://www.linkedin.com/in/shriram-bhat-berolli/"
      }
    ];

    sampleSuccessStories.forEach(story => this.createSuccessStory(story));

    // Seed Team Members
    const sampleTeamMembers: InsertTeamMember[] = [
      {
        name: "Anshuman Singh",
        position: "Co-founder of Qualibytes",
        bio: "He worked with Mark Zuckerberg and led the team that built FB Messenger, before setting up FB's office outside the US",
        imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
        type: "leadership"
      },
      {
        name: "Abhimanyu Saxena",
        position: "Co-founder of Qualibytes",
        bio: "One of the first engineers at Fab.com, his passion for tech education later led to the launch of Qualibytes & InterviewBit",
        imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
        type: "leadership"
      },
      {
        name: "Bhavik Rathod",
        position: "President SST",
        bio: "As the head of Uber Eats in India & South Asia, he scaled the business to a milestone of USD $300M in over 40 cities",
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
        type: "leadership"
      },
      {
        name: "Kunal Shah",
        position: "Founder CRED",
        bio: "Angel investor, entrepreneur and founder of fintech company CRED and Freecharge, he is one of the most well-known product leaders in India.",
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
        type: "advisory"
      },
      {
        name: "Deepinder Goyal",
        position: "Co-Founder Zomato",
        bio: "An alumnus of IIT, Delhi he is the co-founder of the food delivery app, Zomato and founder and CEO of Blinkit, a quick commerce platform.",
        imageUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
        type: "advisory"
      },
      {
        name: "Vijay Shekhar Sharma",
        position: "MD at Paytm",
        bio: "He is a technology entrepreneur and business magnate. The founder chairman, and managing director of One97 and consumer brand Paytm.",
        imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
        type: "advisory"
      }
    ];

    sampleTeamMembers.forEach(member => this.createTeamMember(member));
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Program methods
  async getAllPrograms(): Promise<Program[]> {
    return Array.from(this.programs.values());
  }

  async getProgramsByType(type: string): Promise<Program[]> {
    return Array.from(this.programs.values()).filter(p => p.type === type);
  }

  async getProgram(id: number): Promise<Program | undefined> {
    return this.programs.get(id);
  }

  async createProgram(insertProgram: InsertProgram): Promise<Program> {
    const id = this.currentId++;
    const program: Program = { 
      ...insertProgram, 
      id,
      certification: insertProgram.certification || null,
      features: insertProgram.features || null,
      imageUrl: insertProgram.imageUrl || null,
      isNew: insertProgram.isNew || null,
      programUrl: insertProgram.programUrl || null
    };
    this.programs.set(id, program);
    return program;
  }

  // Testimonial methods
  async getAllTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async getTestimonialsByType(type: string): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values()).filter(t => t.type === type);
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.currentId++;
    const testimonial: Testimonial = { 
      ...insertTestimonial, 
      id,
      imageUrl: insertTestimonial.imageUrl || null
    };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }

  // Success Story methods
  async getAllSuccessStories(): Promise<SuccessStory[]> {
    return Array.from(this.successStories.values());
  }

  async createSuccessStory(insertSuccessStory: InsertSuccessStory): Promise<SuccessStory> {
    const id = this.currentId++;
    const successStory: SuccessStory = { 
      ...insertSuccessStory, 
      id,
      imageUrl: insertSuccessStory.imageUrl || null,
      profileUrl: insertSuccessStory.profileUrl || null
    };
    this.successStories.set(id, successStory);
    return successStory;
  }

  // Team Member methods
  async getAllTeamMembers(): Promise<TeamMember[]> {
    return Array.from(this.teamMembers.values());
  }

  async getTeamMembersByType(type: string): Promise<TeamMember[]> {
    return Array.from(this.teamMembers.values()).filter(t => t.type === type);
  }

  async createTeamMember(insertTeamMember: InsertTeamMember): Promise<TeamMember> {
    const id = this.currentId++;
    const teamMember: TeamMember = { 
      ...insertTeamMember, 
      id,
      imageUrl: insertTeamMember.imageUrl || null
    };
    this.teamMembers.set(id, teamMember);
    return teamMember;
  }

  // Lead methods
  async createLead(insertLead: InsertLead): Promise<Lead> {
    const id = this.currentId++;
    const lead: Lead = { 
      id,
      name: insertLead.name || null,
      email: insertLead.email || null,
      phone: insertLead.phone || null,
      program: insertLead.program || null,
      source: insertLead.source || null,
      createdAt: new Date()
    };
    this.leads.set(id, lead);
    return lead;
  }

  async getAllLeads(): Promise<Lead[]> {
    return Array.from(this.leads.values());
  }
}

export const storage = new MemStorage();
