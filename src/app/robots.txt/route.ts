export async function GET(_request: Request): Promise<Response> {
	const robotsTxt = `User-agent: *
  Disallow: /private/
  
  Sitemap: https://akshaybenny.com/sitemap.xml`
	return new Response(robotsTxt, {
		status: 200,
		headers: { 'Content-Type': 'text/plain' },
	})
}
