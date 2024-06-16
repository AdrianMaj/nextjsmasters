import { type Product } from "@/types/productType";
import { ProductsList } from "@/ui/organisms/ProductsList";

const productData: Product[] = [
	{
		id: 1,
		productName: "T-Shirt",
		productPrice: 19.99,
		productCategory: "Clothing",
		productImage: "/t-shirt.png",
	},
	{
		id: 2,
		productName: "Hoodie",
		productPrice: 29.99,
		productCategory: "Clothing",
		productImage: "/hoodie.png",
	},
	{
		id: 3,
		productName: "Trousers",
		productPrice: 39.99,
		productCategory: "Clothing",
		productImage: "/trousers.png",
	},
	{
		id: 4,
		productName: "Shoes",
		productPrice: 99.99,
		productCategory: "Shoes",
		productImage: "/shoes-product-image.png",
	},
];

export default function Home() {
	return <ProductsList productsList={productData} />;
}
