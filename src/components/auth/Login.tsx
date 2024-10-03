import React, { useState } from "react";
import { Label } from "../acernity/label";
import { Input } from "../acernity/input";
import { cn } from "../../lib/utils";
import { loginValidation, textCustomColor } from "../../utils/Helper";
import { BottomGradient } from "../Custom/BottomGradient";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { apiClient } from "../../lib/api-client";
import { LOGIN_ROUTES } from "../../utils/constant";
import { useNavigate } from "react-router-dom";
import { LoginType } from "../../utils/types";
import { useAppDispatch } from "../../store/hooks";
import { setUserInfo } from "../../store/slices/authSlice";
import { toast } from "sonner";

export function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const isEmail = formData.get("email") as string;
    const isPassword = formData.get("password") as string;

    setEmail(isEmail);
    setPassword(isPassword);

    if (loginValidation(isEmail, isPassword)) {
      const loginData: LoginType = {
        email: isEmail,
        password: isPassword,
      };
      try {
        const response = await apiClient.post(
          LOGIN_ROUTES,
          { loginData },
          { withCredentials: true }
        );
        console.log("response",response.status)

        if (response.data) {
          dispatch(setUserInfo(response.data));
        }


        // if (!response.data.user.profileSetup) {
        //   setEmail("");
        //   setPassword("");
        //   navigate("/profile");
        // } else {
          // }
          //   navigate("/chat");
      } catch (error:any) {
         if(error.status===400){
          toast.error("invalid credentials")
         }
      }
    }
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
          <Input
            id="email"
            name="email"
            placeholder="projectmayhem@fc.com"
            type="email"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            placeholder="••••••••"
            type="password"
          />
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
