import CardCategory from "../components/ui/CardCategory";

export default function Category() {
    return (
        <>
            <section className="px-8 pt-4 pb-16 max-w-5xl mx-auto">
                <h2 className="font-bold text-2xl">CATEGORY
                </h2>
                <hr className="my-4"/>
                <div className="grid md:grid-cols-3 grid-cols-2 gap-8 justify-items-center align-items-center mx-auto">
                    <CardCategory />
                    <CardCategory />
                    <CardCategory />
                    <CardCategory />
                </div>

            </section>
        </>
    )
}