import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.jsx'

import Home from './routes/Home/Home.jsx'
import About from './routes/About/About.jsx'
import Contact from './routes/Contact/Contact.jsx'

const router =createBrowserRouter([
  {
    path:"/", element:<App/>,
    errorElement:<Error/>,
  
    children:[
      {path:"/",element:<Home/>},
      {path:"/About",element:<About/>},
      {path:"/Contact",element:<Contact/>},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
