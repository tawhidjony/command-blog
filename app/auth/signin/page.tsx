"use client"
import { signIn } from "next-auth/react";
type Props = {}

const SignIn = (props: Props) => {
  return (
    <div>
            <button
          onClick={() => signIn("google")}
          className="bg-slate-900 text-white px-6 py-2 rounded-md"
        >
          Sign In with gogle
        </button>
            <button
          onClick={() => signIn("discord")}
          className="bg-slate-900 text-white px-6 py-2 rounded-md"
        >
          Sign In with discord
        </button>
    </div>
  )
}

export default SignIn