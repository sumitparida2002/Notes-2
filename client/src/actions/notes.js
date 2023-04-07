import * as api from '../api/index.js'


export const createNote=(note)=>async(dispatch)=>{
    try{
        const { data } = await api.createNote(note);
        dispatch({ type: 'CREATE', payload: data });

  } catch (error) {
    console.log(error.message);
  }
}

export const getNotes=()=>async(dispatch)=>{
    try{
        const { data } = await api.fetchNotes();
        dispatch({ type: 'FETCH_ALL', payload: data });

  } catch (error) {
    console.log(error.message);
  }
}

export const deleteNote=(id)=>async(dispatch)=>{
    try {
    await api.deleteNote(id);
    dispatch({ type: 'DELETE', payload: id });
  } catch (error) {
    console.log(error.message);
  }
}

export const updateNote = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updateNote(id, post);

    dispatch({ type: 'UPDATE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};