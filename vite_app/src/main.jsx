import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import App2 from './Sidebar.jsx'
import Navbar from './navigationbar.jsx'
import Videosection from './mainsection.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <div className='main'>
    <App2 />
<div className='foralingment'>
<div>
<Navbar/>
<Videosection />
</div>


</div>
    </div>
  
  
    
   
    
    
  </StrictMode>,
)