export default function CardCategory() {
    return (
        <a href="#" className="aspect-[4/4] w-full relative">
            <div className="bg-[url('/images/banner.jpg')] w-full h-full bg-center bg-cover"></div>
            <div className="absolute bg-black/40 w-full h-full z-20 top-0 flex items-center justify-center">
                <p className="text-2xl font-bold text-white">OUTER</p>
            </div>
        </a>
    )
}