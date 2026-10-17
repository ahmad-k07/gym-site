import type { NextConfig } from "next";

// Standard security headers sent with every page.
const securityHeaders = [
  // Stop other sites embedding this one in a frame (clickjacking).
  { key: "X-Frame-Options", value: "DENY" },
  // Stop browsers guessing file types (e.g. treating an image as a script).
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Only send the site's address, not the full page URL, when following a link elsewhere.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // The site never needs the camera, microphone or location.
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
