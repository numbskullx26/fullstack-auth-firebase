"use client";

import { app } from "@/providers/firebaseProvider";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function signInBtn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const signInUser = async () => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, password).then(() => {
      console.log("Signed In");
      router.push("/");
    });
  };

  return (
    <div className="flex flex-col w-1/2 p-20">
      <div className="flex flex-col gap-4">
        <p className="block text-white-1 text-sm font-bold mb-2">Email: </p>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Email"
        ></input>
        <p className="text-white-1">Password: </p>
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="password"
          placeholder="Password"
        ></input>
      </div>
      <div className="py-10">
        <button
          type="button"
          onClick={signInUser}
          className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
        >
          Sign In
        </button>
      </div>
    </div>
  );
}
