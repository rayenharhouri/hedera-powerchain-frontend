import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { AuthPopup } from '@/components/AuthPopup'

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-bold text-green-600">PowerChain</Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
            <AuthPopup />
            <Button variant="default" className="bg-green-600 text-white hover:bg-green-700">Connect Wallet</Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

