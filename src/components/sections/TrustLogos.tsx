export default function TrustLogos() {
  return (
    <div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.9s_both] border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
        <p className="text-center text-xs text-neutral-600 font-bold tracking-widest mb-10 uppercase">
          Built for serious lifters, coaches &amp; biohackers
        </p>
        <div className="flex flex-wrap gap-8 md:gap-16 hover:grayscale-0 hover:opacity-100 transition-all duration-500 opacity-40 grayscale gap-x-12 gap-y-8 items-center justify-center">
          <iconify-icon icon="simple-icons:stripe" height="32" className="text-white"></iconify-icon>
          <iconify-icon icon="simple-icons:vercel" height="26" className="text-white"></iconify-icon>
          <iconify-icon icon="simple-icons:linear" height="26" className="text-white"></iconify-icon>
          <iconify-icon icon="simple-icons:airbnb" height="28" className="text-white"></iconify-icon>
          <iconify-icon icon="simple-icons:shopify" height="26" className="text-white"></iconify-icon>
        </div>
      </div>
    </div>
  );
}
