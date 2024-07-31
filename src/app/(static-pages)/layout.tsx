import React, { ReactNode } from "react";

const StaticLayout = ({ children }: { children: ReactNode }) => {
	return <div className="mx-auto max-w-md text-center">{children}</div>;
};

export default StaticLayout;
