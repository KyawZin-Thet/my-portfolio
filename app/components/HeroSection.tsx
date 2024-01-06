"use client";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  return (
    <section className="flex items-center mt-32 sm:mt-0  h-lvh">
      <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center ">
        <div className="text-centre sm:text-left ">
          <div className="mb-6 pt-1 h-32 ">
            <h1 className="hidden sm:block sm:pt-3 mt-5 text-white text-2xl sm:text-3xl lg:leading-normal font-extrabold">
              Hello I&apos;m
            </h1>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Kyaw Zin Thet",
                1800, // wait 1s before replacing "Mice" with "Hamsters"
                "Junior Web-developer",
                1800,
              ]}
              wrapper="span"
              speed={40}
              className=" text-white text-3xl sm:text-4xl lg:leading-normal font-extrabold "
              repeat={Infinity}
            />
          </div>

          <p className="text-white  text-base sm:text-lg my-10 lg:text-xl">
            I am actively seeking a position as a developer. I am a young and
            hardworking individual, enthusiastic about learning and willing to
            accept a competitive salary.
          </p>
          <div className=" mx-10 sm:mx-0 ">
            <Link
              href="/"
              className="flex  justify-center px-3  py-1 w-full sm:w-fit rounded-full  text-black mt-5"
            >
              <span className="border-4 border-solid border-slate-800  text-center inline-block bg-[#ffffff] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </div>

        <div className=" place-self-center mb-8 sm:mb-2 mt-4 lg:mt-0  w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] flex items-center justify-center ">
          <Image
            src="/images/profilepicture.jpg"
            alt="profile image"
            className="rounded-full"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}
