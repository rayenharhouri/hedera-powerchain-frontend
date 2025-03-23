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

const withdrawalHistory = [
  {
    id: 'WD001',
    certificateId: 'CERT008',
    amount: 100,
    date: '2024-01-08',
    status: 'Completed',
    destination: 'External Wallet',
  },
  {
    id: 'WD002',
    certificateId: 'CERT009',
    amount: 50,
    date: '2024-01-07',
    status: 'Processing',
    destination: 'External Wallet',
  },
]

export default function WithdrawCertificatesPage() {
  return (
    <MarketplaceLayout>
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Withdraw Certificates</h2>
        <p className="text-sm text-gray-500">Withdraw your certificates to an external wallet</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Withdraw Certificate</CardTitle>
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
                    <SelectItem value="cert1">CERT010 - Wind Energy (150 MWh)</SelectItem>
                    <SelectItem value="cert2">CERT011 - Solar Energy (75 MWh)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount">Amount to Withdraw (MWh)</Label>
                <Input id="amount" type="number" placeholder="Enter amount" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="wallet">Destination Wallet Address</Label>
                <Input id="wallet" placeholder="Enter wallet address" />
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Withdraw Certificate
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Withdrawal History</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Certificate</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {withdrawalHistory.map((withdrawal) => (
                  <TableRow key={withdrawal.id}>
                    <TableCell className="font-medium">{withdrawal.id}</TableCell>
                    <TableCell>{withdrawal.certificateId}</TableCell>
                    <TableCell>{withdrawal.amount} MWh</TableCell>
                    <TableCell>{withdrawal.date}</TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className={
                          withdrawal.status === 'Completed'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }
                      >
                        {withdrawal.status}
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

