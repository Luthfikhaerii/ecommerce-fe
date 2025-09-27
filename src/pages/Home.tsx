import CardProduct from "../components/ui/CardProduct";

export default function Home() {
    return (
        <>
            <section className="text-center w-full relative min-w-screen-2xl">
                <div className="bg-[url('/images/banner.jpg')] w-full h-[400px] bg-cover bg-center flex items-center justify-center">
                </div>
                <div className="h-[400px] w-full bg-black/40 z-20 absolute flex items-center justify-center top-0">
                    <div className="text-white border-2 border-white py-2 px-6 rounded-lg shadow-sm bg-black/30 shadow-sm">
                        <p className="text-base">Shop Now</p>
                    </div>
                </div>
            </section>
            <section className="py-16 max-w-5xl mx-auto">
                <h2 className="font-bold text-center mb-4 text-3xl">PRODUCTS</h2>
                <div className="w-full flex p-4 justify-evenly gap-4">
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                </div>
                <div className="mx-auto w-28 mt-4 bg-black text-white px-4 py-2 rounded-lg text-center text-sm">
                    <p>View More</p>
                </div>
            </section>
        </>
    )
}