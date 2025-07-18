import { Button } from '@/components/ui/button'
import { Plus, TrendingUp, Users, Zap } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Discover the Best
              <span className="text-primary"> Deals</span>
              <br />
              Shared by Community
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Join thousands of deal hunters sharing amazing discounts, freebies, and exclusive offers. 
              Save money on everything you love.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-base px-8 py-6 h-auto">
              <Plus className="h-5 w-5 mr-2" />
              Post Your First Deal
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8 py-6 h-auto">
              Browse All Deals
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t">
            <div className="flex flex-col items-center space-y-2">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold">2.5K+</div>
              <div className="text-sm text-muted-foreground">Active Deals</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent/10">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <div className="text-2xl font-bold">15K+</div>
              <div className="text-sm text-muted-foreground">Community Members</div>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold">$2M+</div>
              <div className="text-sm text-muted-foreground">Money Saved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}