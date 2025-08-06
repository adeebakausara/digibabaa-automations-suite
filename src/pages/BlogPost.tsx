import { useParams, Link, Navigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { getBlogPostBySlug, getRecentBlogPosts } from '../data/blogPosts';
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, Bookmark } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Separator } from '../components/ui/separator';
import ReactMarkdown from 'react-markdown';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : null;
  const recentPosts = getRecentBlogPosts(3).filter(p => p.slug !== slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const shareUrl = `${window.location.origin}/blog/${post.slug}`;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: shareUrl,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback to copying to clipboard
      navigator.clipboard.writeText(shareUrl);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta Tags */}
      <title>{post.seoTitle}</title>
      <meta name="description" content={post.metaDescription} />
      <meta name="keywords" content={post.keywords.join(', ')} />
      <meta property="og:title" content={post.title} />
      <meta property="og:description" content={post.excerpt} />
      <meta property="og:image" content={post.imageUrl} />
      <meta property="og:url" content={shareUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      
      <Navigation />
      
      {/* Breadcrumb */}
      <section className="py-6 bg-card/30">
        <div className="container mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-card-foreground">{post.title}</span>
          </nav>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary-dark transition-colors mb-8">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
            
            <div className="mb-6">
              <Badge variant="secondary" className="mb-4">
                {post.category}
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-card-foreground mb-4 leading-tight">
                {post.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {formatDate(post.publishDate)}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" onClick={handleShare}>
                    <Share2 className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                  <Button variant="outline" size="sm">
                    <Bookmark className="h-4 w-4 mr-2" />
                    Save
                  </Button>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {post.keywords.map((keyword) => (
                  <Badge key={keyword} variant="outline" className="text-xs">
                    {keyword}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg mb-12">
              <img
                src={post.imageUrl}
                alt={post.imageAlt}
                className="w-full h-64 md:h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => <h1 className="text-3xl font-bold text-card-foreground mb-6 mt-8">{children}</h1>,
                  h2: ({ children }) => <h2 className="text-2xl font-semibold text-card-foreground mb-4 mt-8">{children}</h2>,
                  h3: ({ children }) => <h3 className="text-xl font-semibold text-card-foreground mb-3 mt-6">{children}</h3>,
                  h4: ({ children }) => <h4 className="text-lg font-semibold text-card-foreground mb-2 mt-4">{children}</h4>,
                  p: ({ children }) => <p className="text-muted-foreground mb-4 leading-relaxed">{children}</p>,
                  ul: ({ children }) => <ul className="list-disc list-inside mb-4 text-muted-foreground space-y-2">{children}</ul>,
                  ol: ({ children }) => <ol className="list-decimal list-inside mb-4 text-muted-foreground space-y-2">{children}</ol>,
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-primary pl-6 py-2 my-6 bg-card/50 italic text-card-foreground">
                      {children}
                    </blockquote>
                  ),
                  strong: ({ children }) => <strong className="font-semibold text-card-foreground">{children}</strong>,
                  em: ({ children }) => <em className="italic text-card-foreground">{children}</em>,
                  code: ({ children }) => (
                    <code className="bg-muted px-2 py-1 rounded text-sm font-mono text-primary">
                      {children}
                    </code>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
            
            <Separator className="my-12" />
            
            {/* Call to Action */}
            <div className="bg-gradient-to-r from-primary to-secondary rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-primary-foreground/90 mb-6">
                Get started with our AI solutions and see the difference they can make for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="secondary" size="lg">
                    Get Free Consultation
                  </Button>
                </Link>
                <Link to="/services">
                  <Button variant="outline" size="lg" className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10">
                    View Our Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {recentPosts.length > 0 && (
        <section className="py-16 bg-card/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-card-foreground mb-8 text-center">
                More AI Insights
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {recentPosts.map((relatedPost) => (
                  <Card key={relatedPost.id} className="group hover:shadow-lg transition-all duration-300">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={relatedPost.imageUrl}
                        alt={relatedPost.imageAlt}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary">
                          {relatedPost.category}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardHeader>
                      <div className="text-sm text-muted-foreground mb-2">
                        {formatDate(relatedPost.publishDate)} • {relatedPost.readTime}
                      </div>
                      <h3 className="text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <Link to={`/blog/${relatedPost.slug}`}>
                        <Button variant="ghost" className="w-full group/btn">
                          Read Article
                          <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default BlogPost;