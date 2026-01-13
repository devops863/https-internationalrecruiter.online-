import TalentCard from './TalentCard';
import { ArrowRight } from 'lucide-react';

// Import avatar images
import sarahChenAvatar from '@/assets/avatars/sarah-chen.jpg';
import marcusJohnsonAvatar from '@/assets/avatars/marcus-johnson.jpg';
import elenaRodriguezAvatar from '@/assets/avatars/elena-rodriguez.jpg';
import akiraTanakaAvatar from '@/assets/avatars/akira-tanaka.jpg';
import priyaSharmaAvatar from '@/assets/avatars/priya-sharma.jpg';
import hansMuellerAvatar from '@/assets/avatars/hans-mueller.jpg';

const featuredTalent = [
  {
    name: 'Sarah Chen',
    avatar: sarahChenAvatar,
    role: 'Senior Frontend Developer',
    location: 'San Francisco, USA',
    hourlyRate: 85,
    rating: 4.9,
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'GraphQL'],
    available: true,
    verified: true,
    jobSuccess: 98,
  },
  {
    name: 'Marcus Johnson',
    avatar: marcusJohnsonAvatar,
    role: 'DevOps Engineer',
    location: 'New York, USA',
    hourlyRate: 95,
    rating: 4.8,
    skills: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'CI/CD'],
    available: true,
    verified: true,
    jobSuccess: 96,
  },
  {
    name: 'Elena Rodriguez',
    avatar: elenaRodriguezAvatar,
    role: 'UI/UX Designer',
    location: 'London, UK',
    hourlyRate: 75,
    rating: 5.0,
    skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
    available: false,
    verified: true,
    jobSuccess: 100,
  },
  {
    name: 'Akira Tanaka',
    avatar: akiraTanakaAvatar,
    role: 'Backend Developer',
    location: 'Tokyo, Japan',
    hourlyRate: 90,
    rating: 4.7,
    skills: ['Node.js', 'Python', 'PostgreSQL', 'Redis', 'Microservices'],
    available: true,
    verified: true,
    jobSuccess: 94,
  },
  {
    name: 'Priya Sharma',
    avatar: priyaSharmaAvatar,
    role: 'Data Scientist',
    location: 'Delhi, India',
    hourlyRate: 80,
    rating: 4.9,
    skills: ['Python', 'TensorFlow', 'Machine Learning', 'Data Analysis'],
    available: true,
    verified: true,
    jobSuccess: 97,
  },
  {
    name: 'Hans Mueller',
    avatar: hansMuellerAvatar,
    role: 'Cloud Architect',
    location: 'Berlin, Germany',
    hourlyRate: 110,
    rating: 4.6,
    skills: ['AWS', 'Azure', 'System Design', 'Security', 'Networking'],
    available: true,
    verified: true,
    jobSuccess: 95,
  },
];

export default function TalentSection() {
  return (
    <section id="talent" className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Featured Talent
          </span>
          <h2 className="section-heading">
            Meet Our <span className="gradient-text">Top Professionals</span>
          </h2>
          <p className="section-subheading">
            Hand-picked experts ready to join your team. Every professional is vetted 
            for technical skills, communication, and reliability.
          </p>
        </div>

        {/* Talent Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredTalent.map((talent, index) => (
            <div
              key={talent.name}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <TalentCard {...talent} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="btn-hero-secondary inline-flex items-center gap-2 group">
            View All Talent
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
