import { default as Note } from "../models/NoteModel.js"


export const createNote= async(req, res)=>{
    try {
        const {title,message } = req.body
        const note = await Note.create({
            title,
            message
        })
        return res.json(note);
    }
    catch (err) {
        throw Error(`Error while creating note :  ${err}`)
    }
}

export const getNotes = async (req, res) => { 
    try {
        const note = await Note.find();
                
        return res.json(note)
    } catch (err) {
        throw Error(`Error while getting note :  ${err}`)
    }
}

export const getNote = async (req, res) => { 
    const { id } = req.params;

    try {
        const note = await Note.findById(id);
        
        res.status(200).json(note);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const deleteNote = async (req, res) => {
    const { id } = req.params;
    console.log(id);
    await Note.findByIdAndRemove(id);
    res.json({ message: "Post deleted successfully." });
}

export const updateNote = async (req, res) => {
    const { id } = req.params;
    const { title, message} = req.body;
    

    const updatedNote = { title, message, _id: id };

    await Note.findByIdAndUpdate(id, updatedNote, { new: true });

    res.json(updatedNote);
}