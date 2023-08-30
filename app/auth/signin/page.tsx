"use client"
import React from 'react'
import { signIn, signOut, useSession } from "next-auth/react";
type Props = {}

const SignIn = (props: Props) => {
  return (
    <div>
            <button
          onClick={() => signIn("google")}
          className="bg-slate-900 text-white px-6 py-2 rounded-md"
        >
          Sign In
        </button>
    </div>
  )
}

export default SignIn