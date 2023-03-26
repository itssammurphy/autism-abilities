const IndexFeaturedHeader = () => {
    return (
        <header className="bg-beach h-[70vh] bg-cover relative">
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
                <div className="px-8 flex flex-col items-center">
                    <h1 className="text-white text-center lg:text-left text-5xl lg:text-7xl font-bold">Welcome to Autism Abilities</h1>
                    <h2 className="text-white text-center lg:text-left text-xl mt-5 font-semibold lg:text-3xl">Empowering & Supporting Autistic People to Live Life Well</h2>
                    <button class="bg-white font-bold rounded-md py-2 px-4 shadow-lg uppercase tracking-wider hover:bg-red-400 hover:text-white transition mt-5">
                        Get in touch
                    </button>
                </div>
            </div>
        </header>
    )
}

export default IndexFeaturedHeader;