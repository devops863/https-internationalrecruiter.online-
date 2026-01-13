import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "InternationalRecruiter.Online helped us scale our engineering team from 5 to 25 in just 3 months. The quality of talent is exceptional.",
    author: "Jessica Wang",
    role: "CTO",
    company: "TechFlow Inc.",
    avatar: "JW",
    rating: 5,
  },
  {
    quote: "We've tried multiple platforms, but none match the caliber of professionals we find here. Our go-to for remote hiring.",
    author: "Michael Chen",
    role: "VP of Engineering",
    company: "DataSync",
    avatar: "MC",
    rating: 5,
  },
  {
    quote: "The vetting process saved us countless hours. Every developer we've hired has exceeded expectations.",
    author: "Sarah Miller",
    role: "Founder",
    company: "StartupHQ",
    avatar: "SM",
    rating: 5,
  },
];

const logos = [
  { name: 'Microsoft', opacity: 0.6 },
  { name: 'Google', opacity: 0.6 },
  { name: 'Stripe', opacity: 0.6 },
  { name: 'Shopify', opacity: 0.6 },
  { name: 'Airbnb', opacity: 0.6 },
  { name: 'Spotify', opacity: 0.6 },
];

export default function SocialProofSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Trusted by logos */}
        <div className="text-center mb-20">
          <p className="text-muted-foreground text-sm uppercase tracking-wider mb-8">
            Trusted by teams at leading companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {logos.map((logo) => (
              <div
                key={logo.name}
                className="text-2xl font-bold text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors"
              >
                {logo.name}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="glass-card p-8 relative group hover:border-primary/30 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-20 glass-card p-8 rounded-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold gradient-text mb-2">12,000+</p>
              <p className="text-muted-foreground">Verified Professionals</p>
            </div>
            <div>
              <p className="text-4xl font-bold gradient-text mb-2">150+</p>
              <p className="text-muted-foreground">Countries Represented</p>
            </div>
            <div>
              <p className="text-4xl font-bold gradient-text mb-2">98%</p>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
            <div>
              <p className="text-4xl font-bold gradient-text mb-2">$50M+</p>
              <p className="text-muted-foreground">Paid to Talent</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
