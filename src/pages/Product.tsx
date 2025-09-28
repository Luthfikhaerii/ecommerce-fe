import CardProduct from "../components/ui/CardProduct";
import { Search } from "lucide-react";

export default function Catalog() {
    return (

        <section className="px-8 pt-4 pb-16 max-w-6xl mx-auto">
            <h2 className="font-bold text-2xl">ALL PRODUCTS</h2>
            <hr className="my-4" />
            <div className="my-4 flex justify-between  mx-auto">
                <div className="flex items-center bg-white border rounded-md">
                    <input type="text" name="search" className="pl-2 w-64 " placeholder="Search..." />
                    <button className="hover:text-gray-600 rounded-md text-xs p-2 ">
                        <Search size={22} />
                    </button>
                </div>
                <div>
                    <label>Sort :</label>
                    <select>
                        <option>terbaru</option>
                        <option>terlama</option>
                        <option>termurah</option>
                        <option>termahal</option>
                    </select>
                </div>
            </div>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4 justify-items-center align-items-center mx-auto mt-8">
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
            </div>

        </section>

    )
}