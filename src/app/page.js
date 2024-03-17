'use client'
import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { getAuth } from "firebase/auth";
import addData from "../../firebase/firestore/addData";
import Navbar from "./components/Navbar";
import { useRouter } from "next/navigation";

export default function Home() {
  const [bloodPressure, setBloodPressure] = useState('')
  const [bloodSugar, setBloodSugar] = useState('')
  const [medTaken, setMedTaken] = useState('')
  const { user } = useAuthContext()
  const router =  useRouter()

  React.useEffect(() => {
    if (user == null) router.push("/signin")
  }, [user])

  const handleForm = async () => {  
    const data = {
        bloodSugar: bloodSugar,
        bloodPressure: bloodPressure,
        medTaken: medTaken,
    };

    // getAuth().currentUser.uid
    const { result, error } = await addData("daily", getAuth().currentUser.uid, data);

    if (error) {
        return console.log(error)
    } else {
        return console.log(result)
    }
  }

  return (
    <>
      <Navbar />
      <div class="py-20"></div> 
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-center mt-4">
            Welcome to Diabetes Management
          </h1>
          <p className="text-xl text-center mt-4">
            A platform to manage diabetes
          </p>
          <h2 className="text-2xl font-bold text-center my-8">
            Add your details for today's checkup
          </h2>
          <form onSubmit={handleForm} class="max-w-sm mx-auto">
              <div>
                  <label for="blood-pressure" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blood Pressure</label>
                  <input type="text" id="blood-pressure" value={bloodPressure} onChange={(e) => setBloodPressure(e.target.value)} class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
              </div>
              <div>
                  <label for="blood-sugar" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blood Sugar</label>
                  <input type="text" id="blood-sugar" value={bloodSugar} onChange={(e) => setBloodSugar(e.target.value)} class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
              </div>
              <div>
                  <label for="med-taken" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Taken Medication</label>
                  <input type="text" id="med-taken" value={medTaken} onChange={(e) => setMedTaken(e.target.value)} class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
              </div>
              <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2">Submit</button>
          </form>
        </div>
      </main>
    </>
  );
}
