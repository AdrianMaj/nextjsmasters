import { getProductById } from "@/api/getProducts";
import ProductCoverImage from "@/ui/atoms/productCoverImage";
import { ProductDescription } from "@/ui/atoms/productDescription";
import SuggestedProductsList from "@/ui/components/suggestedProductsList";
import { Metadata } from "next";
import React, { Suspense } from "react";

export const generateStaticParams = async () => {
	return [{ productId: "1" }];
};

export const generateMetadata = async ({ params }: { params: { productId: string } }): Promise<Metadata> => {
	const product = await getProductById(params.productId);
	return {
		title: `${product.title} - Sklep internetowy`,
		description: `${product.title} - ${product.category}`,
	};
};

const SingleProductPage = async ({ params }: { params: { productId: string } }) => {
	const product = await getProductById(params.productId);
	return (
		<>
			<article className="max-w-xs">
				<ProductCoverImage {...product.coverImage} />
				<ProductDescription product={product} />
			</article>
			<aside>
				<Suspense fallback={"Ładowanie..."}>
					<SuggestedProductsList />
				</Suspense>
			</aside>
		</>
	);
};

export default SingleProductPage;
