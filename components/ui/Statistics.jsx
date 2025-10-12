/**
 * Statistics Component for PLKNM Plumbing Services
 * 
 * Professional statistics section with dark green background,
 * showcasing company achievements and expertise with visual cards.
 * 
 * @author PLKNM Development Team
 * @version 1.0.0
 */

export default function Statistics() {
  const statistics = [
    {
      id: 1,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
      iconBg: "bg-amber-200",
      value: "500+",
      description: "Projects Completed"
    },
    {
      id: 2,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7.5 8.5h9m-9 3h9m-9 3h9M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z"/>
        </svg>
      ),
      iconBg: "bg-green-600",
      value: "100%",
      description: "Client Satisfaction"
    },
    {
      id: 3,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100 8 4 4 0 000-8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
        </svg>
      ),
      iconBg: "bg-green-600",
      value: "50+",
      description: "Years Experience"
    }
  ];

  return (
    <section className="py-16 bg-primary-green text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section - Text Content */}
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 flex space-x-2">
              <div className="w-8 h-8 border-2 border-white rounded-full"></div>
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-primary-green rounded-sm transform rotate-45"></div>
              </div>
            </div>

            <div className="pl-8">
              <h2 className="text-4xl md:text-5xl font-bold !text-white mb-6 leading-tight">
                Professional Excellence, 
                <span className="block">Reliably Delivered</span>
              </h2>
              <p className="text-lg text-white/90 leading-relaxed max-w-lg">
                Empowering our clients to achieve their vision with professional plumbing solutions 
                that combine decades of expertise with innovative approaches.
              </p>
            </div>
          </div>

          {/* Right Section - Statistics Cards */}
          <div className="flex flex-col sm:flex-row gap-6">
            {statistics.map((stat) => (
              <div key={stat.id} className="bg-white rounded-lg p-6 text-center flex-1 shadow-lg">
                {/* Icon */}
                <div className={`w-16 h-16 ${stat.iconBg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>
                
                {/* Statistic */}
                <div className="text-3xl font-bold text-black mb-2">
                  {stat.value}
                </div>
                
                {/* Description */}
                <div className="text-sm text-gray-600 font-medium">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
