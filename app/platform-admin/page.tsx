import { PlatformAdminLayout } from '@/components/PlatformAdminLayout'
import { UserManagementTable } from '@/components/UserManagementTable'

export default function PlatformAdminPage() {
  return (
    <PlatformAdminLayout>
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-900">User Management</h2>
        <p className="text-sm text-gray-500">Manage platform users and their roles</p>
      </div>
      <UserManagementTable />
    </PlatformAdminLayout>
  )
}

