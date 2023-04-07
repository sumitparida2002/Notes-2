import axios from 'axios'

const url = 'http://localhost:5000';

export const createNote = (newNote) => axios.post(`${url}/createNote`, newNote);
export const fetchNotes = () => axios.get(url);
export const deleteNote = (id) => axios.delete(`${url}/${id}`);
export const updateNote = (id, updatedNote) => axios.patch(`${url}/${id}`, updatedNote);

