import { useState, useEffect, useMemo } from 'react';
import { MapPin, Star, CheckCircle } from 'lucide-react';

// Import avatar images
import sarahChenAvatar from '@/assets/avatars/sarah-chen.jpg';
import marcusJohnsonAvatar from '@/assets/avatars/marcus-johnson.jpg';
import elenaRodriguezAvatar from '@/assets/avatars/elena-rodriguez.jpg';
import akiraTanakaAvatar from '@/assets/avatars/akira-tanaka.jpg';
import priyaSharmaAvatar from '@/assets/avatars/priya-sharma.jpg';
import hansMuellerAvatar from '@/assets/avatars/hans-mueller.jpg';
import sofiaCostaAvatar from '@/assets/avatars/sofia-costa.jpg';
import jamesWilsonAvatar from '@/assets/avatars/james-wilson.jpg';
import marieDuboisAvatar from '@/assets/avatars/marie-dubois.jpg';
import kimMinjunAvatar from '@/assets/avatars/kim-minjun.jpg';
import oluwaseunAdeAvatar from '@/assets/avatars/oluwaseun-ade.jpg';
import isabellaRossiAvatar from '@/assets/avatars/isabella-rossi.jpg';
import chenWeiAvatar from '@/assets/avatars/chen-wei.jpg';
import anaGarciaAvatar from '@/assets/avatars/ana-garcia.jpg';
import viktorPetrovAvatar from '@/assets/avatars/viktor-petrov.jpg';
import emmaLindqvistAvatar from '@/assets/avatars/emma-lindqvist.jpg';

// Sample talent data with coordinates and real photos
const talentData = [
  { id: 1, name: 'Sarah Chen', role: 'Frontend Developer', country: 'USA', lat: 37.7749, lng: -122.4194, avatar: sarahChenAvatar, initials: 'SC', rating: 4.9, hourlyRate: 85, available: true },
  { id: 2, name: 'Marcus Johnson', role: 'DevOps Engineer', country: 'USA', lat: 40.7128, lng: -74.0060, avatar: marcusJohnsonAvatar, initials: 'MJ', rating: 4.8, hourlyRate: 95, available: true },
  { id: 3, name: 'Elena Rodriguez', role: 'UI/UX Designer', country: 'UK', lat: 51.5074, lng: -0.1278, avatar: elenaRodriguezAvatar, initials: 'ER', rating: 5.0, hourlyRate: 75, available: false },
  { id: 4, name: 'Akira Tanaka', role: 'Backend Developer', country: 'Japan', lat: 35.6762, lng: 139.6503, avatar: akiraTanakaAvatar, initials: 'AT', rating: 4.7, hourlyRate: 90, available: true },
  { id: 5, name: 'Priya Sharma', role: 'Data Scientist', country: 'India', lat: 28.6139, lng: 77.2090, avatar: priyaSharmaAvatar, initials: 'PS', rating: 4.9, hourlyRate: 80, available: true },
  { id: 6, name: 'Hans Mueller', role: 'Cloud Architect', country: 'Germany', lat: 52.5200, lng: 13.4050, avatar: hansMuellerAvatar, initials: 'HM', rating: 4.6, hourlyRate: 110, available: true },
  { id: 7, name: 'Sofia Costa', role: 'Mobile Developer', country: 'Brazil', lat: -23.5505, lng: -46.6333, avatar: sofiaCostaAvatar, initials: 'SC', rating: 4.8, hourlyRate: 70, available: true },
  { id: 8, name: 'James Wilson', role: 'Security Expert', country: 'Australia', lat: -33.8688, lng: 151.2093, avatar: jamesWilsonAvatar, initials: 'JW', rating: 4.9, hourlyRate: 120, available: false },
  { id: 9, name: 'Marie Dubois', role: 'Full Stack Dev', country: 'France', lat: 48.8566, lng: 2.3522, avatar: marieDuboisAvatar, initials: 'MD', rating: 4.7, hourlyRate: 85, available: true },
  { id: 10, name: 'Kim Min-jun', role: 'AI Engineer', country: 'South Korea', lat: 37.5665, lng: 126.9780, avatar: kimMinjunAvatar, initials: 'KM', rating: 5.0, hourlyRate: 100, available: true },
  { id: 11, name: 'Oluwaseun Ade', role: 'Blockchain Dev', country: 'Nigeria', lat: 6.5244, lng: 3.3792, avatar: oluwaseunAdeAvatar, initials: 'OA', rating: 4.8, hourlyRate: 75, available: true },
  { id: 12, name: 'Isabella Rossi', role: 'Product Manager', country: 'Italy', lat: 41.9028, lng: 12.4964, avatar: isabellaRossiAvatar, initials: 'IR', rating: 4.6, hourlyRate: 90, available: true },
  { id: 13, name: 'Chen Wei', role: 'ML Engineer', country: 'China', lat: 31.2304, lng: 121.4737, avatar: chenWeiAvatar, initials: 'CW', rating: 4.9, hourlyRate: 85, available: true },
  { id: 14, name: 'Ana García', role: 'iOS Developer', country: 'Spain', lat: 40.4168, lng: -3.7038, avatar: anaGarciaAvatar, initials: 'AG', rating: 4.7, hourlyRate: 80, available: true },
  { id: 15, name: 'Viktor Petrov', role: 'Systems Architect', country: 'Russia', lat: 55.7558, lng: 37.6173, avatar: viktorPetrovAvatar, initials: 'VP', rating: 4.8, hourlyRate: 95, available: false },
  { id: 16, name: 'Emma Lindqvist', role: 'UX Researcher', country: 'Sweden', lat: 59.3293, lng: 18.0686, avatar: emmaLindqvistAvatar, initials: 'EL', rating: 4.9, hourlyRate: 90, available: true },
];

// Country/city dots for the globe visualization
const worldDots = [
  { lat: 49.2827, lng: -123.1207 }, { lat: 45.5017, lng: -73.5673 },
  { lat: 34.0522, lng: -118.2437 }, { lat: 41.8781, lng: -87.6298 },
  { lat: 29.7604, lng: -95.3698 }, { lat: 19.4326, lng: -99.1332 },
  { lat: -34.6037, lng: -58.3816 }, { lat: -12.0464, lng: -77.0428 },
  { lat: 4.7110, lng: -74.0721 }, { lat: -33.4489, lng: -70.6693 },
  { lat: 55.7558, lng: 37.6173 }, { lat: 59.9139, lng: 10.7522 },
  { lat: 60.1699, lng: 24.9384 }, { lat: 52.3676, lng: 4.9041 },
  { lat: 50.0755, lng: 14.4378 }, { lat: 47.4979, lng: 19.0402 },
  { lat: 41.3851, lng: 2.1734 }, { lat: 38.7223, lng: -9.1393 },
  { lat: 39.9042, lng: 116.4074 }, { lat: 22.3193, lng: 114.1694 },
  { lat: 1.3521, lng: 103.8198 }, { lat: 13.7563, lng: 100.5018 },
  { lat: 21.0285, lng: 105.8542 }, { lat: 14.5995, lng: 120.9842 },
  { lat: -6.2088, lng: 106.8456 }, { lat: 25.2048, lng: 55.2708 },
  { lat: 31.5497, lng: 74.3436 }, { lat: 30.0444, lng: 31.2357 },
  { lat: -1.2921, lng: 36.8219 }, { lat: -33.9249, lng: 18.4241 },
  { lat: 33.5731, lng: -7.5898 }, { lat: 9.0579, lng: 7.4951 },
  { lat: -37.8136, lng: 144.9631 }, { lat: -41.2865, lng: 174.7762 },
  { lat: -27.4698, lng: 153.0251 },
];

interface GlobeProps {
  filter?: string;
  onTalentSelect?: (talent: typeof talentData[0]) => void;
}

// Profile card component
interface ProfileCardProps {
  talent: typeof talentData[0];
  position: { x: number; y: number };
  scale: number;
  isActive: boolean;
  onClick: () => void;
}

function ProfileCard({ talent, position, scale, isActive, onClick }: ProfileCardProps) {
  const size = Math.max(36, 48 * scale);
  
  return (
    <div
      className={`absolute transition-all duration-500 cursor-pointer ${
        isActive ? 'z-30' : 'z-10'
      }`}
      style={{
        left: position.x,
        top: position.y,
        transform: 'translate(-50%, -50%)',
        opacity: Math.max(0.6, scale),
      }}
      onClick={onClick}
    >
      {/* Avatar with glow */}
      <div 
        className={`relative transition-transform duration-300 ${isActive ? 'scale-125' : 'hover:scale-110'}`}
      >
        {/* Glow ring */}
        <div 
          className={`absolute inset-[-3px] rounded-full ${
            talent.available 
              ? 'bg-gradient-to-r from-primary to-accent' 
              : 'bg-gradient-to-r from-secondary to-purple-600'
          } ${isActive ? 'animate-pulse-glow' : ''}`}
          style={{
            boxShadow: talent.available 
              ? '0 0 20px hsl(200 100% 60% / 0.5)' 
              : '0 0 15px hsl(260 60% 50% / 0.4)',
          }}
        />
        
        {/* Profile image */}
        <img
          src={talent.avatar}
          alt={talent.name}
          className="relative rounded-full object-cover border-2 border-background"
          style={{ width: size, height: size }}
        />
        
        {/* Online indicator */}
        {talent.available && (
          <div 
            className="absolute -bottom-0.5 -right-0.5 bg-green-500 rounded-full border-2 border-background flex items-center justify-center"
            style={{ width: size * 0.3, height: size * 0.3 }}
          >
            <div className="w-1/2 h-1/2 bg-white rounded-full animate-pulse" />
          </div>
        )}
      </div>
      
      {/* Popup info card */}
      {isActive && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 glass-card p-4 rounded-xl min-w-[220px] animate-fade-in shadow-xl">
          <div className="flex items-center gap-3 mb-3">
            <img
              src={talent.avatar}
              alt={talent.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-primary/30"
            />
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-semibold text-foreground">{talent.name}</span>
                <CheckCircle className="w-4 h-4 text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">{talent.role}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 mb-3 text-sm">
            <span className="flex items-center gap-1 text-yellow-500">
              <Star className="w-4 h-4 fill-current" />
              {talent.rating}
            </span>
            <span className={`px-2 py-0.5 rounded-full text-xs ${
              talent.available 
                ? 'bg-green-500/20 text-green-400' 
                : 'bg-muted text-muted-foreground'
            }`}>
              {talent.available ? '● Available' : '○ Busy'}
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              {talent.country}
            </div>
            <span className="text-lg font-bold text-primary">${talent.hourlyRate}/hr</span>
          </div>
          
          <button className="w-full mt-3 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
            View Profile
          </button>
        </div>
      )}
    </div>
  );
}

export default function Globe({ filter = 'all', onTalentSelect }: GlobeProps) {
  const [rotation, setRotation] = useState(0);
  const [activeTalent, setActiveTalent] = useState<number | null>(null);
  const [popupIndex, setPopupIndex] = useState(0);

  const filteredTalent = useMemo(() => {
    if (filter === 'all') return talentData;
    if (filter === 'available') return talentData.filter(t => t.available);
    return talentData.filter(t => t.role.toLowerCase().includes(filter.toLowerCase()));
  }, [filter]);

  // Continuous rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.12) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // Cycle through popup profiles
  useEffect(() => {
    if (activeTalent !== null) return;
    const interval = setInterval(() => {
      setPopupIndex(prev => (prev + 1) % filteredTalent.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [filteredTalent.length, activeTalent]);

  // Convert lat/lng to globe position with 3D projection
  const getGlobePosition = (lat: number, lng: number, radius: number = 185) => {
    const adjustedLng = lng + rotation;
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (adjustedLng + 180) * (Math.PI / 180);
    
    const x = -(radius * Math.sin(phi) * Math.cos(theta));
    const z = radius * Math.sin(phi) * Math.sin(theta);
    const y = radius * Math.cos(phi);
    
    const perspective = 600;
    const scale = perspective / (perspective + z);
    
    return {
      x: 225 + x * scale,
      y: 225 - y * scale,
      z,
      scale,
      visible: z < 120,
    };
  };

  return (
    <div className="relative w-full h-full min-h-[500px]">
      {/* Globe container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[450px] h-[450px]">
          {/* Outer glow rings */}
          <div className="absolute inset-[-40px] rounded-full border border-primary/5" />
          <div className="absolute inset-[-25px] rounded-full border border-primary/10 animate-pulse-glow" />
          <div className="absolute inset-[-10px] rounded-full border border-primary/15" />
          
          {/* Main globe */}
          <div 
            className="absolute inset-0 rounded-full overflow-hidden"
            style={{
              background: 'radial-gradient(circle at 30% 30%, hsl(200 60% 20%) 0%, hsl(210 70% 12%) 60%, hsl(210 80% 6%) 100%)',
              boxShadow: `
                inset -40px -40px 80px hsl(210 80% 4%),
                inset 30px 30px 60px hsl(200 50% 20% / 0.4),
                0 0 100px hsl(200 100% 60% / 0.15),
                0 0 150px hsl(200 100% 50% / 0.1)
              `,
            }}
          >
            {/* Grid lines SVG */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 450 450">
              {/* Latitude lines */}
              {[-60, -30, 0, 30, 60].map((lat, i) => {
                const y = 225 - (lat / 90) * 180;
                const radiusAtLat = Math.cos(lat * Math.PI / 180) * 220;
                return (
                  <ellipse
                    key={`lat-${i}`}
                    cx="225"
                    cy={y}
                    rx={radiusAtLat}
                    ry={radiusAtLat * 0.25}
                    fill="none"
                    stroke="hsl(200 80% 50% / 0.15)"
                    strokeWidth="0.5"
                  />
                );
              })}
              
              {/* Longitude lines */}
              {Array.from({ length: 12 }).map((_, i) => {
                const angle = (i * 30 + rotation) % 360;
                const rad = angle * Math.PI / 180;
                return (
                  <path
                    key={`lng-${i}`}
                    d={`M ${225 + Math.sin(rad) * 220} 5 Q ${225 + Math.sin(rad) * 40} 225 ${225 + Math.sin(rad) * 220} 445`}
                    fill="none"
                    stroke="hsl(200 80% 50% / 0.12)"
                    strokeWidth="0.5"
                  />
                );
              })}
            </svg>

            {/* World city dots */}
            {worldDots.map((dot, i) => {
              const pos = getGlobePosition(dot.lat, dot.lng, 205);
              if (!pos.visible) return null;
              
              return (
                <div
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full bg-sky-400/50"
                  style={{
                    left: pos.x,
                    top: pos.y,
                    transform: 'translate(-50%, -50%)',
                    opacity: Math.max(0.3, pos.scale * 0.7),
                  }}
                />
              );
            })}
          </div>

          {/* Talent profile photos floating around the globe */}
          {filteredTalent.map((talent, index) => {
            const pos = getGlobePosition(talent.lat, talent.lng, 215);
            if (!pos.visible) return null;
            
            const isPopup = popupIndex === index && activeTalent === null;
            
            return (
              <ProfileCard
                key={talent.id}
                talent={talent}
                position={{ x: pos.x, y: pos.y }}
                scale={pos.scale}
                isActive={activeTalent === talent.id || isPopup}
                onClick={() => {
                  setActiveTalent(activeTalent === talent.id ? null : talent.id);
                  onTalentSelect?.(talent);
                }}
              />
            );
          })}

          {/* Connection lines between visible talent */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 450 450">
            {filteredTalent.slice(0, 8).map((talent, i) => {
              const nextTalent = filteredTalent[(i + 1) % 8];
              const pos1 = getGlobePosition(talent.lat, talent.lng, 215);
              const pos2 = getGlobePosition(nextTalent.lat, nextTalent.lng, 215);
              
              if (!pos1.visible || !pos2.visible) return null;
              
              return (
                <line
                  key={`line-${i}`}
                  x1={pos1.x}
                  y1={pos1.y}
                  x2={pos2.x}
                  y2={pos2.y}
                  stroke="url(#lineGradient)"
                  strokeWidth="1"
                  opacity="0.25"
                />
              );
            })}
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(200 100% 60%)" stopOpacity="0" />
                <stop offset="50%" stopColor="hsl(200 100% 60%)" stopOpacity="1" />
                <stop offset="100%" stopColor="hsl(200 100% 50%)" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Stats badge */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 glass-card px-6 py-3 rounded-full">
        <div className="flex items-center gap-6 text-sm">
          <span className="flex items-center gap-2 text-primary font-medium">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            {filteredTalent.length} Global Talent
          </span>
          <span className="text-muted-foreground">
            {filteredTalent.filter(t => t.available).length} Available Now
          </span>
          <span className="text-muted-foreground">
            150+ Countries
          </span>
        </div>
      </div>
    </div>
  );
}
