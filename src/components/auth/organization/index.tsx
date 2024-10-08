"use client";
import { useState } from "react";
import AdminRegister from "./Register";
import AdminSignIn from "./SignIn";
import BackgroundImage from "../../../../public/auth/work-with-the-best.svg";
import Image from "next/image";
function AdminAuth() {
  const [login, setLogin] = useState<"login" | "register">("register");
  return (
    <>
      <main className="h-full flex flex-col">
        <section className="flex items-center justify-center flex-wrap p-3">
          <div className="w-full px-6 sm:px-3 sm:w-1/4 ">
            <div className="pb-0">
              <h1 className="text-3xl mb-0 z-10 font-bold text-[var(--primary-color)]">
                {login === "login" ? "Welcome back" : "Let's start"}
              </h1>
              <p className="mt-2 text-slate-500">
                {login === "login"
                  ? "Enter your email and password to sign in"
                  : "Enter your details"}
              </p>
            </div>
            <div className="">
              {login === "login" ? <AdminSignIn /> : <AdminRegister />}
            </div>
            <p className="text-sm text-center">
              Don&apos;t have an account?
              <a
                onClick={() =>
                  setLogin((prev) => (prev === "login" ? "register" : "login"))
                }
                className="relative z-10 cursor-pointer pl-2 font-semibold text-[var(--primary-color)]"
              >
                {login === "login" ? "Register here" : "Login"}
              </a>
            </p>
          </div>
          <div className="w-2/4 relative aspect-square">
            <Image
              src={BackgroundImage}
              layout="fill"
              objectFit="contain"
              alt={""}
            />
          </div>
        </section>

        <footer className="pb-6">
          <div className="flex flex-wrap items-center justify-center gap-6 pb-6">
            <a href="javascript:;" target="_blank" className=" text-slate-400 ">
              Company
            </a>
            <a href="javascript:;" target="_blank" className=" text-slate-400 ">
              About Us
            </a>
            <a href="javascript:;" target="_blank" className=" text-slate-400 ">
              Team
            </a>
            <a href="javascript:;" target="_blank" className=" text-slate-400 ">
              Products
            </a>
            <a href="javascript:;" target="_blank" className=" text-slate-400 ">
              Blog
            </a>
            <a href="javascript:;" target="_blank" className=" text-slate-400 ">
              Pricing
            </a>
          </div>
          <div className="flex flex-wrap">
            <div className="w-8/12 max-w-full px-3 mx-auto mt-1 text-center flex-0">
              <p className="m-0 text-slate-400">
                Copyright © Soft by Payrollbyte.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default AdminAuth;
