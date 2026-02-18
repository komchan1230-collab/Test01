import React from 'react';

export default function RegisterPage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center font-serif overflow-hidden">
      {/* Background Layer */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2000')`, // แทนที่ด้วย URL รูปด้านบน
          filter: 'brightness(0.4) contrast(1.2)'
        }}
      />
      
      {/* Overlay หมอกเวทมนตร์ */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-80" />

      {/* Main UI Card (The Parchment) */}
      <main className="relative z-10 w-full max-w-md p-1 bg-[#f1dca7] rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.8)] border-[6px] border-[#8b5a2b]">
        
        {/* กรอบด้านใน */}
        <div className="border-2 border-[#b8860b] m-1 p-8 bg-[#f1dca7] relative">
          
          {/* Header */}
          <header className="text-center mb-10">
            <h1 className="text-4xl font-black text-[#4a3427] tracking-tighter uppercase drop-shadow-md">
              Hero Registry
            </h1>
            <div className="flex items-center justify-center gap-2 mt-2">
              <div className="h-[2px] w-12 bg-[#8b5a2b]"></div>
              <span className="text-[#8b5a2b] text-sm font-bold">✦</span>
              <div className="h-[2px] w-12 bg-[#8b5a2b]"></div>
            </div>
          </header>

          <form className="space-y-5">
            {/* Name */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#6d4c3d] uppercase tracking-widest">Adventure's Name</label>
              <input 
                type="text" 
                className="w-full bg-[#e6ce94] border-2 border-[#8b5a2b]/30 p-2 text-[#4a3427] focus:border-[#8b5a2b] focus:outline-none transition-all"
                placeholder="Ex. Arthur Pendragon"
              />
            </div>

            {/* Gender Selection */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#6d4c3d] uppercase tracking-widest">Identity</label>
              <select className="w-full bg-[#e6ce94] border-2 border-[#8b5a2b]/30 p-2 text-[#4a3427] focus:border-[#8b5a2b] focus:outline-none cursor-pointer">
                <option>Male</option>
                <option>Female</option>
                <option>Celestial</option>
              </select>
            </div>

            {/* Birthdate & Age */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#6d4c3d] uppercase tracking-widest">Birth Date</label>
                <input type="date" className="w-full bg-[#e6ce94] border-2 border-[#8b5a2b]/30 p-2 text-[#4a3427] focus:outline-none" />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#6d4c3d] uppercase tracking-widest">Level (Age)</label>
                <input type="number" className="w-full bg-[#e6ce94] border-2 border-[#8b5a2b]/30 p-2 text-[#4a3427] focus:outline-none" placeholder="18" />
              </div>
            </div>

            {/* Submit Button */}
            <button className="w-full bg-[#8b5a2b] hover:bg-[#4a3427] text-[#f1dca7] font-bold py-4 mt-6 shadow-xl transition-all border-b-4 border-[#3d2b21] active:border-b-0 active:translate-y-1 uppercase tracking-widest">
              Join the Quest
            </button>
          </form>

          {/* Corner Decorations */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-[#8b5a2b]"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-[#8b5a2b]"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-[#8b5a2b]"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-[#8b5a2b]"></div>
        </div>
      </main>
    </div>
  );
}