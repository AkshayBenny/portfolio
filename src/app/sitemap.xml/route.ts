const EXTERNAL_DATA_URL = 'https://akshaybenny.com'

function generateSiteMap(pages: string[]): string {
	return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>${EXTERNAL_DATA_URL}</loc>
    </url>
    ${pages
		.map(
			(page) => `
          <url>
            <loc>${EXTERNAL_DATA_URL}/${page}</loc>
          </url>
        `
		)
		.join('')}
  </urlset>`
}

export async function GET(_request: Request): Promise<Response> {
	// -------------------- MAKE THIS DYNAMIC LATER --------------------
	const pages = ['about']
	const sitemap = generateSiteMap(pages)

	return new Response(sitemap, {
		status: 200,
		headers: { 'Content-Type': 'text/xml' },
	})
}
