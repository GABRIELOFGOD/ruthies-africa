"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { IProduct } from "@/models/product";
import { CheckIcon, PencilIcon } from "lucide-react";
import { useState } from "react";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

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

  const sizes = [
    "XS",
    "S",
    "M",
    "L",
    "XL",
    "XXL",
  ];
  
  return (
    <div className="p-2 md:p-4 flex flex-col gap-5">
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
        <div className="flex flex-1 md:flex-3 w-full p-4 rounded-md bg-gray-50">
          <div className="flex flex-col gap-3 w-full">
            <p className="font-bold">General Information</p>
            {/* <p>Product basic informations</p> */}
            <div className="flex flex-col gap-1">
              <p className="text-xs font-bold">Product Name</p>
              <Input
                placeholder="Enter product name"
                className="w-full text-sm font-medium shadow-none border-0 bg-gray-100 h-10 placeholder:text-gray-400 placeholder:italic"
              />
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-xs font-bold">Product Description</p>
              <Textarea
                placeholder="Describe your product in details"
                className="w-full text-sm font-medium shadow-none border-0 bg-gray-100 h-40 placeholder:text-gray-400 placeholder:italic"
              />
            </div>

            <div className="flex flex-col gap-5 w-full md:flex-row">
              <div className="flex flex-col w-full gap-1">
                <div className="flex flex-col">
                  <p className="text-xs font-bold">Size</p>
                  <p className="text-[10px] text-gray-400 font-semibold">Select all available sizes</p>
                </div>
                <div className="flex gap-2">
                  {sizes.map((size) => (
                    <div
                      key={size}
                      className="flex items-center justify-center w-10 h-10 border rounded-sm duration-100 bg-gray-200 cursor-pointer hover:bg-gray-300"
                    >
                      <span className="text-xs font-bold">{size}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col w-full gap-1">
                <div className="flex flex-col">
                  <p className="text-xs font-bold">Gender</p>
                  <p className="text-[10px] text-gray-400 font-semibold">Pick available gender</p>
                </div>
                <div className="flex gap-2">
                  <RadioGroup defaultValue="option-one">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-one" id="option-one" />
                      <Label htmlFor="option-one">Option One</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="option-two" id="option-two" />
                      <Label htmlFor="option-two">Option Two</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 md:flex-2 w-full p-2 border rounded-md"></div>
      </div>
    </div>
  );
};
export default AddProduct;
