import React from "react";

const BlogPage = ({ params: { date, slug } }: { params: { date: string; slug: string } }) => {
	return (
		<div>
			<p>BlogPage</p>
			<p>
				Blog: {date}/{slug}
			</p>
		</div>
	);
};

export default BlogPage;
