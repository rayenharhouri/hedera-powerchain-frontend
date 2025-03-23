import { MarketplaceLayout } from '@/components/MarketplaceLayout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const listedCertificates = [
  {
    id: 'CERT004',
    type: 'Wind Energy',
    amount: 150,
    price: 750,
    listingDate: '2024-01-10',
    status: 'Active',
  },
  {
    id: 'CERT005',
    type: 'Solar Energy',
    amount: 80,
    price: 400,
    listingDate: '2024-01-09',
    status: 'Active',
  },
]

export default function SellCertificatesPage() {
  return (
    <MarketplaceLayout>
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Sell Certificates</h2>
        <p className="text-sm text-gray-500">List your certificates for sale on the marketplace</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>List New Certificate</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="certificate">Select Certificate</Label>
                <Select>
                  <SelectTrigger id="certificate">
                    <SelectValue placeholder="Choose a certificate" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cert1">CERT006 - Wind Energy (200 MWh)</SelectItem>
                    <SelectItem value="cert2">CERT007 - Solar Energy (100 MWh)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount">Amount to Sell (MWh)</Label>
                <Input id="amount" type="number" placeholder="Enter amount" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="price">Price per MWh ($)</Label>
                <Input id="price" type="number" placeholder="Enter price" />
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                List Certificate
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Listed Certificates</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Certificate ID</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Listed On</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {listedCertificates.map((cert) => (
                  <TableRow key={cert.id}>
                    <TableCell className="font-medium">{cert.id}</TableCell>
                    <TableCell>{cert.type}</TableCell>
                    <TableCell>{cert.amount} MWh</TableCell>
                    <TableCell>${cert.price}</TableCell>
                    <TableCell>{cert.listingDate}</TableCell>
                    <TableCell>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-red-600 border-red-600 hover:bg-red-50"
                      >
                        Delist
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </MarketplaceLayout>
  )
}

