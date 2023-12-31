import { Product } from "@/type";
import { addProductToDatabase } from "@/actions/serverActions";
import AddProductButton from "@/components/AddProductButton";

export default async function Home() {
  const res = await fetch(
    "https://64f47dda932537f4051a69af.mockapi.io/products",
    {
      cache: "no-cache",
      next: {
        // tags: ["products"],
        tags: ["newproducts"],
      },
    }
  );

  const products: Product[] = await res.json();
  return (
    <main className="flex min-h-screen text-center flex-col gap-8 items-center p-8">
      <h1 className="text-3xl font-bold">Product Warehouse</h1>
      <AddProductButton />
      <form
        action={addProductToDatabase}
        className="flex flex-col items-center gap-5"
      >
        <input
          name="product"
          placeholder="Enter Product name..."
          type="text"
          className="border-2 border-gray-300 p-2 rounded-md"
        />
        <input
          name="price"
          placeholder="Enter price name..."
          type="text"
          className="border-2 border-gray-300 p-2 rounded-md"
        />
        <button className="bg-sky-500 text-white rounded-md p-3 font-semibold hover:bg-sky-300">
          Add Product
        </button>
      </form>
      <h2 className="font-bold text-lg">List of Products</h2>
      <div className="flex justify-center flex-wrap gap-5">
        {products.map((product) => (
          <div key={product.id} className="p-5 shadow">
            <p className="font-semibold">{product.product}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
