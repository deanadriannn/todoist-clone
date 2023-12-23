"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { AlertCircle } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  email: z.string().min(1, {
    message: "Please enter a valid email address"
  }).max(50, {
    message: "Email cannot exceed 50 characters"
  }),
  password: z.string().min(8, {
    message: "Password must contain at least 8 character(s)"
  }).max(50, {
    message: "Password cannot exceed 50 characters"
  })
});

interface AuthFormProps {
  type: "signin" | "signup"
}

const AuthForm = ({type}: AuthFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  })

  const [loading, setLoading] = useState<boolean>(false);
  const { formState } = form;
  const router = useRouter();
 
  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (type === "signup") {
      setLoading(true);
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      })
      
      if (response.ok) {
        router.push("/signin");
      }

      setLoading(false);
    }

    if (type === "signin") {
      setLoading(true);
      const signInData = await signIn('credentials', {
        email: values.email,
        password: values.password,
        redirect: false
      })
      
      if (signInData?.error) {
        console.log(signInData);
      }

      if (signInData?.ok) {
        router.push("/");
      }

      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input 
                  id="email"
                  type="email"
                  placeholder="Enter your email" 
                  {...field}
                  className={cn("focus-visible:ring-transparent", formState.errors.email ? "border-destructive" : "")}
                />
              </FormControl>
              <div className="flex items-center gap-1">
              <AlertCircle className={cn("h-3 w-3 text-destructive", formState.errors.email ? "block" : "hidden")}/>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input 
                  id="password"
                  type="password"
                  placeholder="Enter your password" 
                  {...field} 
                  className={cn("focus-visible:ring-transparent", formState.errors.password ? "border-destructive" : "")}
                />
              </FormControl>
              <div className="flex items-center gap-1">
                <AlertCircle className={cn("h-3 w-3 text-destructive", formState.errors.password ? "block" : "hidden")}/>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={loading}
          className="w-full"
          variant="primary"
        >
          {type === "signin" ? "Log in" : "Sign up with Email"}
        </Button>
      </form>
    </Form>
  )
}

export default AuthForm