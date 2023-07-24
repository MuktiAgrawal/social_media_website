import {useForm} from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import {addDoc,collection} from "firebase/firestore"
import {db} from "../../config/firebase"
import { auth } from "../../config/firebase"
import { useAuthState } from "react-firebase-hooks/auth"
import { useNavigate } from "react-router-dom"

interface CreateFormData{
    title:string;
    description:string;
}

export const CreateForm=()=>{
    const schema=yup.object().shape({
        title:yup.string().required("You must add a title."),
        description:yup.string().required("You must add a description"),
    });
    const navigate=useNavigate();
    const {register,handleSubmit,formState:{errors}}=useForm<CreateFormData>({
        resolver:yupResolver(schema)
    })
    const [user]=useAuthState(auth)
    const postsRef=collection(db,"posts")
    const OnCreatePost=async (data:CreateFormData)=>{
        await addDoc(postsRef,{
            ...data,
            // title:data.title,
            // description:data.description,
            username:user?.displayName,
            userId:user?.uid
            // If you try to use a random user Id from which you are not logged in, you won't be able to post because of the rules published on firestore
        })
        navigate("/")
    }
    return (
        <form onSubmit={handleSubmit(OnCreatePost)}>
            <input placeholder="Title... "{...register("title")}/>
            <p style={{color:"red"}}>{errors.title?.message}</p>
            <textarea placeholder="Description..." {...register("description")}/>
            <p style={{color:"red"}}>{errors.description?.message}</p>
            <input type="submit"/>
        </form>
    )
}