import ProductCounter from "@/ui/atoms/productCounter";
import TestServer from "@/ui/atoms/testServer";
import ProductsList from "@/ui/components/productsList";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<Link href="/polityka-prywatnosci">Przejdź do polityki</Link>
			<ProductsList />
			<ProductCounter>
				<TestServer />
			</ProductCounter>
		</>
	);
}
