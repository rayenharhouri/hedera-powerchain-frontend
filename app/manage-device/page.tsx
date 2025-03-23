import { DeviceManagerLayout } from '@/components/DeviceManagerLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, Plus, Edit, Trash2 } from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: FileText,
    title: 'Request Certificate',
    description: 'Request new energy certificates for your registered devices.',
    href: '/manage-device/request-certificate',
  },
  {
    icon: Plus,
    title: 'Request Registration',
    description: 'Register new energy-generating devices on the platform.',
    href: '/manage-device/request-registration',
  },
  {
    icon: Edit,
    title: 'Edit Device',
    description: 'Modify existing device information and settings.',
    href: '/manage-device/edit',
  },
  {
    icon: Trash2,
    title: 'Delete Device',
    description: 'Remove devices from your registered device list.',
    href: '/manage-device/delete',
  },
]

export default function DeviceManagerPage() {
  return (
    <DeviceManagerLayout>
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Device Management Dashboard</h2>
        <p className="text-sm text-gray-500">Manage your energy-generating devices and certificates</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {features.map((feature) => (
          <Link key={feature.title} href={feature.href}>
            <Card className="hover:border-green-200 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <feature.icon className="h-5 w-5 text-green-600" />
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">{feature.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </DeviceManagerLayout>
  )
}

