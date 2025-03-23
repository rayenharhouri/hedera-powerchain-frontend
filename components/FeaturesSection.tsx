import { Shield, Zap, BarChart } from 'lucide-react'

export function FeaturesSection() {
  const features = [
    {
      name: 'Secure Blockchain Technology',
      description: 'Our platform leverages cutting-edge blockchain technology to ensure the highest level of security and transparency for all transactions.',
      icon: Shield,
    },
    {
      name: 'Real-time Energy Trading',
      description: 'Trade renewable energy certificates in real-time, with instant settlement and verification.',
      icon: Zap,
    },
    {
      name: 'Comprehensive Analytics',
      description: 'Access detailed analytics and reporting tools to track your energy production, trades, and impact on carbon reduction.',
      icon: BarChart,
    },
  ]

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-green-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to certify and trade renewable energy
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            PowerChain provides a suite of powerful tools to streamline your renewable energy certification and trading processes.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

