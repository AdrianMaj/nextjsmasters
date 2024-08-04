import { Product } from "@/types/strapiTypes";

export const getProducts = async () => {
	try {
		const res = await fetch("http://localhost:1337/api/products?populate=*", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `bearer ${process.env.STRAPI_KEY}`,
			},
		});

		const data: {
			data: Product[];
		} = await res.json();
		// console.log(data.data[0].attributes.coverImage.data);
		if (!data) {
			throw new Error("No products found!");
		}
		return data.data;
	} catch (error) {
		throw new Error("Error fetching products");
	}
};
