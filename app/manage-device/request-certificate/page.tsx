import { DeviceManagerLayout } from '@/components/DeviceManagerLayout'
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

const certificateRequests = [
  {
    id: 'REQ001',
    deviceId: 'DEV001',
    type: 'Wind Energy',
    amount: '100 MWh',
    requestDate: '2024-01-10',
    status: 'Pending',
  },
  {
    id: 'REQ002',
    deviceId: 'DEV002',
    type: 'Solar Energy',
    amount: '50 MWh',
    requestDate: '2024-01-09',
    status: 'Approved',
  },
]

export default function RequestCertificatePage() {
  return (
    <DeviceManagerLayout>
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Request Certificate</h2>
        <p className="text-sm text-gray-500">Request new energy certificates for your devices</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>New Certificate Request</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="device">Select Device</Label>
                <Select>
                  <SelectTrigger id="device">
                    <SelectValue placeholder="Choose a device" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dev1">Wind Turbine A1</SelectItem>
                    <SelectItem value="dev2">Solar Panel Array B2</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="energyType">Energy Type</Label>
                <Select>
                  <SelectTrigger id="energyType">
                    <SelectValue placeholder="Select energy type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wind">Wind Energy</SelectItem>
                    <SelectItem value="solar">Solar Energy</SelectItem>
                    <SelectItem value="hydro">Hydro Energy</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount">Amount (MWh)</Label>
                <Input id="amount" type="number" placeholder="Enter amount" />
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Submit Request
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Request History</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Request ID</TableHead>
                  <TableHead>Device</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {certificateRequests.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell className="font-medium">{request.id}</TableCell>
                    <TableCell>{request.deviceId}</TableCell>
                    <TableCell>{request.amount}</TableCell>
                    <TableCell>{request.requestDate}</TableCell>
                    <TableCell>
                      <Badge
                        variant="secondary"
                        className={
                          request.status === 'Approved'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }
                      >
                        {request.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </DeviceManagerLayout>
  )
}

