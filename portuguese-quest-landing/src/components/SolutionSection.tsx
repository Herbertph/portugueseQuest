const SolutionSection = () => {
  return (
    <section className="py-28 px-6 md:px-12 bg-neutral-50">
      <div className="max-w-6xl mx-auto">

        {/* Headline */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            What if learning Portuguese felt like a real trip?
          </h2>

          <p className="text-lg md:text-xl text-gray-600">
            Instead of lessons, you experience situations.
            Instead of exercises, you complete missions.
            <br />
            You don’t study Portuguese — you live it.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-12">

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Daily missions
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Every day, you unlock a new real-life scenario:
              arriving at the airport, checking into a hotel,
              ordering food, talking to locals.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Real context
            </h3>
            <p className="text-gray-600 leading-relaxed">
              You learn words and phrases exactly where they’re used.
              With audio, choices, and consequences — just like real life.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">
              Progress that makes sense
            </h3>
            <p className="text-gray-600 leading-relaxed">
              You don’t memorize lists.
              You build confidence by surviving situations.
              One day, one mission, one step forward.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default SolutionSection
