import { DashboardLayout } from '@/components/DashboardLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Laptop, ShoppingCart, FileText, Users, Settings, Activity, ArrowRight, AlertCircle, CheckCircle2, Clock, Bell } from 'lucide-react'
import Link from 'next/link'

const sections = [
  {
    title: 'Device Management',
    icon: Laptop,
    href: '/manage-device',
    updates: [
      {
        type: 'alert',
        message: 'Wind Turbine A1 requires maintenance',
        timestamp: '10 minutes ago',
        status: 'warning'
      },
      {
        type: 'success',
        message: 'New solar panel array registered successfully',
        timestamp: '1 hour ago',
        status: 'success'
      }
    ]
  },
  {
    title: 'Marketplace',
    icon: ShoppingCart,
    href: '/marketplace',
    updates: [
      {
        type: 'info',
        message: 'New certificate listed: 100 MWh Wind Energy',
        timestamp: '30 minutes ago',
        status: 'info'
      },
      {
        type: 'success',
        message: 'Certificate CERT001 sold for $500',
        timestamp: '2 hours ago',
        status: 'success'
      }
    ]
  },
  {
    title: 'Certificates',
    icon: FileText,
    href: '/dashboard/certificates',
    updates: [
      {
        type: 'pending',
        message: '3 certificates pending approval',
        timestamp: '15 minutes ago',
        status: 'warning'
      },
      {
        type: 'success',
        message: '2 certificates issued successfully',
        timestamp: '3 hours ago',
        status: 'success'
      }
    ]
  },
  {
    title: 'Platform Administration',
    icon: Users,
    href: '/platform-admin',
    updates: [
      {
        type: 'alert',
        message: '5 new user registration requests',
        timestamp: '1 hour ago',
        status: 'warning'
      },
      {
        type: 'info',
        message: 'Monthly user audit completed',
        timestamp: '1 day ago',
        status: 'info'
      }
    ]
  },
  {
    title: 'Settings',
    icon: Settings,
    href: '/dashboard/settings',
    updates: [
      {
        type: 'info',
        message: 'System maintenance scheduled for tomorrow',
        timestamp: '5 hours ago',
        status: 'info'
      },
      {
        type: 'success',
        message: 'Security settings updated',
        timestamp: '2 days ago',
        status: 'success'
      }
    ]
  },
  {
    title: 'Activity Log',
    icon: Activity,
    href: '/dashboard/activity',
    updates: [
      {
        type: 'info',
        message: '150+ new activities recorded today',
        timestamp: '1 minute ago',
        status: 'info'
      },
      {
        type: 'alert',
        message: 'Unusual activity detected',
        timestamp: '4 hours ago',
        status: 'warning'
      }
    ]
  }
]

function getStatusIcon(status: string) {
  switch (status) {
    case 'warning':
      return <AlertCircle className="h-5 w-5 text-yellow-500" />
    case 'success':
      return <CheckCircle2 className="h-5 w-5 text-green-500" />
    case 'info':
      return <Bell className="h-5 w-5 text-blue-500" />
    default:
      return <Clock className="h-5 w-5 text-gray-500" />
  }
}

function getStatusColor(status: string) {
  switch (status) {
    case 'warning':
      return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100'
    case 'success':
      return 'bg-green-100 text-green-800 hover:bg-green-100'
    case 'info':
      return 'bg-blue-100 text-blue-800 hover:bg-blue-100'
    default:
      return 'bg-gray-100 text-gray-800 hover:bg-gray-100'
  }
}

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Dashboard Overview</h2>
        <p className="text-sm text-gray-500">Latest updates from across the platform</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => (
          <Card key={section.title} className="hover:border-green-200 transition-colors">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                <div className="flex items-center gap-2">
                  <section.icon className="h-5 w-5 text-green-600" />
                  {section.title}
                </div>
              </CardTitle>
              <Link href={section.href}>
                <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700">
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {section.updates.map((update, index) => (
                  <div key={index} className="flex items-start gap-3">
                    {getStatusIcon(update.status)}
                    <div className="space-y-1">
                      <p className="text-sm text-gray-800">{update.message}</p>
                      <div className="flex items-center gap-2">
                        <Badge 
                          variant="secondary"
                          className={getStatusColor(update.status)}
                        >
                          {update.type}
                        </Badge>
                        <span className="text-xs text-gray-500">{update.timestamp}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6">
        <Card>
          <CardHeader>
            <CardTitle>System Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-4">
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-500">Active Devices</p>
                <p className="text-2xl font-bold text-green-600">45/50</p>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  90% Online
                </Badge>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-500">Certificate Trading</p>
                <p className="text-2xl font-bold text-green-600">24h</p>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                  Active
                </Badge>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-500">Platform Users</p>
                <p className="text-2xl font-bold text-green-600">1,234</p>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  +12 Today
                </Badge>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-500">System Load</p>
                <p className="text-2xl font-bold text-green-600">65%</p>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Normal
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

