import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, ExternalLink, Heart, Share2, Clock, TrendingUp, Eye, MessageCircle, ChevronUp, ChevronDown, Calendar, Store, Tag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'

// Mock deal data
const dealData = {
  id: '1',
  title: 'MacBook Air M2 - 15% Off + Free Shipping',
  description: 'Get the latest MacBook Air with M2 chip at an incredible discount. This is a limited time offer with free shipping worldwide. The MacBook Air features the powerful M2 chip, up to 18 hours of battery life, and a stunning Liquid Retina display.',
  fullDescription: `This incredible deal on the MacBook Air M2 is perfect for students, professionals, and creative individuals. The M2 chip delivers exceptional performance for everything from everyday tasks to demanding creative projects.

Key Features:
• M2 chip with 8-core CPU and up to 10-core GPU
• Up to 24GB of unified memory
• Up to 2TB of superfast SSD storage
• 13.6-inch Liquid Retina display with 500 nits of brightness
• 1080p FaceTime HD camera
• Four-speaker sound system with Spatial Audio
• Up to 18 hours of battery life
• Two Thunderbolt ports
• Magic Keyboard with Touch ID

This offer includes free shipping worldwide and comes with Apple's standard 1-year warranty. Don't miss out on this amazing opportunity to get the latest MacBook Air at an unbeatable price!`,
  image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&h=600&fit=crop',
  store: 'Apple Store',
  storeUrl: 'https://apple.com',
  discount: '15% OFF',
  originalPrice: '$1299',
  salePrice: '$1104',
  dealType: 'discount' as const,
  votes: 234,
  views: 1847,
  comments: 23,
  expiresAt: '2024-01-25T23:59:59Z',
  isHot: true,
  couponCode: '',
  instructions: 'Click the link below to visit Apple Store. The discount will be automatically applied at checkout.',
  tags: ['Electronics', 'Laptop', 'Apple', 'Student Discount'],
  postedBy: {
    id: 'user1',
    name: 'TechDealer',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    level: 'Gold Member',
    dealsPosted: 47
  },
  postedAt: '2024-01-20T10:30:00Z'
}

const mockComments = [
  {
    id: '1',
    user: { name: 'Sarah M.', avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face' },
    content: 'Just ordered mine! The discount worked perfectly. Thanks for sharing!',
    timestamp: '2 hours ago',
    votes: 12
  },
  {
    id: '2',
    user: { name: 'Mike Chen', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face' },
    content: 'Is this deal still active? I\'m seeing a different price on the website.',
    timestamp: '4 hours ago',
    votes: 3
  },
  {
    id: '3',
    user: { name: 'Alex K.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face' },
    content: 'Great find! Been waiting for a good MacBook deal. The M2 chip is amazing.',
    timestamp: '6 hours ago',
    votes: 8
  }
]

const similarDeals = [
  {
    id: '2',
    title: 'iPad Pro M2 - 12% Off',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=200&h=150&fit=crop',
    discount: '12% OFF',
    votes: 156
  },
  {
    id: '3',
    title: 'MacBook Pro 14" - Student Discount',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=200&h=150&fit=crop',
    discount: '10% OFF',
    votes: 89
  }
]

export function DealPage() {
  const { id } = useParams()
  const [userVote, setUserVote] = useState<'up' | 'down' | null>(null)
  const [newComment, setNewComment] = useState('')
  const [isLiked, setIsLiked] = useState(false)

  const getDealBadge = () => {
    switch (dealData.dealType) {
      case 'free':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">FREE</Badge>
      case 'discount':
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">{dealData.discount}</Badge>
      case 'coupon':
        return <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">COUPON</Badge>
    }
  }

  const getTimeRemaining = () => {
    const now = new Date()
    const expiry = new Date(dealData.expiresAt)
    const diff = expiry.getTime() - now.getTime()
    const hours = Math.floor(diff / (1000 * 60 * 60))
    
    if (hours < 24) {
      return `${hours} hours left`
    }
    const days = Math.floor(hours / 24)
    return `${days} days left`
  }

  const handleVote = (type: 'up' | 'down') => {
    setUserVote(userVote === type ? null : type)
  }

  const handleSubmitComment = () => {
    if (newComment.trim()) {
      // Handle comment submission
      setNewComment('')
    }
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <div className="mb-6">
        <Link to="/deals">
          <Button variant="ghost" className="pl-0">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Deals
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Deal Header */}
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {getDealBadge()}
              {dealData.isHot && (
                <Badge variant="destructive" className="flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  HOT
                </Badge>
              )}
              {dealData.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
              {dealData.title}
            </h1>
            
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Store className="h-4 w-4" />
                {dealData.store}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                Posted {new Date(dealData.postedAt).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-1">
                <Eye className="h-4 w-4" />
                {dealData.views} views
              </div>
            </div>
          </div>

          {/* Deal Image */}
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <img
              src={dealData.image}
              alt={dealData.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Price Info */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-bold text-green-600">{dealData.salePrice}</span>
                    <span className="text-lg text-muted-foreground line-through">{dealData.originalPrice}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">You save: $195 ({dealData.discount})</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsLiked(!isLiked)}
                    className={isLiked ? 'text-red-500 border-red-200' : ''}
                  >
                    <Heart className={`h-4 w-4 mr-1 ${isLiked ? 'fill-current' : ''}`} />
                    Save
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="h-4 w-4 mr-1" />
                    Share
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Deal Instructions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Tag className="h-5 w-5" />
                How to Get This Deal
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm">{dealData.instructions}</p>
              {dealData.couponCode && (
                <div className="p-3 bg-muted rounded-lg">
                  <p className="text-sm font-medium mb-1">Coupon Code:</p>
                  <code className="text-lg font-mono bg-background px-2 py-1 rounded border">
                    {dealData.couponCode}
                  </code>
                </div>
              )}
              <Button className="w-full" size="lg">
                <ExternalLink className="h-4 w-4 mr-2" />
                Get This Deal
              </Button>
            </CardContent>
          </Card>

          {/* Deal Description */}
          <Card>
            <CardHeader>
              <CardTitle>Deal Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-sm max-w-none">
                {dealData.fullDescription.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-3 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Comments Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Comments ({dealData.comments})
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Add Comment */}
              <div className="space-y-3">
                <Textarea
                  placeholder="Share your thoughts about this deal..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="min-h-[100px]"
                />
                <Button onClick={handleSubmitComment} disabled={!newComment.trim()}>
                  Post Comment
                </Button>
              </div>

              <Separator />

              {/* Comments List */}
              <div className="space-y-4">
                {mockComments.map((comment) => (
                  <div key={comment.id} className="flex gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={comment.user.avatar} />
                      <AvatarFallback>{comment.user.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm">{comment.user.name}</span>
                        <span className="text-xs text-muted-foreground">{comment.timestamp}</span>
                      </div>
                      <p className="text-sm">{comment.content}</p>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                          ↑ {comment.votes}
                        </Button>
                        <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                          Reply
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Deal Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Deal Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Button
                      variant={userVote === 'up' ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => handleVote('up')}
                    >
                      <ChevronUp className="h-4 w-4" />
                    </Button>
                    <span className="font-bold text-lg mx-2">{dealData.votes}</span>
                    <Button
                      variant={userVote === 'down' ? 'destructive' : 'outline'}
                      size="sm"
                      onClick={() => handleVote('down')}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </div>
                  <span className="text-xs text-muted-foreground">votes</span>
                </div>
              </div>
              
              <Separator />
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Views:</span>
                  <span className="font-medium">{dealData.views}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Comments:</span>
                  <span className="font-medium">{dealData.comments}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Expires:</span>
                  <div className="flex items-center gap-1 text-orange-600">
                    <Clock className="h-3 w-3" />
                    <span className="font-medium text-xs">{getTimeRemaining()}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Posted By */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Posted By</CardTitle>
            </CardHeader>
            <CardContent>
              <Link to={`/user/${dealData.postedBy.id}`} className="block hover:bg-muted/50 p-2 rounded-lg transition-colors">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={dealData.postedBy.avatar} />
                    <AvatarFallback>{dealData.postedBy.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{dealData.postedBy.name}</p>
                    <p className="text-xs text-muted-foreground">{dealData.postedBy.level}</p>
                    <p className="text-xs text-muted-foreground">{dealData.postedBy.dealsPosted} deals posted</p>
                  </div>
                </div>
              </Link>
            </CardContent>
          </Card>

          {/* Similar Deals */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Similar Deals</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {similarDeals.map((deal) => (
                <Link key={deal.id} to={`/deal/${deal.id}`} className="block hover:bg-muted/50 p-2 rounded-lg transition-colors">
                  <div className="flex gap-3">
                    <img
                      src={deal.image}
                      alt={deal.title}
                      className="w-16 h-12 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium line-clamp-2">{deal.title}</p>
                      <div className="flex items-center justify-between mt-1">
                        <Badge variant="outline" className="text-xs">{deal.discount}</Badge>
                        <span className="text-xs text-muted-foreground">↑ {deal.votes}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}