import React from 'react'

const MovingNav = () => {
  return (
    
      <div className="bg-[#29B68D] text-white py-6 overflow-hidden relative">
      <div className="absolute inset-0 flex items-center">
        <div className="whitespace-nowrap animate-marquee">
          <span className="mx-4">Quality Service Assured ✦ Quality Service Assured ✦ Quality Service Assured ✦</span>
        </div>
        <div className="whitespace-nowrap animate-marquee" aria-hidden="true">
          <span className="mx-4">Quality Service Assured ✦ Quality Service Assured ✦ Quality Service Assured ✦</span>
        </div>
      </div>
    </div>
    
  )
}

export default MovingNav
