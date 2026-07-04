export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6">
      <div className="text-center max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          SSYouTube Pro
        </h1>

        <p className="text-gray-400 text-lg md:text-xl mb-8">
          A modern, fast and free video downloader built with Next.js &
          TypeScript.
        </p>

        <button className="bg-red-600 hover:bg-red-700 transition px-8 py-3 rounded-xl text-lg font-semibold">
          Start Downloading
        </button>
      </div>
    </main>
  );
}