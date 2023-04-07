import express, { Router } from 'express';
import {createNote, deleteNote, getNote, getNotes, updateNote} from '../controllers/NoteController.js'




const router = express.Router();

router.get('/',getNotes)
router.get('/:id',getNote)
router.post('/createNote',createNote)
router.delete('/:id', deleteNote);
router.patch('/:id', updateNote);





export default router