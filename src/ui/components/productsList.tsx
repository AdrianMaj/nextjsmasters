import React from "react";
import { ProductsListItem } from "../molecules/productsListItem";
import { Product } from "@/types/strapiTypes";

const ProductsList = ({ products }: { products: Product[] }) => {
	return (
		<ul className="lg: my-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{products.map((product) => (
				<ProductsListItem key={product.id} product={product} />
			))}
		</ul>
	);
};

export default ProductsList;
