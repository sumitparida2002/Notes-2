import mongoose from 'mongoose';

const NoteSchema= new mongoose.Schema({
    title:String,
    message:String
})


var Note = mongoose.model('Note', NoteSchema);

export default Note;