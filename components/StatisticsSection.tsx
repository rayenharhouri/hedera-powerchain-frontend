export function StatisticsSection() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Trusted by energy providers worldwide
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Our platform is making a real impact in the renewable energy sector
          </p>
        </div>
        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
          <div className="flex flex-col">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
              Certificates Issued
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-green-600">
              100K+
            </dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
              Energy Traded
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-green-600">
              500 GWh
            </dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
              Carbon Offset
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-green-600">
              250K tons
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

