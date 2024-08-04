import React from "react";

const SingleProductPage = async ({
	params,
	searchParams,
}: {
	params: { productId: string };
	searchParams: { [key: string]: string | string[] };
}) => {
	const refferal = searchParams.refferal.toString();
	return (
		<div>
			<h1>SingleProductPage</h1>
			<p>{params.productId}</p>
			<p>{refferal}</p>
		</div>
	);
};

export default SingleProductPage;
