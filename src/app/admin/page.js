'use client'
import React, { useState }from "react";
import { useAuthContext } from "../../../context/AuthContext";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import addData from "../../../firebase/firestore/addData";
import Navbar from "../components/Navbar";


function Page() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')
    const [ethnicity, setEthnicity] = useState('')
    const [bloodType, setBloodType] = useState('')
    const { user } = useAuthContext()
    const router = useRouter()

    React.useEffect(() => {
        if (user == null) router.push("/")
    }, [user])

    const handleForm = async () => {
        const data = {
            firstName: firstName,
            lastName: lastName,
            age: age,
            gender: gender,
            ethnicity: ethnicity,
            bloodType: bloodType,
        };

        const { result, error } = await addData("users", getAuth().currentUser.uid, data);

        if (error) {
            return console.log(error)
        } else {
            console.log(result)
            return router.push("/admin")
        }
    }

    return (
    <>
        <Navbar />
        <div class="py-20"></div>
        <form onSubmit={handleForm} class="max-w-sm mx-auto">
            <div>
                <label for="first-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                <input type="text" id="first-name" value={firstName} onChange={(e) => setFirstName(e.target.value)} class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <div>
                <label for="last-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                <input type="text" id="last-name" value={lastName} onChange={(e) => setLastName(e.target.value)} class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <div>
                <label for="age" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Age</label>
                <input type="text" id="age" value={age} onChange={(e) => setAge(e.target.value)} class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <div>
                <label for="gender" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                <input type="text" id="gender" value={gender} onChange={(e) => setGender(e.target.value)} class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <div>
                <label for="ethnicity" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ethnicity</label>
                <input type="text" id="ethnicity" value={ethnicity} onChange={(e) => setEthnicity(e.target.value)} class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <div>
                <label for="blood-type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Blood Type</label>
                <input type="text" id="blood-type" value={bloodType} onChange={(e) => setBloodType(e.target.value)} class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
            </div>
            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2">Submit</button>
        </form>
    </>
    );
}

export default Page;