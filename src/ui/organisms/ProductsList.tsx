import React from "react";
import { ProductsListItem } from "../molecules/ProductsListItem";
import { type Product } from "@/types/productType";

export const ProductsList = ({ productsList }: { productsList: Product[] }) => {
	return (
		<section className="bg-slate-300 p-10">
			<ul
				data-testid="products-list"
				className="flex h-dvh flex-wrap items-center justify-center gap-8"
			>
				{productsList.map((product) => (
					<ProductsListItem key={product.id} product={product} />
				))}
			</ul>
		</section>
	);
};
