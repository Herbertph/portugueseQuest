const JourneySection = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            A 30-day journey through Brazil.
          </h2>

          <p className="text-lg md:text-xl text-gray-600">
            Each day puts you in a new real-life situation.
            You don’t jump between random lessons — you move forward.
          </p>
        </div>

        {/* Journey image */}
        <div className="flex justify-center">
          <img
            src="/journey.png"
            alt="30-day Portuguese learning journey through Brazil"
            className="
              w-full
              max-w-3xl
              rounded-2xl
              shadow-xl
            "
          />
        </div>

      </div>
    </section>
  )
}

export default JourneySection
