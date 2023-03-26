const AboutSection = () => {
    return (
        <section className="w-full container mx-auto px-10 py-10 flex flex-col lg:flex-row items-center gap-5">
            <div className="flex-1">
                <h2 className="text-4xl font-bold text-center text-blue-400 mb-8">A Bit About Us</h2>
                <p className="text-xl">
                    Autism Abilities is a team of dedicated and caring professionals who are passionate about empowering and supporting autistic people to live life well.<br /><br />
                    As an autism-specific service we understand that the needs of autistic person are as individual as they are, and this knowledge informs and inspires our work every single day.<br /><br />
                    Autism Abilities is an includsive and neurodiversity-affirming organisation. Many of us have lived experience of neurodiversity including autism and we strongly value the unique perspectives of autistic and neurodiverse people.
                </p>
            </div>
            <div className="flex-2 flex items-center justify-center">
                <img src="./bike.webp" className="lg:rounded-full"/>
            </div>
        </section>
    )
}

export default AboutSection;