import Link from "next/link";
import ProductCoverImage from "../atoms/productCoverImage";
import { ProductDescription } from "../atoms/productDescription";
import { Product } from "@/types/strapiTypes";

export const ProductsListItem = ({ product }: { product: Product }) => {
	return (
		<li className="flex flex-col">
			<Link href={`/product/${product.id}`}>
				<article>
					<ProductCoverImage {...product.coverImage} />
					<ProductDescription product={product} />
				</article>
			</Link>
		</li>
	);
};
