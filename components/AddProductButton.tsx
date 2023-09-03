"use client";

import { addProductToDatabase } from "@/actions/serverActions";
import { useTransition } from "react";

export default function AddProductButton() {
  const [isPending, startTransition] = useTransition();

  const formData = new FormData();
  formData.append("product", "Macbook Pro");
  formData.append("price", "2000");
  return (
    <button
      className="fixed right-10 bottom-10 py-2 px-4 rounded-md bg-green-500 font-medium text-white"
      onClick={() => startTransition(() => addProductToDatabase(formData))}
    >
      {isPending ? "Adding..." : "Add Macbook Pro"}
    </button>
  );
}
