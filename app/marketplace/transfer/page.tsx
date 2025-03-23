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
import { Badge } from '@/components/ui/badge'

const transferHistory = [
  {
    id: 'TR001',
    certificateId: 'CERT012',
    amount: 75,
    recipient: '0x1234...5678',
    date: '2024-01-08',
    status: 'Completed',
  },
  {
    id: 'TR002',
    certificateId: 'CERT013',
    amount: 25,
    recipient: '0x8765...4321',
    date: '2024-01-07',
    status: 'Processing',
  },
]

export default function TransferCertificatesPage() {
  return (
    <MarketplaceLayout>
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Transfer Certificates</h2>
        <p className="text-sm text-gray-500">Transfer certificates to other users on the platform</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Transfer Certificate</CardTitle>
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
                    <SelectItem value="cert1">CERT014 - Wind Energy (100 MWh)</SelectItem>
                    <SelectItem value="cert2">CERT015 - Solar Energy (50 MWh)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount">Amount to Transfer (MWh)</Label>
                <Input id="amount" type="number" placeholder="Enter amount" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="recipient">Recipient Address or Username</Label>
                <Input id="recipient" placeholder="Enter recipient" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="notes">Transfer Notes (Optional)</Label>
                <Input id="notes" placeholder="Add a note to the recipient" />
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Transfer Certificate
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Transfer History</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Certificate</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Recipient</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transferHistory.map((transfer) => (
                  <TableRow key={transfer.id}>
                    <TableCell className="font-medium">{transfer.id}</TableCell>
                    <TableCell>{transfer.certificateId}</TableCell>
                    <TableCell>{transfer.amount} MWh</TableCell>
                    <TableCell>{transfer.recipient}</TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className={
                          transfer.status === 'Completed'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }
                      >
                        {transfer.status}
                      </Badge>
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

