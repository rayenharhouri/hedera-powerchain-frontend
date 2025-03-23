'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'

type User = {
  id: string
  name: string
  email: string
  role: 'User' | 'Admin'
  status: 'Accepted' | 'Pending' | 'Rejected'
  organization: string
}

const initialUsers: User[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com', role: 'User', status: 'Accepted', organization: 'Acme Inc.' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'Admin', status: 'Accepted', organization: 'TechCorp' },
  { id: '3', name: 'Alice Johnson', email: 'alice@example.com', role: 'User', status: 'Pending', organization: 'GreenEnergy' },
  { id: '4', name: 'Bob Wilson', email: 'bob@example.com', role: 'User', status: 'Rejected', organization: 'EcoSolutions' },
]

export function UserManagementTable() {
  const [users, setUsers] = useState<User[]>(initialUsers)

  const handleAction = (userId: string, action: 'accept' | 'reject' | 'delete') => {
    setUsers(prevUsers => {
      return prevUsers.map(user => {
        if (user.id === userId) {
          switch (action) {
            case 'accept':
              return { ...user, status: 'Accepted' }
            case 'reject':
              return { ...user, status: 'Rejected' }
            default:
              return user
          }
        }
        return user
      }).filter(user => action !== 'delete' || user.id !== userId)
    })
  }

  return (
    <Card>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Organization</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <Badge
                    variant={user.role === 'Admin' ? 'default' : 'secondary'}
                    className={
                      user.role === 'Admin'
                        ? 'bg-blue-100 text-blue-800 hover:bg-blue-100'
                        : 'bg-green-100 text-green-800 hover:bg-green-100'
                    }
                  >
                    {user.role}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={user.status === 'Accepted' ? 'default' : 'secondary'}
                    className={
                      user.status === 'Accepted'
                        ? 'bg-green-100 text-green-800 hover:bg-green-100'
                        : user.status === 'Rejected'
                        ? 'bg-red-100 text-red-800 hover:bg-red-100'
                        : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100'
                    }
                  >
                    {user.status}
                  </Badge>
                </TableCell>
                <TableCell>{user.organization}</TableCell>
                <TableCell>
                  {user.status === 'Pending' && (
                    <>
                      <Button
                        size="sm"
                        className="mr-2 bg-green-600 hover:bg-green-700"
                        onClick={() => handleAction(user.id, 'accept')}
                      >
                        Accept
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-red-600 border-red-600 hover:bg-red-50"
                        onClick={() => handleAction(user.id, 'reject')}
                      >
                        Reject
                      </Button>
                    </>
                  )}
                  {user.status !== 'Pending' && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-red-600 border-red-600 hover:bg-red-50"
                      onClick={() => handleAction(user.id, 'delete')}
                    >
                      Delete
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

