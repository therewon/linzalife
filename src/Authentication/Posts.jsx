import { useCollectionData } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";
import { doc, deleteDoc } from 'firebase/firestore';
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth"
import toast from 'react-hot-toast';

const ref = collection(db,'post');

const Posts = () => {
    const [data, isLoading] = useCollectionData(ref);
    const [deletedPost, setDeletedPost] = useState('');

    async function handleDelete (e){
        e.preventDefault();
        deleteDoc(doc(db, "post", deletedPost)).then(()=>{
            toast.success("Successfully deleted your post");
        })
        .catch((e)=>{
            toast.error(e.message);
        })

    }

    
    const [user] = useAuthState(auth);

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (
        <div className="flex flex-col gap-4 mt-8">
            { !data ? null : data.map((post) => (
                <div className="p-8 rounded-md bg-gray-200  h-[200px] flex flex-row justify-between items-center" key={post.id}>
                    <div className="flex gap-2 flex-col">
                        <h2 className="font-bold text-2xl">{post.name}</h2>
                        <p className="font-semibold text-xl border text-gray-600 border-black w-[500px] rounded-lg p-4 h-[130px]" >{post.body}</p>
                    </div>
                    {
                        post.name == user.displayName &&
                        <button onChange={(e) => {
                            setDeletedPost(post.id)
                        }} onClick={handleDelete}
                        >
                            <i class="fa-solid fa-trash text-red-600 text-xl"></i>
                        </button>

                    }
                </div>
            ))}
        </div>
    )
}

export default Posts;