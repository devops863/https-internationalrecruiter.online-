import { Search, Users, MessageSquare, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Find Talent',
    description: 'Search our global network of vetted professionals. Filter by skills, experience, timezone, and availability.',
    step: '01',
  },
  {
    icon: Users,
    title: 'Review Profiles',
    description: 'Explore detailed portfolios, work history, and verified reviews from past clients.',
    step: '02',
  },
  {
    icon: MessageSquare,
    title: 'Interview & Hire',
    description: 'Connect directly with candidates. Negotiate terms and start your project with confidence.',
    step: '03',
  },
  {
    icon: Rocket,
    title: 'Scale Your Team',
    description: 'Manage contracts, track progress, and pay securely through our platform.',
    step: '04',
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            How It Works
          </span>
          <h2 className="section-heading">
            Hire in <span className="gradient-text">Four Simple Steps</span>
          </h2>
          <p className="section-subheading">
            From discovery to deployment, we've streamlined the entire hiring process 
            so you can focus on building great products.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-px bg-gradient-to-r from-border via-primary/30 to-border z-0" />
              )}
              
              <div className="glass-card p-6 h-full relative z-10 group-hover:border-primary/50 transition-all duration-300">
                {/* Step number */}
                <span className="absolute top-4 right-4 text-4xl font-bold text-muted/20">
                  {step.step}
                </span>
                
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:from-primary/30 group-hover:to-secondary/30 transition-all duration-300">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
