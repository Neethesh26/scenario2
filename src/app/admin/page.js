'use client'
import React, { useState }from "react";
import { collection, addDoc } from "firebase/firestore";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { db } from "../../../firebase/config";


function Page() {
    const { user } = useAuthContext()
    const router = useRouter()

    React.useEffect(() => {
        if (user == null) router.push("/")
    }, [user])

    async function addData(name, age, ethnicity) {
        try {
            const docRef = await addDoc(collection(db, "information"), {
                name: name,
                age: age,
                ethnicity: ethnicity,
            });
            console.log("Document written with ID: ", docRef.id);
            return true;
        }
        catch (error) {
            console.error(error);
            return false;
        }
    }
    
    return (<h1>Only logged in users can view this page</h1>);
}

export default Page;