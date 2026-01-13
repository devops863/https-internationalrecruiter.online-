import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TalentSection from '@/components/TalentSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import SocialProofSection from '@/components/SocialProofSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <TalentSection />
        <HowItWorksSection />
        <SocialProofSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
