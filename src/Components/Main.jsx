import { useState } from "react";
import NoteInput from "./NoteInput";
import Notes from "./Notes";

function Main() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes=>{
       return [...notes, newNote]
    })

  }
  function deleteNote(id){
    setNotes(prevNotes=>{
  return prevNotes.filter((noteItem,index)=>{
return index !== id;
  })
})
  }

  return (
    <>
      <main className="bg-slate-900 p-5 min-h-screen grid place-content-center place-items-center  ">
        <NoteInput onAdd={addNote} />
        <section className=" grid gap-5 rounded-lg grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center">  
        {notes.map((noteItem,i)=> {
          return <Notes key={i} id={i} onDelete={deleteNote} title={noteItem.title} description={noteItem.description} />
        })  }
          
        </section>
      </main>
    </>
  );
}

export default Main;
