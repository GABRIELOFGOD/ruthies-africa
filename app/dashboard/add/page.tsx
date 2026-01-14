"use client";

import { IProduct } from "@/models/product";
import { useState } from "react";

// interface AddProductType {
//   name: string;
//   description?: string;
//   prices?: {
//     NGN?: string;
//     USD?: string;
//     GBP?: string;
//   };
//   images?: string[];
//   category?: string;
//   stock?: number;

// }

const AddProduct = () => {
  const [product, setProduct] = useState<IProduct>({
    name: "",
    description: "",
  });
  return (
    <div>
      <div className="flex flex-col gap-2 p-2 justify-between"></div>
      <div className="flex gap-5"></div>
    </div>
  )
}
export default AddProduct;