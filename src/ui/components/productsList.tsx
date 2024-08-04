import React from "react";
import { ProductsListItem } from "../molecules/productsListItem";
import { Product } from "@/types/strapiTypes";
import { getProducts } from "@/lib/getProducts";

const ProductsList = async () => {
	const products: Product[] = await getProducts();
	const formattedProducts = products.map((product) => {
		return {
			id: product.id,
			title: product.attributes.title,
			price: product.attributes.price,
			category: product.attributes.category,
			coverImage: {
				src: product.attributes.coverImage.data[0].attributes.url,
				alt: product.attributes.coverImage.data[0].attributes.alternativeText,
			},
		};
	});
	return (
		<ul className="lg: my-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{formattedProducts.map((product) => (
				<ProductsListItem key={product.id} product={product} />
			))}
		</ul>
	);
};

export default ProductsList;
