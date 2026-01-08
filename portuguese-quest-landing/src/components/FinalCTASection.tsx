const FinalCTASection = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-black text-white">
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Ready to experience Portuguese like a real trip?
        </h2>

        <p className="text-lg md:text-xl text-gray-300 mb-12">
          Portuguese Quest is launching soon.
          <br />
          Join the early access list and be part of Season 1.
        </p>

        <form
          className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="Your email address"
            className="px-4 py-4 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />

          <button
            type="submit"
            className="px-7 py-4 bg-emerald-500 hover:bg-emerald-600 rounded-md font-semibold text-lg transition shadow-lg shadow-emerald-500/20"
          >
            Join early access
          </button>
        </form>

        <p className="text-sm text-gray-400 mt-6">
          Early supporters get exclusive access and rewards.
        </p>

      </div>
    </section>
  )
}

export default FinalCTASection
