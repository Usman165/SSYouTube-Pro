import { howItWorksSteps } from "@/constants/howItWorks";

export default function HowItWorks() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <div className="text-center">
          <span className="rounded-full border border-red-500/40 bg-red-500/10 px-4 py-1 text-sm font-medium text-red-500">
            Simple Process
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white">
            Download in 3 Easy Steps
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
            No registration. No software installation. Just paste your YouTube
            link and download your favorite videos instantly.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {howItWorksSteps.map((step, index) => (
            <div key={step.id} className="relative">
              {/* Connection Line */}
              {index !== howItWorksSteps.length - 1 && (
                <div className="absolute left-full top-10 hidden h-[2px] w-8 bg-red-500/40 lg:block" />
              )}

              <div className="group rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-red-500 hover:shadow-[0_0_40px_rgba(239,68,68,0.15)]">
                {/* Number */}
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-2xl font-bold text-white shadow-lg shadow-red-600/30">
                  {step.id}
                </div>

                {/* Title */}
                <h3 className="mt-8 text-2xl font-semibold text-white">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-4 leading-7 text-zinc-400">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}