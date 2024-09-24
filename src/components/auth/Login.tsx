import React from "react";

import { Label } from "../acernity/label";
import { Input } from "../acernity/input";
import { cn } from "../../lib/utils";
import { textCustomColor } from "../../utils/Helper";
import { BottomGradient } from "../Custom/BottomGradient";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export function Login() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="max-w-md w-[400px] mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black  dark:bg-opacity-35">
      <h2
        className={cn(
          `md:text-2xl text-center text-xl text-white relative z-50 ${textCustomColor}`
        )}
      >
       Welcome to chatSYNC
      </h2>

      <form className="my-8" onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input id="password" placeholder="••••••••" type="password" />
        </LabelInputContainer>

        <Button className="w-full" type="submit">
          <span
            className={cn(
              `md:text-xl text-center text-md font-bold text-white relative z-50 ${textCustomColor}`
            )}
          >
            Sign In
            <BottomGradient />
          </span>
          <ArrowRight className="text-purple-500 animate-pulse text-sm h-[16px]" />
        </Button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
