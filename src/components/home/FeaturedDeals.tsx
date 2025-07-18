import { DealCard } from '@/components/deals/DealCard'
import { Link } from 'react-router-dom'

// Mock data for featured deals
const featuredDeals = [
  {
    id: '1',
    title: 'MacBook Air M2 - 15% Off + Free Shipping',
    description: 'Get the latest MacBook Air with M2 chip at an incredible discount. Limited time offer with free shipping worldwide.',
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&h=300&fit=crop',
    store: 'Apple Store',
    discount: '15% OFF',
    dealType: 'discount' as const,
    votes: 234,
    expiresAt: '2024-01-25T23:59:59Z',
    isHot: true
  },
  {
    id: '2',
    title: 'Adobe Creative Suite - 3 Months Free Trial',
    description: 'Access all Adobe Creative Cloud apps including Photoshop, Illustrator, and Premiere Pro completely free.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
    store: 'Adobe',
    discount: '',
    dealType: 'free' as const,
    votes: 189,
    expiresAt: '2024-01-30T23:59:59Z'
  },
  {
    id: '3',
    title: 'Nike Air Max 270 - 40% Off with Code',
    description: 'Premium sneakers with maximum comfort. Use code SAVE40 at checkout for instant savings.',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop',
    store: 'Nike',
    discount: '40% OFF',
    dealType: 'coupon' as const,
    votes: 156,
    expiresAt: '2024-01-28T23:59:59Z'
  },
  {
    id: '4',
    title: 'Spotify Premium - 6 Months Free',
    description: 'Enjoy ad-free music streaming with offline downloads. Perfect for music lovers.',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop',
    store: 'Spotify',
    discount: '',
    dealType: 'free' as const,
    votes: 298,
    expiresAt: '2024-02-01T23:59:59Z',
    isHot: true
  },
  {
    id: '5',
    title: 'Samsung Galaxy S24 - Trade-in Bonus $200',
    description: 'Latest flagship smartphone with AI features. Get extra $200 when you trade in your old device.',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop',
    store: 'Samsung',
    discount: '$200 BONUS',
    dealType: 'discount' as const,
    votes: 167,
    expiresAt: '2024-01-26T23:59:59Z'
  },
  {
    id: '6',
    title: 'Udemy Courses - 85% Off Everything',
    description: 'Learn new skills with thousands of courses. Programming, design, business, and more.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',
    store: 'Udemy',
    discount: '85% OFF',
    dealType: 'coupon' as const,
    votes: 445,
    expiresAt: '2024-01-27T23:59:59Z',
    isHot: true
  }
]

export function FeaturedDeals() {
  return (
    <section className="py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">
              🔥 Trending Deals
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't miss out on these hot deals that are trending in our community right now
            </p>
          </div>

          {/* Deals Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDeals.map((deal) => (
              <DealCard key={deal.id} {...deal} />
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center pt-8">
            <Link to="/deals" className="text-primary hover:text-primary/80 font-medium text-lg transition-colors">
              View All Deals →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}