"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import { signin } from "@/actions/auth";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import { useMutation } from "@tanstack/react-query";

const formSchema = z.object({
  email: z.email({
    message: "Please provide a valid email",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

function SignIn() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const router = useRouter();

  const mutation = useMutation({
    mutationFn: (values: z.infer<typeof formSchema>) =>  signin(values),
    onSuccess: () => {
      router.push("/");
    },
    onError: (err) => {
      console.log("Login failed:", err);
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    mutation.mutate(values);
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };


  return (
    <div className="w-full flex h-screen">
      {/* <div className="basis-1/2 bg-gradient-to-br from-purple-500/60 to-white/40 backdrop-blur-md flex items-center justify-center"> */}
      <div className=" md:basis-1/2  max-md:flex-1  flex items-center justify-center">
        <div className="space-y-5">
          <h1 className="text-purple-500  text-3xl font-black">BHADE</h1>
          <h1 className="text-4xl font-black text-gray-500">
            Hello,
            <br /> Welcome back
          </h1>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-400">Email</FormLabel>
                    <FormControl>
                      <input
                        className="w-full p-2 rounded-0 border-0 text-purple-500 border-b-1 border-gray-400 focus:border-purple-500 focus:ring-0 outline-none placeholder:text-gray-400 focus:placeholder:text-purple-500"
                        placeholder="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs italic text-red-500" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-400">Pasword</FormLabel>
                    <FormControl>
                      <div className="flex items-center w-full p-2 rounded-0 border-0 border-b-1 border-gray-400 focus:border-purple-500 focus:ring-0 outline-none placeholder:text-gray-400 focus:placeholder:text-purple-500 text-purple-500">
                        <input
                          className="outline-none border-none"
                          type={showPassword ? "text" : "password"}
                          placeholder="password"
                          {...field}
                        />
                        <div onClick={togglePassword}>
                          {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage className="text-xs italic text-red-500" />
                  </FormItem>
                )}
              />
              <div className="py-1">
                {mutation.isError && (
                  <p className="text-red-500 text-xs italic">
                    {(mutation.error)?.message ||
                      "Login failed"}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                className="w-full bg-purple-500 p-1 text-white cursor-pointer"
              >
                Signin
              </Button>
            </form>
          </Form>
        </div>
      </div>
      <div className="basis-1/2 hidden md:block bg-[url('/signin-pic.png')] bg-cover bg-no-repeat" />
    </div>
  );
}

export default SignIn;
