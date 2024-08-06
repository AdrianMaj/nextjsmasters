"use client";
import Link from "next/link";
import React, { ReactNode } from "react";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const ActiveLink = ({ href, children }: { href: string; children: ReactNode }) => {
	const pathname = usePathname();
	const isActive = pathname === href;
	return (
		<Link href={href} className={clsx(`text-blue-400 hover:text-blue-600`, isActive && `underline`)}>
			{children}
		</Link>
	);
};

export default ActiveLink;
