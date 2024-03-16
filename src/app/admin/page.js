'use client'
import React, { useState }from "react";
import { useAuthContext } from "../../../context/AuthContext";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/navigation";
import addData from "../../../firebase/firestore/addData";


function Page() {
    const { user } = useAuthContext()
    const router = useRouter()

    React.useEffect(() => {
        if (user == null) router.push("/")
    }, [user])

    const handleForm = async () => {
        const data = {
            name: "John",
            age: 30,
            email: "",
        };

        const { result, error } = await addData("users", getAuth().currentUser.uid, data);
    }



    return (
    <>
        <h1>Only logged in users can view this page</h1>
        <button onClick={handleForm}>Add data</button>
    </>
    );
}

export default Page;