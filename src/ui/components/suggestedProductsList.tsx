import React from "react";
import ProductsList from "./productsList";
import { getProducts } from "@/api/getProducts";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const SuggestedProductsList = async () => {
	const products = await getProducts();
	await sleep(5000);
	return <ProductsList products={products} />;
};

export default SuggestedProductsList;
