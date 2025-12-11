import React from "react";
import { Helmet } from "react-helmet";

export default function SEO({
  title = "Sajid — React Developer | Portfolio",
  description = "Sajid is a ReactJS frontend developer building responsive and modern web apps. Check projects, skills, and contact info.",
  url = "https://sajidh-portfolio.vercel.app",
  image = "https://sajidh-portfolio.vercel.app/Sajidh-Profile.png",
  canonical = "https://sajidh-portfolio.vercel.app",
  jsonLd = null // pass an object if you want JSON-LD
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* canonical */}
      <link rel="canonical" href={canonical} />

      {/* JSON-LD if provided */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
