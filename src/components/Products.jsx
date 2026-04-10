const products = [
  {
    name: 'FH-AI Series',
    category: 'AI Processing',
    description: 'High-performance neural processing units designed for edge AI inference, delivering exceptional compute density with minimal power consumption.',
    specs: ['128 TOPS', '5nm Process', 'PCIe 5.0', 'LPDDR5X'],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="8" y="8" width="32" height="32" rx="6" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
        <path d="M16 20 l8-4 8 4 v8 l-8 4 -8-4 z" stroke="#2563eb" strokeWidth="1.5" fill="#bfdbfe" />
        <path d="M16 20 l8 4 v8 M24 24 l8-4" stroke="#2563eb" strokeWidth="1" />
      </svg>
    ),
    badge: 'New',
    badgeColor: 'bg-green-100 text-green-700',
  },
  {
    name: 'FH-IoT Series',
    category: 'IoT & Connectivity',
    description: 'Ultra-low-power microcontrollers with integrated wireless connectivity for smart devices, industrial sensors, and consumer IoT applications.',
    specs: ['Wi-Fi 7', 'BT 5.4', '32-bit RISC-V', '< 10mW'],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <circle cx="24" cy="24" r="16" fill="#e0f2fe" stroke="#0284c7" strokeWidth="2" />
        <circle cx="24" cy="24" r="4" fill="#0284c7" />
        <path d="M12 18 Q24 10 36 18" stroke="#0284c7" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M16 13 Q24 6 32 13" stroke="#0284c7" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    ),
    badge: 'Popular',
    badgeColor: 'bg-blue-100 text-blue-700',
  },
  {
    name: 'FH-Auto Series',
    category: 'Automotive',
    description: 'Safety-critical automotive-grade chips meeting AEC-Q100 standards, designed for ADAS, infotainment, and powertrain control systems.',
    specs: ['ASIL-D', '125°C', 'CAN FD', '7nm Process'],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="6" y="14" width="36" height="20" rx="4" fill="#fce7f3" stroke="#db2777" strokeWidth="2" />
        <circle cx="14" cy="38" r="4" fill="#db2777" />
        <circle cx="34" cy="38" r="4" fill="#db2777" />
        <path d="M14 10 L34 10" stroke="#db2777" strokeWidth="2" strokeLinecap="round" />
        <rect x="16" y="18" width="16" height="8" rx="2" fill="#fce7f3" stroke="#db2777" strokeWidth="1" />
      </svg>
    ),
    badge: 'AEC-Q100',
    badgeColor: 'bg-pink-100 text-pink-700',
  },
  {
    name: 'FH-Power Series',
    category: 'Power Management',
    description: 'Advanced power management ICs enabling high-efficiency voltage regulation, battery management, and energy harvesting for modern electronics.',
    specs: ['98% Efficiency', '5A Output', 'Fast Charge', 'GaN Tech'],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <polygon points="24,6 30,20 42,20 32,30 36,44 24,34 12,44 16,30 6,20 18,20" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
      </svg>
    ),
    badge: 'GaN',
    badgeColor: 'bg-amber-100 text-amber-700',
  },
  {
    name: 'FH-Secure Series',
    category: 'Security',
    description: 'Hardware security modules with on-chip cryptographic engines, secure key storage, and tamper-resistant design for critical applications.',
    specs: ['AES-256', 'ECC P-521', 'FIPS 140-3', 'PUF Tech'],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <path d="M24 4 L38 10 L38 26 Q38 36 24 44 Q10 36 10 26 L10 10 Z" fill="#d1fae5" stroke="#059669" strokeWidth="2" />
        <path d="M18 24 l4 4 8-8" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    badge: 'FIPS 140-3',
    badgeColor: 'bg-emerald-100 text-emerald-700',
  },
  {
    name: 'FH-RF Series',
    category: 'RF & Wireless',
    description: 'High-performance RF transceivers supporting 5G NR, Wi-Fi 7, and UWB for smartphones, base stations, and precision location services.',
    specs: ['5G Sub-6GHz', 'Wi-Fi 7', 'UWB', 'mmWave'],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
        <rect x="8" y="8" width="32" height="32" rx="16" fill="#ede9fe" stroke="#7c3aed" strokeWidth="2" />
        <path d="M24 24 m-8 0 a8 8 0 1 1 16 0 a8 8 0 1 1-16 0" stroke="#7c3aed" strokeWidth="1.5" fill="none" />
        <path d="M24 24 m-14 0 a14 14 0 1 1 28 0 a14 14 0 1 1-28 0" stroke="#7c3aed" strokeWidth="1" strokeDasharray="3 2" fill="none" />
        <circle cx="24" cy="24" r="3" fill="#7c3aed" />
      </svg>
    ),
    badge: '5G Ready',
    badgeColor: 'bg-violet-100 text-violet-700',
  },
]

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">Product Portfolio</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">Our Chip Products</h2>
          <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
            From AI processors to power management ICs, we offer a complete range of semiconductor solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-100 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-gray-50 rounded-xl group-hover:bg-blue-50 transition-colors">
                  {product.icon}
                </div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${product.badgeColor}`}>
                  {product.badge}
                </span>
              </div>

              <div className="mb-1">
                <span className="text-xs font-medium text-gray-400 uppercase tracking-wide">{product.category}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-sm text-gray-500 mb-4 leading-relaxed">{product.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {product.specs.map((spec) => (
                  <span key={spec} className="text-xs bg-gray-50 text-gray-600 border border-gray-200 px-2.5 py-1 rounded-lg font-medium">
                    {spec}
                  </span>
                ))}
              </div>

              <a href="#contact" className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1">
                Learn More
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
