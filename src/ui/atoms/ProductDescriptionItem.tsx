import { formatCurrency } from "@/utils/formatCurrency";

export const ProductDescriptionItem = ({
	product,
}: {
	product: {
		productName: string;
		productPrice: number;
		productCategory: string;
	};
}) => {
	const { productCategory, productName, productPrice } = product;
	Intl.NumberFormat;
	return (
		<>
			<div className="flex justify-between">
				<h3 className="font-semibold">{productName}</h3>
				<p className="text-right font-semibold">{formatCurrency(productPrice)}</p>
			</div>
			<div className="text-gray-600">{productCategory}</div>
		</>
	);
};
