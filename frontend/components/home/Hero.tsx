export default function Hero() {
  return (
    <section className="min-h-screen bg-gray-950 text-white flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <span className="inline-block px-4 py-2 rounded-full bg-red-600/20 text-red-400 font-medium mb-6">
          🚀 SSYouTube Pro V2
        </span>

        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Download Videos
          <br />
          <span className="text-red-500">Fast & Free</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-400">
          Download videos, audio, playlists and thumbnails with a modern,
          fast and secure downloader.
        </p>

        <button className="mt-10 bg-red-600 hover:bg-red-700 transition-all duration-300 px-8 py-4 rounded-xl text-lg font-semibold">
          Start Downloading
        </button>
      </div>
    </section>
  );
}