export type ProductResponse = {
	id: number;
	attributes: {
		title: string;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
		price: number;
		category: string;
		coverImage: {
			data: [
				{
					attributes: {
						url: string;
						alternativeText: string;
					};
				},
			];
		};
	};
};
export type Product = {
	id: string;
	title: string;
	price: number;
	category: string;
	coverImage: {
		src: string;
		alt: string;
	};
};
