import { MarketplaceLayout } from '@/components/MarketplaceLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ShoppingBag, Tag, Download, Send } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: ShoppingBag,
    title: 'Buy Certificates',
    description: 'Browse and purchase available energy certificates from the marketplace.',
    href: '/marketplace/buy',
  },
  {
    icon: Tag,
    title: 'Sell Certificates',
    description: 'List your energy certificates for sale on the marketplace.',
    href: '/marketplace/sell',
  },
  {
    icon: Download,
    title: 'Withdraw Certificates',
    description: 'Withdraw your certificates to an external wallet.',
    href: '/marketplace/withdraw',
  },
  {
    icon: Send,
    title: 'Transfer Certificates',
    description: 'Transfer certificates to other users on the platform.',
    href: '/marketplace/transfer',
  },
]

export default function MarketplacePage() {
  return (
    <MarketplaceLayout>
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Welcome to the Marketplace</h2>
        <p className="text-sm text-gray-500">Manage your energy certificates</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {features.map((feature) => (
          <Link key={feature.title} href={feature.href}>
            <Card className="hover:border-green-200 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <feature.icon className="h-5 w-5 text-green-600" />
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">{feature.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </MarketplaceLayout>
  )
}

