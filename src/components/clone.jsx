import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import netflixLogo from "../assets/netflix.png";
import bgImage from "../assets/netfliximage.jpg";
import image1 from "../assets/image1.webp";
import image2 from "../assets/image2.webp";
import image3 from "../assets/imag3.webp";
import image4 from "../assets/image4.webp";
import image5 from "../assets/image5.webp";
import image6 from "../assets/image6.webp";
import NetflixSection from "./netflixsection";

const images = [image1, image2, image3, image4, image5, image6];

function Clone() {
  const [start, setStart] = useState(0);

  const next = () => setStart((s) => (s + 1) % images.length);
  const prev = () => setStart((s) => (s - 1 + images.length) % images.length);

  const shown = [...images.slice(start), ...images.slice(0, start)].slice(0, 5);

  return (
    <main className="bg-black text-white font-sans">
      {/* Top Banner */}
      <section
        className="relative min-h-[100vh] max-w-full bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${bgImage})`,
        }}
      >
        <nav className="flex justify-between items-center px-6 md:px-24 py-4">
          <img src={netflixLogo} className="h-[7vh] md:h-[10vh]" alt="Netflix Logo" />
          <div className="flex items-center gap-2">
            <select className="bg-transparent border border-white rounded px-2 py-1 text-white">
              <option>English</option>
              <option>Hindi</option>
            </select>
            <button className="bg-red-600 px-4 py-1 rounded font-bold text-sm">Sign In</button>
          </div>
        </nav>
        <div className="flex flex-col items-center justify-center  mt-10 space-y-4 px-6 py-[10rem]  md:py-[10rem]  sm:py-[10rem] lg:py-[10rem] text-center md:mt-[15vh]">
          <h1 className="text-3xl md:text-5xl font-extrabold">Unlimited movies, TV shows and more</h1>
          <p className="text-base md:text-lg font-semibold">Starts at ₹149. Cancel at any time.</p>
          <p className="text-sm md:text-lg">Ready to watch? Enter your email to create or restart your membership</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 w-full max-w-[600px]">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 rounded border border-red-600 bg-transparent px-4 py-3 text-white placeholder-white"
            />
            <button className="flex items-center justify-center bg-red-600 px-4 md:px-8 py-3 rounded text-sm md:text-lg font-semibold">
              Get Started <FaChevronRight className="ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Trending Slider */}
      <section className="px-4 md:px-[10vh] py-12 relative">
        <h3 className="text-xl md:text-2xl font-semibold mb-4">Trending Now</h3>
        <div className="flex flex-wrap gap-4">
          <select className="bg-transparent border border-white rounded px-4 py-2 text-sm md:text-base">
            <option>India</option>
            <option>Global</option>
          </select>
          <select className="bg-transparent border border-white rounded px-4 py-2 text-sm md:text-base">
            <option>Movie</option>
            <option>TV Shows</option>
          </select>
        </div>

        <div className="relative mt-6">
          {/* Image list */}
          <div className="flex gap-3 flex-wrap justify-center">
            {shown.map((src, i) => (
              <img
                key={i}
                src={src}
                className="w-[30vw] sm:w-[25vh] h-auto rounded-lg transition-transform hover:scale-105"
                alt={`Trending ${i}`}
              />
            ))}
          </div>

          {/* Prev Button */}
          <FaChevronRight
            onClick={prev}
            className="absolute top-1/2 left-0 md:left-[-3vh] rotate-180 translate-y-[-50%] w-[4vh] h-[6vh] text-white cursor-pointer bg-black bg-opacity-50 rounded-full p-1 hover:scale-110 transition"
          />
          {/* Next Button */}
          <FaChevronRight
            onClick={next}
            className="absolute top-1/2 right-0 md:right-[-3vh] translate-y-[-50%] w-[4vh] h-[6vh] text-white cursor-pointer bg-black bg-opacity-50 rounded-full p-1 hover:scale-110 transition"
          />
        </div>
      </section>
      {/* Netflix Section */}
      <NetflixSection />
    </main>
  );
}

export default Clone;
