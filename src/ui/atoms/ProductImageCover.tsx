import React from "react";

export const ProductImageCover = ({
	product,
}: {
	product: { productImage: string; productName: string };
}) => {
	const { productImage, productName } = product;
	return (
		<div className="mb-2 bg-slate-50 p-4">
			<img
				className="aspect-square transition-transform hover:scale-110"
				src={productImage}
				width={320}
				height={320}
				alt={productName}
			/>
		</div>
	);
};
