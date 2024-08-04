export type Product = {
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
