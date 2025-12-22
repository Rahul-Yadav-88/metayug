import React from "react";

const Contact = () => {
    const faqData = [
  {
    id: "01",
    title: "WHAT SERVICES DO YOU OFFER?",
    description:
      "We provide residential and commercial interior design, including space planning, furniture selection, and custom design solutions. Our services also include project management and renovation design.",
  },
  {
    id: "02",
    title: "How do I start a project with your studio?",
    description:
      "We provide residential and commercial interior design, including space planning, furniture selection, and custom design solutions. Our services also include project management and renovation design.",
  },
  {
    id: "03",
    title: "How do I start a project with your studio?",
    description:
      "We provide residential and commercial interior design, including space planning, furniture selection, and custom design solutions. Our services also include project management and renovation design.",
  },
];
    const faqData2 = [
  {
    id: "01",
    title: "WHAT SERVICES DO YOU OFFER?",
    description:
      "We provide residential and commercial interior design, including space planning, furniture selection, and custom design solutions. Our services also include project management and renovation design.",
  },
  {
    id: "02",
    title: "HOW DO I START A PROJECT WITH YOUR STUDIO?",
    description:
      "You can start by contacting us through our website or visiting our studio. We discuss your requirements, budget, and timeline before creating a customized design plan.",
  },
  {
    id: "03",
    title: "HOW LONG DOES A PROJECT TAKE?",
    description:
      "Project timelines vary depending on scope and complexity. Typically, projects range from a few weeks to several months, including design and execution.",
  },
];

    return (
        <div className="min-h-screen bg-[#1C1C1C]">

            <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] overflow-hidden">


                <img
                    src="contact-hero.png"
                    alt="Kitchen interior"
                    className="absolute inset-0 w-full h-full object-cover"
                />


                <div className="absolute inset-0 flex items-center justify-center px-4">
                    <div className="relative flex items-center justify-center">


                        <div
                            className="
                absolute 
                w-[220px] h-[90px]
                sm:w-[300px] sm:h-[120px]
                md:w-[380px] md:h-[150px]
                lg:w-[450px] lg:h-[170px]
                bg-white/80 
                blur-[50px] 
                rounded-full
              "
                        ></div>

                       
                        <h1
                            className="
                relative 
                text-3xl
                sm:text-4xl
                md:text-6xl
                lg:text-7xl
                font-serif 
                text-gray-900 
                tracking-[0.25em]
                sm:tracking-[0.3em]
                px-6
                sm:px-10
              "
                        >
                            CONTACT
                        </h1>

                    </div>
                </div>
            </section>

            {/* section 2 */}
         <section className="bg-[#212121] text-[#E5E5E5] px-4 py-6 sm:py-8">
  <ul
    className="flex flex-wrap justify-around gap-x-6 gap-y-4 text-sm sm:text-base md:text-xl lg:text-2xl tracking-widest"
  >
    <li>LUXURY</li>
    <li>CRAFTSMANSHIP</li>
    <li>ELEGANCE</li>
    <li>OPULENCE</li>
    <li>MAJESTIC</li>
  </ul>
</section>

 {/* section 3 */}
 <section className=" mt-10">
        <div className="flex flex-col md:flex-row">
          {/* Form Side */}
          <div className="w-full md:w-1/2 px-6 sm:px-10 md:px-16 lg:px-20 py-12 sm:py-16 md:py-20 lg:py-24">
            <h2 className="text-white text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-serif mb-8  md:mb-20 leading-tight">
              We Are Ready to Help You<br />
              Elevate Your Space
            </h2>

            <form className="space-y-4 sm:space-y-5 md:space-y-6">
              <input
                type="text"
                placeholder="YOUR NAME"
                className="w-full bg-[#C7C7C7] text-gray-800 placeholder-gray-500 px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base tracking-wider focus:outline-none  "
              />

              <input
                type="email"
                placeholder="EMAIL ADDRESS"
                className="w-full bg-[#C7C7C7] text-gray-800 placeholder-gray-500 px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base tracking-wider focus:outline-none  "
              />

              <input
                type="text"
                placeholder="SERVICE INTERESTED IN"
                className="w-full bg-[#C7C7C7] text-gray-800 placeholder-gray-500 px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base tracking-wider focus:outline-none  "
              />

              <textarea
                placeholder="WRITE YOUR MESSAGE HERE"
                rows="6"
                className="w-full bg-[#C7C7C7] text-gray-800 placeholder-gray-500 px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base tracking-wider resize-none focus:outline-none "
              ></textarea>

              <button
                type="submit"
                className="bg-[#8D8271] text-white px-8 sm:px-10 py-3 sm:py-4 text-sm sm:text-base tracking-widest hover:bg-[#9d8166] transition-colors duration-300"
              >
                START YOUR JOURNEY
              </button>
            </form>
          </div>

          {/* Image Side */}
          <div className="w-full md:w-1/2 h-[400px] md:h-[800px] pr-4">
            <img 
              src="contact-form.png" 
              alt="Modern interior space" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* section 4 */}
          <section className="">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20 py-12 sm:py-16 md:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
            
            {/* Email & Phone */}
            <div className="border-l border-white pl-6">
              <h3 className="text-[#8D8271] text-xs sm:text-sm tracking-widest mb-4 sm:mb-6">
                OUR EMAIL & PHONE
              </h3>
              <a 
                href="mailto:info@velainteriors.com" 
                className="text-white text-base sm:text-lg font-light hover:text-gray-300 transition-colors block mb-2"
              >
                info@velainteriors.com
              </a>
              <a 
                href="tel:001.404.507.1200" 
                className="text-white text-base sm:text-lg font-light hover:text-gray-300 transition-colors block"
              >
                001.404.507.1200
              </a>
            </div>

    
            <div className="border-l border-white pl-6">
              <h3 className="text-[#8D8271] text-xs sm:text-sm tracking-widest mb-4 sm:mb-6">
                STUDIO ADDRESS
              </h3>
              <address className="text-white text-base sm:text-lg font-light not-italic leading-relaxed">
                123 Peachtree Lane,<br />
                Suite 100 Atlanta GA 30309
              </address>
            </div>

    
            <div className="border-l white pl-6">
              <h3 className="text-[#8D8271] text-xs sm:text-sm tracking-widest mb-4 sm:mb-6">
                STUDIO HOURS
              </h3>
              <p className="text-white text-base sm:text-lg font-light leading-relaxed">
                Monday - Friday<br />
                10am - 6pm
              </p>
            </div>

          </div>
        </div>

        <div>
            <img src="contact-img.png" alt="" className="w-full min-h-[300px] object-cover p-3"/>
        </div>
      </section>

      {/* section 5 */}
       <section className="bg-[#1c1c1c] text-[#d6d6d6] py-10 md:py-16 px-4 md:px-12">
         <div className="flex flex-col items-center mb-10 md:mb-20">
      <p className="text-[#8D8271]">FAQ</p>
      <h5 className="text-2xl md:text-4xl">Your Queries Answered</h5>
    </div>
      <div className="max-w-[90%] mx-auto grid md:grid-cols-2 gap-12 items-start">
        
        {/* left Content */}
        <div className="space-y-10">
          {faqData.map((item) => (
            <div key={item.id} className="flex flex-col gap-6">
              
              <div className="text-xl text-[#8D8271] font-light mt-1">
                {item.id}.
              </div>

              <div>
                <h3 className="text-xl uppercase tracking-widest mb-2 text-gray-300">
                  {item.title}
                </h3>
                <p className="text-md leading-relaxed text-gray-400 max-w-md">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>
        {/* right Image */}
        <div className="w-full h-screen flex justify-center">
          <img
            src="faq-img2.png"
            alt="Interior Design"
            className="w-full md:w-[400px] md:h-[500px] object-cover"
          />
        </div>


      </div>
    </section>
      
  <section className="bg-[#1c1c1c] text-[#d6d6d6] py-10 md:py-16 px-4 md:px-12">
   
      <div className="max-w-[90%] mx-auto grid md:grid-cols-2 gap-12 items-start">
        
        {/* Left */}
        <div className="w-full h-screen flex justify-center items-center">
          <img
            src="faq-img.png"
            alt="Interior Design"
            className="w-full md:w-[400px] h-[500px] object-cover"
          />
        </div>

        {/* Right */}
        <div className="space-y-10">
          {faqData2.map((item) => (
            <div key={item.id} className="flex flex-col gap-6">
              
            
              <div className="text-xl text-[#8D8271] font-light mt-1">
                {item.id}.
              </div>

        
              <div>
                <h3 className="text-xl uppercase tracking-widest mb-2 text-gray-300">
                  {item.title}
                </h3>
                <p className="text-md leading-relaxed text-gray-400 max-w-md">
                  {item.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
            

        </div>
    );
};

export default Contact;
