import Image from 'next/image'

export function TestimonialsSection() {
  return (
    <section className="py-12 bg-white overflow-hidden md:py-20 lg:py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="mx-auto h-8 relative w-40">
            <Image
              src="/placeholder.svg"
              alt="Testimonial Company Logo"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
          <blockquote className="mt-10">
            <div className="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900">
              <p>
                "PowerChain has revolutionized the way we manage and trade our renewable energy certificates. The platform's efficiency and transparency have significantly improved our operations and boosted our credibility in the market."
              </p>
            </div>
            <footer className="mt-8">
              <div className="md:flex md:items-center md:justify-center">
                <div className="md:flex-shrink-0">
                  <div className="mx-auto h-10 w-10 relative">
                    <Image
                      className="rounded-full"
                      src="/placeholder.svg"
                      alt="Testimonial Avatar"
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div className="text-base font-medium text-gray-900">Jane Doe</div>
                  <svg className="hidden md:block mx-1 h-5 w-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>
                  <div className="text-base font-medium text-gray-500">CEO, GreenEnergy Co.</div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

