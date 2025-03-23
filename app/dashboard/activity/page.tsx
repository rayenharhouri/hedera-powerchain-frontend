import { DashboardLayout } from '@/components/DashboardLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const activityLogs = [
  {
    id: 1,
    action: 'Certificate Issued',
    details: 'CERT004 issued for 50 MWh of wind energy',
    timestamp: '2024-01-10 14:30:00',
    user: 'John Doe',
  },
  {
    id: 2,
    action: 'Device Added',
    details: 'New solar panel array DEV005 added to the system',
    timestamp: '2024-01-09 10:15:00',
    user: 'Jane Smith',
  },
  {
    id: 3,
    action: 'Certificate Traded',
    details: 'CERT002 traded for $300',
    timestamp: '2024-01-08 16:45:00',
    user: 'Alice Johnson',
  },
  {
    id: 4,
    action: 'Settings Updated',
    details: 'Notification preferences changed',
    timestamp: '2024-01-07 09:00:00',
    user: 'Bob Williams',
  },
]

export default function ActivityPage() {
  return (
    <DashboardLayout>
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Activity Logs</h2>
        <p className="text-sm text-gray-500">Recent actions and events on the platform</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {activityLogs.map((log) => (
              <div key={log.id} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Badge
                    variant="outline"
                    className="w-8 h-8 rounded-full flex items-center justify-center text-green-600 border-green-600"
                  >
                    {log.user.charAt(0)}
                  </Badge>
                </div>
                <div className="flex-grow">
                  <p className="text-sm font-medium text-gray-900">{log.action}</p>
                  <p className="text-sm text-gray-500">{log.details}</p>
                  <p className="text-xs text-gray-400 mt-1">
                    {log.timestamp} by {log.user}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  )
}

