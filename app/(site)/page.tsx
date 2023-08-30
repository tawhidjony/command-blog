"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import HomePage from "@/components/site/home";

type Props = {};

const Home = (props: Props) => {
  const session = useSession();

  return (
    <>
      <HomePage />
    </>
  );
};

export default Home;
