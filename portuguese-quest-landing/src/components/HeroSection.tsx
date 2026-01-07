const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-right"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop')",
              backgroundPosition: "70% center",
        }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl px-6 md:px-12 text-white">
        <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-6">
          Learn Brazilian Portuguese  
          <br />
          by traveling — not studying.
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl">
          A 30-day, story-driven journey through real-life situations in Brazil.
          One mission per day. Built for beginners.
        </p>

        <form className="flex flex-col sm:flex-row gap-4 max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <button
  type="submit"
  className="px-7 py-4 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-semibold text-lg transition shadow-lg shadow-emerald-500/20"
>
  Join early access
</button>
        </form>

        <p className="text-sm text-gray-400 mt-4">
          Early supporters get exclusive access and rewards.
        </p>
      </div>
    </section>
  )
}

export default HeroSection
