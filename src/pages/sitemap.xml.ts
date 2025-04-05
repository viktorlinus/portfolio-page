import { GetServerSideProps } from 'next';

const SITE_URL = 'https://eken-consulting.com';

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${SITE_URL}/sv</loc>
    <xhtml:link rel="alternate" hreflang="sv" href="${SITE_URL}/sv"/>
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}/en"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/sv"/>
    <lastmod>2025-03-30</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${SITE_URL}/en</loc>
    <xhtml:link rel="alternate" hreflang="sv" href="${SITE_URL}/sv"/>
    <xhtml:link rel="alternate" hreflang="en" href="${SITE_URL}/en"/>
    <lastmod>2025-03-30</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>`;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  // Set the appropriate headers
  res.setHeader('Content-Type', 'text/xml');
  // generate the XML sitemap
  const sitemap = generateSiteMap();
  // send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

// Default export to prevent next.js errors
export default function SiteMap() {
  // getServerSideProps will handle everything
  return null;
}
