import { getProducts } from "@/api/getProducts";
import ProductCounter from "@/ui/atoms/productCounter";
import TestServer from "@/ui/atoms/testServer";
import ProductsList from "@/ui/components/productsList";
import Link from "next/link";
import { Product } from "@/types/strapiTypes";

export default async function ProductsPage() {
	const products: Product[] = await getProducts();
	return (
		<>
			<Link href="/polityka-prywatnosci">Przejdź do polityki</Link>
			<ProductsList products={products} />
			<ProductCounter>
				<TestServer />
			</ProductCounter>
		</>
	);
}
