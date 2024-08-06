import { ProductResponse, Product } from "@/types/strapiTypes";

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
			data: ProductResponse[];
		} = await res.json();
		// console.log(data.data[0].attributes.coverImage.data);
		if (!data) {
			throw new Error("No products found!");
		}

		const formattedProducts: Product[] = data.data.map((product) => {
			return {
				id: product.id.toString(),
				title: product.attributes.title,
				price: product.attributes.price,
				category: product.attributes.category,
				coverImage: {
					src: product.attributes.coverImage.data[0].attributes.url,
					alt: product.attributes.coverImage.data[0].attributes.alternativeText,
				},
			};
		});

		return formattedProducts;
	} catch (error) {
		throw new Error("Error fetching products");
	}
};

export const getProductById = async (id: Product["id"]) => {
	try {
		const res = await fetch(`http://localhost:1337/api/products/${id}?populate=*`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `bearer ${process.env.STRAPI_KEY}`,
			},
		});

		const data: {
			data: ProductResponse;
		} = await res.json();

		const product = data.data;


		const formattedProduct: Product = {
			id: product.id.toString(),
			title: product.attributes.title,
			price: product.attributes.price,
			category: product.attributes.category,
			coverImage: {
				src: product.attributes.coverImage.data[0].attributes.url,
				alt: product.attributes.coverImage.data[0].attributes.alternativeText,
			},
		};
		// console.log(data.data[0].attributes.coverImage.data);
		if (!data) {
			throw new Error("No product found!");
		}
		return formattedProduct;
	} catch (error) {
		throw new Error(`Error fetching product ${error}`);
	}
};
