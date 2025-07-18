import { DealCard } from '@/components/deals/DealCard'

// Mock data - same as featured deals for now
const allDeals = [
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
  }
]

export function DealsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">All Deals</h1>
          <p className="text-muted-foreground mt-2">Discover the best deals from our community</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allDeals.map((deal) => (
            <DealCard key={deal.id} {...deal} />
          ))}
        </div>
      </div>
    </div>
  )
}