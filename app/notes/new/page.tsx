import createNote from "@/app/actions/notes"

const NewNote=()=>{
    return(
        <div>
            <h2>This is the new note creating form</h2>
            <div>
                <form action={createNote}>
                    <div>
                        <label>
                            Content
                            <input type="text" name="content" required/>
                        </label>
                    </div>
                    <div>
                        <label>
                            
                            <input type="checkbox" name="important" />
                            Important
                        </label>
                    </div>
                    <div>
                        <button type="submit">create</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewNote