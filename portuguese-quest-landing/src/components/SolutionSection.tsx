export default function SolutionSection() {
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
          bg-gray-100
          rounded-b-2xl
          shadow-[0_20px_40px_rgba(0,0,0,0.06)]
          overflow-hidden
          -mt-0
        "
      >
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[460px]">
          
          {/* LEFT IMAGE */}
          <div className="relative w-full h-full">
            <img
              src="/BrazilianQuest.png"
              alt="Brazilian Quest immersive learning"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* RIGHT TEXT */}
          <div className="flex flex-col justify-center px-16 py-16 bg-white">
            <h2 className="text-4xl font-semibold leading-tight mb-6">
              A different approach.
            </h2>

            <p className="text-lg text-gray-600 max-w-xl">
              Brazilian Quest doesn’t start with rules or memorization.
            </p>

            <p className="text-lg text-gray-600 max-w-xl mt-4">
              It starts with <strong>context</strong>. Real situations.
              Real decisions. Real language.
            </p>

            <p className="text-lg text-gray-600 max-w-xl mt-4">
              You don’t learn Portuguese first and use it later.
              You <strong>use it from day one</strong> — and learn naturally along the way.
            </p>

            <p className="text-lg text-gray-600 max-w-xl mt-4">
              Just like you did with your first language.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
