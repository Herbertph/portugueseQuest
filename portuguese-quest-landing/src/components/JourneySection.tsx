const JourneySection = () => {
  return (
    <section className="py-32 px-6 md:px-12 max-w-6xl mx-auto">
      
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

      {/* Timeline */}
      <div className="space-y-16">

        <div className="flex gap-6">
          <div className="text-emerald-500 font-semibold">Day 1</div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Arrival at the airport
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Immigration, basic questions, directions.
              You learn how to understand and respond under pressure.
            </p>
          </div>
        </div>

        <div className="flex gap-6">
          <div className="text-emerald-500 font-semibold">Day 5</div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Checking into your hotel
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Reservations, documents, small talk.
              You start feeling comfortable speaking.
            </p>
          </div>
        </div>

        <div className="flex gap-6">
          <div className="text-emerald-500 font-semibold">Day 12</div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Ordering food and drinks
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Menus, preferences, questions.
              You stop translating in your head.
            </p>
          </div>
        </div>

        <div className="flex gap-6">
          <div className="text-emerald-500 font-semibold">Day 20</div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              Talking to locals
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Casual conversations, slang, confidence.
              Portuguese starts flowing naturally.
            </p>
          </div>
        </div>

        <div className="flex gap-6">
          <div className="text-emerald-500 font-semibold">Day 30</div>
          <div>
            <h3 className="text-xl font-semibold mb-2">
              You’re not a tourist anymore
            </h3>
            <p className="text-gray-600 leading-relaxed">
              You navigate situations with confidence.
              You don’t feel lost — you feel present.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default JourneySection
