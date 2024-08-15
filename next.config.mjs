import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
	pageExtensions: ["ts", "tsx", "mdx"],
	experimental: {
		scrollRestoration: true,
		mdxRs: true,
	},
};

const withMDX = createMDX();

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
