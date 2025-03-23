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
import { Badge } from '@/components/ui/badge'

const deviceDetails = {
  id: 'DEV001',
  name: 'Wind Turbine A1',
  type: 'Wind Energy',
  capacity: 50,
  location: 'North Field',
  description: 'High-capacity wind turbine for commercial energy generation.',
  status: 'Active',
  lastMaintenance: '2024-01-01',
}

export default function EditDevicePage() {
  return (
    <DeviceManagerLayout>
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Edit Device</h2>
        <p className="text-sm text-gray-500">Modify existing device information and settings</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Device Information</CardTitle>
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-800"
              >
                {deviceDetails.status}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="deviceName">Device Name</Label>
                <Input id="deviceName" defaultValue={deviceDetails.name} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="deviceType">Device Type</Label>
                <Select defaultValue="wind">
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
                <Input
                  id="capacity"
                  type="number"
                  defaultValue={deviceDetails.capacity}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" defaultValue={deviceDetails.location} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  defaultValue={deviceDetails.description}
                  className="min-h-[100px]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="maintenance">Last Maintenance Date</Label>
                <Input
                  id="maintenance"
                  type="date"
                  defaultValue={deviceDetails.lastMaintenance}
                />
              </div>
              <div className="flex gap-4">
                <Button className="flex-1 bg-green-600 hover:bg-green-700">
                  Save Changes
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-green-600 text-green-600 hover:bg-green-50"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Device Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <div className="text-sm font-medium text-gray-500">Total Energy Generated</div>
                <div className="mt-1 text-2xl font-semibold">1,234 MWh</div>
              </div>
              <div className="rounded-lg border p-4">
                <div className="text-sm font-medium text-gray-500">Certificates Issued</div>
                <div className="mt-1 text-2xl font-semibold">15</div>
              </div>
              <div className="rounded-lg border p-4">
                <div className="text-sm font-medium text-gray-500">Uptime</div>
                <div className="mt-1 text-2xl font-semibold">98.5%</div>
              </div>
              <div className="rounded-lg border p-4">
                <div className="text-sm font-medium text-gray-500">Last Reading</div>
                <div className="mt-1 text-2xl font-semibold">50 MW</div>
                <div className="mt-1 text-sm text-gray-500">Updated 5 minutes ago</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DeviceManagerLayout>
  )
}

