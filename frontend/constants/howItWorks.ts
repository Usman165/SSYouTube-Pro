export interface HowItWorksStep {
  id: number;
  title: string;
  description: string;
}

export const howItWorksSteps: HowItWorksStep[] = [
  {
    id: 1,
    title: "Copy the Video URL",
    description:
      "Copy the link of the YouTube video you want to download.",
  },
  {
    id: 2,
    title: "Paste the Link",
    description:
      "Paste the video URL into the download box on the homepage.",
  },
  {
    id: 3,
    title: "Download Your Video",
    description:
      "Choose your preferred format and download the video instantly.",
  },
];