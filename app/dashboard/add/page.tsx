"use client";

import { Button } from "@/components/ui/button";
import { IProduct } from "@/models/product";
import { CheckIcon, PencilIcon } from "lucide-react";
import { useState } from "react";

// interface AddProductType extends IProduct {
// name: string;
// description?: string;
// prices?: {
//   NGN?: string;
//   USD?: string;
//   GBP?: string;
// };
// images?: File[] | null;
// category?: string;
// stock?: number;

// }

const AddProduct = () => {
  const [product, setProduct] = useState<Partial<IProduct>>({
    name: "",
    description: "",
    images: null,
    price: { NGN: "0.00", USD: "0.00", GBP: "0.00" },
    category: "",
    stock: null,
    brand: "",
    colors: [],
    sizes: [],
    gender: "unisex",
    publisheshed: false,
  });
  return (
    <div className="p-2 md:p-4">
      <div className="flex gap-2 justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-lg font-bold">Add Product</p>
          <p className="text-xs font-medium italic text-gray-500">
            Please fill in the details below to add a new product.
          </p>
        </div>
        <div className="flex gap-5 my-auto">
          <Button variant="outline" className="flex">
            <PencilIcon />
            <span className="ml-2">Save Draft</span>
          </Button>
          <Button className="flex">
            <CheckIcon />
            <span className="ml-2">Publish Product</span>
          </Button>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-[2] w-full p-2 rounded-md bg-gray-100"></div>
        <div className="flex flex-1 w-full p-2 border rounded-md"></div>
      </div>
    </div>
  );
};
export default AddProduct;
