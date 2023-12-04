import React from "react";

interface PageHeaderProps {
  className: string;
  city: string;
  network: string;
}

function PageHeader({ className, city, network }: PageHeaderProps) {
  return (
    <div className={className}>
      <h2 className="text-xl md:text-2xl 2xl:text-3xl font-bold mb-1 capitalize">
        {city}
      </h2>
      <h2 className="text-lg md:text-xl 2xl:text-2xl font-semibold mb-4 capitalize">
        {network}
      </h2>
    </div>
  );
}

export default PageHeader;
