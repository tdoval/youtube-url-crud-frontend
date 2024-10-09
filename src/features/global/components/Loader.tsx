import React from "react";

interface LoaderProps {
  size?: "sm" | "md" | "lg" | "xl";
}

const Loader: React.FC<LoaderProps> = ({ size = "md" }) => {
  let loaderSize;

  switch (size) {
    case "sm":
      loaderSize = "w-4 h-4";
      break;
    case "lg":
      loaderSize = "w-8 h-8";
      break;
    case "xl":
      loaderSize = "w-12 h-12";
      break;
    case "md":
    default:
      loaderSize = "w-6 h-6";
      break;
  }

  return (
    <div
      className={`animate-spin rounded-full border-4 border-t-transparent border-gray-500 ${loaderSize}`}
    ></div>
  );
};

export default Loader;
