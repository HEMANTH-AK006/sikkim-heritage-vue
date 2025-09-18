import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/monastery-hero.jpg';

const Home = () => {
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section 
        className="hero-section"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Monastery360
          </h1>
          <p className="text-xl md:text-2xl mb-4 animate-slide-up [animation-delay:0.2s]">
            A Digital Heritage Platform
          </p>
          <p className="text-lg md:text-xl mb-8 opacity-90 animate-slide-up [animation-delay:0.4s]">
            Explore Sikkim's Monasteries Virtually & Spiritually
          </p>
          
          <Link to="/tours">
            <Button 
              size="lg" 
              className="monastery-button text-lg px-10 py-4 animate-slide-up [animation-delay:0.6s]"
            >
              Enter Experience
            </Button>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Discover Sacred Heritage
            </h2>
            <p className="spiritual-text text-lg mb-8 leading-relaxed">
              Journey through centuries of spiritual wisdom and architectural beauty. 
              Our digital platform preserves and shares the rich heritage of Sikkim's 
              sacred monasteries, making their treasures accessible to seekers worldwide.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="monastery-card p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                  <span className="text-2xl">🏛️</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Virtual Tours</h3>
                <p className="spiritual-text">Immerse yourself in 360° experiences of sacred spaces</p>
              </div>
              
              <div className="monastery-card p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                  <span className="text-2xl">📜</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Ancient Archives</h3>
                <p className="spiritual-text">Explore digitized manuscripts and historical documents</p>
              </div>
              
              <div className="monastery-card p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎭</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Cultural Events</h3>
                <p className="spiritual-text">Join festivals and ceremonies in the digital realm</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;