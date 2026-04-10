const solutions = [
  {
    title: 'Artificial Intelligence',
    description: 'Accelerate AI/ML workloads at the edge with our dedicated neural processing units. Enable real-time inference for computer vision, NLP, and recommendation systems.',
    items: ['Edge Inference', 'Model Compression', 'Neural Engine IP', 'AI Compiler SDK'],
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-100',
  },
  {
    title: 'Industrial IoT',
    description: 'Connect your industrial systems with ultra-reliable, low-power chips designed for harsh environments, real-time control, and predictive maintenance.',
    items: ['Factory Automation', 'Predictive Maintenance', 'Energy Metering', 'Industrial Gateways'],
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-100',
  },
  {
    title: 'Automotive',
    description: 'Drive the future of mobility with safety-certified automotive-grade chips for autonomous driving, EV powertrains, and connected vehicle systems.',
    items: ['ADAS Systems', 'EV Battery Management', 'In-vehicle Networking', 'V2X Communication'],
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-100',
  },
  {
    title: 'Consumer Electronics',
    description: 'Power the next generation of smartphones, wearables, and smart home devices with high-performance chips optimized for user experience.',
    items: ['Smartphones', 'Wearables', 'Smart Home', 'Hearables'],
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-100',
  },
]

export default function Solutions() {
  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Industry Solutions</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">Built for Every Industry</h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            Our semiconductor solutions are tailored to the unique demands of each market vertical.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className={`${solution.bgColor} border ${solution.borderColor} rounded-2xl p-8 hover:shadow-md transition-all`}
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${solution.color} mb-5 shadow-lg`}>
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
              <p className="text-gray-600 mb-5 leading-relaxed">{solution.description}</p>
              <ul className="space-y-2">
                {solution.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${solution.color}`}></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
