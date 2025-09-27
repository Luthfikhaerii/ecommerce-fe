export default function CardProduct() {
    // const {id,name,price,image}:{id:number,name:string,price:number,image:string} = params
    return (
        <a href="#" className="border border-gray-200 shadow-sm rounded-sm w-full h-full">
            <img src="/images/banner.jpg" className="aspect-[4/5] w-full object-cover object-center" />
            <div className="p-4">
                <h3 className="text-md font-semibold">Polo starboy cogan hitam</h3>
                <p className="text-base">Rp 300.000</p>
            </div>
        </a>
    )
}