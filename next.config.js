/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "covers.openlibrary.org" },
      { protocol: "https", hostname: "m.media-amazon.com" },
      { protocol: "https", hostname: "images-na.ssl-images-amazon.com" },
      { protocol: "https", hostname: "via.placeholder.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
    ],
  },

  // Trust-dimension fixes surfaced by CheckIt.
  // - HSTS tells browsers to never speak HTTP to this origin again
  //   (a year, including preload-eligible subdomains).
  // - nosniff blocks MIME-sniffing attacks.
  // - SAMEORIGIN denies third-party framing (clickjacking protection).
  // - Referrer-Policy keeps the full URL out of cross-site referers.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { 
            key: "Permissions-Policy", 
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" 
          },
        ],
      },
    ];
  },

  // Ensure content files are bundled for ISR Serverless functions
  experimental: {
    outputFileTracingIncludes: {
      '/sitemap.xml': ['./content/ai-decoded/**/*'],
      '/ai-decoded': ['./content/ai-decoded/**/*'],
      '/ai-decoded/[slug]': ['./content/ai-decoded/**/*'],
    },
  },
};

module.exports = nextConfig;
