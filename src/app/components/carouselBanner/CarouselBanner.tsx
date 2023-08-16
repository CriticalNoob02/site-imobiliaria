export default function  CarouselBanner () {
    return(
        <div className="w-screen h-screen card">
            <div className="backdrop-blur-sm bg-white-200/20 w-full h-full flex items-center justify-center">
                <div className="overflow-hidden w-3/5 h-2/5 flex items-center justify-center shadow-2xl rounded outline outline-offset-1 outline-neutral-500/10">
                    <div className="w-screen h-screen card">
                    </div>
                </div>
            </div>
        </div>
    )
}