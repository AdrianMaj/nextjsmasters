import { formatMoney } from "@/lib/utils";

type ProductDescriptionProps = {
	product: {
		title: string;
		category: string;
		price: number;
	};
};

export const ProductDescription = ({ product: { title, category, price } }: ProductDescriptionProps) => {
	return (
		<div className="mt-2 flex justify-between">
			<div>
				<h3 className="text-sm font-semibold text-gray-700">{title}</h3>
				<p className="text-sm text-gray-500">{category}</p>
			</div>
			<p className="text-sm font-medium text-gray-900">{formatMoney(price / 100)}</p>
		</div>
	);
};
