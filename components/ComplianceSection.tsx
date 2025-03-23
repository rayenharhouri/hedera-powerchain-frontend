import { Button } from '@/components/ui/button'

export function ComplianceSection() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Compliant with industry standards</span>
          <span className="block text-green-600">GDPR, ISO 27001, and more</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Button className="inline-flex items-center justify-center px-5 py-3 text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700">
              Learn about compliance
            </Button>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Button variant="outline" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50">
              View certifications
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

