import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/vendors", destination: "/showcase", permanent: true },
      // Events live on their own site (Roger 10/30).
      { source: "/private-events", destination: "https://events.immersivestudiocda.com", permanent: false },
      // The founding and studio-member pages held the only prices on the site; membership is one page now.
      { source: "/founding", destination: "/membership", permanent: true },
      { source: "/studio-member", destination: "/membership", permanent: true },
    ];
  },
  turbopack: {
    rules: {
      "*.mov": {
        loaders: ["next-video/webpack/video-raw-loader.js"],
        as: "*.json",
      },
    },
  },
};

export default withNextVideo(nextConfig);