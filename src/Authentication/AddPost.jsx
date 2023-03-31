


import { useState,useCallback } from "react";
import { addDoc,collection } from "firebase/firestore";
import { db } from "../firebase";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const ref = collection(db,"post");

const AddPost = () =>{
    const [user,isLoading] = useAuthState(auth);
    const [body,setBody] = useState("");
    const [subjectName,setSubjectName] = useState("");
    

    const handleSubmit = useCallback((e)=>{
        e.preventDefault();
        addDoc(ref,{
            Comment: body,
            SubjectName: subjectName,
            name: user.displayName
        })
        body = " "
        subjectName = " "
    },[body])

    return (
        <div className="mt-8 p-4 bg-gray-200 rounded-md w-full">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Subject name..."
                    className="bg-transparent focus:outline-none text-xl"
                    value={subjectName}
                    onChange={(e)=>setSubjectName(e.currentTarget.value)}
                    />
                <textarea 
                    type="text" 
                    placeholder="What are you thinking?" 
                    className="bg-transparent focus:outline-none text-lg rounded-md min-h-[50px]"
                    value={body}
                    onChange={(e)=>setBody(e.currentTarget.value)}
                    />
                <input type="submit" className="bg-green-600 text-white rounded-md p-4 font-bold text-2xl"/>
            </form>
        </div>
    )
}

export default AddPost;