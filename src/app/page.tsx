// blog/page.tsx

import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col bg-yellow-50 w-full md:w-[800px] h-auto mx-auto mt-10 border-4 border-yellow-500 rounded-2xl p-4 font-sans">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-6 text-black mt-16 animate-slideIn">Importance of AI</h1>

      {/* Round Image */}
      <div className="flex justify-center items-center mb-8">
        <Image
          src="/azq212.png"
          alt="azmat"
          height={150}
          width={150}
          className="rounded-full"
        />
      </div>

      <div className="border-t border-b border-gray-500/30 py-4 mx-4 sm:mx-20">
        <div className="text-black text-center px-0 lg:px-10">
          <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-3xl font-bold mb-6 text-black">
          Embracing the AI Era: Shaping a Future Beyond Imagination
          </h1>
          <h4 className="text-xs sm:text-base md:text-base lg:text-base">By [ <b>Azmat Ali</b> ]  |  Electrical & Software Engineer, AI Enthusiast</h4>
          <h6 className="text-xs sm:text-sm md:text-sm">Thursday : 14-11-2024 04:00 pm</h6>
        </div>
      </div>
      
      <div className="text-black border-b border-gray-500/30 py-4 mx-4 sm:mx-20">
        <h1 className="text-2xl text-left font-bold mb-6 text-black">Introduction</h1>
        <p className="text-justify">We have entered an era where artificial intelligence and automation seamlessly integrate into our daily lives, with smart gadgets and appliances enhancing our routines like never before. Our homes are now equipped with devices that make tasks more efficient and elevate our lifestyle.</p>

        <h1 className="text-2xl text-left font-bold mb-6 text-black mt-6">Laptops and Desktops:</h1>
        <p className="text-justify"> Modern computers are powerful, enabling us to work, create, and communicate with ease. With AI software and enhanced processing capabilities, these devices support complex tasks like graphic design, data analysis, and software development, pushing productivity to new heights.</p>

        <h1 className="text-2xl text-left font-bold mb-6 text-black mt-6">Washing Machines:</h1>
        <p className="text-justify">  Fully automated, today’s washing machines select the optimal wash cycle and manage water and energy usage, making laundry faster, more convenient, and environmentally friendly.</p>

        <h1 className="text-2xl text-left font-bold mb-6 text-black mt-6">Microwave Ovens:</h1>
        <p className="text-justify">Equipped with digital controls and smart cooking presets, these appliances ensure our meals are cooked to perfection with minimal input, adjusting times and temperatures based on food type.</p>

        <h1 className="text-2xl text-left font-bold mb-6 text-black mt-6">Robotic Vacuums:</h1>
        <p className="text-justify"> With advanced sensors and navigation, robotic vacuums clean autonomously, learning our home layouts and schedules for more effective cleaning with each use.</p>

        <h1 className="text-2xl text-left font-bold mb-6 text-black mt-6">Smart Lighting Systems: </h1>
        <p className="text-justify">Indoor and outdoor smart lighting responds to environmental factors, movement, and even voice commands, providing energy-efficient lighting that enhances both safety and ambiance.</p>
        
        <div className="text-yellow-50 border-b border-gray-500/30 py-2 mx-2 mb-6">
          1
        </div>

        <p className="text-justify">These advancements underscore that we are living in the age of intelligent systems and that artificial intelligence has become inseparable from our everyday routines.</p>
        <br />
        <p className="text-justify">Beyond our homes, the robotics industry is revolutionizing production with precision, speed, and quality control. Robots perform tasks with unparalleled accuracy, transforming manufacturing and setting new standards of excellence.</p>
        <br />
        <p className="text-justify">As AI continues to evolve, we must prepare ourselves to not only use these technologies but also to understand and shape them. For developers and IT professionals, this is a unique opportunity to lead, designing and implementing AI systems that push the boundaries of possibility. Another group of people, the end users, benefit by integrating these innovations into their lives, yet they may not realize the depth of work that goes into creating these tools.</p>
        <br />
        <p className="text-justify">In the future, as AI advances, everyone will have opportunities to contribute to this evolving landscape. This is a time to embrace our roles, whether as creators or users, and participate in the journey of innovation.</p>
        <br />
        <p className="text-justify"><b>Let&rsquo;s work together to build an advanced world, contributing in ways that not only elevate our own lives but also shape a better future for all. Now is the time to step up and become part of this incredible era.</b></p>

      </div>

      <div className="text-black border-b border-gray-500/30 py-4 mx-4 sm:mx-20">
        <h1 className="text-2xl text-left font-bold mb-6 text-black">Conclusion:</h1>
        <p className="text-justify">As we stand on the threshold of a new technological era, artificial intelligence and automation have already started to redefine our world in ways that were once unimaginable. From everyday devices like smartphones and washing machines to groundbreaking advancements in robotics, AI has seamlessly integrated into our lives, enhancing efficiency and convenience. This revolution is not just reshaping our homes and workspaces but is also transforming industries, where robots now set new benchmarks for precision and productivity.</p>
        <br />
        <p className="text-justify">Looking ahead, we must recognize the critical role we all play in this unfolding narrative. As developers, we have the unique opportunity to design and create AI systems that will shape the future. At the same time, as users, we can benefit from these innovations and contribute by adapting and participating in the ongoing evolution. The potential for change is immense, and we each have a part to play in building a smarter, more advanced world..</p>
        <br />
        <p className="text-justify">Let us embrace this era with curiosity, collaboration, and a shared vision for progress. Together, we can harness the power of artificial intelligence to create solutions that not only elevate our lives but also leave a lasting impact on the world around us. The future is now, and it&rsquo;s ours to shape..</p>
      </div>

      
      <h2 className="text-gray-400 text-center mt-10">*** The End ***</h2>
    </div>
  );
}
