import React from "react";
import { ProductImageCover } from "../atoms/ProductImageCover";
import { ProductDescriptionItem } from "../atoms/ProductDescriptionItem";
import { type Product } from "@/types/productType";

export const ProductsListItem = ({ product }: { product: Product }) => {
	return (
		<li className="flex flex-col">
			<ProductImageCover product={product} />
			<ProductDescriptionItem product={product} />
		</li>
	);
};
