"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { AlertCircle } from "lucide-react";

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils";
import PrimaryButton from "@/components/custom/primary-button";

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

const AuthForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: ""
    },
  })

  const { formState } = form;
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
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
        <PrimaryButton 
          type="submit"
          className="w-full"
        >
          Log in
        </PrimaryButton>
      </form>
    </Form>
  )
}

export default AuthForm