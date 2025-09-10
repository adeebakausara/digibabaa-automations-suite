import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/hooks/useAuth';
import { useTestimonials } from '@/hooks/useTestimonials';
import TestimonialEditModal from '@/components/TestimonialEditModal';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { LogOut, Plus, Edit, Star, Video, User } from 'lucide-react';
import type { Testimonial } from '@/hooks/useTestimonials';

const AdminTestimonials = () => {
  const { user, isAdmin, loading: authLoading, signOut } = useAuth();
  const { testimonials, loading, error } = useTestimonials();
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!authLoading && (!user || !isAdmin)) {
      navigate('/admin/auth');
    }
  }, [user, isAdmin, authLoading, navigate]);

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (!error) {
      navigate('/admin/auth');
      toast({
        title: "Success",
        description: "Signed out successfully",
      });
    }
  };

  const handleCreateNew = () => {
    setEditingTestimonial(null);
    setShowEditModal(true);
  };

  const handleEdit = (testimonial: Testimonial) => {
    setEditingTestimonial(testimonial);
    setShowEditModal(true);
  };

  const handleDelete = async (testimonial: Testimonial) => {
    if (!confirm('Are you sure you want to delete this testimonial?')) return;

    try {
      const { error } = await supabase
        .from('testimonials')
        .delete()
        .eq('id', testimonial.id);

      if (error) throw error;

      toast({
        title: "Success",
        description: "Testimonial deleted successfully",
      });
      
      // Refresh the page to reload testimonials
      window.location.reload();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete testimonial",
        variant: "destructive",
      });
    }
  };

  const handleTestimonialUpdate = () => {
    setShowEditModal(false);
    setEditingTestimonial(null);
    // Refresh the page to show updated testimonials
    window.location.reload();
  };

  if (authLoading || !user || !isAdmin) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-2 text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
          <p className="mt-2 text-muted-foreground">Loading testimonials...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-destructive">Error</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{error}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Admin Panel</h1>
            <p className="text-muted-foreground">Manage customer testimonials</p>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {user.email}
            </Badge>
            <Button onClick={handleSignOut} variant="outline" size="sm">
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>

        {/* Actions */}
        <div className="mb-6">
          <Button onClick={handleCreateNew} className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Add New Testimonial
          </Button>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <CardDescription>
                      {testimonial.role} at {testimonial.company}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    {testimonial.is_featured && (
                      <Badge variant="secondary">Featured</Badge>
                    )}
                    {testimonial.is_video && (
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Video className="w-3 h-3" />
                        Video
                      </Badge>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating
                            ? 'text-yellow-500 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">
                      {testimonial.rating}/5
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button
                    onClick={() => handleEdit(testimonial)}
                    size="sm"
                    variant="outline"
                  >
                    <Edit className="w-4 h-4 mr-1" />
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleDelete(testimonial)}
                    size="sm"
                    variant="destructive"
                  >
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {testimonials.length === 0 && (
          <Card>
            <CardContent className="text-center py-8">
              <p className="text-muted-foreground">No testimonials found.</p>
              <Button onClick={handleCreateNew} className="mt-4">
                <Plus className="w-4 h-4 mr-2" />
                Add Your First Testimonial
              </Button>
            </CardContent>
          </Card>
        )}
      </div>

      <TestimonialEditModal
        isOpen={showEditModal}
        onClose={() => setShowEditModal(false)}
        testimonial={editingTestimonial}
        onUpdate={handleTestimonialUpdate}
      />
    </div>
  );
};

export default AdminTestimonials;