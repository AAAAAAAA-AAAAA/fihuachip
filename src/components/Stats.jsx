const stats = [
  { value: '5nm', label: 'Process Node' },
  { value: '200+', label: 'Patents Filed' },
  { value: '10B+', label: 'Chips Shipped' },
  { value: '99.9%', label: 'Yield Rate' },
]

export default function Stats() {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
