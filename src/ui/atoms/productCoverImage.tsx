import React from "react";

type ProductCoverImageProps = {
	src: string;
	alt: string;
};

const ProductCoverImage = ({ src, alt }: ProductCoverImageProps) => {
	return (
		<div className="mb-2 aspect-square overflow-hidden rounded-md border bg-slate-50 p-4 hover:bg-slate-100">
			<img
				width={320}
				height={320}
				className="h-full w-full object-cover object-center p-4 transition-transform duration-300 hover:scale-105"
				src={`http://localhost:1337${src}`}
				alt={alt}
			/>
		</div>
	);
};

export default ProductCoverImage;
