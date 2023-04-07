import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createNote } from "../actions/notes";
// import { v4 as uuidv4 } from "uuid";

const AddNote = () => {
  const dispatch = useDispatch();
  const [noteData, setNoteData] = useState({
    title: "",
    message: "",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(createNote(noteData));
    navigate("/");
  };

  return (
    <div>
      <form action="/" method="POST" onSubmit={handleSubmit}>
        <div className="m-4">
          <div className="mb-6">
            <label htmlFor="title" className="block mb-2 text-sm font-medium">
              Your name
            </label>
            <input
              type="text"
              id="title"
              className=" border border-gray-300 text-sm p-2.5"
              placeholder="Success input"
              value={noteData.title}
              onChange={(e) =>
                setNoteData({ ...noteData, title: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Your message
            </label>
            <textarea
              id="message"
              rows="8"
              className="p-2.5 w-[800px] text-sm  border"
              placeholder="Your Note..."
              value={noteData.creator}
              onChange={(e) =>
                setNoteData({ ...noteData, message: e.target.value })
              }
            ></textarea>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
          >
            Publish Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNote;
