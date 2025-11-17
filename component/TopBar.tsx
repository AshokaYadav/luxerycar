export default function TopBar() {
  return (
    <div className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white text-sm">
      <div className="container mx-auto px-4 py-2.5">
        <div className="flex items-center justify-between">
          {/* Left - Phone Numbers */}
          <div className="flex items-center gap-4">
            <a 
              href="tel:+918693977777" 
              className="flex items-center gap-2 hover:text-blue-400 transition-colors group"
            >
              <svg className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="font-medium">+91 86939-77777</span>
            </a>
            
            <span className="text-gray-600 hidden sm:inline">|</span>
            
            <a 
              href="tel:+919001144474" 
              className="hidden sm:flex items-center gap-2 hover:text-blue-400 transition-colors group"
            >
              <svg className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="font-medium">+91 90011-44474</span>
            </a>
          </div>

          {/* Right - 24/7 Badge */}
          <div className="flex items-center gap-2 text-xs">
            <div className="flex items-center gap-1.5 bg-green-500/20 px-3 py-1 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="font-semibold text-green-400">24/7 Available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}