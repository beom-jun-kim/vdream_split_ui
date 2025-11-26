"use client"

import { useState } from "react"

export default function SplitNavigationPage() {
  const [hoveredSide, setHoveredSide] = useState<"left" | "right" | null>(null)

  return (
    <div className="relative h-screen w-full overflow-hidden flex">
      {/* Left Side - Flipped */}
      <a
        href="https://flipped-one.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className={`relative flex-1 flex items-center justify-center transition-all duration-700 ease-out ${
          hoveredSide === "right" ? "flex-[0.3]" : hoveredSide === "left" ? "flex-[0.7]" : "flex-1"
        }`}
        onMouseEnter={() => setHoveredSide("left")}
        onMouseLeave={() => setHoveredSide(null)}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
          style={{
            backgroundImage: "url('/modern-office-workspace-with-people-collaborating-.jpg')",
            transform: hoveredSide === "left" ? "scale(1.05)" : "scale(1)",
          }}
        />

        {/* Overlay */}
        <div
          className="absolute inset-0 transition-all duration-700"
          style={{
            backgroundColor: hoveredSide === "left" ? "rgba(35, 204, 183, 0.85)" : "rgba(35, 204, 183, 0.7)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-8 max-w-xl">
          <div
            className={`backdrop-blur-sm bg-white/10 rounded-3xl p-12 border border-white/20 transition-all duration-700 ${
              hoveredSide === "left" ? "scale-105 bg-white/15" : "scale-100"
            }`}
          >
            <h1 className="text-6xl font-bold text-white mb-6 tracking-tight">Flipped</h1>
            <p className="text-2xl text-white/95 font-medium mb-4 leading-relaxed">장애인 특화 HR · 재택근무 올인원</p>
            <p className="text-lg text-white/90 leading-relaxed">출퇴근·업무·서류·연차까지 한 곳에서</p>

            {/* Arrow indicator on hover */}
            <div
              className={`mt-8 transition-all duration-500 ${
                hoveredSide === "left" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="inline-flex items-center gap-2 text-white font-semibold">
                <span>방문하기</span>
                <svg className="w-6 h-6 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </a>

      {/* Divider */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-1 h-32 bg-white/30 rounded-full" />

      {/* Right Side - Fold it */}
      <a
        href="https://safecare.vdream.co.kr/"
        target="_blank"
        rel="noopener noreferrer"
        className={`relative flex-1 flex items-center justify-center transition-all duration-700 ease-out ${
          hoveredSide === "left" ? "flex-[0.3]" : hoveredSide === "right" ? "flex-[0.7]" : "flex-1"
        }`}
        onMouseEnter={() => setHoveredSide("right")}
        onMouseLeave={() => setHoveredSide(null)}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
          style={{
            backgroundImage: "url('/caring-healthcare-technology-with-elderly-person-u.jpg')",
            transform: hoveredSide === "right" ? "scale(1)" : "scale(1)",
          }}
        />

        {/* Overlay */}
        <div
          className="absolute inset-0 transition-all duration-700"
          style={{
            backgroundColor: hoveredSide === "right" ? "rgba(12, 196, 153, 0.85)" : "rgba(12, 196, 153, 0.7)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-8 max-w-xl">
          <div
            className={`backdrop-blur-sm bg-white/10 rounded-3xl p-12 border border-white/20 transition-all duration-700 ${
              hoveredSide === "right" ? "scale-105 bg-white/15" : "scale-100"
            }`}
          >
            <h1 className="text-6xl font-bold text-white mb-6 tracking-tight">Fold it</h1>
            <p className="text-2xl text-white/95 font-medium mb-4 leading-relaxed">
              사회적 약자를 위한 차세대 안심케어
            </p>
            <p className="text-lg text-white/90 leading-relaxed mb-3">특수학교 현장형 안전 관리</p>
            <p className="text-lg text-white/90 leading-relaxed">비상 상황 즉시 대응 · 원격 지원</p>

            {/* Arrow indicator on hover */}
            <div
              className={`mt-8 transition-all duration-500 ${
                hoveredSide === "right" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="inline-flex items-center gap-2 text-white font-semibold">
                <span>방문하기</span>
                <svg className="w-6 h-6 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}
