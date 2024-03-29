"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

export default function HeroSection() {
  return (
    <section className="flex items-center mt-0   h-lvh">
      <div className="grid grid-cols-1  sm:grid-cols-2 place-items-center ">
        <div className=" text-center sm:text-left ">
          <div className=" mb-2 pt-1 h-28 sm:h-44 ">
            <h1 className="hidden sm:block sm:pt-3 mt-5 text-white sm:text-3xl lg:leading-normal font-extrabold">
              Hello I&apos;m
            </h1>
            <br />
            <TypeAnimation
              sequence={["Kyaw Zin Thet", 1800, "Junior Web-developer", 1800]}
              wrapper="span"
              speed={40}
              className=" text-white text-2xl md:text-4xl lg:leading-normal font-extrabold "
              repeat={Infinity}
            />
          </div>

          <p className="text-white text-base sm:text-lg my-5 lg:text-xl">
            I am actively seeking a position as a developer. I am a young and
            hardworking individual, enthusiastic about learning and willing to
            accept a competitive salary.
          </p>
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
