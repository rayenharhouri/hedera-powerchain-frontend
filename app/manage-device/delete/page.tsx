import { DeviceManagerLayout } from '@/components/DeviceManagerLayout'
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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

const devices = [
  {
    id: 'DEV001',
    name: 'Wind Turbine A1',
    type: 'Wind Energy',
    location: 'North Field',
    status: 'Active',
    lastReading: '50 MW',
  },
  {
    id: 'DEV002',
    name: 'Solar Panel Array B2',
    type: 'Solar Energy',
    location: 'South Field',
    status: 'Active',
    lastReading: '25 MW',
  },
  {
    id: 'DEV003',
    name: 'Hydro Generator C3',
    type: 'Hydro Energy',
    location: 'River Station',
    status: 'Maintenance',
    lastReading: '75 MW',
  },
]

export default function DeleteDevicePage() {
  return (
    <DeviceManagerLayout>
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Delete Device</h2>
        <p className="text-sm text-gray-500">Remove devices from your registered device list</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Registered Devices</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Device ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Reading</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {devices.map((device) => (
                <TableRow key={device.id}>
                  <TableCell className="font-medium">{device.id}</TableCell>
                  <TableCell>{device.name}</TableCell>
                  <TableCell>{device.type}</TableCell>
                  <TableCell>{device.location}</TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={
                        device.status === 'Active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }
                    >
                      {device.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{device.lastReading}</TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="text-red-600 border-red-600 hover:bg-red-50"
                        >
                          Delete
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Confirm Device Deletion</DialogTitle>
                          <DialogDescription>
                            Are you sure you want to delete {device.name}? This action cannot be undone.
                            All associated data and certificates will be archived.
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                          <Button variant="outline">Cancel</Button>
                          <Button variant="destructive">Delete Device</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </DeviceManagerLayout>
  )
}

