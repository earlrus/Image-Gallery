import {Route,Routes} from 'react-router-dom'
import ImageGallery from '../components/ImageGallery'
import AddGallery from '../components/AddGallery'
import Searched from './Searched'
import React from 'react'


//React Routing 6
function Page() {
  return (
      <Routes>
<Route path="/" element={<ImageGallery/>}/>
<Route path="/gallery" element={<AddGallery/>}/>
<Route path='/searched/:searchTerm' element={<Searched/>}/>


      </Routes>
   
  )
}

export default Page
