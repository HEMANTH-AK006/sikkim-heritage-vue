import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'Losar Festival Celebration',
    type: 'Traditional Festival',
    date: '2024-02-10',
    time: '09:00 AM',
    duration: '3 days',
    monastery: 'Rumtek Monastery',
    description: 'Join the Tibetan New Year celebrations with traditional dances, prayers, and cultural performances.',
    attendees: 500,
    status: 'upcoming',
    virtualAccess: true,
    highlights: ['Cham Dance', 'Traditional Music', 'Prayer Ceremonies', 'Cultural Performances'],
  },
  {
    id: 2,
    title: 'Buddha Purnima Meditation Retreat',
    type: 'Spiritual Retreat',
    date: '2024-04-23',
    time: '06:00 AM',
    duration: '1 day',
    monastery: 'Pemayangtse Monastery',
    description: 'A day-long meditation retreat commemorating Buddha\'s birth, enlightenment, and death.',
    attendees: 150,
    status: 'upcoming',
    virtualAccess: true,
    highlights: ['Guided Meditation', 'Dharma Talks', 'Chanting Sessions', 'Peaceful Reflection'],
  },
  {
    id: 3,
    title: 'Monastery Architecture Workshop',
    type: 'Educational Workshop',
    date: '2024-03-15',
    time: '10:00 AM',
    duration: '2 days',
    monastery: 'Enchey Monastery',
    description: 'Learn about traditional Tibetan Buddhist architecture and construction techniques.',
    attendees: 75,
    status: 'upcoming',
    virtualAccess: false,
    highlights: ['Architecture Tour', 'Expert Lectures', 'Hands-on Learning', 'Historical Insights'],
  },
  {
    id: 4,
    title: 'Annual Hemis Festival',
    type: 'Traditional Festival',
    date: '2024-01-15',
    time: '08:00 AM',
    duration: '2 days',
    monastery: 'Tashiding Monastery',
    description: 'Experience the colorful masked dances and traditional ceremonies of this ancient festival.',
    attendees: 800,
    status: 'completed',
    virtualAccess: true,
    highlights: ['Masked Dances', 'Traditional Costumes', 'Sacred Rituals', 'Community Gathering'],
  },
  {
    id: 5,
    title: 'Digital Heritage Documentation',
    type: 'Community Project',
    date: '2024-05-01',
    time: '09:00 AM',
    duration: '5 days',
    monastery: 'Multiple Locations',
    description: 'Help document and preserve monastery heritage through community-driven digital initiatives.',
    attendees: 200,
    status: 'upcoming',
    virtualAccess: true,
    highlights: ['Community Engagement', 'Heritage Documentation', 'Digital Skills', 'Cultural Preservation'],
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'upcoming': return 'bg-blue-500';
    case 'ongoing': return 'bg-green-500';
    case 'completed': return 'bg-gray-500';
    default: return 'bg-gray-500';
  }
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};

const Events = () => {
  const upcomingEvents = events.filter(event => event.status === 'upcoming');
  const completedEvents = events.filter(event => event.status === 'completed');

  return (
    <div className="page-transition pt-20 min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
            Cultural Events
          </h1>
          <p className="spiritual-text text-xl max-w-2xl mx-auto animate-slide-up [animation-delay:0.2s]">
            Join us in celebrating the rich cultural heritage of Sikkim's monasteries 
            through festivals, workshops, and spiritual gatherings.
          </p>
        </div>

        {/* Upcoming Events */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 animate-slide-up [animation-delay:0.3s]">
            Upcoming Events
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card 
                key={event.id} 
                className="monastery-card animate-slide-up"
                style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={getStatusColor(event.status)}>
                      {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
                    </Badge>
                    {event.virtualAccess && (
                      <Badge variant="outline">Virtual Access Available</Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {event.type}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="spiritual-text text-sm">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{event.time} • {event.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.monastery}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees} expected attendees</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="font-medium text-sm">Event Highlights:</p>
                    <div className="flex flex-wrap gap-1">
                      {event.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Button className="monastery-button flex-1" size="sm">
                      Register Now
                    </Button>
                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Past Events */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Past Events</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {completedEvents.map((event, index) => (
              <Card 
                key={event.id} 
                className="monastery-card opacity-75 hover:opacity-100 transition-opacity"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={getStatusColor(event.status)}>
                      Completed
                    </Badge>
                    {event.virtualAccess && (
                      <Badge variant="outline">Recording Available</Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {event.type}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="spiritual-text text-sm">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm" className="w-full">
                    View Event Recording
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <div className="monastery-card p-8 text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="spiritual-text mb-6">
            Subscribe to our newsletter to receive notifications about upcoming events, 
            workshops, and cultural celebrations.
          </p>
          <Button size="lg" className="monastery-button">
            Subscribe to Newsletter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Events;