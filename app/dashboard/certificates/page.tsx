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

const certificates = [
  {
    id: 'CERT001',
    deviceId: 'DEV001',
    energyType: 'Wind',
    amount: 100,
    issueDate: '2024-01-05',
    status: 'Issued',
  },
  {
    id: 'CERT002',
    deviceId: 'DEV002',
    energyType: 'Solar',
    amount: 50,
    issueDate: '2024-01-07',
    status: 'Pending',
  },
  {
    id: 'CERT003',
    deviceId: 'DEV003',
    energyType: 'Hydro',
    amount: 150,
    issueDate: '2024-01-09',
    status: 'Issued',
  },
]

export default function CertificatesPage() {
  return (
    <DashboardLayout>
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Certificate Issuance</h2>
          <p className="text-sm text-gray-500">Manage and issue renewable energy certificates</p>
        </div>
        <Button className="bg-green-600 hover:bg-green-700">
          Issue New Certificate
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Certificate List</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Certificate ID</TableHead>
                <TableHead>Device ID</TableHead>
                <TableHead>Energy Type</TableHead>
                <TableHead>Amount (MWh)</TableHead>
                <TableHead>Issue Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {certificates.map((cert) => (
                <TableRow key={cert.id}>
                  <TableCell className="font-medium">{cert.id}</TableCell>
                  <TableCell>{cert.deviceId}</TableCell>
                  <TableCell>{cert.energyType}</TableCell>
                  <TableCell>{cert.amount}</TableCell>
                  <TableCell>{cert.issueDate}</TableCell>
                  <TableCell>
                    <Badge
                      variant={cert.status === 'Issued' ? 'default' : 'secondary'}
                      className={
                        cert.status === 'Issued'
                          ? 'bg-green-100 text-green-800 hover:bg-green-100'
                          : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100'
                      }
                    >
                      {cert.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-green-600 border-green-600 hover:bg-green-50"
                    >
                      View
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

