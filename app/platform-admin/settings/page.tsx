import { PlatformAdminLayout } from '@/components/PlatformAdminLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function AdminSettingsPage() {
  return (
    <PlatformAdminLayout>
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Admin Settings</h2>
        <p className="text-sm text-gray-500">Configure platform-wide settings</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Platform Configuration</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="platformName">Platform Name</Label>
              <Input id="platformName" defaultValue="PowerChain" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="supportEmail">Support Email</Label>
              <Input id="supportEmail" type="email" defaultValue="support@powerchain.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="maxUsers">Maximum Users</Label>
              <Input id="maxUsers" type="number" defaultValue="1000" />
            </div>
            <Button className="bg-green-600 hover:bg-green-700">
              Save Settings
            </Button>
          </form>
        </CardContent>
      </Card>
    </PlatformAdminLayout>
  )
}

