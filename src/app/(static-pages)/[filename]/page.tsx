export default async function StaticPage({ params }: { params: { filename: string } }) {
	const { Page } = await import(`./${params.filename}.mdx`);
	return <Page />;
}
