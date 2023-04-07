import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { deleteNote, updateNote } from "../actions/notes";

const Sidebar = ({ currentNote, setCurrentNote }) => {
  const [noteData, setNoteData] = useState({
    title: "",
    message: "",
  });

  const notes = useSelector((state) => state.note);
  useEffect(() => {
    if (notes) setCurrentNote();
  }, [notes]);

  const activeLink = "";
  const normalLink = "";

  const handleUpdate = async () => {
    dispatch(updateNote(currentId, noteData));
  };

  const dispatch = useDispatch();

  return (
    <aside className="w-[300px] bg-[#EAF4F4]  " aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-3 rounded border-r-2 border-gray-200 h-[100vh]">
        <ul className="space-y-2 mr-0">
          <li className="mb-4 ">
            <a href="/AddNote">
              <button
                type="button"
                className="py-2.5 px-5 mr-0 mb-2 text-[#6b9080] text-sm font-medium w-full focus:outline-none bg-[#F6FFF8]  border border-gray-200 hover:border-[#6b9080] hover:text-[#6b9080]"
              >
                Add Note
              </button>
            </a>
          </li>
          {notes.map((note) => (
            <li key={note._id} className=" flex flex-row border-t-2">
              <button
                onClick={() =>
                  setCurrentNote({
                    ...currentNote,
                    title: note.title,
                    message: note.message,
                  })
                }
                className="py-2.5 px-5  mr-0 mb-2 text-[#6b9080] text-sm font-medium w-full"
              >
                <p>{note.title}</p>
              </button>
              <div className="mr-4 flex flex-row">
                <button onClick={handleUpdate} className="">
                  <AiFillEdit className="text-[#6b9080] mr-2" />
                </button>
                <button
                  onClick={() => {
                    dispatch(deleteNote(note._id));
                  }}
                  className=""
                >
                  <AiFillDelete className="text-[#6b9080]" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
