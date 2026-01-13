import { useState, lazy, Suspense } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Headphones, Users, Briefcase, Star } from 'lucide-react';

const Globe = lazy(() => import('./Globe'));

const filterOptions = [
  { value: 'all', label: 'All Talent' },
  { value: 'developer', label: 'Developers' },
  { value: 'designer', label: 'Designers' },
  { value: 'available', label: 'Available Now' },
];

export default function HeroSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow animation-delay-400" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full w-fit mb-6 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">
                12,000+ verified professionals worldwide
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in animation-delay-200">
              <span className="text-foreground">Hire Elite</span>
              <br />
              <span className="gradient-text">Global Talent</span>
              <br />
              <span className="text-foreground">Instantly</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-lg animate-fade-in animation-delay-400">
              Connect with vetted developers, designers, and tech experts from around the world. 
              Scale your team in days, not months.
            </p>

            <div className="flex flex-wrap gap-4 mb-10 animate-fade-in animation-delay-600">
              <button className="btn-hero-primary flex items-center gap-2 group">
                Browse Talent
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <a href="tel:+13203077800" className="btn-hero-secondary flex items-center gap-2">
                <Headphones className="w-5 h-5" />
                HR-Screening
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 animate-fade-in animation-delay-600">
              <div>
                <div className="flex items-center gap-2 text-primary mb-1">
                  <Users className="w-5 h-5" />
                  <span className="text-2xl font-bold">12K+</span>
                </div>
                <p className="text-sm text-muted-foreground">Active Talent</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-primary mb-1">
                  <Briefcase className="w-5 h-5" />
                  <span className="text-2xl font-bold">8K+</span>
                </div>
                <p className="text-sm text-muted-foreground">Projects Done</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-primary mb-1">
                  <Star className="w-5 h-5" />
                  <span className="text-2xl font-bold">4.9</span>
                </div>
                <p className="text-sm text-muted-foreground">Avg Rating</p>
              </div>
            </div>
          </div>

          {/* Right - Globe */}
          <div className="relative h-[500px] lg:h-[600px]">
            {/* Globe filters */}
            <div className="absolute top-0 left-0 right-0 flex flex-wrap justify-center gap-2 z-20 animate-fade-in">
              {filterOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setActiveFilter(option.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === option.value
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'glass-card text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>

            {/* Globe container */}
            <div className="absolute inset-0 mt-12">
              <Suspense fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full border border-primary/30 animate-pulse flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full border border-primary/20 animate-pulse" />
                  </div>
                </div>
              }>
                <Globe filter={activeFilter} />
              </Suspense>
            </div>

            {/* Floating badges */}
            <div className="absolute bottom-20 left-0 glass-card px-4 py-3 animate-float z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-sm">
                  SC
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Sarah joined</p>
                  <p className="text-xs text-muted-foreground">Frontend Developer • SF</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-32 right-0 glass-card px-4 py-3 animate-float animation-delay-400 z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                  AT
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Akira available</p>
                  <p className="text-xs text-muted-foreground">Backend Dev • Tokyo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
