'use client'
import React from "react";
import { useRouter } from 'next/navigation'

function Page() {

    const router = useRouter()

    return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-center mt-4">Team members</h1>
            <p className="text-3xl text-center mt-4">Meet the team behind Diabetes Management</p>    
            <p className="text-xl text-center mt-4">Neethesh T</p>
            <br/>
            <p className="text-xl text-center mt-4">Eleanor Goh</p>
            <br/>
            <p className="text-xl text-center mt-4">Sara Craciun</p>
            <br/>
            <button onClick={() => router.push("/signup")} className="w-full text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enter</button>
        </div>
    </main>
    );
}

export default Page;