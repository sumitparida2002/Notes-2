import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {Routes,Route,Link} from 'react-router-dom'
import { getNotes } from './actions/notes'
import AddNote from './components/AddNote'
import Sidebar from './components/Sidebar'
import View from './components/View'

const App = () => {
    const [currentNote, setCurrentNote] = useState({title:'',message:''})

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getNotes());     
    }, [])
    
  return (
    <div>
      
        <div className='flex gap-6 md:gap-20'>
        <div className='h-[92vh] oveflow-hidden'>
          <Routes>
            <Route path='/' element={<Sidebar currentNote={currentNote} setCurrentNote={setCurrentNote} />} />  
          </Routes>
        </div>
        <div className='mt-4 flex flex-col gap-10 h-[88vh]'>
          <Routes>
            <Route path='/' element={<View currentNote={currentNote} />} />  
            <Route path='/AddNote' element={<AddNote  />} />
          </Routes>
        </div>
        </div>

    </div>
  )
}

export default App