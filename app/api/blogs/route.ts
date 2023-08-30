import connectDB from "@/libs/monogodb";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function POST(request:any){
    const {title, description} = await request.json();
    await connectDB();
    await Blog.create({title, description});
    return NextResponse.json({message:"Blog has been created"}, {status:201})
}