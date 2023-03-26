const AboutSection = () => {
    return (
        <section className="container mx-auto px-10 py-10 flex flex-col lg:flex-row items-center gap-5">
            <div>
                <h2 className="text-4xl font-bold text-center text-blue-400 mb-8">A Bit About Us</h2>
                <p>
                    Autism Abilities is a team of dedicated and caring professionals who are passionate about empowering and supporting autistic people to live life well.<br /><br />
                    As an autism-specific service we understand that the needs of autistic person are as individual as they are, and this knowledge informs and inspires our work every single day.<br /><br />
                    Autism Abilities is an includsive and neurodiversity-affirming organisation. Many of us have lived experience of neurodiversity including autism and we strongly value the unique perspectives of autistic and neurodiverse people.
                </p>
            </div>
            <div>
                <img src="./bike.webp"/>
            </div>
        </section>
    )
}

export default AboutSection;