"use client";

import AboutTheDevHoverCard from "@/components/AboutTheDevHoverCard";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";

export default function Home() {
  return (
    <main className="h-screen w-full flex flex-col items-center justify-center p-10">
      <Card className="p-10">
        <CardHeader>
          <h1 className="font-semibold text-3xl text-center">
            📖 Focus Please 📖
          </h1>
        </CardHeader>
        <CardDescription className="flex flex-col items-center justify-center gap-2">
          <p className="text-lg text-center">
            An application that helps you track how much you focus
          </p>
          <AboutTheDevHoverCard trigger={"About the dev"} />
        </CardDescription>

        <CardContent>
          <div className="flex items-center w-full my-4">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-4 text-sm text-gray-500">
              Log In or Register!
            </span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>
          <div className="w-full">
            <LoginLink>
              <Button className="w-full hover:cursor-pointer mb-3">
                Sign In
              </Button>
            </LoginLink>
            <RegisterLink>
              <Button className="w-full hover:cursor-pointer" variant="outline">
                Register
              </Button>
            </RegisterLink>
          </div>
        </CardContent>
      </Card>

      {/* <div className="flex flex-col items-center w-[300px]">
        <div className="flex items-center w-full my-4">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-4 text-sm text-gray-500">
            Log In or Register!
          </span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>
        <Button className="">
          <LoginLink>Sign In</LoginLink>
        </Button>
      </div> */}
    </main>
  );
}
