import { Star, MapPin, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TalentCardProps {
  name: string;
  avatar: string;
  role: string;
  location: string;
  hourlyRate: number;
  rating: number;
  skills: string[];
  available: boolean;
  verified: boolean;
  jobSuccess?: number;
}

export default function TalentCard({
  name,
  avatar,
  role,
  location,
  hourlyRate,
  rating,
  skills,
  available,
  verified,
  jobSuccess = 95,
}: TalentCardProps) {
  return (
    <div className="talent-card group">
      <div className="flex items-start gap-4 mb-4">
        {/* Avatar */}
        <div className="relative">
          <img
            src={avatar}
            alt={name}
            className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
          />
          {available && (
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-green-500 border-2 border-card flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-foreground truncate">{name}</h3>
            {verified && (
              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
            )}
          </div>
          <p className="text-sm text-muted-foreground mb-2">{role}</p>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="w-3 h-3" />
              {location}
            </span>
            <span className="flex items-center gap-1">
              <Star className="w-3 h-3 text-yellow-500" />
              {rating}
            </span>
          </div>
        </div>

        {/* Rate */}
        <div className="text-right">
          <p className="text-lg font-bold text-primary">${hourlyRate}</p>
          <p className="text-xs text-muted-foreground">/hour</p>
        </div>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mb-4">
        {skills.slice(0, 4).map((skill) => (
          <span
            key={skill}
            className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground"
          >
            {skill}
          </span>
        ))}
        {skills.length > 4 && (
          <span className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground">
            +{skills.length - 4}
          </span>
        )}
      </div>

      {/* Stats & CTA */}
      <div className="flex items-center justify-between pt-4 border-t border-border/50">
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {jobSuccess}% Success
          </span>
          <span className={available ? 'text-green-500' : 'text-muted-foreground'}>
            {available ? '● Available' : '○ Busy'}
          </span>
        </div>
        <Button 
          size="sm" 
          className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 opacity-0 group-hover:opacity-100"
        >
          View Profile
        </Button>
      </div>
    </div>
  );
}
