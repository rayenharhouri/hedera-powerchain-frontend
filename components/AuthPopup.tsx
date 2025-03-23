'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { motion, AnimatePresence } from 'framer-motion'
import authService from '@/Services/authService'
import { useRouter } from 'next/navigation'

type AuthMode = 'signin' | 'signup'

export function AuthPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [mode, setMode] = useState<AuthMode>('signin')
  const [error, setError] = useState<string | null>(null)
  const [selectedRole, setSelectedRole] = useState<string | null>(null)
  const router = useRouter()

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'signin' ? 'signup' : 'signin'))
    setError(null) // Clear error when toggling modes
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const formData = new FormData(e.currentTarget)
      const email = formData.get('email') as string
      const password = formData.get('password') as string
      const fullName = formData.get('fullName') as string
      const phoneNumber = formData.get('phoneNumber') as string
      const organizationId = formData.get('organizationId') as string

      console.log('Form Data:', { email, password, fullName, phoneNumber, organizationId, role: selectedRole })

      if (mode === 'signin') {
        const response = await authService.login(email, password)
        console.log('Logged in:', response)
        router.push('/dashboard')
        setIsOpen(false) // Close dialog on successful login
      } else {
        if (!selectedRole) {
          throw new Error('Role is required')
        }
        const response = await authService.signup({
          email,
          password,
          fullName,
          phoneNumber,
          organizationId,
          role: selectedRole,
        })
        console.log('Signed up:', response)
        router.push('/dashboard') // Redirect to the dashboard
        setIsOpen(false) // Close dialog on successful signup
      }
      setError(null) // Clear any previous errors
    } catch (error) {
      console.error('Authentication error:', error)
      setError('An error occurred during authentication. Please try again.')
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-50">Log In</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{mode === 'signin' ? 'Sign In' : 'Sign Up'}</DialogTitle>
          <DialogDescription>
            {mode === 'signin'
              ? 'Enter your credentials to access your account.'
              : 'Create a new account to get started.'}
          </DialogDescription>
        </DialogHeader>
        <AnimatePresence mode="wait">
          <motion.form
            key={mode}
            initial={{ opacity: 0, x: mode === 'signin' ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: mode === 'signin' ? 20 : -20 }}
            transition={{ duration: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {mode === 'signup' && (
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input id="fullName" name="fullName" placeholder="Enter your full name" required />
              </div>
            )}
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="Enter your email" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" placeholder="Enter your password" required />
            </div>
            {mode === 'signup' && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input id="phoneNumber" name="phoneNumber" type="tel" placeholder="Enter your phone number" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="organizationId">Organization ID</Label>
                  <Input id="organizationId" name="organizationId" placeholder="Enter your organization ID" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="role">Role</Label>
                  <Select onValueChange={(value) => setSelectedRole(value)} required>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Admin">Admin</SelectItem>
                      <SelectItem value="user">User</SelectItem>
                      <SelectItem value="manager">Manager</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </>
            )}
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button type="submit" className="w-full">
              {mode === 'signin' ? 'Sign In' : 'Sign Up'}
            </Button>
          </motion.form>
        </AnimatePresence>
        <div className="mt-4 text-center">
          <Button variant="link" onClick={toggleMode}>
            {mode === 'signin' ? "Don't have an account? Sign Up" : 'Already have an account? Sign In'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}