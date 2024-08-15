import { ReactNode } from "react";

export const generateStaticParams = async () => {
	return [{ category: "t-shirts" }, { category: "boots" }];
};

export default function CategoryProductPage({ children }: { children: React.ReactNode }) {
	return children;
}
