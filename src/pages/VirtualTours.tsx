import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import monastery1 from '@/assets/monastery-1.jpg';
import monastery2 from '@/assets/monastery-2.jpg';

const tours = [
  {
    id: 1,
    name: 'Rumtek Monastery',
    location: 'Gangtok, Sikkim',
    description: 'The largest monastery in Sikkim, known for its golden stupa and vibrant murals.',
    image: monastery1,
    duration: '45 minutes',
    difficulty: 'Easy',
    highlights: ['Golden Stupa', 'Traditional Architecture', 'Prayer Wheels'],
    available: true,
  },
  {
    id: 2,
    name: 'Pemayangtse Monastery',
    location: 'Pelling, Sikkim',
    description: 'One of the oldest monasteries in Sikkim with breathtaking mountain views.',
    image: monastery2,
    duration: '60 minutes',
    difficulty: 'Moderate',
    highlights: ['Ancient Murals', 'Mountain Views', 'Sacred Relics'],
    available: true,
  },
  {
    id: 3,
    name: 'Tashiding Monastery',
    location: 'West Sikkim',
    description: 'Sacred monastery situated on a hilltop between the Rathong and Rangeet rivers.',
    image: monastery1,
    duration: '35 minutes',
    difficulty: 'Easy',
    highlights: ['Hilltop Location', 'River Views', 'Sacred Chorten'],
    available: false,
  },
  {
    id: 4,
    name: 'Enchey Monastery',
    location: 'Gangtok, Sikkim',
    description: 'A 200-year-old monastery known for its annual Cham dance festival.',
    image: monastery2,
    duration: '40 minutes',
    difficulty: 'Easy',
    highlights: ['Cham Dance Heritage', 'City Views', 'Ancient Artifacts'],
    available: true,
  },
];

const VirtualTours = () => {
  return (
    <div className="page-transition pt-20 min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
            Virtual Tours
          </h1>
          <p className="spiritual-text text-xl max-w-2xl mx-auto animate-slide-up [animation-delay:0.2s]">
            Step into the sacred spaces of Sikkim's most revered monasteries through 
            immersive virtual experiences.
          </p>
        </div>

        {/* Tours Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {tours.map((tour, index) => (
            <Card 
              key={tour.id} 
              className="monastery-card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img 
                  src={tour.image} 
                  alt={tour.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge 
                    variant={tour.available ? "default" : "secondary"}
                    className={tour.available ? "bg-green-500" : ""}
                  >
                    {tour.available ? 'Available' : 'Coming Soon'}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{tour.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  📍 {tour.location}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="spiritual-text">
                  {tour.description}
                </p>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>⏱️ {tour.duration}</span>
                  <span>📊 {tour.difficulty}</span>
                </div>
                
                <div className="space-y-2">
                  <p className="font-medium text-sm">Highlights:</p>
                  <div className="flex flex-wrap gap-2">
                    {tour.highlights.map((highlight, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <Button 
                  className={tour.available ? "monastery-button w-full" : "w-full"} 
                  disabled={!tour.available}
                  variant={tour.available ? "default" : "secondary"}
                >
                  {tour.available ? 'Start Virtual Tour' : 'Notify When Available'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 monastery-card">
          <h3 className="text-2xl font-bold mb-4">Experience More</h3>
          <p className="spiritual-text mb-6">
            New virtual tours are added regularly. Subscribe to our newsletter to be 
            notified when new experiences become available.
          </p>
          <Button variant="outline" size="lg">
            Subscribe for Updates
          </Button>
        </div>
      </div>
    </div>
  );
};

export default VirtualTours;