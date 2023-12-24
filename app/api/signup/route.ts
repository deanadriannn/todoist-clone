import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import * as z from "zod";

import prisma from "@/lib/db";

const formSchema = z.object({
  name: z.string().min(1).max(20, {
    message: "Name cannot exceed 20 characters"
  }),
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

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, password } = formSchema.parse(body);

    if (!email || !password) {
      return NextResponse.json({ error: "Invalid credentials"}, { status: 400 })
    }

    const existingEmail = await prisma.user.findUnique({
      where: {
        email
      }
    });

    if (existingEmail) {
      return NextResponse.json({ user: null, message: "Email already registered" }, { status: 409 })
    }

    const hashPassword = await hash(password, 12);

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashPassword
      }
    });

    const { password: newUserPassword, ...rest } = newUser
    
    return NextResponse.json({ user: rest, message: "User created successfully" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}