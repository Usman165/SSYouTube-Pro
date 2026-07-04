import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function DownloadBox() {
  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-gray-800 rounded-2xl p-8 shadow-lg">
          <Input placeholder="Paste YouTube URL here..." />

          <Button className="mt-6 w-full">
            Download
          </Button>
        </div>
      </div>
    </section>
  );
}