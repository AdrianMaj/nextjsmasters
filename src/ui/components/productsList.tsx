import React from "react";
import { ProductsListItem } from "../molecules/productsListItem";

const products = [
	{
		id: 1,
		title: "Laptop",
		price: 1000,
		category: "Elektronika",
		coverImage: {
			src: "/product-1.jpg",
			alt: "Product 1",
		},
	},
	{
		id: 2,
		title: "Kubek",
		price: 2154,
		category: "Wyposażenie",
		coverImage: {
			src: "/product-2.jpg",
			alt: "Product 2",
		},
	},
	{
		id: 3,
		title: "Książka",
		price: 1600,
		category: "Literatura",
		coverImage: {
			src: "/product-3.jpg",
			alt: "Product 3",
		},
	},
	{
		id: 4,
		title: "Bluza",
		price: 1005,
		category: "Ubrania",
		coverImage: {
			src: "/product-4.jpg",
			alt: "Product 4",
		},
	},
];

const ProductsList = () => {
	return (
		<ul className="lg: my-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{products.map((product) => (
				<ProductsListItem key={product.id} product={product} />
			))}
		</ul>
	);
};

export default ProductsList;
