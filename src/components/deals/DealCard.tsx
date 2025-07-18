import { Heart, ExternalLink, Clock, TrendingUp } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

interface DealCardProps {
  id: string
  title: string
  description: string
  image: string
  store: string
  discount: string
  dealType: 'free' | 'discount' | 'coupon'
  votes: number
  expiresAt: string
  isHot?: boolean
}

export function DealCard({
  id,
  title,
  description,
  image,
  store,
  discount,
  dealType,
  votes,
  expiresAt,
  isHot = false
}: DealCardProps) {
  const getDealBadge = () => {
    switch (dealType) {
      case 'free':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">FREE</Badge>
      case 'discount':
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">{discount}</Badge>
      case 'coupon':
        return <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">COUPON</Badge>
    }
  }

  const getTimeRemaining = () => {
    const now = new Date()
    const expiry = new Date(expiresAt)
    const diff = expiry.getTime() - now.getTime()
    const hours = Math.floor(diff / (1000 * 60 * 60))
    
    if (hours < 24) {
      return `${hours}h left`
    }
    const days = Math.floor(hours / 24)
    return `${days}d left`
  }

  return (
    <Link to={`/deal/${id}`}>
      <Card className="group hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer">
        <CardContent className="p-0">
        {/* Image */}
        <div className="relative aspect-video overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            {getDealBadge()}
            {isHot && (
              <Badge variant="destructive" className="flex items-center gap-1">
                <TrendingUp className="h-3 w-3" />
                HOT
              </Badge>
            )}
          </div>
          <div className="absolute top-3 right-3">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 bg-white/90 hover:bg-white">
              <Heart className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          <div className="space-y-2">
            <h3 className="font-semibold text-sm leading-tight line-clamp-2 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-xs text-muted-foreground line-clamp-2">
              {description}
            </p>
          </div>

          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span className="font-medium">{store}</span>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {getTimeRemaining()}
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" className="h-8 px-2 text-xs">
                ↑ {votes}
              </Button>
            </div>
            <Button variant="ghost" size="sm" className="h-8 px-2 text-xs">
              <ExternalLink className="h-3 w-3 mr-1" />
              View Deal
            </Button>
          </div>
        </div>
        </CardContent>
      </Card>
    </Link>
  )
}