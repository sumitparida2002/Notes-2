import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';


import NoteRoutes from './routes/notes.js'


const app=express()
app.use(express.json())
app.use(cors());

const CONNECTION_URL="mongodb+srv://sumitparida:sumitparida123@cluster0.nkgtjd8.mongodb.net/?retryWrites=true&w=majority"


app.use('',NoteRoutes);
mongoose.set('useFindAndModify', false);


try {
	mongoose.connect(CONNECTION_URL, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	console.log('MongoDb connected successfully!')
} catch (error) {
	console.log(error)
}

app.listen(5000, () => {
	console.log(`Listening on 5000`)
})
