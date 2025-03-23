import { MarketplaceLayout } from '@/components/MarketplaceLayout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'

const availableCertificates = [
  {
    id: 'CERT001',
    type: 'Wind Energy',
    amount: 100,
    price: 500,
    seller: 'WindCorp Inc.',
    location: 'North Region',
    validUntil: '2024-12-31',
  },
  {
    id: 'CERT002',
    type: 'Solar Energy',
    amount: 50,
    price: 300,
    seller: 'SolarTech Ltd.',
    location: 'South Region',
    validUntil: '2024-12-31',
  },
  {
    id: 'CERT003',
    type: 'Hydro Energy',
    amount: 75,
    price: 450,
    seller: 'HydroPower Co.',
    location: 'East Region',
    validUntil: '2024-12-31',
  },
]

export default function BuyCertificatesPage() {
  return (
    <MarketplaceLayout>
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Buy Certificates</h2>
        <p className="text-sm text-gray-500">Browse and purchase available energy certificates</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Available Certificates</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Certificate ID</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount (MWh)</TableHead>
                <TableHead>Price ($)</TableHead>
                <TableHead>Seller</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Valid Until</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {availableCertificates.map((cert) => (
                <TableRow key={cert.id}>
                  <TableCell className="font-medium">{cert.id}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                      {cert.type}
                    </Badge>
                  </TableCell>
                  <TableCell>{cert.amount}</TableCell>
                  <TableCell>${cert.price}</TableCell>
                  <TableCell>{cert.seller}</TableCell>
                  <TableCell>{cert.location}</TableCell>
                  <TableCell>{cert.validUntil}</TableCell>
                  <TableCell>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Buy Now
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </MarketplaceLayout>
  )
}

