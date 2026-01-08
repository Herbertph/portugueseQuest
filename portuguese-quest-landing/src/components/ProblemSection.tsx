const ProblemSection = () => {
  return (
    <section className="py-28 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        
        {/* Left column - headline */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Learning Portuguese shouldn’t feel this hard.
          </h2>
        </div>

        {/* Right column - text */}
        <div className="text-lg md:text-xl text-gray-600 leading-relaxed space-y-6">
          <p>
            Most language apps teach isolated words and grammar rules.
            But real life doesn’t wait.
          </p>

          <p>
            You freeze at the airport. You panic ordering food.
            You understand Portuguese — but can’t respond fast enough.
          </p>

          <p className="font-medium text-gray-800">
            That’s not lack of effort. That’s lack of context.
          </p>
        </div>

      </div>
      <div className="mt-24 flex justify-center">
  <div className="w-24 h-px bg-gray-200"></div>
</div>
    </section>
  )
}

export default ProblemSection