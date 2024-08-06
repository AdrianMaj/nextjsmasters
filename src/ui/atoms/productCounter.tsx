"use client";

import React, { ReactNode, useState } from "react";

const ProductCounter = ({ children }: { children: ReactNode }) => {
	const [counter, setCounter] = useState(0);
	return (
		<div>
			<button className="border border-slate-200 px-4" onClick={() => setCounter((counter) => counter - 1)}>
				-
			</button>
			<input min={0} readOnly type="text" value={counter} className="border border-slate-200 text-center" />
			<button className="border border-slate-200 px-4" onClick={() => setCounter((counter) => counter + 1)}>
				+
			</button>
			{counter % 2 === 0 && children}
		</div>
	);
};

export default ProductCounter;
