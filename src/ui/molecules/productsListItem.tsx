import ProductCoverImage from "../atoms/productCoverImage";
import { ProductDescription } from "../atoms/productDescription";

type ProductsListItemProps = {
	product: {
		title: string;
		category: string;
		price: number;
		coverImage: {
			src: string;
			alt: string;
		};
	};
};

export const ProductsListItem = ({ product }: ProductsListItemProps) => {
	return (
		<li className="flex flex-col">
			<article>
				<ProductCoverImage {...product.coverImage} />
				<ProductDescription product={product} />
			</article>
		</li>
	);
};
