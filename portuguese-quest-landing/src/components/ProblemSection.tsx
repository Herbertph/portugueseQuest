export default function ProblemSection() {
  return (
    <section className="bg-gray-100 px-6 flex justify-center pt-0">
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
          shadow-[0_20px_40px_rgba(0,0,0,0.06)]
          overflow-hidden
          -mt-0
        "
      >
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[460px]">
          
          {/* LEFT TEXT */}
          <div className="flex flex-col justify-center px-16 py-16">
            <h2 className="text-4xl font-semibold leading-tight mb-6">
              Why is it so hard to learn a new language?
            </h2>

            <p className="text-lg text-gray-600 max-w-xl">
              You study grammar.  
              You memorize words.  
              You practice exercises.
            </p>

            <p className="text-lg text-gray-600 max-w-xl mt-4">
              And still — when real life happens — you freeze.
            </p>

            <p className="text-lg text-gray-600 max-w-xl mt-4">
              That’s because most methods teach <strong>about</strong> the language,
              not how to live inside it.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full h-full">
            <img
              src="/BrazilianQuest.png"
              alt="Language learning problem illustration"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
