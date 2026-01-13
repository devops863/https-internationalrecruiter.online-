import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="glass-card rounded-3xl p-12 md:p-16 text-center max-w-4xl mx-auto glow-border">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Start Building Today
          </div>
          
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Ready to Build Your</span>
            <br />
            <span className="gradient-text">Dream Team?</span>
          </h2>
          
          {/* Description */}
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Join thousands of companies hiring elite global talent. 
            Start with a free consultation or browse our talent pool today.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-hero-primary inline-flex items-center justify-center gap-2 group">
              Book a Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-hero-secondary inline-flex items-center justify-center gap-2">
              Browse Talent
            </button>
          </div>
          
          {/* Trust badge */}
          <p className="mt-8 text-sm text-muted-foreground">
            ✓ No commitment required • ✓ Free to browse • ✓ 24/7 Support
          </p>
        </div>
      </div>
    </section>
  );
}
