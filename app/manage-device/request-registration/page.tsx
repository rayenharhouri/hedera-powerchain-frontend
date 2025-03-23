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
import { Textarea } from '@/components/ui/textarea'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'

const registrationRequests = [
  {
    id: 'REG001',
    deviceName: 'Wind Turbine A1',
    type: 'Wind Energy',
    location: 'North Field',
    requestDate: '2024-01-10',
    status: 'Pending',
  },
  {
    id: 'REG002',
    deviceName: 'Solar Panel Array B2',
    type: 'Solar Energy',
    location: 'South Field',
    requestDate: '2024-01-09',
    status: 'Approved',
  },
]

export default function RequestRegistrationPage() {
  return (
    <DeviceManagerLayout>
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Request Device Registration</h2>
        <p className="text-sm text-gray-500">Register new energy-generating devices on the platform</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>New Device Registration</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="deviceName">Device Name</Label>
                <Input id="deviceName" placeholder="Enter device name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="deviceType">Device Type</Label>
                <Select>
                  <SelectTrigger id="deviceType">
                    <SelectValue placeholder="Select device type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="wind">Wind Turbine</SelectItem>
                    <SelectItem value="solar">Solar Panel</SelectItem>
                    <SelectItem value="hydro">Hydro Generator</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="capacity">Capacity (MW)</Label>
                <Input id="capacity" type="number" placeholder="Enter capacity" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="Enter device location" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Enter device description and additional details"
                  className="min-h-[100px]"
                />
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Submit Registration
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Registration History</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Request ID</TableHead>
                  <TableHead>Device Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {registrationRequests.map((request) => (
                  <TableRow key={request.id}>
                    <TableCell className="font-medium">{request.id}</TableCell>
                    <TableCell>{request.deviceName}</TableCell>
                    <TableCell>{request.type}</TableCell>
                    <TableCell>{request.location}</TableCell>
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

