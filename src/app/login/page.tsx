"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { fonts } from "../../components/fonts";

export default function login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("http://localhost:4000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      const data = await res.json();
      // Save token (example: localStorage)
      localStorage.setItem("token", data.token);
      router.push("/");
    } else {
      const data = await res.json();
      setError(data.message || "Login failed");
    }
  };

  return (
    <div className="relative w-full min-h-screen bg-white items-center">
      {/* Background SVG */}
      <div className="relative w-full h-[42rem] overflow-hidden">
        <svg
          viewBox="0 0 428 398"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 right-0 w-full h-[26rem]"
          preserveAspectRatio="none"
        >
          <path
            fill="#c1272d"
            d="M428,398c-27.19-30.89-108.37-114.8-242-140.78C106.16,241.7,39.22,253,0,263V0H428Z"
          />
        </svg>
      </div>

      {/* Centered Box */}
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        <div className="relative w-[22.875rem] h-[30.688rem] bg-white shadow-xl rounded-xl flex-col">
          <h1
            className={`${fonts.cosima.className} font-semibold text-4xl text-zinc-900 text-center mt-24 antialiased`}
          >
            SIGN IN
          </h1>
          <div className="flex flex-col items-center gap-y-6 my-9">
            <Input
              type="email"
              placeholder="Email"
              className="w-[18rem] rounded-3xl h-[3.3rem] my-custom-input text-zinc-900 bg-[#c1272d]"
            />
            <Input
              type="password"
              placeholder="Password"
              className="w-[18rem] rounded-3xl h-[3.3rem] my-custom-input text-zinc-900 bg-[#c1272d]"
            />
            <div className="ml-[9.4rem] mt-[-1rem]">
              <Link href="" className="hover:underline">
                Forgot password ?
              </Link>
            </div>
            <div className="flex mt-[-0.6rem]">
              <Button
                variant="default"
                className="w-[10rem] rounded-3xl h-[3.3rem] bg-[#c1272d] hover:bg-[#871C1F] text-white transition-colors duration-200"
              >
                Login
              </Button>
            </div>
            <p>
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="text-[#c1272d] hover:underline font-medium antialiased"
              >
                Sign Up!
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-[4.85rem]">
        <p className={`${fonts.cosima.className} font-bold text-1xl `}>
          Sign in With
        </p>
      </div>
      <div className="flex justify-center">
        <div className="flex justify-center mt-[0.6rem] gap-x-8 items-center">
          <button className="transition-transform duration-200 hover:scale-110 cursor-pointer">
            <Icon icon="logos:facebook" className="align-middle text-3xl" />
          </button>
          <button className="transition-transform duration-200 hover:scale-110 cursor-pointer">
            <Icon icon="logos:google-icon" className="align-middle text-3xl" />
          </button>
          <button className="transition-transform duration-200 hover:scale-110 cursor-pointer">
            <Icon
              icon="jam:apple-circle"
              className="align-middle text-4xl -ml-1"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
