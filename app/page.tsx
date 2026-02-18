"use client"
import React, { useState } from 'react';

export default function FantasyJourney() {
  const [step, setStep] = useState(1);
  const [heroData, setHeroData] = useState({ name: '', gender: 'Male', character: '', weapon: '' });

  const nextStep = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  // สไตล์สำหรับ Animation การเปลี่ยนหน้าเบื้องต้น
  const fadeIn = "animate-[fadeIn_0.5s_ease-in-out]";

  return (
    <div className="relative min-h-screen flex items-center justify-center font-serif bg-[#111] text-[#4a3427] p-4 overflow-hidden">

      {/* Background - ใช้รูปจาก Unsplash ที่มีความเสถียรสูง */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-40 transition-all duration-1000"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=2000')` }}
      />

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* --- STEP 1: REGISTER --- */}
      {step === 1 && (
        <main className={`relative z-10 w-full max-w-md p-1 bg-[#f1dca7] rounded shadow-[0_0_50px_rgba(0,0,0,0.8)] border-[6px] border-[#8b5a2b] ${fadeIn}`}>
          <div className="border-2 border-[#b8860b] p-8">
            <h2 className="text-3xl font-black text-center mb-6 uppercase tracking-widest">ลงทะเบียนผู้กล้า</h2>
            <form onSubmit={nextStep} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase">ชื่อของคุณ</label>
                <input
                  type="text"
                  value={heroData.name}
                  onChange={(e) => setHeroData({ ...heroData, name: e.target.value })}
                  className="w-full bg-[#e6ce94] border-2 border-[#8b5a2b]/40 p-3 outline-none focus:border-[#8b5a2b]"
                  placeholder="นามเรียกขาน..."
                  required
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase">เพศสภาพ</label>
                <select
                  value={heroData.gender}
                  onChange={(e) => setHeroData({ ...heroData, gender: e.target.value })}
                  className="w-full bg-[#e6ce94] border-2 border-[#8b5a2b]/40 p-3 outline-none"
                >
                  <option>ชาย</option>
                  <option>หญิง</option>
                  <option>ไม่ระบุ</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-[#8b5a2b] text-[#f1dca7] font-bold py-4 hover:bg-[#4a3427] transition-all border-b-4 border-[#3d2b21] mt-4 uppercase">
                เลือกตัวแทนของคุณ
              </button>
            </form>
          </div>
        </main>
      )}

      {/* --- STEP 2: CHOOSE CHARACTER --- */}
      {step === 2 && (
        <main className={`relative z-10 w-full max-w-5xl p-1 bg-[#f1dca7] rounded shadow-2xl border-[6px] border-[#8b5a2b] ${fadeIn}`}>
          <div className="border-2 border-[#b8860b] p-6">
            <button onClick={prevStep} className="text-[#8b5a2b] font-bold hover:text-[#4a3427] mb-4 flex items-center gap-1 transition-colors" aria-label="ย้อนกลับไปหน้าลงทะเบียน">
              ⇠ ย้อนกลับ
            </button>
            <button onClick={prevStep} className="text-[#8b5a2b] font-bold hover:text-[#4a3427] mb-4 flex items-center gap-1 transition-colors">
            </button>
            <h2 className="text-3xl font-black text-center mb-8 uppercase italic">เลือกตัวแทนของคุณ</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { id: 'warrior', name: 'นักรบ', img: '/images/warrior.jpg', desc: 'พลังอึดและเกราะหนัก' },
                { id: 'mage', name: 'จอมเวทย์', img: '/images/mage.jpg', desc: 'พลังมนตราทำลายล้าง' },
                { id: 'rogue', name: 'นักฆ่า', img: '/images/rogue.jpg', desc: 'พรางตัวและว่องไว' }
              ].map((char) => (
                <div
                  key={char.id}
                  onClick={() => { setHeroData({ ...heroData, character: char.name }); nextStep(); }}
                  className="cursor-pointer group relative bg-[#4a3427] border-4 border-[#8b5a2b] hover:border-white transition-all overflow-hidden"
                >
                  <div className="h-64 overflow-hidden">
                    <img src={char.img} alt={char.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-70 group-hover:opacity-100" />
                  </div>
                  <div className="p-3 text-[#f1dca7] text-center border-t-4 border-[#8b5a2b]">
                    <h3 className="font-bold text-xl">{char.name}</h3>
                    <p className="text-[10px] italic opacity-80">{char.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      )}

      {/* --- STEP 3: SELECT WEAPON --- */}
      {step === 3 && (
        <main className={`relative z-10 w-full max-w-2xl p-1 bg-[#f1dca7] rounded shadow-2xl border-[6px] border-[#8b5a2b] ${fadeIn}`}>
          <div className="border-2 border-[#b8860b] p-8">
            <button onClick={prevStep} className="text-[#8b5a2b] font-bold hover:text-[#4a3427] mb-4 flex items-center gap-1">
              ⇠ เปลี่ยนตัวละคร
            </button>
            <h2 className="text-3xl font-black text-center mb-2 uppercase">เลือกศาสตรา</h2>
            <p className="text-center text-[#6d4c3d] italic mb-8">"{heroData.name} ท่านจะใช้สิ่งใดคู่กาย?"</p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { name: 'ดาบเหล็กกล้า', icon: '⚔️', img: '/images/sword.jpg' },
                { name: 'คทาจันทรา', icon: '🪄', img: '/images/staff.jpg' },
                { name: 'ธนูพฤกษา', icon: '🏹', img: 'images/dagger.jpg' }
              ].map((wpn) => (
                <div
                  key={wpn.name}
                  onClick={() => alert(`ตำนานเริ่มต้น! \nคุณ: ${heroData.name}\nอาชีพ: ${heroData.character}\nอาวุธ: ${wpn.name}`)}
                  className="bg-[#e6ce94] border-2 border-[#8b5a2b] p-2 hover:bg-white cursor-pointer transition-all text-center group"
                >
                  <div className="aspect-square mb-2 overflow-hidden bg-black">
                    <img src={wpn.img} alt={wpn.name} className="w-full h-full object-cover group-hover:rotate-6 transition-transform" />
                  </div>
                  <span className="font-bold text-[10px] uppercase tracking-tighter leading-none block">{wpn.name}</span>
                </div>
              ))}
            </div>
          </div>
        </main>
      )}
    </div>
  );
}