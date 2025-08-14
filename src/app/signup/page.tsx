"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Form from 'next/form'
import Image from 'next/image'
const page = () => {
  return (
    <div>
      {/* Background SVG */}
      <div className="relative w-full h-[42rem] overflow-hidden ">
        <svg
          viewBox="0 0 428 398"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 right-0 w-full h-[26rem] -scale-x-100"
          preserveAspectRatio="none"
        >
          <path
            fill="#c1272d"
            d="M428,398c-27.19-30.89-108.37-114.8-242-140.78C106.16,241.7,39.22,253,0,263V0H428Z"
          />
        </svg>
        <div className="absolute top-26 left-0 w-full h-[0em] flex justify-center items-center z-10">
                <Image
                  src="/logo.png"
                  width={60} // adjust size as needed
                  height={60} // adjust size as needed
                  alt="Logo"
                />
              </div>
      </div>

      
      {/*CENTERED BOX */}
      <div className="absolute top-12 left-0 w-full h-full flex justify-center items-center z-1 lg:top-20">
        <div className="relative w-[22.875rem] h-[40.688rem] bg-white shadow-2xl rounded-xl flex-col">
          <h1
            className={`font-semibold text-4xl text-zinc-900 text-center mt-10 antialiased`}
          >
            CREATE YOUR ACCOUNT
          </h1>
          <Form action="" className="flex flex-col items-center gap-y-6 my-9">
            <Input
              type="email"
              placeholder="Email"
              className="w-[18rem] rounded-3xl h-[3.3rem] my-custom-input text-zinc-900 bg-[#c1272d]"
            />
            <div className="flex gap-4">
              <Input
                type="text"
                placeholder="First name"
                className="w-[8.4rem] rounded-3xl h-[3.3rem] my-custom-input text-zinc-900 bg-[#c1272d]"
              />
              <Input
                type="text"
                placeholder="Last name"
                className="w-[8.4rem] rounded-3xl h-[3.3rem] my-custom-input text-zinc-900 bg-[#c1272d]"
              />
            </div>
            <Input
              type="text"
              placeholder="Phone number"
              className="w-[18rem] rounded-3xl h-[3.3rem] my-custom-input text-zinc-900 bg-[#c1272d]"
            />
             <Input
              type="text"
              placeholder="Password"
              className="w-[18rem] rounded-3xl h-[3.3rem] my-custom-input text-zinc-900 bg-[#c1272d]"
            />
             <Input
              type="text"
              placeholder="Confirm password"
              className="w-[18rem] rounded-3xl h-[3.3rem] my-custom-input text-zinc-900 bg-[#c1272d]"
            />
            <div className="flex mt-[-0.6rem]">
              <Button
                variant="default"
                className="w-[10rem] rounded-3xl h-[3.3rem] bg-[#c1272d] hover:bg-[#871C1F] text-white transition-colors duration-200"
              >
                Sign Up
              </Button>
            </div>
            <p>
              Got an account?{" "}
              <Link
                href="/login"
                className="text-[#c1272d] hover:underline  antialiased"
              >
                Login!
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default page;
