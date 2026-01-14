export default function HeroSection() {
  return (
    <section className="bg-gray-100 pt-20 px-6 flex justify-center">
      <div
        className="
         relative
    transition-transform
    duration-300
    ease-out
    hover:scale-[1.02]
    will-change-transform
          w-full max-w-6xl
          bg-white
          rounded-t-2xl
          shadow-[0_20px_40px_rgba(0,0,0,0.08)]
          overflow-hidden
        "
      >
        {/* TOP HERO */}
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[460px]">
          
          {/* LEFT TEXT */}
          <div className="flex flex-col justify-center px-16 py-16">
            <h1 className="text-5xl font-semibold leading-tight mb-6">
              Learn Portuguese by living the language.
            </h1>
            <p className="text-lg text-gray-600 max-w-xl">
              A 30-day immersive journey through real-life situations.
              No textbooks. No boring drills.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-full">
            <img
              src="/BrazilianQuest.png"
              alt="Brazilian Quest preview"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* EMAIL SECTION — PRETA */}
        <div className="bg-black px-16 py-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* EMAIL TEXT */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Unlock an Exclusive Offer!
            </h3>
            <p className="text-gray-300">
              We're launching soon. Sign up now to get an exclusive early-bird discount.
            </p>
          </div>

          {/* EMAIL FORM */}
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Email address"
              required
              className="
                w-full
                px-4 py-3
                rounded-lg
                border border-gray-300
                focus:outline-none
                focus:ring-2
                focus:ring-green-600
                text-white
              "
            />
            <button
              type="submit"
              className="
                w-full
                bg-green-700
                hover:bg-green-800
                text-white
                font-semibold
                py-3
                rounded-lg
                transition
              "
            >
              Get early access
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
