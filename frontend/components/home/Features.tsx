const features = [
  {
    title: "Fast Downloads",
    description:
      "Download videos in seconds with our optimized processing engine.",
    icon: "⚡",
  },
  {
    title: "HD Quality",
    description:
      "Save videos in high quality without unnecessary compression.",
    icon: "🎥",
  },
  {
    title: "Safe & Secure",
    description:
      "No registration, no tracking, and no hidden software downloads.",
    icon: "🔒",
  },
];

export default function Features() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Why Choose SSYouTube Pro?
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Everything you need for a fast, reliable, and secure video
            downloading experience.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border p-8 shadow-sm transition hover:shadow-lg"
            >
              <div className="text-4xl">{feature.icon}</div>

              <h3 className="mt-5 text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}