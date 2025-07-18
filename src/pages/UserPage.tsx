import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, MapPin, Calendar, Trophy, Star, TrendingUp, MessageCircle, Heart, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Progress } from '@/components/ui/progress'

// Mock user data
const userData = {
  id: 'user1',
  name: 'TechDealer',
  username: '@techdealer',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
  coverImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=200&fit=crop',
  bio: 'Tech enthusiast and deal hunter. I love finding the best deals on electronics, gadgets, and software. Always on the lookout for the next great bargain!',
  location: 'San Francisco, CA',
  joinedAt: '2023-03-15T00:00:00Z',
  level: 'Gold Member',
  levelProgress: 75,
  nextLevel: 'Platinum Member',
  stats: {
    dealsPosted: 47,
    totalVotes: 2847,
    commentsReceived: 156,
    pointsEarned: 8420,
    successRate: 94,
    followers: 234,
    following: 89
  },
  badges: [
    { name: 'Deal Hunter', icon: '🎯', description: 'Posted 25+ deals' },
    { name: 'Community Favorite', icon: '❤️', description: 'Received 1000+ votes' },
    { name: 'Tech Expert', icon: '💻', description: 'Electronics category specialist' },
    { name: 'Early Bird', icon: '🐦', description: 'Member for 6+ months' }
  ]
}

const userDeals = [
  {
    id: '1',
    title: 'MacBook Air M2 - 15% Off + Free Shipping',
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=200&fit=crop',
    discount: '15% OFF',
    dealType: 'discount' as const,
    votes: 234,
    comments: 23,
    postedAt: '2024-01-20T10:30:00Z',
    status: 'active'
  },
  {
    id: '4',
    title: 'iPad Pro M2 - Student Discount Available',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300&h=200&fit=crop',
    discount: '10% OFF',
    dealType: 'discount' as const,
    votes: 189,
    comments: 15,
    postedAt: '2024-01-18T14:20:00Z',
    status: 'active'
  },
  {
    id: '7',
    title: 'AirPods Pro 2 - Free Engraving',
    image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=300&h=200&fit=crop',
    discount: 'FREE BONUS',
    dealType: 'free' as const,
    votes: 156,
    comments: 12,
    postedAt: '2024-01-15T09:15:00Z',
    status: 'expired'
  }
]

const savedDeals = [
  {
    id: '2',
    title: 'Adobe Creative Suite - 3 Months Free Trial',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop',
    discount: 'FREE',
    dealType: 'free' as const,
    votes: 189,
    store: 'Adobe'
  },
  {
    id: '3',
    title: 'Nike Air Max 270 - 40% Off with Code',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop',
    discount: '40% OFF',
    dealType: 'coupon' as const,
    votes: 156,
    store: 'Nike'
  }
]

const userComments = [
  {
    id: '1',
    dealTitle: 'Samsung Galaxy S24 - Trade-in Bonus',
    comment: 'Just got mine with the trade-in deal. The process was super smooth and the phone is amazing!',
    votes: 15,
    timestamp: '2 days ago'
  },
  {
    id: '2',
    dealTitle: 'Spotify Premium - 6 Months Free',
    comment: 'This deal is legit! Just signed up and got the 6 months free. Thanks for sharing!',
    votes: 8,
    timestamp: '1 week ago'
  },
  {
    id: '3',
    dealTitle: 'Udemy Courses - 85% Off Everything',
    comment: 'Perfect timing! I was looking for some programming courses. The selection is huge.',
    votes: 12,
    timestamp: '2 weeks ago'
  }
]

export function UserPage() {
  const { id } = useParams()

  const getDealBadge = (dealType: string, discount: string) => {
    switch (dealType) {
      case 'free':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">FREE</Badge>
      case 'discount':
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">{discount}</Badge>
      case 'coupon':
        return <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">COUPON</Badge>
    }
  }

  const getTimeAgo = (dateString: string) => {
    const now = new Date()
    const date = new Date(dateString)
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 24) {
      return `${diffInHours}h ago`
    }
    const days = Math.floor(diffInHours / 24)
    return `${days}d ago`
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

      {/* Profile Header */}
      <div className="relative mb-8">
        {/* Cover Image */}
        <div className="h-48 lg:h-64 rounded-lg overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600">
          <img
            src={userData.coverImage}
            alt="Cover"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Profile Info */}
        <div className="relative -mt-16 lg:-mt-20 px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div className="flex flex-col lg:flex-row lg:items-end gap-4">
              <Avatar className="h-24 w-24 lg:h-32 lg:w-32 border-4 border-background">
                <AvatarImage src={userData.avatar} />
                <AvatarFallback className="text-2xl">{userData.name[0]}</AvatarFallback>
              </Avatar>
              
              <div className="space-y-2">
                <div>
                  <h1 className="text-2xl lg:text-3xl font-bold">{userData.name}</h1>
                  <p className="text-muted-foreground">{userData.username}</p>
                </div>
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {userData.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Joined {new Date(userData.joinedAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </div>
                </div>
                
                <p className="text-sm max-w-2xl">{userData.bio}</p>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button variant="outline">
                <Heart className="h-4 w-4 mr-2" />
                Follow
              </Button>
              <Button variant="outline">
                <MessageCircle className="h-4 w-4 mr-2" />
                Message
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="deals" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="deals">My Deals</TabsTrigger>
              <TabsTrigger value="saved">Saved</TabsTrigger>
              <TabsTrigger value="comments">Comments</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>

            <TabsContent value="deals" className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Posted Deals ({userData.stats.dealsPosted})</h2>
                <Button size="sm">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Post New Deal
                </Button>
              </div>
              
              <div className="grid gap-4">
                {userDeals.map((deal) => (
                  <Card key={deal.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <img
                          src={deal.image}
                          alt={deal.title}
                          className="w-24 h-16 object-cover rounded"
                        />
                        <div className="flex-1 space-y-2">
                          <div className="flex items-start justify-between">
                            <Link to={`/deal/${deal.id}`} className="hover:text-primary">
                              <h3 className="font-medium line-clamp-2">{deal.title}</h3>
                            </Link>
                            <Badge variant={deal.status === 'active' ? 'default' : 'secondary'} className="ml-2">
                              {deal.status}
                            </Badge>
                          </div>
                          
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            {getDealBadge(deal.dealType, deal.discount)}
                            <span>↑ {deal.votes} votes</span>
                            <span>💬 {deal.comments} comments</span>
                            <span>{getTimeAgo(deal.postedAt)}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="saved" className="space-y-4">
              <h2 className="text-xl font-semibold">Saved Deals ({savedDeals.length})</h2>
              
              <div className="grid gap-4">
                {savedDeals.map((deal) => (
                  <Card key={deal.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex gap-4">
                        <img
                          src={deal.image}
                          alt={deal.title}
                          className="w-24 h-16 object-cover rounded"
                        />
                        <div className="flex-1 space-y-2">
                          <Link to={`/deal/${deal.id}`} className="hover:text-primary">
                            <h3 className="font-medium line-clamp-2">{deal.title}</h3>
                          </Link>
                          
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            {getDealBadge(deal.dealType, deal.discount)}
                            <span>↑ {deal.votes} votes</span>
                            <span>by {deal.store}</span>
                          </div>
                        </div>
                        
                        <Button variant="ghost" size="sm">
                          <Heart className="h-4 w-4 fill-current text-red-500" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="comments" className="space-y-4">
              <h2 className="text-xl font-semibold">Recent Comments ({userComments.length})</h2>
              
              <div className="space-y-4">
                {userComments.map((comment) => (
                  <Card key={comment.id}>
                    <CardContent className="p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium text-sm text-muted-foreground">
                          On: {comment.dealTitle}
                        </h4>
                        <span className="text-xs text-muted-foreground">{comment.timestamp}</span>
                      </div>
                      
                      <p className="text-sm">{comment.comment}</p>
                      
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="h-6 px-2 text-xs">
                          ↑ {comment.votes}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="activity" className="space-y-4">
              <h2 className="text-xl font-semibold">Recent Activity</h2>
              
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <TrendingUp className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm">Posted a new deal: <strong>MacBook Air M2 - 15% Off</strong></p>
                        <p className="text-xs text-muted-foreground">2 hours ago</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                        <MessageCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm">Commented on <strong>Samsung Galaxy S24 Deal</strong></p>
                        <p className="text-xs text-muted-foreground">1 day ago</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                        <Trophy className="h-4 w-4 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm">Earned <strong>Community Favorite</strong> badge</p>
                        <p className="text-xs text-muted-foreground">3 days ago</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* User Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5" />
                Stats & Level
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{userData.level}</span>
                  <span className="text-xs text-muted-foreground">{userData.levelProgress}%</span>
                </div>
                <Progress value={userData.levelProgress} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  {100 - userData.levelProgress}% to {userData.nextLevel}
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-primary">{userData.stats.dealsPosted}</p>
                  <p className="text-xs text-muted-foreground">Deals Posted</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-600">{userData.stats.totalVotes}</p>
                  <p className="text-xs text-muted-foreground">Total Votes</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-orange-600">{userData.stats.pointsEarned}</p>
                  <p className="text-xs text-muted-foreground">Points</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-purple-600">{userData.stats.successRate}%</p>
                  <p className="text-xs text-muted-foreground">Success Rate</p>
                </div>
              </div>
              
              <div className="flex justify-center gap-6 pt-2 border-t">
                <div className="text-center">
                  <p className="font-semibold">{userData.stats.followers}</p>
                  <p className="text-xs text-muted-foreground">Followers</p>
                </div>
                <div className="text-center">
                  <p className="font-semibold">{userData.stats.following}</p>
                  <p className="text-xs text-muted-foreground">Following</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Badges */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                Achievements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {userData.badges.map((badge) => (
                  <div
                    key={badge.name}
                    className="p-3 rounded-lg border bg-muted/50 text-center hover:bg-muted transition-colors"
                    title={badge.description}
                  >
                    <div className="text-2xl mb-1">{badge.icon}</div>
                    <p className="text-xs font-medium">{badge.name}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}