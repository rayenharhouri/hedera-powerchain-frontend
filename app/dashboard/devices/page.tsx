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
import { DashboardLayout } from '@/components/DashboardLayout'
import { Badge } from '@/components/ui/badge'

const devices = [
  {
    id: 'DEV001',
    name: 'Wind Turbine A1',
    type: 'Wind',
    location: 'North Field',
    status: 'Active',
    lastReading: '50 MWh',
    lastUpdate: '2024-01-10 14:30',
  },
  {
    id: 'DEV002',
    name: 'Solar Panel Array B2',
    type: 'Solar',
    location: 'South Field',
    status: 'Maintenance',
    lastReading: '25 MWh',
    lastUpdate: '2024-01-10 14:25',
  },
  {
    id: 'DEV003',
    name: 'Hydro Generator C3',
    type: 'Hydro',
    location: 'River Station',
    status: 'Active',
    lastReading: '75 MWh',
    lastUpdate: '2024-01-10 14:20',
  },
]

export default function DevicesPage() {
  return (
    <DashboardLayout>
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Connected Devices</h2>
          <p className="text-sm text-gray-500">Manage and monitor your energy generating devices</p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700">
          Add New Device
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Device List</CardTitle>
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
                <TableHead>Last Update</TableHead>
                <TableHead>Actions</TableHead>
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
                      variant={device.status === 'Active' ? 'default' : 'secondary'}
                      className={
                        device.status === 'Active'
                          ? 'bg-green-100 text-green-800 hover:bg-green-100'
                          : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100'
                      }
                    >
                      {device.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{device.lastReading}</TableCell>
                  <TableCell>{device.lastUpdate}</TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-green-600 border-green-600 hover:bg-green-50"
                    >
                      Manage
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </DashboardLayout>
  )
}

