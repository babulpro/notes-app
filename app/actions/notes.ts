"use server"

import { redirect } from "next/navigation";
import { addNotes } from "../services/notes";
import { revalidatePath } from "next/cache";


const createNote=async(formData:FormData)=>{
   
     
    const content = await formData.get("content") as string;
    const important = await formData.get("important") === "on"
     
    addNotes(content,important)
    revalidatePath("/notes")
    redirect("/notes")
    

}
export default createNote