import { Search, Plus, User, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">CD</span>
              </div>
              <span className="font-semibold text-lg">CleanDeals</span>
            </Link>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search deals..."
                className="pl-10 bg-muted/50 border-0 focus-visible:ring-1"
              />
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/deals" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Deals
            </Link>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Categories
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Top Rated
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <Button size="sm" className="hidden sm:flex">
              <Plus className="h-4 w-4 mr-2" />
              Post Deal
            </Button>
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4" />
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search deals..."
                className="pl-10 bg-muted/50 border-0"
              />
            </div>
            <nav className="flex flex-col space-y-3">
              <Link to="/deals" className="text-sm font-medium text-foreground">Deals</Link>
              <a href="#" className="text-sm font-medium text-muted-foreground">Categories</a>
              <a href="#" className="text-sm font-medium text-muted-foreground">Top Rated</a>
            </nav>
            <Button size="sm" className="w-full">
              <Plus className="h-4 w-4 mr-2" />
              Post Deal
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}