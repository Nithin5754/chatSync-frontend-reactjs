import React, { useEffect, useState } from "react";
import { Label } from "../acernity/label";
import { Input } from "../acernity/input";
import { cn } from "../../lib/utils";
import { registerValidation, textCustomColor } from "../../utils/Helper";
import { BottomGradient } from "../Custom/BottomGradient";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { apiClient } from "../../lib/api-client";
import {
  SIGNUP_ROUTES,
  USER_HAS_ISUSERNAME_ALREADY_EXIST,
} from "../../utils/constant";
import { RegisterDataType } from "../../utils/types";
import { useAppDispatch } from "../../store/hooks";
import { setUserInfo } from "../../store/slices/authSlice";

export function Register() {
  const dispatch = useAppDispatch();

  const [usernameData, setUsernameData] = useState<string | null>(null);

  const [isUserFoundMsg, setUserNameFound] = useState<string | null>(null);

  useEffect(() => {
    const trimmedUsername = usernameData?.trim();
    const timer = setTimeout(() => {
      if (usernameData !== null && trimmedUsername !== "") {
        handleChange();
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [usernameData]);

  const handleChange = async () => {
    const isUserExist = await apiClient.post(
      USER_HAS_ISUSERNAME_ALREADY_EXIST,
      { username: usernameData },
      { withCredentials: true }
    );
    if (
      isUserExist &&
      isUserExist.status === 200 &&
      typeof isUserExist.data.message === "string"
    ) {
      setUserNameFound(isUserExist.data.message);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;
    const userName = formData.get("username") as string;

    const registerData: RegisterDataType = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      username: userName,
    };
    if (
      registerValidation(
        email,
        password,
        confirmPassword,
        firstName,
        lastName
      ) &&
      registerData &&
      isUserFoundMsg !== "already exist"
    ) {
      try {
        const response = await apiClient.post(
          SIGNUP_ROUTES,
          { registerData },
          { withCredentials: true }
        );

        if (response.data) {
          dispatch(setUserInfo(response.data));
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black dark:bg-opacity-35">
      <h2
        className={cn(
          `md:text-2xl text-center text-xl text-white relative z-50 ${textCustomColor}`
        )}
      >
        Register New User
      </h2>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              name="firstName"
              placeholder="Tyler"
              type="text"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              name="lastName"
              placeholder="Durden"
              type="text"
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            placeholder="projectmayhem@fc.com"
            type="email"
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="username">user name</Label>
          <Input
            id="username"
            name="username"
            placeholder="olly123"
            type="text"
            onChange={(e) => setUsernameData(e.target.value)}
          />
          <>
            {isUserFoundMsg && (
              <h1
                className={
                  isUserFoundMsg === "already exist"
                    ? "text-red-800 text-sm text-center"
                    : "text-green-600 text-sm text-center"
                }
              >
                {isUserFoundMsg}
              </h1>
            )}
          </>
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
        <LabelInputContainer className="mb-8">
          <Label htmlFor="twitterpassword">confirm password</Label>
          <Input
            id="twitterpassword"
            placeholder="••••••••"
            type="twitterpassword"
            name="confirmPassword"
          />
        </LabelInputContainer>

        <Button className="w-full" type="submit">
          <span
            className={cn(
              `md:text-xl text-center text-md font-bold text-white relative z-50 ${textCustomColor}`
            )}
          >
            Sign up
            <BottomGradient />
          </span>
          <ArrowRight className="text-purple-500 animate-pulse text-sm h-[16px]" />
        </Button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent mt-3 h-[1px] w-full" />
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
