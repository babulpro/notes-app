const notes=[{id:1,content:"javascript all you need to know",important:true},{id:2,content:"tailwind you should learn",important:true},]

let nextId=3

export  const  getNotes=()=>{
   return notes
}

export  function addNotes(content:string,important:boolean){

   notes.push({id:nextId++,content,important})
    
}