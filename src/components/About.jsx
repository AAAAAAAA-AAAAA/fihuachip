export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wide">About FihuaChip</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold mb-6">
              Engineering Silicon for a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Smarter World
              </span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Founded in 2015, FihuaChip has grown from a small design house to a leading global semiconductor company. 
              We combine cutting-edge research with pragmatic engineering to deliver chips that define new standards.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Our team of over 2,000 engineers across Silicon Valley, Shenzhen, and Taipei work tirelessly 
              to push the boundaries of what's possible in semiconductor design and manufacturing.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="border border-slate-700 rounded-xl p-4">
                <div className="text-2xl font-bold text-blue-400 mb-1">2,000+</div>
                <div className="text-sm text-slate-400">Engineers Worldwide</div>
              </div>
              <div className="border border-slate-700 rounded-xl p-4">
                <div className="text-2xl font-bold text-blue-400 mb-1">60+</div>
                <div className="text-sm text-slate-400">Global Customers</div>
              </div>
              <div className="border border-slate-700 rounded-xl p-4">
                <div className="text-2xl font-bold text-blue-400 mb-1">3</div>
                <div className="text-sm text-slate-400">Global Design Centers</div>
              </div>
              <div className="border border-slate-700 rounded-xl p-4">
                <div className="text-2xl font-bold text-blue-400 mb-1">Since 2015</div>
                <div className="text-sm text-slate-400">Years of Innovation</div>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-xl transition-all"
            >
              Partner With Us
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Timeline / values */}
          <div className="space-y-6">
            {[
              {
                year: '2015',
                title: 'Company Founded',
                desc: 'Started with 15 engineers and a vision to democratize advanced semiconductor technology.',
                color: 'bg-blue-500',
              },
              {
                year: '2018',
                title: 'First AI Chip Tape-Out',
                desc: 'Successfully taped out our first neural network accelerator chip on 16nm process node.',
                color: 'bg-cyan-500',
              },
              {
                year: '2021',
                title: 'Series C & Global Expansion',
                desc: 'Raised $180M Series C to expand design centers in Shenzhen and Taipei.',
                color: 'bg-green-500',
              },
              {
                year: '2024',
                title: '5nm Breakthrough',
                desc: 'Achieved industry-leading performance on TSMC 5nm process with our FH-AI 300 series.',
                color: 'bg-purple-500',
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 ${item.color} rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0`}>
                    {item.year.slice(2)}
                  </div>
                  {i < 3 && <div className="w-0.5 flex-1 bg-slate-700 mt-2"></div>}
                </div>
                <div className="pb-6">
                  <div className="text-xs text-slate-400 font-medium mb-1">{item.year}</div>
                  <h4 className="text-base font-semibold text-white mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
