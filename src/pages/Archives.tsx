import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search, Download, Eye } from 'lucide-react';
import manuscript1 from '@/assets/manuscript-1.jpg';

const archives = [
  {
    id: 1,
    title: 'Tibetan Buddhist Scriptures',
    type: 'Manuscript',
    date: '16th Century',
    monastery: 'Rumtek Monastery',
    description: 'Ancient Buddhist teachings written in traditional Tibetan script with gold illuminations.',
    image: manuscript1,
    pages: 124,
    language: 'Tibetan',
    digitized: true,
    rarity: 'Extremely Rare',
  },
  {
    id: 2,
    title: 'Monastery Construction Records',
    type: 'Historical Document',
    date: '1740 CE',
    monastery: 'Pemayangtse Monastery',
    description: 'Detailed records of the monastery construction including architectural plans and material lists.',
    image: manuscript1,
    pages: 45,
    language: 'Tibetan, Nepali',
    digitized: true,
    rarity: 'Rare',
  },
  {
    id: 3,
    title: 'Ritual Dance Instructions',
    type: 'Ceremonial Guide',
    date: '18th Century',
    monastery: 'Enchey Monastery',
    description: 'Complete guide to traditional Cham dance performances with illustrated steps.',
    image: manuscript1,
    pages: 78,
    language: 'Tibetan',
    digitized: false,
    rarity: 'Very Rare',
  },
  {
    id: 4,
    title: 'Meditation Practices Compendium',
    type: 'Spiritual Guide',
    date: '17th Century',
    monastery: 'Tashiding Monastery',
    description: 'Comprehensive collection of meditation techniques and spiritual practices.',
    image: manuscript1,
    pages: 156,
    language: 'Tibetan, Sanskrit',
    digitized: true,
    rarity: 'Rare',
  },
];

const Archives = () => {
  return (
    <div className="page-transition pt-20 min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">
            Digital Archives
          </h1>
          <p className="spiritual-text text-xl max-w-2xl mx-auto animate-slide-up [animation-delay:0.2s]">
            Preserving centuries of wisdom through digital conservation. Explore our 
            collection of sacred texts, historical documents, and cultural artifacts.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="monastery-card p-6 mb-8 animate-slide-up [animation-delay:0.3s]">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search archives by title, monastery, or date..." 
                className="pl-10"
              />
            </div>
            <Button variant="outline">Advanced Search</Button>
          </div>
        </div>

        {/* Archives Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {archives.map((archive, index) => (
            <Card 
              key={archive.id} 
              className="monastery-card animate-slide-up"
              style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
            >
              <div className="relative">
                <img 
                  src={archive.image} 
                  alt={archive.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 space-y-2">
                  <Badge 
                    variant={archive.digitized ? "default" : "secondary"}
                    className={archive.digitized ? "bg-green-500" : ""}
                  >
                    {archive.digitized ? 'Digitized' : 'In Process'}
                  </Badge>
                  <Badge variant="outline" className="block text-center">
                    {archive.rarity}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{archive.title}</CardTitle>
                <CardDescription>
                  <div className="space-y-1">
                    <div>📜 {archive.type} • {archive.date}</div>
                    <div>🏛️ {archive.monastery}</div>
                  </div>
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="spiritual-text text-sm">
                  {archive.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div>📄 {archive.pages} pages</div>
                  <div>🌐 {archive.language}</div>
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    disabled={!archive.digitized}
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View
                  </Button>
                  <Button 
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    disabled={!archive.digitized}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
                
                {!archive.digitized && (
                  <p className="text-xs text-muted-foreground italic">
                    This document is currently being digitized. Expected completion: 2024
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid md:grid-cols-4 gap-6 mt-16">
          <div className="monastery-card p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">1,247</div>
            <p className="text-sm text-muted-foreground">Documents Digitized</p>
          </div>
          <div className="monastery-card p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">156</div>
            <p className="text-sm text-muted-foreground">Manuscripts Preserved</p>
          </div>
          <div className="monastery-card p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">23</div>
            <p className="text-sm text-muted-foreground">Monasteries Documented</p>
          </div>
          <div className="monastery-card p-6 text-center">
            <div className="text-3xl font-bold text-primary mb-2">8</div>
            <p className="text-sm text-muted-foreground">Languages Preserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Archives;