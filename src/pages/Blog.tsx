import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { blogPosts, blogCategories, getBlogPostsByCategory } from '../data/blogPosts';
import { Calendar, Clock, ArrowRight, Search, Filter } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary-dark to-secondary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background/10 via-transparent to-background/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              AI Insights & 
              <span className="bg-gradient-to-r from-accent to-accent-dark bg-clip-text text-transparent">
                {" "}Innovation Blog
              </span>
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Discover the latest trends, insights, and strategies in AI automation, chatbots, 
              voice agents, and intelligent business solutions. Stay ahead with expert knowledge 
              and real-world applications.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {blogCategories.map((category) => (
                <Badge key={category} variant="secondary" className="text-sm py-2 px-4">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selectedCategory === 'All' ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory('All')}
                  className="flex items-center gap-2"
                >
                  <Filter className="h-4 w-4" />
                  All Articles
                </Button>
                {blogCategories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
            
            <div className="text-center text-muted-foreground">
              <p>
                Showing {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} 
                {selectedCategory !== 'All' && ` in ${selectedCategory}`}
                {searchTerm && ` matching "${searchTerm}"`}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={post.imageUrl}
                    alt={post.imageAlt}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">
                      {post.category}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {formatDate(post.publishDate)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-card-foreground group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                    {post.title}
                  </h3>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.keywords.slice(0, 3).map((keyword) => (
                      <Badge key={keyword} variant="outline" className="text-xs">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                  
                  <Link to={`/blog/${post.slug}`}>
                    <Button variant="ghost" className="w-full group/btn">
                      Read Article
                      <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-card-foreground mb-4">No articles found</h3>
              <p className="text-muted-foreground mb-8">
                Try adjusting your search terms or browse all categories.
              </p>
              <Button onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}>
                View All Articles
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Stay Updated with AI Insights
            </h2>
            <p className="text-primary-foreground/90 mb-8">
              Get the latest articles, trends, and insights delivered directly to your inbox. 
              Join thousands of professionals staying ahead in AI automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="bg-background/10 border-background/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="secondary" className="whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
            <p className="text-sm text-primary-foreground/70 mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;